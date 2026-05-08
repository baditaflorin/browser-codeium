import { FolderOpen, RefreshCcw, Save, Trash2, Upload } from "lucide-react";
import { canOpenDirectory } from "@/features/workspace/fileSystem";
import type { Workspace } from "@/features/workspace/workspace";

interface SidebarProps {
  workspace: Workspace | null;
  activePath: string | null;
  onSelectFile: (path: string) => void;
  onOpenFolder: () => void;
  onLoadSample: () => void;
  onSave: () => void;
  onReset: () => void;
}

export function Sidebar({
  workspace,
  activePath,
  onSelectFile,
  onOpenFolder,
  onLoadSample,
  onSave,
  onReset
}: SidebarProps): JSX.Element {
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
            title="Open a local folder"
            onClick={onOpenFolder}
            disabled={!canOpenDirectory()}
          >
            <FolderOpen size={16} aria-hidden="true" />
            <span>Folder</span>
          </button>
          <button type="button" className="toolbar-button" title="Load sample" onClick={onLoadSample}>
            <Upload size={16} aria-hidden="true" />
            <span>Sample</span>
          </button>
          <button type="button" className="toolbar-button" title="Save workspace" onClick={onSave}>
            <Save size={16} aria-hidden="true" />
            <span>Save</span>
          </button>
          <button type="button" className="toolbar-button" title="Reset workspace" onClick={onReset}>
            <Trash2 size={16} aria-hidden="true" />
            <span>Reset</span>
          </button>
        </div>
        {!canOpenDirectory() ? (
          <p className="mt-2 text-xs text-muted">
            Folder import is available in Chromium browsers that expose File System Access.
          </p>
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
        <RefreshCcw size={14} className="mr-1 inline" aria-hidden="true" />
        Saved locally with IndexedDB.
      </div>
    </aside>
  );
}
