import { useRef, useState } from "react";
import {
  ClipboardPaste,
  Copy,
  Download,
  FileInput,
  FolderOpen,
  Link2,
  RefreshCcw,
  Save,
  Trash2,
  Upload
} from "lucide-react";
import { canOpenDirectory } from "@/features/workspace/fileSystem";
import { fileInputAccept, type Workspace } from "@/features/workspace/workspace";

interface SidebarProps {
  workspace: Workspace | null;
  activePath: string | null;
  onSelectFile: (path: string) => void;
  onOpenFolder: () => void;
  onImportFiles: (files: File[]) => void;
  onImportState: (file: File) => void;
  onPasteWorkspace: (path: string, content: string) => void;
  onPasteFromClipboard: (path: string) => void;
  onLoadSample: () => void;
  onSave: () => void;
  onCreateFresh: () => void;
  onExportState: () => void;
  onExportActiveFile: () => void;
  onCopyActiveFile: () => void;
  onShareWorkspace: () => void;
}

export function Sidebar({
  workspace,
  activePath,
  onSelectFile,
  onOpenFolder,
  onImportFiles,
  onImportState,
  onPasteWorkspace,
  onPasteFromClipboard,
  onLoadSample,
  onSave,
  onCreateFresh,
  onExportState,
  onExportActiveFile,
  onCopyActiveFile,
  onShareWorkspace
}: SidebarProps): JSX.Element {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const stateInputRef = useRef<HTMLInputElement | null>(null);
  const [pastePath, setPastePath] = useState("scratch.ts");
  const [pasteContent, setPasteContent] = useState("");

  return (
    <aside className="flex min-h-0 flex-col border-r border-line bg-panel">
      <div className="border-b border-line p-3">
        <p className="text-xs uppercase tracking-wide text-muted">Workspace</p>
        <h2 className="mt-1 truncate text-sm font-semibold text-white">
          {workspace?.name ?? "Loading workspace"}
        </h2>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            className="toolbar-button"
            title="Import local files"
            onClick={() => fileInputRef.current?.click()}
          >
            <FileInput size={16} aria-hidden="true" />
            <span>Files</span>
          </button>
          <button
            type="button"
            className="toolbar-button"
            title="Open a local folder"
            onClick={onOpenFolder}
            disabled={!canOpenDirectory()}
          >
            <FolderOpen size={16} aria-hidden="true" />
            <span>Folder</span>
          </button>
          <button
            type="button"
            className="toolbar-button"
            title="Load sample"
            onClick={onLoadSample}
          >
            <Upload size={16} aria-hidden="true" />
            <span>Sample</span>
          </button>
          <button
            type="button"
            className="toolbar-button"
            title="Create a fresh workspace"
            onClick={onCreateFresh}
          >
            <Trash2 size={16} aria-hidden="true" />
            <span>Fresh</span>
          </button>
          <button type="button" className="toolbar-button" title="Save workspace" onClick={onSave}>
            <Save size={16} aria-hidden="true" />
            <span>Save</span>
          </button>
          <button
            type="button"
            className="toolbar-button"
            title="Export workspace state"
            onClick={onExportState}
          >
            <Download size={16} aria-hidden="true" />
            <span>State</span>
          </button>
          <button
            type="button"
            className="toolbar-button"
            title="Import workspace state"
            onClick={() => stateInputRef.current?.click()}
          >
            <Upload size={16} aria-hidden="true" />
            <span>Restore</span>
          </button>
          <button
            type="button"
            className="toolbar-button"
            title="Copy a shareable URL"
            onClick={onShareWorkspace}
          >
            <Link2 size={16} aria-hidden="true" />
            <span>Share</span>
          </button>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept={fileInputAccept}
          multiple
          className="hidden"
          onChange={(event) => {
            const files = event.target.files ? [...event.target.files] : [];
            if (files.length > 0) {
              onImportFiles(files);
            }
            event.target.value = "";
          }}
        />
        <input
          ref={stateInputRef}
          type="file"
          accept=".json,application/json"
          className="hidden"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) {
              onImportState(file);
            }
            event.target.value = "";
          }}
        />
        {!canOpenDirectory() ? (
          <p className="mt-2 text-xs text-muted">
            Folder import is available in Chromium browsers that expose File System Access. Use
            `Files` everywhere else, including mobile browsers.
          </p>
        ) : null}
        <details className="mt-3 rounded-md border border-line bg-ink p-3 text-sm text-mist">
          <summary className="cursor-pointer">Paste a file</summary>
          <label className="mt-3 block text-xs text-muted">
            File path
            <input
              className="mt-1 w-full rounded-md border border-line bg-panel p-2 text-sm text-mist"
              value={pastePath}
              onChange={(event) => setPastePath(event.target.value)}
            />
          </label>
          <label className="mt-3 block text-xs text-muted">
            File content
            <textarea
              className="mt-1 min-h-28 w-full rounded-md border border-line bg-panel p-2 text-sm text-mist"
              value={pasteContent}
              onChange={(event) => setPasteContent(event.target.value)}
            />
          </label>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              className="toolbar-button"
              onClick={() => onPasteWorkspace(pastePath, pasteContent)}
            >
              <ClipboardPaste size={16} aria-hidden="true" />
              <span>Import pasted file</span>
            </button>
            <button
              type="button"
              className="toolbar-button"
              onClick={() => onPasteFromClipboard(pastePath)}
            >
              <Upload size={16} aria-hidden="true" />
              <span>Use clipboard</span>
            </button>
          </div>
        </details>
        {workspace?.skippedFiles.length ? (
          <details className="mt-3 rounded-md border border-amber/40 bg-amber/10 p-2 text-xs text-amber">
            <summary>{workspace.skippedFiles.length} skipped file reason(s)</summary>
            <div className="mt-2 space-y-2">
              {workspace.skippedFiles.slice(0, 8).map((file) => (
                <div key={file.path}>
                  <p className="font-medium">{file.path}</p>
                  <p>{file.reason}</p>
                  <p className="text-amber/75">{file.nextStep}</p>
                </div>
              ))}
            </div>
          </details>
        ) : null}
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-2">
        {workspace?.files.map((file) => (
          <button
            type="button"
            key={file.path}
            className={`flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm ${
              file.path === activePath
                ? "bg-cyan/15 text-cyan"
                : "text-mist hover:bg-panelSoft hover:text-white"
            }`}
            onClick={() => onSelectFile(file.path)}
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-green" aria-hidden="true" />
            <span className="min-w-0 flex-1 truncate">{file.path}</span>
            <span className="text-xs text-muted">{file.language}</span>
          </button>
        ))}
      </div>

      <div className="border-t border-line p-3 text-xs text-muted">
        <div className="mb-3 flex flex-wrap gap-2">
          <button type="button" className="toolbar-button" onClick={onCopyActiveFile}>
            <Copy size={16} aria-hidden="true" />
            <span>Copy file</span>
          </button>
          <button type="button" className="toolbar-button" onClick={onExportActiveFile}>
            <Download size={16} aria-hidden="true" />
            <span>Download file</span>
          </button>
        </div>
        <RefreshCcw size={14} className="mr-1 inline" aria-hidden="true" />
        Saved locally with IndexedDB.
      </div>
    </aside>
  );
}
