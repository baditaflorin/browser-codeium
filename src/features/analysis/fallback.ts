import {
  createLightweightAnalysis,
  finalizeAnalysis,
  makeSymbol,
  prepareAnalysisInput,
  type PreparedAnalysisInput
} from "./substance";
import type { AnalysisDiagnostic, CodeAnalysis, CodeSymbol, SymbolKind } from "./types";

const declarationPatterns: Array<[SymbolKind, RegExp]> = [
  ["class", /^\s*(?:export\s+)?class\s+([A-Za-z_$][\w$]*)/],
  ["function", /^\s*(?:export\s+)?(?:async\s+)?function\s+([A-Za-z_$][\w$]*)/],
  ["interface", /^\s*(?:export\s+)?interface\s+([A-Za-z_$][\w$]*)/],
  ["type", /^\s*(?:export\s+)?type\s+([A-Za-z_$][\w$]*)/],
  ["variable", /^\s*(?:export\s+)?(?:const|let|var)\s+([A-Za-z_$][\w$]*)/]
];

export function analyzeWithFallback(
  code: string,
  path: string,
  diagnostics: AnalysisDiagnostic[] = [],
  preparedInput?: PreparedAnalysisInput
): CodeAnalysis {
  const started = performance.now();
  const prepared = preparedInput ?? prepareAnalysisInput(code, path);
  if (!prepared.shouldDeepParse) {
    return createLightweightAnalysis(
      { ...prepared, diagnostics: [...prepared.diagnostics, ...diagnostics] },
      Math.round(performance.now() - started)
    );
  }

  const lines = prepared.code.split("\n");
  const symbols: CodeSymbol[] = [];
  const imports: string[] = [];
  const exports: string[] = [];

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("import ")) {
      imports.push(trimmed);
      symbols.push(symbolForLine("import", "import", line, index));
    }
    if (trimmed.startsWith("export ")) {
      exports.push(trimmed);
      symbols.push(symbolForLine("export", "export", line, index));
    }

    for (const [kind, pattern] of declarationPatterns) {
      const match = line.match(pattern);
      if (match?.[1]) {
        symbols.push(symbolForLine(match[1], kind, line, index));
      }
    }
  });

  return finalizeAnalysis(
    {
      schemaVersion: 2,
      engine: "fallback",
      language: prepared.language,
      fileShape: prepared.fileShape,
      rootType: "text",
      parseMs: Math.round(performance.now() - started),
      hasSyntaxErrors: prepared.fileShape === "partial-input",
      confidence: prepared.confidence,
      symbols: dedupeSymbols(symbols),
      imports,
      exports,
      diagnostics: [...prepared.diagnostics, ...diagnostics],
      anomalies: prepared.anomalies,
      explanation: prepared.explanation,
      provenance: prepared.provenance
    },
    prepared
  );
}

function symbolForLine(name: string, kind: SymbolKind, line: string, index: number): CodeSymbol {
  return makeSymbol(
    name,
    kind,
    index + 1,
    Math.max(1, line.indexOf(name) + 1),
    line.trim().slice(0, 140),
    {
      score: 0.62,
      label: "medium",
      reasons: ["Fallback pattern matched a top-level source line."]
    }
  );
}

function dedupeSymbols(symbols: CodeSymbol[]): CodeSymbol[] {
  const seen = new Set<string>();
  return symbols.filter((symbol) => {
    const key = `${symbol.kind}:${symbol.name}:${symbol.line}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}
