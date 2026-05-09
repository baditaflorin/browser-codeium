import type {
  AnalysisDiagnostic,
  AnalysisLanguage,
  AnalysisProvenance,
  CodeAnalysis,
  CodeSymbol,
  Confidence,
  FileShape,
  SymbolKind
} from "./types";

export const analysisLimits = {
  maxDeepBytes: 750_000,
  maxImportBytes: 5_000_000,
  maxSymbols: 80
} as const;

const supportedDeepLanguages = new Set<AnalysisLanguage>(["javascript", "typescript", "tsx"]);
const appVersion = "0.2.0";

export interface PreparedAnalysisInput {
  originalCode: string;
  code: string;
  path: string;
  language: AnalysisLanguage;
  fileShape: FileShape;
  byteLength: number;
  shouldDeepParse: boolean;
  confidence: Confidence;
  diagnostics: AnalysisDiagnostic[];
  anomalies: string[];
  explanation: string[];
  provenance: AnalysisProvenance;
}

export function prepareAnalysisInput(code: string, path: string): PreparedAnalysisInput {
  const startedCode = code;
  const normalization = normalizeForAnalysis(code);
  const language = languageFromPath(path);
  const byteLength = byteSize(normalization.code);
  const diagnostics: AnalysisDiagnostic[] = [];
  const anomalies: string[] = [];
  const explanation: string[] = [];

  if (normalization.changedLineEndings) {
    diagnostics.push(
      diagnostic(
        "input.normalized-line-endings",
        "info",
        "Line endings were normalized for analysis.",
        "The file uses CRLF or CR line endings, which can make line-number calculations inconsistent across platforms.",
        "No action needed. The editor content was not rewritten."
      )
    );
    explanation.push("Normalized line endings to keep source positions deterministic.");
  }

  if (normalization.removedBom) {
    diagnostics.push(
      diagnostic(
        "input.removed-bom",
        "info",
        "A UTF-8 byte-order mark was ignored for analysis.",
        "BOM characters are metadata, not source code.",
        "No action needed."
      )
    );
  }

  if (normalization.replacementCharacterCount > 0) {
    diagnostics.push(
      diagnostic(
        "input.encoding-warning",
        "warning",
        "The file contains replacement characters.",
        "The browser saw characters that usually mean the original encoding was damaged or decoded incorrectly.",
        "Re-open the file from its original project or convert it to UTF-8 before trusting the outline."
      )
    );
    anomalies.push("possible encoding loss");
  }

  const shape = detectFileShape(path, normalization.code, language, byteLength);
  diagnostics.push(...shape.diagnostics);
  anomalies.push(...shape.anomalies);
  explanation.push(...shape.explanation);

  const confidence = confidenceForShape(shape.fileShape, language, diagnostics, byteLength);
  const shouldDeepParse =
    supportedDeepLanguages.has(language) &&
    shape.fileShape !== "huge-file" &&
    shape.fileShape !== "minified-bundle" &&
    shape.fileShape !== "empty-file" &&
    byteLength <= analysisLimits.maxDeepBytes;

  return {
    originalCode: startedCode,
    code: normalization.code,
    path,
    language,
    fileShape: shape.fileShape,
    byteLength,
    shouldDeepParse,
    confidence,
    diagnostics: sortDiagnostics(diagnostics),
    anomalies: [...new Set(anomalies)].sort(),
    explanation,
    provenance: provenanceFor(path, normalization.code, normalization.changedLineEndings)
  };
}

