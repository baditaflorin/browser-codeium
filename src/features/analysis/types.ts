export type SymbolKind =
  | "class"
  | "function"
  | "method"
  | "variable"
  | "type"
  | "interface"
  | "import"
  | "export";

export type AnalysisEngine = "tree-sitter" | "fallback" | "lightweight" | "unsupported";

export type AnalysisLanguage =
  | "javascript"
  | "typescript"
  | "tsx"
  | "python"
  | "go"
  | "rust"
  | "markdown"
  | "json"
  | "text";

export type FileShape =
  | "normal-module"
  | "entrypoint"
  | "framework-runtime"
  | "pipeline"
  | "barrel-file"
  | "minified-bundle"
  | "huge-file"
  | "partial-input"
  | "empty-file"
  | "unsupported-language";

export type ConfidenceLabel = "high" | "medium" | "low";

export interface Confidence {
  score: number;
  label: ConfidenceLabel;
  reasons: string[];
}

export interface AnalysisDiagnostic {
  id: string;
  code: string;
  severity: "info" | "warning" | "error";
  what: string;
  why: string;
  nowWhat: string;
  line?: number;
}

export interface AnalysisProvenance {
  schemaVersion: 2;
  appVersion: string;
  sourceHash: string;
  path: string;
  parameters: {
    maxDeepBytes: number;
    maxImportBytes: number;
    normalizedLineEndings: boolean;
  };
}

export interface CodeSymbol {
  id: string;
  name: string;
  kind: SymbolKind;
  line: number;
  column: number;
  preview: string;
  confidence: Confidence;
}

export interface CodeAnalysis {
  schemaVersion: 2;
  engine: AnalysisEngine;
  language: AnalysisLanguage;
  fileShape: FileShape;
  rootType: string;
  parseMs: number;
  hasSyntaxErrors: boolean;
  confidence: Confidence;
  symbols: CodeSymbol[];
  imports: string[];
  exports: string[];
  diagnostics: AnalysisDiagnostic[];
  anomalies: string[];
  explanation: string[];
  provenance: AnalysisProvenance;
}
