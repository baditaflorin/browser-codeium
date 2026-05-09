# browser-codeium

![Pages](https://img.shields.io/badge/live-GitHub%20Pages-7dd3fc)
![Mode](https://img.shields.io/badge/deployment-Mode%20A-7bd88f)
![License](https://img.shields.io/badge/license-MIT-ffd166)

Live site: https://baditaflorin.github.io/browser-codeium/

Repository: https://github.com/baditaflorin/browser-codeium

Support: https://www.paypal.com/paypalme/florinbadita

browser-codeium is a static, local-first coding workspace that brings Monaco editing, tree-sitter WASM structure, WebGPU capability checks, and a deterministic assistant draft panel to GitHub Pages.

![browser-codeium screenshot](https://raw.githubusercontent.com/baditaflorin/browser-codeium/main/docs/screenshot.png)

## Quickstart

```sh
npm install
make install-hooks
make dev
```

## What Ships

- Monaco editor with local sample workspace and File System Access folder import where the browser supports it.
- Tree-sitter analysis for JavaScript, TypeScript, TSX, and JSX using WASM grammar assets.
- IndexedDB workspace persistence, PWA shell, no analytics, no runtime backend, no app-owned secrets.
- Visible version and build commit on the live page.
- Public GitHub and PayPal links in the app header so visitors can star or support the project.

## Local Commands

```sh
make build
make test
make smoke
make lint
make pages-preview
```

## Architecture

```mermaid
C4Context
title browser-codeium context
Person(dev, "Developer", "Edits and analyzes code in the browser")
System_Boundary(pages, "GitHub Pages") {
  System(app, "browser-codeium", "Static Vite app")
}
System_Ext(github, "GitHub Repository", "Source, stars, issues")
System_Ext(paypal, "PayPal", "Optional support link")
Rel(dev, app, "Uses")
Rel(app, github, "Links to", "HTTPS")
Rel(app, paypal, "Links to", "HTTPS")
```

Architecture docs: https://github.com/baditaflorin/browser-codeium/tree/main/docs

ADRs: https://github.com/baditaflorin/browser-codeium/tree/main/docs/adr

Deployment guide: https://github.com/baditaflorin/browser-codeium/blob/main/docs/deploy.md

Phase 2 substance postmortem: https://github.com/baditaflorin/browser-codeium/blob/main/docs/postmortem-phase2-substance.md