export function createLightweightAnalysis(
  prepared: PreparedAnalysisInput,
  parseMs: number,
  symbols: CodeSymbol[] = [],
  imports: string[] = [],
  exports: string[] = []
): CodeAnalysis {
  const engine = prepared.fileShape === "unsupported-language" ? "unsupported" : "lightweight";
  return finalizeAnalysis(
    {
      schemaVersion: 2,
      engine,
      language: prepared.language,
      fileShape: prepared.fileShape,
      rootType: prepared.fileShape,
      parseMs,
      hasSyntaxErrors: prepared.fileShape === "partial-input",
      confidence: prepared.confidence,
      symbols,
      imports,
      exports,
      diagnostics: prepared.diagnostics,
      anomalies: prepared.anomalies,
      explanation: prepared.explanation,
      provenance: prepared.provenance
    },
    prepared
  );
}

export function finalizeAnalysis(
  analysis: CodeAnalysis,
  prepared: PreparedAnalysisInput
): CodeAnalysis {
  const diagnostics = sortDiagnostics(analysis.diagnostics);
  const confidence = mergeConfidence(
    analysis.confidence,
    prepared.confidence,
    analysis.hasSyntaxErrors
  );
  const symbols = analysis.symbols
    .map((symbol) => ({
      ...symbol,
      confidence: mergeConfidence(symbol.confidence, confidence, false)
    }))
    .sort((a, b) => a.line - b.line || a.column - b.column || a.id.localeCompare(b.id))
    .slice(0, analysisLimits.maxSymbols);

  return {
    ...analysis,
    confidence,
    diagnostics,
    symbols,
    imports: [...new Set(analysis.imports)].slice(0, 30).sort(),
    exports: [...new Set(analysis.exports)].slice(0, 30).sort(),
    anomalies: [...new Set([...prepared.anomalies, ...analysis.anomalies])].sort(),
    explanation: [...new Set([...prepared.explanation, ...analysis.explanation])]
  };
}

export function makeSymbol(
  name: string,
  kind: SymbolKind,
  line: number,
  column: number,
  preview: string,
  baseConfidence: Confidence
): CodeSymbol {
  return {
    id: stableId(`${kind}:${name}:${line}:${column}:${preview}`),
    name,
    kind,
    line,
    column,
    preview,
    confidence: withReason(baseConfidence, `Detected ${kind} declaration near line ${line}.`)
  };
}

export function languageFromPath(path: string): AnalysisLanguage {
  const lower = path.toLowerCase();
  if (lower.endsWith(".tsx") || lower.endsWith(".jsx")) return "tsx";
  if (lower.endsWith(".ts")) return "typescript";
  if (lower.endsWith(".js") || lower.endsWith(".mjs") || lower.endsWith(".cjs"))
    return "javascript";
  if (lower.endsWith(".py")) return "python";
  if (lower.endsWith(".go")) return "go";
  if (lower.endsWith(".rs")) return "rust";
  if (lower.endsWith(".md")) return "markdown";
  if (lower.endsWith(".json")) return "json";
  return "text";
}

export function stableId(value: string): string {
  return `a_${fnv1a(value)}`;
}

export function sourceHash(value: string): string {
  return fnv1a(value);
}

export function diagnostic(
  code: string,
  severity: AnalysisDiagnostic["severity"],
  what: string,
  why: string,
  nowWhat: string,
  line?: number
): AnalysisDiagnostic {
  return {
    id: stableId(`${code}:${severity}:${what}:${line ?? 0}`),
    code,
    severity,
    what,
    why,
    nowWhat,
    ...(line ? { line } : {})
  };
}

export function normalizeForAnalysis(code: string): {
  code: string;
  removedBom: boolean;
  changedLineEndings: boolean;
  replacementCharacterCount: number;
} {
  const removedBom = code.startsWith("\uFEFF");
  let next = removedBom ? code.slice(1) : code;
  const changedLineEndings = /\r/.test(next);
  next = next.replace(/\r\n?/g, "\n").replace(/\u00A0/g, " ");
  const replacementCharacterCount = (next.match(/\uFFFD/g) ?? []).length;

  return { code: next, removedBom, changedLineEndings, replacementCharacterCount };
}

