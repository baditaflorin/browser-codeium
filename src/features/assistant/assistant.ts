import type { CodeAnalysis } from "@/features/analysis/types";

export interface AssistantInput {
  path: string;
  code: string;
  prompt: string;
  analysis: CodeAnalysis | null;
}

export interface AssistantDraft {
  title: string;
  summary: string[];
  suggestedEdit: string;
  risk: "low" | "medium" | "high";
}

export function createAssistantDraft(input: AssistantInput): AssistantDraft {
  const prompt = input.prompt.trim() || "Review this file and suggest the next useful edit.";
  const todos = extractTodos(input.code);
  const exportedCount = input.analysis?.exports.length ?? 0;
  const symbolCount = input.analysis?.symbols.length ?? 0;
  const confidence = input.analysis?.confidence;
  const fileShape = input.analysis?.fileShape;
  const primaryDiagnostic = input.analysis?.diagnostics.find(
    (item) => item.severity === "error" || item.severity === "warning"
  );
  const hasTests =
    /\b(test|spec)\.(t|j)sx?$/i.test(input.path) || /describe\(|it\(|test\(/.test(input.code);
  const hasErrors = input.analysis?.hasSyntaxErrors ?? false;

  return {
    title: `Local draft for ${input.path}`,
    summary: [
      `Prompt: ${prompt}`,
      `Detected ${symbolCount} symbol${symbolCount === 1 ? "" : "s"} and ${exportedCount} export surface marker${exportedCount === 1 ? "" : "s"}.`,
      input.analysis
        ? `Structure guess: ${fileShape} with ${confidence?.label ?? "unknown"} confidence.`
        : "Structure guess has not run yet.",
      primaryDiagnostic
        ? `Current warning: ${primaryDiagnostic.what} ${primaryDiagnostic.nowWhat}`
        : "No structural warnings are blocking the draft.",
      todos.length > 0
        ? `TODOs worth handling: ${todos.slice(0, 3).join("; ")}`
        : "No TODO comments were found in the active file.",
      hasTests
        ? "This looks like a test file or already contains test syntax."
        : "No colocated test syntax was detected in this file."
    ],
    suggestedEdit: buildSuggestedEdit(input, hasTests, hasErrors),
    risk: riskFor(input.analysis, input.code)
  };
}

function buildSuggestedEdit(input: AssistantInput, hasTests: boolean, hasErrors: boolean): string {
  const { analysis, path, code } = input;
  const primaryDiagnostic = analysis?.diagnostics.find(
    (item) => item.severity === "error" || item.severity === "warning"
  );

  if (!analysis) {
    return "Run the structure pass first so the draft can use the same symbols, confidence, and warnings the export would carry.";
  }

  if (primaryDiagnostic) {
    return `${primaryDiagnostic.what} ${primaryDiagnostic.nowWhat}`;
  }

  if (hasErrors) {
    return "Fix the syntax error first, then rerun analysis so structural suggestions are based on a clean parse tree.";
  }

  if (analysis.confidence.label === "low") {
    return "Treat this result as a reading aid, not an edit plan. Improve the input quality first, then rerun analysis.";
  }

  if (analysis.fileShape === "huge-file") {
    return "Open a smaller module or focused excerpt before planning edits; this file is intentionally summarized at low confidence.";
  }

  if (analysis.fileShape === "minified-bundle") {
    return "Use the original unbundled source before editing; minified identifiers make structural suggestions unreliable.";
  }

  if (analysis.fileShape === "partial-input") {
    return "Paste the rest of the source before editing, or keep changes limited to declarations that are fully visible.";
  }

  if (analysis.fileShape === "unsupported-language") {
    return "Switch to a JavaScript or TypeScript file for structural edit guidance in this version.";
  }

  if (!hasTests && /\.(ts|tsx|js|jsx)$/i.test(path)) {
    return "Add a focused unit test for the exported behavior before expanding the implementation.";
  }

  if (/console\.(log|debug|info)/.test(code)) {
    return "Replace routine console output with user-visible state or a development-only logger wrapper.";
  }

  if (code.split("\n").length > 160) {
    return "Split the file around its dominant responsibility so future edits stay easier to review.";
  }

  return "Document the main exported function or add a small happy-path example near the call site.";
}

function riskFor(analysis: CodeAnalysis | null, code: string): AssistantDraft["risk"] {
  if (!analysis) return "medium";
  if (
    analysis.hasSyntaxErrors ||
    analysis.confidence.label === "low" ||
    analysis.fileShape === "unsupported-language"
  ) {
    return "high";
  }
  if (
    code.length > 8_000 ||
    analysis.confidence.label === "medium" ||
    analysis.fileShape === "huge-file" ||
    analysis.fileShape === "minified-bundle" ||
    analysis.fileShape === "partial-input"
  ) {
    return "medium";
  }
  return "low";
}

function extractTodos(code: string): string[] {
  return code
    .split("\n")
    .map((line) => line.match(/\b(?:TODO|FIXME|HACK):?\s*(.*)$/i)?.[1]?.trim())
    .filter((todo): todo is string => Boolean(todo));
}
