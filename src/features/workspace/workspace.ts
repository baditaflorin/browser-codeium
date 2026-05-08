import { z } from "zod";

export const workspaceFileSchema = z.object({
  path: z.string().min(1),
  language: z.string().min(1),
  content: z.string(),
  source: z.enum(["sample", "local", "browser"]),
  updatedAt: z.string()
});

export const workspaceSchema = z.object({
  name: z.string().min(1),
  files: z.array(workspaceFileSchema).min(1),
  activePath: z.string().min(1),
  updatedAt: z.string()
});

export type WorkspaceFile = z.infer<typeof workspaceFileSchema>;
export type Workspace = z.infer<typeof workspaceSchema>;

export const codeExtensions = new Set([
  ".cjs",
  ".css",
  ".go",
  ".html",
  ".js",
  ".json",
  ".jsx",
  ".md",
  ".mjs",
  ".py",
  ".rs",
  ".ts",
  ".tsx",
  ".txt",
  ".yaml",
  ".yml"
]);

export function languageFromPath(path: string): string {
  const lower = path.toLowerCase();
  if (lower.endsWith(".tsx")) return "typescript";
  if (lower.endsWith(".ts")) return "typescript";
  if (lower.endsWith(".jsx")) return "javascript";
  if (lower.endsWith(".js") || lower.endsWith(".mjs") || lower.endsWith(".cjs")) return "javascript";
  if (lower.endsWith(".json")) return "json";
  if (lower.endsWith(".md")) return "markdown";
  if (lower.endsWith(".css")) return "css";
  if (lower.endsWith(".html")) return "html";
  if (lower.endsWith(".go")) return "go";
  if (lower.endsWith(".py")) return "python";
  if (lower.endsWith(".rs")) return "rust";
  if (lower.endsWith(".yaml") || lower.endsWith(".yml")) return "yaml";
  return "plaintext";
}

export function isSupportedTextPath(path: string): boolean {
  const lower = path.toLowerCase();
  return [...codeExtensions].some((extension) => lower.endsWith(extension));
}

export function createWorkspaceFromSamples(files: Array<{ path: string; content: string }>): Workspace {
  const now = new Date().toISOString();
  const workspaceFiles = files.map((file) => ({
    path: file.path,
    language: languageFromPath(file.path),
    content: file.content,
    source: "sample" as const,
    updatedAt: now
  }));

  return {
    name: "Sample workspace",
    files: workspaceFiles,
    activePath: workspaceFiles[0]?.path ?? "untitled.ts",
    updatedAt: now
  };
}

export function getActiveFile(workspace: Workspace): WorkspaceFile {
  return workspace.files.find((file) => file.path === workspace.activePath) ?? workspace.files[0];
}

export function updateFileContent(workspace: Workspace, path: string, content: string): Workspace {
  const now = new Date().toISOString();
  return {
    ...workspace,
    files: workspace.files.map((file) =>
      file.path === path ? { ...file, content, updatedAt: now } : file
    ),
    updatedAt: now
  };
}

export function setActiveFile(workspace: Workspace, path: string): Workspace {
  return {
    ...workspace,
    activePath: path,
    updatedAt: new Date().toISOString()
  };
}