function detectFileShape(
  path: string,
  code: string,
  language: AnalysisLanguage,
  byteLength: number
): {
  fileShape: FileShape;
  diagnostics: AnalysisDiagnostic[];
  anomalies: string[];
  explanation: string[];
} {
  const diagnostics: AnalysisDiagnostic[] = [];
  const anomalies: string[] = [];
  const explanation: string[] = [];
  const trimmed = code.trim();

  if (trimmed.length === 0) {
    diagnostics.push(
      diagnostic(
        "input.empty",
        "warning",
        "This file is empty.",
        "There is no source text to outline.",
        "Select a file with code or paste source before analyzing."
      )
    );
    return { fileShape: "empty-file", diagnostics, anomalies: ["empty file"], explanation };
  }

  if (!supportedDeepLanguages.has(language)) {
    diagnostics.push(
      diagnostic(
        "language.unsupported",
        "warning",
        `${languageLabel(language)} analysis is not available yet.`,
        "Phase 2 keeps the app static and only deep-parses JavaScript, TypeScript, TSX, and JSX.",
        "Use the editor for reading, or switch to a JavaScript/TypeScript file for structural analysis."
      )
    );
    return {
      fileShape: "unsupported-language",
      diagnostics,
      anomalies: ["unsupported language"],
      explanation: [`Detected ${languageLabel(language)} from the file extension.`]
    };
  }

  if (byteLength > analysisLimits.maxDeepBytes) {
    diagnostics.push(
      diagnostic(
        "input.huge-file",
        "warning",
        "This file is too large for deep browser analysis.",
        `It is ${formatBytes(byteLength)}, above the ${formatBytes(analysisLimits.maxDeepBytes)} deep-analysis budget.`,
        "The app will avoid a blocking parse and provide only a lightweight, low-confidence summary."
      )
    );
    return {
      fileShape: "huge-file",
      diagnostics,
      anomalies: ["deep analysis skipped for huge file"],
      explanation: ["Huge file budget protects the browser main thread."]
    };
  }

  if (looksMinified(code)) {
    diagnostics.push(
      diagnostic(
        "input.minified",
        "warning",
        "This looks like a minified bundle.",
        "Most identifiers are compressed and line structure is missing, so symbol names are unlikely to be meaningful.",
        "Format the original source or analyze the unbundled module if you need a trustworthy outline."
      )
    );
    return {
      fileShape: "minified-bundle",
      diagnostics,
      anomalies: ["minified source"],
      explanation: ["Detected unusually long lines and very low line count for the byte size."]
    };
  }

  if (looksPartial(code)) {
    diagnostics.push(
      diagnostic(
        "input.partial",
        "warning",
        "This looks like partial or truncated source.",
        "Braces, brackets, or parentheses are unbalanced near the end of the input.",
        "Paste the rest of the file or treat this as a low-confidence partial outline."
      )
    );
    return {
      fileShape: "partial-input",
      diagnostics,
      anomalies: ["possibly truncated input"],
      explanation: ["Detected unmatched delimiters after stripping comments and strings."]
    };
  }

  if (looksBarrel(code)) {
    diagnostics.push(
      diagnostic(
        "shape.barrel-file",
        "info",
        "This looks like a barrel file.",
        "Most top-level statements re-export symbols from other modules.",
        "Review grouped exports first; implementation details probably live in the referenced files."
      )
    );
    return {
      fileShape: "barrel-file",
      diagnostics,
      anomalies,
      explanation: ["Detected many export-from statements and little local implementation."]
    };
  }

  if (looksEntrypoint(path, code)) {
    diagnostics.push(
      diagnostic(
        "shape.entrypoint",
        "info",
        "This looks like a browser/client entrypoint.",
        "It touches window or document and performs bootstrap or hydration work.",
        "Review side effects, globals, and initialization order before changing it."
      )
    );
    return {
      fileShape: "entrypoint",
      diagnostics,
      anomalies,
      explanation: ["Detected DOM globals and bootstrap/hydration calls."]
    };
  }

  if (looksFrameworkRuntime(path, code)) {
    diagnostics.push(
      diagnostic(
        "shape.framework-runtime",
        "info",
        "This looks like framework runtime code.",
        "It defines component, lifecycle, instance, or rendering concepts rather than a single app feature.",
        "Read type groups and lifecycle-related symbols before editing."
      )
    );
    return {
      fileShape: "framework-runtime",
      diagnostics,
      anomalies,
      explanation: ["Detected repeated framework runtime vocabulary."]
    };
  }

  if (looksPipeline(path, code)) {
    diagnostics.push(
      diagnostic(
        "shape.pipeline",
        "info",
        "This looks like a transformation pipeline.",
        "It postprocesses, transforms, validates, or rebalances data in ordered steps.",
        "Review the ordered helper functions before changing the exported operation."
      )
    );
    return {
      fileShape: "pipeline",
      diagnostics,
      anomalies,
      explanation: ["Detected transformation vocabulary and a named postprocess/transform export."]
    };
  }

  return {
    fileShape: "normal-module",
    diagnostics,
    anomalies,
    explanation: ["Detected a normal source module with analyzable declarations."]
  };
}

