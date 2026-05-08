export type SymbolKind =
  | "class"
  | "function"
  | "method"
  | "variable"
  | "type"
  | "interface"
  | "import"
  | "export";

export interface CodeSymbol {
  name: string;
  kind: SymbolKind;
  line: number;
  column: number;
  preview: string;
}

export interface CodeAnalysis {
  engine: "tree-sitter" | "fallback";
  language: "javascript" | "typescript" | "tsx" | "text";
  rootType: string;
  parseMs: number;
  hasSyntaxErrors: boolean;
  symbols: CodeSymbol[];
  imports: string[];
  exports: string[];
  diagnostics: string[];
}
