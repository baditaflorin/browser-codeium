import { access, readFile } from "node:fs/promises";

const required = [
  "docs/index.html",
  "docs/404.html",
  "docs/data/app-meta.json",
  "docs/data/samples.json",
  "docs/vendor/tree-sitter/web-tree-sitter.wasm",
  "docs/vendor/tree-sitter/tree-sitter-javascript.wasm"
];

for (const path of required) {
  await access(path);
}

const html = await readFile("docs/index.html", "utf8");
if (!html.includes("/browser-codeium/assets/") || !html.includes("browser-codeium")) {
  throw new Error("docs/index.html does not look like a GitHub Pages Vite build");
}
