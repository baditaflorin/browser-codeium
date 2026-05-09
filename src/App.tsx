import { Suspense, lazy, useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Play, Save, Square } from "lucide-react";
import { AnalysisPanel } from "@/features/analysis/AnalysisPanel";
import { useAnalysisController } from "@/features/analysis/useAnalysisController";
import { createAssistantDraft, type AssistantDraft } from "@/features/assistant/assistant";
import { AssistantPanel } from "@/features/assistant/AssistantPanel";
import { useToasts } from "@/features/app/useToasts";
import { SettingsPanel } from "@/features/settings/SettingsPanel";
import { defaultUserSettings, type UserSettings } from "@/features/settings/settings";
import { clearUserSettings, loadUserSettings, saveUserSettings } from "@/features/settings/storage";
import { fetchAppMeta, fetchSamples } from "@/features/staticData/staticData";
import { fetchLatestCommit } from "@/features/system/githubCommit";
import { SystemPanel } from "@/features/system/SystemPanel";
import { detectWebGpu, type WebGpuStatus } from "@/features/system/webgpu";
import { openDirectoryWorkspace } from "@/features/workspace/fileSystem";
import {
  createWorkspaceFromSamples,
  getActiveFile,
  setActiveFile,
  updateFileContent,
  type Workspace
} from "@/features/workspace/workspace";
import {
  cacheWorkspace,
  clearWorkspace,
  loadWorkspace,
  saveWorkspace
} from "@/features/workspace/storage";
import {
  createFreshWorkspace,
  createShareUrl,
  exportFilenameForFile,
  parseSharedWorkspaceHash,
  parseWorkspaceSnapshot,
  readWorkspaceFiles,
  serializeWorkspaceSnapshot,
  snapshotFilename,
  workspaceFromImportedFiles,
  workspaceFromPastedText
} from "@/features/workspace/workspaceTransfer";
import { Sidebar } from "@/components/Sidebar";
import { ToastRegion } from "@/components/ToastRegion";
import { TopBar } from "@/components/TopBar";
import { copyTextToClipboard, downloadTextFile, readTextFromClipboard } from "@/lib/browserFiles";
import { reportError } from "@/lib/logger";

const EditorPane = lazy(() =>
  import("@/features/editor/EditorPane").then((module) => ({ default: module.EditorPane }))
);

const uncheckedWebGpu: WebGpuStatus = {
  state: "blocked",
  label: "WebGPU unchecked",
  detail: "Run a capability check to see whether local GPU acceleration is available.",
  features: []
};

