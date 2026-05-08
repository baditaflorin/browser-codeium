import { Suspense, lazy, useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Play, Save } from "lucide-react";
import { AnalysisPanel } from "@/features/analysis/AnalysisPanel";
import { analyzeSource } from "@/features/analysis/treeSitter";
import type { CodeAnalysis } from "@/features/analysis/types";
import { createAssistantDraft, type AssistantDraft } from "@/features/assistant/assistant";
import { AssistantPanel } from "@/features/assistant/AssistantPanel";
import { fetchAppMeta, fetchSamples } from "@/features/staticData/staticData";
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
import { clearWorkspace, loadWorkspace, saveWorkspace } from "@/features/workspace/storage";
import { Sidebar } from "@/components/Sidebar";
import { ToastRegion, type ToastMessage } from "@/components/ToastRegion";
import { TopBar } from "@/components/TopBar";
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
  const [workspace, setWorkspace] = useState<Workspace | null>(null);
  const [bootstrapped, setBootstrapped] = useState(false);
  const [analysis, setAnalysis] = useState<CodeAnalysis | null>(null);
  const [assistantPrompt, setAssistantPrompt] = useState("Review this file and suggest a safe next edit.");
  const [assistantDraft, setAssistantDraft] = useState<AssistantDraft | null>(null);
  const [webGpuStatus, setWebGpuStatus] = useState<WebGpuStatus>(uncheckedWebGpu);
  const [storageState, setStorageState] = useState("loading");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const activeFile = useMemo(() => (workspace ? getActiveFile(workspace) : null), [workspace]);

  const pushToast = useCallback((tone: ToastMessage["tone"], message: string) => {
    const id = crypto.randomUUID();
    setToasts((current) => [...current, { id, tone, message }].slice(-4));
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 4800);
  }, []);

  const loadSampleWorkspace = useCallback(() => {
    if (!samples.data) {
      pushToast("error", "Sample data has not loaded yet.");
      return;
    }
    const next = createWorkspaceFromSamples(samples.data.samples);
    setWorkspace(next);
    setAnalysis(null);
    setAssistantDraft(null);
    pushToast("success", "Sample workspace loaded.");
  }, [pushToast, samples.data]);

  useEffect(() => {
    void loadWorkspace()
      .then((saved) => {
        if (saved) {
          setWorkspace(saved);
          setStorageState("saved locally");
        }
      })
      .catch((error) => {
        setStorageState("storage error");
        pushToast("error", reportError(error));
      })
      .finally(() => setBootstrapped(true));
  }, [pushToast]);

  useEffect(() => {
    if (bootstrapped && !workspace && samples.data) {
      setWorkspace(createWorkspaceFromSamples(samples.data.samples));
      setStorageState("sample loaded");
    }
  }, [bootstrapped, samples.data, workspace]);

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
      setWorkspace(updateFileContent(workspace, activeFile.path, content));
      setAnalysis(null);
      setAssistantDraft(null);
    },
    [activeFile, workspace]
  );

  const handleSelectFile = useCallback(
    (path: string) => {
      if (!workspace) {
        return;
      }
      setWorkspace(setActiveFile(workspace, path));
      setAnalysis(null);
      setAssistantDraft(null);
    },
    [workspace]
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
        setWorkspace(next);
        setAnalysis(null);
        setAssistantDraft(null);
        pushToast("success", `Opened ${next.files.length} text files.`);
      })
      .catch((error) => pushToast("error", reportError(error)));
  }, [pushToast]);

  const handleReset = useCallback(() => {
    void clearWorkspace()
      .then(() => {
        setStorageState("cleared");
        loadSampleWorkspace();
      })
      .catch((error) => pushToast("error", reportError(error)));
  }, [loadSampleWorkspace, pushToast]);

  const handleAnalyze = useCallback(() => {
    if (!activeFile) {
      pushToast("error", "Select a file before analyzing.");
      return;
    }

    setIsAnalyzing(true);
    void analyzeSource(activeFile.content, activeFile.path)
      .then((nextAnalysis) => {
        setAnalysis(nextAnalysis);
        pushToast("success", `Analyzed ${activeFile.path} with ${nextAnalysis.engine}.`);
      })
      .catch((error) => pushToast("error", reportError(error)))
      .finally(() => setIsAnalyzing(false));
  }, [activeFile, pushToast]);

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

  return (
    <div className="min-h-screen bg-ink text-mist">
      <TopBar webGpuLabel={webGpuStatus.label} />
      <main className="mx-auto grid h-[calc(100vh-65px)] max-w-[1500px] grid-cols-1 overflow-hidden lg:grid-cols-[280px_minmax(0,1fr)_380px]">
        <Sidebar
          workspace={workspace}
          activePath={activeFile?.path ?? null}
          onSelectFile={handleSelectFile}
          onOpenFolder={handleOpenFolder}
          onLoadSample={loadSampleWorkspace}
          onSave={handleSave}
          onReset={handleReset}
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
                <Play size={16} aria-hidden="true" />
                <span>{isAnalyzing ? "Analyzing" : "Analyze"}</span>
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
              <EditorPane file={activeFile} onChange={handleChange} />
            </Suspense>
          </div>
        </section>

        <aside className="min-h-0 overflow-y-auto border-l border-line bg-panel">
          <div className="space-y-3 p-3">
            <AnalysisPanel analysis={analysis} isAnalyzing={isAnalyzing} onAnalyze={handleAnalyze} />
            <AssistantPanel
              prompt={assistantPrompt}
              draft={assistantDraft}
              onPromptChange={setAssistantPrompt}
              onGenerate={handleAssistant}
            />
            <SystemPanel
              webGpuStatus={webGpuStatus}
              onCheckWebGpu={handleCheckWebGpu}
              storageState={storageState}
              sampleVersion={samples.data?.schemaVersion ?? appMeta.data?.schemaVersion ?? null}
            />
          </div>
        </aside>
      </main>
      <ToastRegion
        messages={toasts}
        onDismiss={(id) => setToasts((current) => current.filter((toast) => toast.id !== id))}
      />
    </div>
  );
}
