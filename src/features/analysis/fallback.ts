import type { CodeAnalysis, CodeSymbol, SymbolKind } from "./types";

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
  diagnostics: string[] = []
): CodeAnalysis {
  const started = performance.now();
  const lines = code.split("\n");
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

  return {
    engine: "fallback",
    language: languageFromPath(path),
    rootType: "text",
    parseMs: Math.round(performance.now() - started),
    hasSyntaxErrors: false,
    symbols: dedupeSymbols(symbols),
    imports,
    exports,
    diagnostics
  };
}

function symbolForLine(name: string, kind: SymbolKind, line: string, index: number): CodeSymbol {
  return {
    name,
    kind,
    line: index + 1,
    column: Math.max(1, line.indexOf(name) + 1),
    preview: line.trim().slice(0, 140)
  };
}

function languageFromPath(path: string): CodeAnalysis["language"] {
  const lower = path.toLowerCase();
  if (lower.endsWith(".tsx") || lower.endsWith(".jsx")) return "tsx";
  if (lower.endsWith(".ts")) return "typescript";
  if (lower.endsWith(".js") || lower.endsWith(".mjs") || lower.endsWith(".cjs"))
    return "javascript";
  return "text";
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
