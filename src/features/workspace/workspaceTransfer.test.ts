import { describe, expect, it } from "vitest";
import { defaultUserSettings } from "@/features/settings/settings";
import { createWorkspace } from "./workspace";
import {
  createShareUrl,
  parseSharedWorkspaceHash,
  readWorkspaceFiles,
  serializeWorkspaceSnapshot,
  workspaceFromImportedFiles
} from "./workspaceTransfer";

describe("workspace transfer", () => {
  it("serializes and re-parses a workspace snapshot", () => {
    const workspace = createWorkspace("Example", [
      {
        path: "src/example.ts",
        language: "typescript",
        content: "export const value = 1;\n",
        source: "browser",
        updatedAt: "2026-05-09T00:00:00.000Z"
      }
    ]);

    const snapshot = serializeWorkspaceSnapshot(workspace, defaultUserSettings);
    expect(snapshot.workspace.name).toBe("Example");
    expect(snapshot.settings.autoAnalyze).toBe(true);
  });

  it("reads supported files and ignores unsupported ones", async () => {
    const files = await readWorkspaceFiles([
      {
        name: "example.ts",
        webkitRelativePath: "",
        text: async () => "export const ok = true;"
      } as File,
      {
        name: "image.png",
        webkitRelativePath: "",
        text: async () => "binary"
      } as File
    ]);

    expect(files).toHaveLength(1);
    expect(files[0]?.path).toBe("example.ts");
  });

  it("encodes and decodes small shared workspace state", () => {
    const workspace = workspaceFromImportedFiles([
      {
        path: "src/example.ts",
        language: "typescript",
        content: "export const shared = true;\n",
        source: "browser",
        updatedAt: "2026-05-09T00:00:00.000Z"
      }
    ]);

    const url = createShareUrl(workspace, defaultUserSettings);
    const parsed = parseSharedWorkspaceHash(new URL(url).hash);

    expect(parsed?.workspace.files[0]?.content).toContain("shared");
    expect(parsed?.settings.wordWrap).toBe("on");
  });
});
