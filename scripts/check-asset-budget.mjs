import { readdir, readFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";
import { join } from "node:path";

const budgetBytes = 200 * 1024;
const assetDir = "docs/assets";
const files = await readdir(assetDir);
let total = 0;

for (const file of files) {
  if (!file.endsWith(".js")) {
    continue;
  }
  const lazyAsset =
    file.startsWith("monaco-") ||
    file.startsWith("tree-sitter-") ||
    file.startsWith("EditorPane-") ||
    file.includes(".worker-") ||
    file.startsWith("__vite-browser-external-");

  if (lazyAsset) {
    continue;
  }

  const contents = await readFile(join(assetDir, file));
  total += gzipSync(contents).byteLength;
}

if (total > budgetBytes) {
  throw new Error(`Initial JavaScript budget exceeded: ${total} bytes gzipped`);
}

console.log(`Initial JavaScript budget: ${total} / ${budgetBytes} bytes gzipped`);
