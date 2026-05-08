import { assetUrl } from "@/lib/baseUrl";
import { Parser, Language, type Node } from "web-tree-sitter";
import { analyzeWithFallback } from "./fallback";
import type { CodeAnalysis, CodeSymbol, SymbolKind } from "./types";

let initPromise: Promise<void> | undefined;
const languageCache = new Map<string, Promise<Language>>();

export async function analyzeSource(code: string, path: string): Promise<CodeAnalysis> {
  if (!isTreeSitterCandidate(path)) {
    return analyzeWithFallback(code, path, [
      "Tree-sitter is enabled for JavaScript and TypeScript files in v1."
    ]);
  }

  try {
    return await analyzeWithTreeSitter(code, path);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return analyzeWithFallback(code, path, [
      `Tree-sitter unavailable, used fallback analysis: ${message}`
    ]);
  }
}

async function analyzeWithTreeSitter(code: string, path: string): Promise<CodeAnalysis> {
  const started = performance.now();
  await ensureTreeSitter();

  const parser = new Parser();
  parser.setLanguage(await loadLanguage(path));
  const tree = parser.parse(code);
  parser.delete();

  if (!tree) {
    throw new Error("Parser returned no syntax tree");
  }

  const symbols: CodeSymbol[] = [];
  const imports: string[] = [];
  const exports: string[] = [];
  walk(tree.rootNode, symbols, imports, exports);

  const analysis: CodeAnalysis = {
    engine: "tree-sitter",
    language: languageName(path),
    rootType: tree.rootNode.type,
    parseMs: Math.round(performance.now() - started),
    hasSyntaxErrors: tree.rootNode.hasError,
    symbols: symbols.slice(0, 60),
    imports: imports.slice(0, 20),
    exports: exports.slice(0, 20),
    diagnostics: tree.rootNode.hasError ? ["Tree-sitter parsed the file with syntax errors."] : []
  };

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

function languageName(path: string): CodeAnalysis["language"] {
  const lower = path.toLowerCase();
  if (lower.endsWith(".tsx") || lower.endsWith(".jsx")) return "tsx";
  if (lower.endsWith(".ts")) return "typescript";
  return "javascript";
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
  return {
    name,
    kind,
    line: node.startPosition.row + 1,
    column: node.startPosition.column + 1,
    preview: oneLine(node.text)
  };
}

function oneLine(text: string): string {
  return text.replace(/\s+/g, " ").trim().slice(0, 140);
}
