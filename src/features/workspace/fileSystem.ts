import {
  isSupportedTextPath,
  languageFromPath,
  type SkippedFile,
  type Workspace,
  type WorkspaceFile
} from "./workspace";

const ignoredDirectories = new Set([".git", "node_modules", "dist", "docs/assets", "coverage"]);
const maxFiles = 80;
const maxBytes = 5_000_000;

export function canOpenDirectory(): boolean {
  return typeof window !== "undefined" && typeof window.showDirectoryPicker === "function";
}

export async function openDirectoryWorkspace(): Promise<Workspace> {
  if (!window.showDirectoryPicker) {
    throw new Error("This browser does not expose the File System Access directory picker.");
  }

  const root = await window.showDirectoryPicker({ mode: "read" });
  const files: WorkspaceFile[] = [];
  const skippedFiles: SkippedFile[] = [];
  await collectFiles(root, "", files, skippedFiles);

  if (files.length === 0) {
    throw new Error(
      skippedFiles.length > 0
        ? "No analyzable text files were opened. The skipped-file report explains why."
        : "No supported text files were found in that folder."
    );
  }

  const now = new Date().toISOString();
  return {
    name: root.name,
    files: files.sort((a, b) => a.path.localeCompare(b.path)),
    skippedFiles: skippedFiles.sort((a, b) => a.path.localeCompare(b.path)),
    activePath: files[0].path,
    updatedAt: now
  };
}

async function collectFiles(
  directory: FileSystemDirectoryHandle,
  prefix: string,
  files: WorkspaceFile[],
  skippedFiles: SkippedFile[]
): Promise<void> {
  for await (const [name, handle] of directory.entries()) {
    if (files.length >= maxFiles) {
      skippedFiles.push({
        path: prefix ? `${prefix}/${name}` : name,
        reason: "File limit reached.",
        nextStep: `Open a smaller folder or remove files. The current browser import cap is ${maxFiles} files.`
      });
      return;
    }

    const path = prefix ? `${prefix}/${name}` : name;
    if (handle.kind === "directory") {
      if (!ignoredDirectories.has(name) && !ignoredDirectories.has(path)) {
        await collectFiles(handle, path, files, skippedFiles);
      } else {
        skippedFiles.push({
          path,
          reason: "Directory ignored.",
          nextStep: "Open a source-focused folder if files inside this directory matter."
        });
      }
      continue;
    }

    if (!isSupportedTextPath(path)) {
      skippedFiles.push({
        path,
        reason: "Unsupported file extension.",
        nextStep: "Use JavaScript or TypeScript files for deep structural analysis in this version."
      });
      continue;
    }

    const file = await handle.getFile();
    if (file.size > maxBytes) {
      skippedFiles.push({
        path,
        reason: "File is too large to import safely.",
        nextStep:
          "Open a smaller source file. Files over 5MB are skipped to keep the browser responsive.",
        sizeBytes: file.size
      });
      continue;
    }

    files.push({
      path,
      language: languageFromPath(path),
      content: await file.text(),
      source: "local",
      updatedAt: new Date().toISOString()
    });
  }
}