function confidenceForShape(
  fileShape: FileShape,
  language: AnalysisLanguage,
  diagnostics: AnalysisDiagnostic[],
  byteLength: number
): Confidence {
  let score = supportedDeepLanguages.has(language) ? 0.82 : 0.25;
  const reasons: string[] = [];

  if (supportedDeepLanguages.has(language)) {
    reasons.push(`${languageLabel(language)} can be structurally analyzed in-browser.`);
  } else {
    reasons.push(`${languageLabel(language)} can be opened but not deeply parsed in this version.`);
  }

  const penalties: Partial<Record<FileShape, [number, string]>> = {
    "unsupported-language": [0.5, "Language-specific parser is unavailable."],
    "huge-file": [0.45, "Huge-file analysis is intentionally lightweight."],
    "minified-bundle": [0.5, "Minified code hides semantic identifiers."],
    "partial-input": [
      0.35,
      "Partial input can still reveal some structure, but syntax is incomplete."
    ],
    "empty-file": [0.75, "Empty input has no structure to infer."]
  };

  const penalty = penalties[fileShape];
  if (penalty) {
    score -= penalty[0];
    reasons.push(penalty[1]);
  }

  if (diagnostics.some((item) => item.severity === "warning")) {
    score -= 0.06;
    reasons.push("One or more warnings reduced confidence.");
  }

  if (byteLength < 120) {
    score -= 0.08;
    reasons.push("Very small inputs provide limited evidence.");
  }

  return confidence(Math.max(0.05, Math.min(0.98, score)), reasons);
}

function mergeConfidence(a: Confidence, b: Confidence, hasSyntaxErrors: boolean): Confidence {
  const syntaxPenalty = hasSyntaxErrors ? 0.16 : 0;
  const score = Math.max(0.05, Math.min(a.score, b.score) - syntaxPenalty);
  const reasons = [...new Set([...a.reasons, ...b.reasons])];
  if (hasSyntaxErrors) {
    reasons.push("Syntax errors reduced confidence.");
  }
  return confidence(score, reasons);
}

function confidence(score: number, reasons: string[]): Confidence {
  return {
    score: Number(score.toFixed(2)),
    label: score >= 0.7 ? "high" : score >= 0.45 ? "medium" : "low",
    reasons
  };
}

function withReason(base: Confidence, reason: string): Confidence {
  return confidence(base.score, [...new Set([...base.reasons, reason])]);
}

function provenanceFor(
  path: string,
  code: string,
  normalizedLineEndings: boolean
): AnalysisProvenance {
  return {
    schemaVersion: 2,
    appVersion,
    sourceHash: sourceHash(code),
    path,
    parameters: {
      maxDeepBytes: analysisLimits.maxDeepBytes,
      maxImportBytes: analysisLimits.maxImportBytes,
      normalizedLineEndings
    }
  };
}

