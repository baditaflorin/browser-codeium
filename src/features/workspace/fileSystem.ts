import {
  isSupportedTextPath,
  languageFromPath,
  type Workspace,
  type WorkspaceFile
} from "./workspace";

const ignoredDirectories = new Set([".git", "node_modules", "dist", "docs/assets", "coverage"]);
const maxFiles = 80;
const maxBytes = 500_000;

export function canOpenDirectory(): boolean {
  return typeof window !== "undefined" && typeof window.showDirectoryPicker === "function";
}

export async function openDirectoryWorkspace(): Promise<Workspace> {
  if (!window.showDirectoryPicker) {
    throw new Error("This browser does not expose the File System Access directory picker.");
  }

  const root = await window.showDirectoryPicker({ mode: "read" });
  const files: WorkspaceFile[] = [];
  await collectFiles(root, "", files);

  if (files.length === 0) {
    throw new Error("No supported text files were found in that folder.");
  }

  const now = new Date().toISOString();
  return {
    name: root.name,
    files: files.sort((a, b) => a.path.localeCompare(b.path)),
    activePath: files[0].path,
    updatedAt: now
  };
}

async function collectFiles(
  directory: FileSystemDirectoryHandle,
  prefix: string,
  files: WorkspaceFile[]
): Promise<void> {
  for await (const [name, handle] of directory.entries()) {
    if (files.length >= maxFiles) {
      return;
    }

    const path = prefix ? `${prefix}/${name}` : name;
    if (handle.kind === "directory") {
      if (!ignoredDirectories.has(name) && !ignoredDirectories.has(path)) {
        await collectFiles(handle, path, files);
      }
      continue;
    }

    if (!isSupportedTextPath(path)) {
      continue;
    }

    const file = await handle.getFile();
    if (file.size > maxBytes) {
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
