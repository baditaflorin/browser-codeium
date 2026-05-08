import { describe, expect, it } from "vitest";
import {
  createWorkspaceFromSamples,
  getActiveFile,
  languageFromPath,
  setActiveFile,
  updateFileContent
} from "./workspace";

describe("workspace helpers", () => {
  it("detects editor languages from file paths", () => {
    expect(languageFromPath("src/app.tsx")).toBe("typescript");
    expect(languageFromPath("src/app.js")).toBe("javascript");
    expect(languageFromPath("README.md")).toBe("markdown");
    expect(languageFromPath("notes.unknown")).toBe("plaintext");
  });

  it("creates and updates a sample workspace", () => {
    const workspace = createWorkspaceFromSamples([
      { path: "src/a.ts", content: "export const a = 1;" },
      { path: "README.md", content: "# Hello" }
    ]);

    expect(getActiveFile(workspace).path).toBe("src/a.ts");

    const switched = setActiveFile(workspace, "README.md");
    expect(getActiveFile(switched).language).toBe("markdown");

    const updated = updateFileContent(switched, "README.md", "# Updated");
    expect(getActiveFile(updated).content).toBe("# Updated");
  });
});
