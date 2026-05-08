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
  ["node_modules/@vscode/tree-sitter-wasm/wasm/tree-sitter-tsx.wasm", "tree-sitter-tsx.wasm"]
];

await mkdir(targetDir, { recursive: true });

for (const [source, fileName] of assets) {
  if (!existsSync(source)) {
    throw new Error(`Missing tree-sitter asset: ${source}`);
  }
  await cp(source, join(targetDir, fileName));
}
