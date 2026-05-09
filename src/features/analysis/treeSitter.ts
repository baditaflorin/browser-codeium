import { assetUrl } from "@/lib/baseUrl";
import { Parser, Language, type Node } from "web-tree-sitter";
import { analyzeWithFallback } from "./fallback";
import {
  createLightweightAnalysis,
  diagnostic,
  finalizeAnalysis,
  makeSymbol,
  prepareAnalysisInput,
  type PreparedAnalysisInput
} from "./substance";
import type { CodeAnalysis, CodeSymbol, SymbolKind } from "./types";

let initPromise: Promise<void> | undefined;
const languageCache = new Map<string, Promise<Language>>();

export interface AnalyzeSourceOptions {
  signal?: AbortSignal;
}

export async function analyzeSource(
  code: string,
  path: string,
  options: AnalyzeSourceOptions = {}
): Promise<CodeAnalysis> {
  const prepared = prepareAnalysisInput(code, path);
  throwIfAborted(options.signal);

  if (!prepared.shouldDeepParse || !isTreeSitterCandidate(path)) {
    return createLightweightAnalysis(prepared, 0);
  }

  try {
    return await analyzeWithTreeSitter(prepared, options);
  } catch (error) {
    throwIfAborted(options.signal);
    const message = error instanceof Error ? error.message : String(error);
    return analyzeWithFallback(
      prepared.originalCode,
      path,
      [
        diagnostic(
          "parser.fallback",
          "warning",
          "Tree-sitter could not complete this analysis.",
          message,
          "The app used a deterministic fallback outline. Treat the result as lower confidence."
        )
      ],
      prepared
    );
  }
}

async function analyzeWithTreeSitter(
  prepared: PreparedAnalysisInput,
  options: AnalyzeSourceOptions
): Promise<CodeAnalysis> {
  const started = performance.now();
  await ensureTreeSitter();
  throwIfAborted(options.signal);

  const parser = new Parser();
  parser.setLanguage(await loadLanguage(prepared.path));
  const tree = parser.parse(prepared.code);
  parser.delete();
  throwIfAborted(options.signal);

  if (!tree) {
    throw new Error("Parser returned no syntax tree");
  }

  const symbols: CodeSymbol[] = [];
  const imports: string[] = [];
  const exports: string[] = [];
  walk(tree.rootNode, symbols, imports, exports);

  const hasSyntaxErrors = tree.rootNode.hasError || prepared.fileShape === "partial-input";
  const diagnostics = hasSyntaxErrors
    ? [
        ...prepared.diagnostics,
        diagnostic(
          "parser.syntax-error",
          "warning",
          "Tree-sitter found syntax errors.",
          "The source may be incomplete, malformed, or using syntax this parser cannot fully recover from.",
          "Inspect the first syntax-error line and rerun analysis after fixing or completing the file."
        )
      ]
    : prepared.diagnostics;

  const analysis: CodeAnalysis = finalizeAnalysis(
    {
      schemaVersion: 2,
      engine: "tree-sitter",
      language: prepared.language,
      fileShape: prepared.fileShape,
      rootType: tree.rootNode.type,
      parseMs: Math.round(performance.now() - started),
      hasSyntaxErrors,
      confidence: prepared.confidence,
      symbols: symbols.slice(0, 80),
      imports: imports.slice(0, 30),
      exports: exports.slice(0, 30),
      diagnostics,
      anomalies: prepared.anomalies,
      explanation: prepared.explanation,
      provenance: prepared.provenance
    },
    prepared
  );

  tree.delete();
  return analysis;
}

function ensureTreeSitter(): Promise<void> {
  initPromise ??= Parser.init({
    locateFile(fileName: string) {
      return assetUrl(`vendor/tree-sitter/${fileName}`);
    }
  });
  return initPromise;
}

function loadLanguage(path: string): Promise<Language> {
  const grammar = grammarFile(path);
  const cached = languageCache.get(grammar);
  if (cached) {
    return cached;
  }

  const promise = Language.load(assetUrl(`vendor/tree-sitter/${grammar}`));
  languageCache.set(grammar, promise);
  return promise;
}

function grammarFile(path: string): string {
  const lower = path.toLowerCase();
  if (lower.endsWith(".tsx") || lower.endsWith(".jsx")) return "tree-sitter-tsx.wasm";
  if (lower.endsWith(".ts")) return "tree-sitter-typescript.wasm";
  return "tree-sitter-javascript.wasm";
}

function isTreeSitterCandidate(path: string): boolean {
  return /\.(cjs|js|jsx|mjs|ts|tsx)$/i.test(path);
}

function walk(node: Node, symbols: CodeSymbol[], imports: string[], exports: string[]): void {
  collectNode(node, symbols, imports, exports);
  for (const child of node.namedChildren) {
    walk(child, symbols, imports, exports);
  }
}

function collectNode(
  node: Node,
  symbols: CodeSymbol[],
  imports: string[],
  exports: string[]
): void {
  if (node.type === "import_statement") {
    imports.push(oneLine(node.text));
    symbols.push(toSymbol("import", "import", node));
    return;
  }

  if (node.type === "export_statement") {
    exports.push(oneLine(node.text));
    symbols.push(toSymbol("export", "export", node));
  }

  const name = node.childForFieldName("name")?.text;
  if (!name) {
    if (node.type === "variable_declarator") {
      const declaratorName = node.childForFieldName("name")?.text ?? node.namedChild(0)?.text;
      if (declaratorName) {
        symbols.push(toSymbol(declaratorName, "variable", node));
      }
    }
    return;
  }

  const kind = symbolKindForNode(node.type);
  if (kind) {
    symbols.push(toSymbol(name, kind, node));
  }
}

function symbolKindForNode(type: string): SymbolKind | null {
  switch (type) {
    case "class_declaration":
      return "class";
    case "function_declaration":
    case "generator_function_declaration":
      return "function";
    case "method_definition":
    case "public_field_definition":
      return "method";
    case "interface_declaration":
      return "interface";
    case "type_alias_declaration":
      return "type";
    default:
      return null;
  }
}

function toSymbol(name: string, kind: SymbolKind, node: Node): CodeSymbol {
  return makeSymbol(
    name,
    kind,
    node.startPosition.row + 1,
    node.startPosition.column + 1,
    oneLine(node.text),
    {
      score: 0.82,
      label: "high",
      reasons: ["Tree-sitter returned a named syntax node."]
    }
  );
}

function oneLine(text: string): string {
  return text.replace(/\s+/g, " ").trim().slice(0, 140);
}

function throwIfAborted(signal?: AbortSignal): void {
  if (signal?.aborted) {
    throw new DOMException("Analysis cancelled", "AbortError");
  }
}
