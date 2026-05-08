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
  const hasTests =
    /\b(test|spec)\.(t|j)sx?$/i.test(input.path) || /describe\(|it\(|test\(/.test(input.code);
  const hasErrors = input.analysis?.hasSyntaxErrors ?? false;

  return {
    title: `Local draft for ${input.path}`,
    summary: [
      `Prompt: ${prompt}`,
      `Detected ${symbolCount} symbol${symbolCount === 1 ? "" : "s"} and ${exportedCount} export surface marker${exportedCount === 1 ? "" : "s"}.`,
      todos.length > 0
        ? `TODOs worth handling: ${todos.slice(0, 3).join("; ")}`
        : "No TODO comments were found in the active file.",
      hasTests
        ? "This looks like a test file or already contains test syntax."
        : "No colocated test syntax was detected in this file."
    ],
    suggestedEdit: buildSuggestedEdit(input.path, input.code, hasTests, hasErrors),
    risk: hasErrors ? "high" : input.code.length > 8_000 ? "medium" : "low"
  };
}

function buildSuggestedEdit(
  path: string,
  code: string,
  hasTests: boolean,
  hasErrors: boolean
): string {
  if (hasErrors) {
    return "Fix the syntax error first, then rerun analysis so structural suggestions are based on a clean parse tree.";
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

function extractTodos(code: string): string[] {
  return code
    .split("\n")
    .map((line) => line.match(/\b(?:TODO|FIXME|HACK):?\s*(.*)$/i)?.[1]?.trim())
    .filter((todo): todo is string => Boolean(todo));
}