function looksMinified(code: string): boolean {
  const lines = code.split("\n");
  const longestLine = Math.max(...lines.map((line) => line.length));
  const averageLineLength = code.length / Math.max(1, lines.length);
  return code.length > 20_000 && (longestLine > 2_000 || averageLineLength > 500);
}

function looksPartial(code: string): boolean {
  if (code.length < 400) {
    return false;
  }
  const stripped = stripStringsAndComments(code);
  const stack: string[] = [];
  const pairs: Record<string, string> = { ")": "(", "]": "[", "}": "{" };
  for (const char of stripped) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.at(-1) === pairs[char]) {
        stack.pop();
      }
    }
  }
  return stack.length >= 2 && /[,{([]?\s*(?:\/\/.*)?$/m.test(code.slice(-500));
}

function looksBarrel(code: string): boolean {
  const sourceLines = code
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("//"));
  const exportFrom = sourceLines.filter((line) =>
    /^export\s+(?:\{|\*)[\s\S]*\sfrom\s+['"]/.test(line)
  );
  return sourceLines.length >= 5 && exportFrom.length / sourceLines.length > 0.65;
}

function looksEntrypoint(path: string, code: string): boolean {
  const lowerPath = path.toLowerCase();
  const hasDomGlobal = /\b(window|document)\./.test(code);
  const hasBootstrap =
    /\b(hydrateRoot|createRoot|renderReactElement|register|__NEXT_DATA__)\b/.test(code);
  return hasDomGlobal && (hasBootstrap || /(^|\/)(client|main|index)\.(t|j)sx?$/.test(lowerPath));
}

function looksFrameworkRuntime(path: string, code: string): boolean {
  const lowerPath = path.toLowerCase();
  const hits = [
    "component",
    "lifecycle",
    "instance",
    "setup",
    "vnode",
    "render",
    "props",
    "slots"
  ].filter((term) => new RegExp(`\\b${term}\\b`, "i").test(code)).length;
  return hits >= 5 || /runtime-core|component/.test(lowerPath);
}

function looksPipeline(path: string, code: string): boolean {
  const lowerPath = path.toLowerCase();
  const vocabulary = ["postprocess", "transform", "rebalance", "normalize", "validate", "parse"];
  const hits = vocabulary.filter((term) => new RegExp(`\\b${term}\\b`, "i").test(code)).length;
  return hits >= 3 || /postprocess|transform|pipeline/.test(lowerPath);
}

function stripStringsAndComments(code: string): string {
  return code
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "")
    .replace(/'(?:\\.|[^'\\])*'/g, "''")
    .replace(/"(?:\\.|[^"\\])*"/g, '""')
    .replace(/`(?:\\.|[^`\\])*`/g, "``");
}

function sortDiagnostics(diagnostics: AnalysisDiagnostic[]): AnalysisDiagnostic[] {
  return diagnostics
    .filter(
      (diagnosticItem, index, all) =>
        all.findIndex((item) => item.id === diagnosticItem.id) === index
    )
    .sort((a, b) => a.code.localeCompare(b.code) || a.id.localeCompare(b.id));
}

function fnv1a(value: string): string {
  let hash = 0x811c9dc5;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
}

function byteSize(value: string): number {
  return new TextEncoder().encode(value).byteLength;
}

function languageLabel(language: AnalysisLanguage): string {
  if (language === "tsx") return "TSX/JSX";
  return language[0].toUpperCase() + language.slice(1);
}

function formatBytes(bytes: number): string {
  if (bytes < 1_000) return `${bytes}B`;
  if (bytes < 1_000_000) return `${Math.round(bytes / 1_000)}KB`;
  return `${(bytes / 1_000_000).toFixed(1)}MB`;
}
