import "./monacoWorkers";
import Editor, { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import type { UserSettings } from "@/features/settings/settings";
import type { WorkspaceFile } from "@/features/workspace/workspace";

loader.config({ monaco });

interface EditorPaneProps {
  file: WorkspaceFile | null;
  settings: UserSettings;
  onChange: (content: string) => void;
}

export function EditorPane({ file, settings, onChange }: EditorPaneProps): JSX.Element {
  if (!file) {
    return (
      <div className="grid h-full place-items-center bg-ink text-sm text-muted">
        No file selected.
      </div>
    );
  }

  return (
    <Editor
      key={file.path}
      height="100%"
      language={file.language}
      value={file.content}
      theme="vs-dark"
      path={file.path}
      onChange={(value) => onChange(value ?? "")}
      options={{
        minimap: { enabled: false },
        fontSize: settings.fontSize,
        fontLigatures: true,
        fontFamily: "JetBrains Mono, SFMono-Regular, Consolas, monospace",
        lineNumbersMinChars: 3,
        scrollBeyondLastLine: false,
        wordWrap: settings.wordWrap,
        automaticLayout: true,
        tabSize: 2,
        renderWhitespace: "selection",
        fixedOverflowWidgets: true
      }}
    />
  );
}