export function App(): JSX.Element {
  const appMeta = useQuery({ queryKey: ["app-meta"], queryFn: fetchAppMeta });
  const samples = useQuery({ queryKey: ["samples"], queryFn: fetchSamples });
  const latestCommit = useQuery({
    queryKey: ["github-commit", "main"],
    queryFn: fetchLatestCommit,
    staleTime: 5 * 60 * 1000,
    retry: false
  });
  const [workspace, setWorkspace] = useState<Workspace | null>(null);
  const [settings, setSettings] = useState<UserSettings>(defaultUserSettings);
  const [bootstrapped, setBootstrapped] = useState(false);
  const [assistantPrompt, setAssistantPrompt] = useState(
    "Review this file and suggest a safe next edit."
  );
  const [assistantDraft, setAssistantDraft] = useState<AssistantDraft | null>(null);
  const [webGpuStatus, setWebGpuStatus] = useState<WebGpuStatus>(uncheckedWebGpu);
  const [storageState, setStorageState] = useState("loading");
  const [isDropTarget, setIsDropTarget] = useState(false);
  const { toasts, pushToast, dismissToast } = useToasts();

  const activeFile = useMemo(() => (workspace ? getActiveFile(workspace) : null), [workspace]);
  const displayedCommit = latestCommit.data ?? "main";
  const debugEnabled = useMemo(
    () => new URLSearchParams(window.location.search).get("debug") === "1",
    []
  );
  const { analysis, isAnalyzing, resetAnalysis, handleAnalyze } = useAnalysisController({
    activeFile,
    autoAnalyze: settings.autoAnalyze,
    pushToast
  });

  const clearDerivedState = useCallback(() => {
    resetAnalysis();
    setAssistantDraft(null);
  }, [resetAnalysis]);

  const setWorkspaceState = useCallback((next: Workspace | null) => {
    setWorkspace(next);
    if (next) {
      cacheWorkspace(next);
      return;
    }
    window.localStorage.removeItem("browser-codeium:workspace");
  }, []);

  const persistSettings = useCallback(
    (next: UserSettings) => {
      setSettings(next);
      void saveUserSettings(next).catch((error) => pushToast("error", reportError(error)));
    },
    [pushToast]
  );

  const applyWorkspace = useCallback(
    (next: Workspace, successMessage?: string) => {
      setWorkspaceState(next);
      clearDerivedState();
      if (successMessage) {
        pushToast("success", successMessage);
      }
    },
    [clearDerivedState, pushToast, setWorkspaceState]
  );

  const applyWorkspaceSnapshot = useCallback(
    (nextWorkspace: Workspace, nextSettings: UserSettings, successMessage: string) => {
      persistSettings(nextSettings);
      applyWorkspace(nextWorkspace, successMessage);
    },
    [applyWorkspace, persistSettings]
  );

  const loadSampleWorkspace = useCallback(() => {
    if (!samples.data) {
      pushToast("error", "Sample data has not loaded yet.");
      return;
    }
    applyWorkspace(createWorkspaceFromSamples(samples.data.samples), "Sample workspace loaded.");
  }, [applyWorkspace, pushToast, samples.data]);

  useEffect(() => {
    let mounted = true;

    async function bootstrap(): Promise<void> {
      try {
        const loadedSettings = await loadUserSettings();
        if (!mounted) {
          return;
        }
        setSettings(loadedSettings);

        const sharedSnapshot = parseSharedWorkspaceHash(window.location.hash);
        if (sharedSnapshot) {
          setSettings(sharedSnapshot.settings);
          setWorkspaceState(sharedSnapshot.workspace);
          setStorageState("shared session");
          return;
        }

        if (loadedSettings.restoreLastSession) {
          const saved = await loadWorkspace();
          if (!mounted) {
            return;
          }
          if (saved) {
            setWorkspaceState(saved);
            setStorageState("saved locally");
          }
        }
      } catch (error) {
        if (!mounted) {
          return;
        }
        setStorageState("storage error");
        pushToast("error", reportError(error));
      } finally {
        if (mounted) {
          setBootstrapped(true);
        }
      }
    }

    void bootstrap();

    return () => {
      mounted = false;
    };
  }, [pushToast, setWorkspaceState]);

  useEffect(() => {
    if (bootstrapped && !workspace && samples.data) {
      setWorkspaceState(createWorkspaceFromSamples(samples.data.samples));
      setStorageState("sample loaded");
    }
  }, [bootstrapped, samples.data, setWorkspaceState, workspace]);

  useEffect(() => {
    if (!workspace) {
      return undefined;
    }

    setStorageState("saving");
    const timer = window.setTimeout(() => {
      void saveWorkspace(workspace)
        .then(() => setStorageState("saved locally"))
        .catch((error) => {
          setStorageState("storage error");
          pushToast("error", reportError(error));
        });
    }, 450);

    return () => window.clearTimeout(timer);
  }, [pushToast, workspace]);

  const handleChange = useCallback(
    (content: string) => {
      if (!workspace || !activeFile) {
        return;
      }
      setWorkspaceState(updateFileContent(workspace, activeFile.path, content));
      clearDerivedState();
    },
    [activeFile, clearDerivedState, setWorkspaceState, workspace]
  );

  const handleSelectFile = useCallback(
    (path: string) => {
      if (!workspace) {
        return;
      }
      setWorkspaceState(setActiveFile(workspace, path));
      clearDerivedState();
    },
    [clearDerivedState, setWorkspaceState, workspace]
  );

  const handleSave = useCallback(() => {
    if (!workspace) {
      return;
    }
    void saveWorkspace(workspace)
      .then(() => {
        setStorageState("saved locally");
        pushToast("success", "Workspace saved in this browser.");
      })
      .catch((error) => {
        setStorageState("storage error");
        pushToast("error", reportError(error));
      });
  }, [pushToast, workspace]);

  const handleOpenFolder = useCallback(() => {
    void openDirectoryWorkspace()
      .then((next) => {
        applyWorkspace(next, `Opened ${next.files.length} text files.`);
      })
      .catch((error) => pushToast("error", reportError(error)));
  }, [applyWorkspace, pushToast]);

  const handleCreateFreshWorkspace = useCallback(() => {
    void Promise.all([clearWorkspace(), clearUserSettings()])
      .then(() => {
        setStorageState("fresh workspace");
        persistSettings(defaultUserSettings);
        applyWorkspace(createFreshWorkspace(), "Fresh workspace created.");
      })
      .catch((error) => pushToast("error", reportError(error)));
  }, [applyWorkspace, persistSettings, pushToast]);

  const handleAssistant = useCallback(() => {
    if (!activeFile) {
      pushToast("error", "Select a file before generating a draft.");
      return;
    }
    setAssistantDraft(
      createAssistantDraft({
        path: activeFile.path,
        code: activeFile.content,
        prompt: assistantPrompt,
        analysis
      })
    );
  }, [activeFile, analysis, assistantPrompt, pushToast]);

  const handleCopyDraft = useCallback(() => {
    if (!assistantDraft) {
      pushToast("error", "Generate a draft before copying it.");
      return;
    }

    const content = [
      assistantDraft.title,
      ...assistantDraft.summary,
      assistantDraft.suggestedEdit
    ].join("\n\n");
    void copyTextToClipboard(content)
      .then(() => pushToast("success", "Assistant draft copied."))
      .catch((error) => pushToast("error", reportError(error)));
  }, [assistantDraft, pushToast]);

  const handleCheckWebGpu = useCallback(() => {
    void detectWebGpu()
      .then(setWebGpuStatus)
      .catch((error) =>
        setWebGpuStatus({
          state: "blocked",
          label: "WebGPU check failed",
          detail: reportError(error),
          features: []
        })
      );
  }, []);

  useEffect(() => {
    handleCheckWebGpu();
  }, [handleCheckWebGpu]);

  const handleImportFiles = useCallback(
    (files: File[]) => {
      void readWorkspaceFiles(files)
        .then((imported) =>
          applyWorkspace(
            workspaceFromImportedFiles(
              imported,
              files.length === 1 ? files[0].name : "Imported files"
            ),
            `Imported ${imported.length} file${imported.length === 1 ? "" : "s"}.`
          )
        )
        .catch((error) => pushToast("error", reportError(error)));
    },
    [applyWorkspace, pushToast]
  );

  const handleImportState = useCallback(
    (file: File) => {
      void file
        .text()
        .then((text) => parseWorkspaceSnapshot(text))
        .then((snapshot) =>
          applyWorkspaceSnapshot(snapshot.workspace, snapshot.settings, "Workspace state restored.")
        )
        .catch((error) => pushToast("error", reportError(error)));
    },
    [applyWorkspaceSnapshot, pushToast]
  );

  const handlePasteWorkspace = useCallback(
    (path: string, content: string) => {
      try {
        applyWorkspace(workspaceFromPastedText(path, content), "Pasted file imported.");
      } catch (error) {
        pushToast("error", reportError(error));
      }
    },
    [applyWorkspace, pushToast]
  );

  const handlePasteFromClipboard = useCallback(
    (path: string) => {
      void readTextFromClipboard()
        .then((content) =>
          applyWorkspace(workspaceFromPastedText(path, content), "Clipboard imported as a file.")
        )
        .catch((error) => pushToast("error", reportError(error)));
    },
    [applyWorkspace, pushToast]
  );

  const handleExportState = useCallback(() => {
    if (!workspace) {
      pushToast("error", "Load or create a workspace before exporting.");
      return;
    }

    const snapshot = serializeWorkspaceSnapshot(workspace, settings);
    downloadTextFile(
      snapshotFilename(workspace),
      JSON.stringify(snapshot, null, 2),
      "application/json"
    );
    pushToast("success", "Workspace state exported.");
  }, [pushToast, settings, workspace]);

  const handleExportActiveFile = useCallback(() => {
    if (!activeFile) {
      pushToast("error", "Select a file before downloading it.");
      return;
    }

    downloadTextFile(exportFilenameForFile(activeFile), activeFile.content);
    pushToast("success", `Downloaded ${activeFile.path}.`);
  }, [activeFile, pushToast]);

  const handleCopyActiveFile = useCallback(() => {
    if (!activeFile) {
      pushToast("error", "Select a file before copying it.");
      return;
    }

    void copyTextToClipboard(activeFile.content)
      .then(() => pushToast("success", `${activeFile.path} copied.`))
      .catch((error) => pushToast("error", reportError(error)));
  }, [activeFile, pushToast]);

  const handleShareWorkspace = useCallback(() => {
    if (!workspace) {
      pushToast("error", "Load or create a workspace before sharing.");
      return;
    }

    try {
      const url = createShareUrl(workspace, settings);
      void copyTextToClipboard(url)
        .then(() => pushToast("success", "Shareable link copied."))
        .catch((error) => pushToast("error", reportError(error)));
    } catch (error) {
      pushToast("error", reportError(error));
    }
  }, [pushToast, settings, workspace]);

  useEffect(() => {
    const handleDragOver = (event: DragEvent) => {
      if (event.dataTransfer?.types.includes("Files")) {
        event.preventDefault();
        setIsDropTarget(true);
      }
    };

    const handleDragLeave = () => setIsDropTarget(false);
    const handleDrop = (event: DragEvent) => {
      event.preventDefault();
      setIsDropTarget(false);
      const files = event.dataTransfer?.files ? [...event.dataTransfer.files] : [];
      if (files.length === 0) {
        return;
      }

      if (files.length === 1 && files[0].name.endsWith(".json")) {
        void files[0]
          .text()
          .then((text) => parseWorkspaceSnapshot(text))
          .then((snapshot) =>
            applyWorkspaceSnapshot(
              snapshot.workspace,
              snapshot.settings,
              "Workspace state restored."
            )
          )
          .catch(() => handleImportFiles(files));
        return;
      }

      handleImportFiles(files);
    };

    window.addEventListener("dragover", handleDragOver);
    window.addEventListener("dragleave", handleDragLeave);
    window.addEventListener("drop", handleDrop);

    return () => {
      window.removeEventListener("dragover", handleDragOver);
      window.removeEventListener("dragleave", handleDragLeave);
      window.removeEventListener("drop", handleDrop);
    };
  }, [applyWorkspaceSnapshot, handleImportFiles]);

  return (
    <div className="min-h-screen bg-ink text-mist">
      {isDropTarget ? (
        <div className="pointer-events-none fixed inset-0 z-40 grid place-items-center bg-cyan/10 text-lg font-semibold text-cyan">
          Drop files to import them into browser-codeium
        </div>
      ) : null}
      <TopBar webGpuLabel={webGpuStatus.label} commit={displayedCommit} />
      <main className="mx-auto grid h-[calc(100vh-65px)] max-w-[1500px] grid-cols-1 overflow-hidden lg:grid-cols-[280px_minmax(0,1fr)_380px]">
        <Sidebar
          workspace={workspace}
          activePath={activeFile?.path ?? null}
          onSelectFile={handleSelectFile}
          onOpenFolder={handleOpenFolder}
          onImportFiles={handleImportFiles}
          onImportState={handleImportState}
          onPasteWorkspace={handlePasteWorkspace}
          onPasteFromClipboard={handlePasteFromClipboard}
          onLoadSample={loadSampleWorkspace}
          onSave={handleSave}
          onCreateFresh={handleCreateFreshWorkspace}
          onExportState={handleExportState}
          onExportActiveFile={handleExportActiveFile}
          onCopyActiveFile={handleCopyActiveFile}
          onShareWorkspace={handleShareWorkspace}
        />

        <section className="flex min-h-[520px] min-w-0 flex-col bg-ink">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wide text-muted">Active file</p>
              <h2 className="truncate text-sm font-semibold text-white">
                {activeFile?.path ?? "No file selected"}
              </h2>
            </div>
            <div className="flex gap-2">
              <button type="button" className="toolbar-button" onClick={handleAnalyze}>
                {isAnalyzing ? (
                  <Square size={16} aria-hidden="true" />
                ) : (
                  <Play size={16} aria-hidden="true" />
                )}
                <span>{isAnalyzing ? "Cancel" : "Analyze"}</span>
              </button>
              <button type="button" className="toolbar-button" onClick={handleSave}>
                <Save size={16} aria-hidden="true" />
                <span>Save</span>
              </button>
            </div>
          </div>
          <div className="min-h-0 flex-1">
            <Suspense
              fallback={
                <div className="grid h-full place-items-center text-sm text-muted">
                  Loading Monaco editor...
                </div>
              }
            >
              <EditorPane file={activeFile} settings={settings} onChange={handleChange} />
            </Suspense>
          </div>
        </section>

        <aside className="min-h-0 overflow-y-auto border-l border-line bg-panel">
          <div className="space-y-3 p-3">
            <AnalysisPanel
              analysis={analysis}
              isAnalyzing={isAnalyzing}
              onAnalyze={handleAnalyze}
            />
            <AssistantPanel
              prompt={assistantPrompt}
              draft={assistantDraft}
              onPromptChange={setAssistantPrompt}
              onGenerate={handleAssistant}
              onCopyDraft={handleCopyDraft}
            />
            <SettingsPanel settings={settings} onSettingsChange={persistSettings} />
            <SystemPanel
              webGpuStatus={webGpuStatus}
              onCheckWebGpu={handleCheckWebGpu}
              storageState={storageState}
              sampleVersion={samples.data?.schemaVersion ?? appMeta.data?.schemaVersion ?? null}
              commit={displayedCommit}
              analysis={analysis}
              debugEnabled={debugEnabled}
            />
          </div>
        </aside>
      </main>
      <ToastRegion messages={toasts} onDismiss={dismissToast} />
    </div>
  );
}
