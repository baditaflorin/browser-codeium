import "./monacoWorkers";
import Editor, { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import type { WorkspaceFile } from "@/features/workspace/workspace";

loader.config({ monaco });

interface EditorPaneProps {
  file: WorkspaceFile | null;
  onChange: (content: string) => void;
}

export function EditorPane({ file, onChange }: EditorPaneProps): JSX.Element {
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
        fontSize: 14,
        fontLigatures: true,
        fontFamily: "JetBrains Mono, SFMono-Regular, Consolas, monospace",
        lineNumbersMinChars: 3,
        scrollBeyondLastLine: false,
        wordWrap: "on",
        automaticLayout: true,
        tabSize: 2,
        renderWhitespace: "selection",
        fixedOverflowWidgets: true
      }}
    />
  );
}
