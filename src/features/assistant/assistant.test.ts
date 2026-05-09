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
        symbols: [
          {
            id: "a_run",
            name: "run",
            kind: "function",
            line: 1,
            column: 1,
            preview: "run",
            confidence: { score: 0.8, label: "high", reasons: ["test"] }
          }
        ],
        imports: [],
        exports: ["export function run()"],
        diagnostics: [],
        schemaVersion: 2,
        fileShape: "normal-module",
        confidence: { score: 0.8, label: "high", reasons: ["test"] },
        anomalies: [],
        explanation: [],
        provenance: {
          schemaVersion: 2,
          appVersion: "0.2.0",
          sourceHash: "test",
          path: "src/example.ts",
          parameters: {
            maxDeepBytes: 750000,
            maxImportBytes: 5000000,
            normalizedLineEndings: false
          }
        }
      }
    });

    expect(draft.title).toContain("src/example.ts");
    expect(draft.summary.join(" ")).toContain("handle empty state");
    expect(draft.suggestedEdit).toContain("unit test");
    expect(draft.risk).toBe("low");
  });
});
