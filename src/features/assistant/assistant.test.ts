import { describe, expect, it } from "vitest";
import { createAssistantDraft } from "./assistant";

describe("assistant draft", () => {
  it("creates a deterministic review draft from code and analysis", () => {
    const draft = createAssistantDraft({
      path: "src/example.ts",
      code: "export function run() {\n  // TODO: handle empty state\n  return 1;\n}\n",
      prompt: "Review this",
      analysis: {
        engine: "fallback",
        language: "typescript",
        rootType: "text",
        parseMs: 1,
        hasSyntaxErrors: false,
        symbols: [{ name: "run", kind: "function", line: 1, column: 1, preview: "run" }],
        imports: [],
        exports: ["export function run()"],
        diagnostics: []
      }
    });

    expect(draft.title).toContain("src/example.ts");
    expect(draft.summary.join(" ")).toContain("handle empty state");
    expect(draft.suggestedEdit).toContain("unit test");
    expect(draft.risk).toBe("low");
  });
});
