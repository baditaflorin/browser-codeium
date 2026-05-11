import { cp, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const targetDir = "public/vendor/tree-sitter";
const assets = [
  ["node_modules/web-tree-sitter/web-tree-sitter.wasm", "web-tree-sitter.wasm"],
  [
    "node_modules/@vscode/tree-sitter-wasm/wasm/tree-sitter-javascript.wasm",
    "tree-sitter-javascript.wasm"
  ],
  [
    "node_modules/@vscode/tree-sitter-wasm/wasm/tree-sitter-typescript.wasm",
    "tree-sitter-typescript.wasm"
  ],
  ["node_modules/@vscode/tree-sitter-wasm/wasm/tree-sitter-tsx.wasm", "tree-sitter-tsx.wasm"],
  // Broaden tree-sitter beyond JS/TS so Python, Go, and Rust files get
  // a real structural pass instead of falling through to the regex-based
  // fallback analyser. The .wasm grammars ship in
  // @vscode/tree-sitter-wasm; copying them is a few hundred KB of
  // build-time work that turns "unsupported" into a real outline.
  ["node_modules/@vscode/tree-sitter-wasm/wasm/tree-sitter-python.wasm", "tree-sitter-python.wasm"],
  ["node_modules/@vscode/tree-sitter-wasm/wasm/tree-sitter-go.wasm", "tree-sitter-go.wasm"],
  ["node_modules/@vscode/tree-sitter-wasm/wasm/tree-sitter-rust.wasm", "tree-sitter-rust.wasm"]
];

await mkdir(targetDir, { recursive: true });

for (const [source, fileName] of assets) {
  if (!existsSync(source)) {
    throw new Error(`Missing tree-sitter asset: ${source}`);
  }
  await cp(source, join(targetDir, fileName));
}
