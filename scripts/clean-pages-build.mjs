import { rm } from "node:fs/promises";

const generatedPaths = [
  "docs/assets",
  "docs/data",
  "docs/vendor",
  "docs/index.html",
  "docs/404.html",
  "docs/icon.svg",
  "docs/manifest.webmanifest",
  "docs/sw.js"
];

await Promise.all(
  generatedPaths.map((path) => rm(path, { recursive: true, force: true }).catch(() => undefined))
);
