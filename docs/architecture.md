# Architecture

browser-codeium is Mode A: Pure GitHub Pages. The runtime is a static Vite application served from the `main` branch `docs/` directory.

Live URL: https://baditaflorin.github.io/browser-codeium/

Repository: https://github.com/baditaflorin/browser-codeium

## Context

```mermaid
C4Context
title browser-codeium context
Person(dev, "Developer", "Uses a browser-native coding workspace")
System_Boundary(pages, "GitHub Pages Boundary") {
  System(app, "browser-codeium", "Static React/Vite app")
}
System_Ext(github, "GitHub", "Repository, stars, issues")
System_Ext(paypal, "PayPal", "Optional support link")
Rel(dev, app, "Loads and uses", "HTTPS")
Rel(app, github, "Links to repository", "HTTPS")
Rel(app, paypal, "Links to PayPal", "HTTPS")
```

## Containers

```mermaid
C4Container
title browser-codeium containers
Person(dev, "Developer")
System_Boundary(pages, "GitHub Pages") {
  Container(shell, "App shell", "React + TypeScript", "Workspace UI, panels, error states")
  Container(editor, "Editor", "Monaco", "Code editing and language workers")
  Container(parser, "Analysis", "web-tree-sitter + WASM grammars", "Syntax tree and symbol outline")
  Container(storage, "Browser storage", "IndexedDB", "Local workspace persistence")
  Container(staticData, "Static data", "JSON", "App metadata and sample workspace")
}
Rel(dev, shell, "Uses")
Rel(shell, editor, "Lazy-loads")
Rel(shell, parser, "Runs analysis")
Rel(shell, storage, "Saves and loads")
Rel(shell, staticData, "Fetches")
```

## Module Boundaries

- `src/features/workspace/` owns local files, samples, folder import, and IndexedDB persistence.
- `src/features/editor/` owns Monaco integration and workers.
- `src/features/analysis/` owns tree-sitter loading and fallback analysis.
- `src/features/assistant/` owns deterministic local assistant drafts.
- `src/features/system/` owns WebGPU checks and runtime diagnostics.
- `src/components/` owns shared UI surfaces.

## Pages Boundary

GitHub Pages serves static files only. There is no runtime server, no runtime database, no nginx layer, and no Docker image in v1. Service worker scope is `/browser-codeium/`.
