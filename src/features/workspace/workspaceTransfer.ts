import { z } from "zod";
import { buildInfo } from "@/lib/buildInfo";
import { userSettingsSchema, type UserSettings } from "@/features/settings/settings";
import {
  createEmptyWorkspace,
  createWorkspace,
  isSupportedTextPath,
  languageFromPath,
  workspaceSchema,
  type Workspace,
  type WorkspaceFile
} from "./workspace";

const importedFileSchema = z.object({
  path: z.string().min(1),
  content: z.string().default("")
});

export const workspaceSnapshotSchema = z.object({
  schemaVersion: z.literal(1),
  appName: z.literal("browser-codeium"),
  appVersion: z.string().min(1),
  workspace: workspaceSchema,
  settings: userSettingsSchema
});

export type WorkspaceSnapshot = z.infer<typeof workspaceSnapshotSchema>;

export async function readWorkspaceFiles(files: Iterable<File>): Promise<WorkspaceFile[]> {
  const imported = await Promise.all(
    [...files]
      .filter((file) => isSupportedTextPath(file.name))
      .map(async (file) => {
        const content = await file.text();
        return {
          path: file.webkitRelativePath || file.name,
          language: languageFromPath(file.name),
          content,
          source: "browser" as const,
          updatedAt: new Date().toISOString()
        };
      })
  );

  return imported.sort((a, b) => a.path.localeCompare(b.path));
}

export function workspaceFromImportedFiles(
  files: WorkspaceFile[],
  name = "Imported workspace"
): Workspace {
  if (files.length === 0) {
    throw new Error("No supported text files were selected.");
  }

  return createWorkspace(name, files);
}

export function workspaceFromPastedText(path: string, content: string): Workspace {
  const parsed = importedFileSchema.parse({ path, content });
  return createWorkspace("Pasted workspace", [
    {
      path: parsed.path,
      language: languageFromPath(parsed.path),
      content: parsed.content,
      source: "browser",
      updatedAt: new Date().toISOString()
    }
  ]);
}

export function serializeWorkspaceSnapshot(
  workspace: Workspace,
  settings: UserSettings
): WorkspaceSnapshot {
  return workspaceSnapshotSchema.parse({
    schemaVersion: 1,
    appName: "browser-codeium",
    appVersion: buildInfo.version,
    workspace,
    settings
  });
}

export function parseWorkspaceSnapshot(text: string): WorkspaceSnapshot {
  return workspaceSnapshotSchema.parse(JSON.parse(text));
}

export function snapshotFilename(workspace: Workspace): string {
  const slug = workspace.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${slug || "workspace"}-browser-codeium.json`;
}

export function exportFilenameForFile(file: WorkspaceFile): string {
  return file.path.split("/").at(-1) ?? "workspace-file.txt";
}

export function createShareUrl(workspace: Workspace, settings: UserSettings): string {
  const snapshot = serializeWorkspaceSnapshot(workspace, settings);
  const json = JSON.stringify(snapshot);
  const encoded = encodeBase64Url(json);
  if (encoded.length > 3500) {
    throw new Error(
      "This workspace is too large for a shareable URL. Export a state file instead."
    );
  }

  const url = new URL(window.location.href);
  url.hash = `workspace=${encoded}`;
  return url.toString();
}

export function parseSharedWorkspaceHash(hash: string): WorkspaceSnapshot | null {
  const params = new URLSearchParams(hash.replace(/^#/, ""));
  const encoded = params.get("workspace");
  if (!encoded) {
    return null;
  }
  return parseWorkspaceSnapshot(decodeBase64Url(encoded));
}

export function createFreshWorkspace(): Workspace {
  return createEmptyWorkspace();
}

function encodeBase64Url(value: string): string {
  const utf8 = new TextEncoder().encode(value);
  let binary = "";
  utf8.forEach((char) => {
    binary += String.fromCharCode(char);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decodeBase64Url(value: string): string {
  const padded = value
    .replace(/-/g, "+")
    .replace(/_/g, "/")
    .padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}
