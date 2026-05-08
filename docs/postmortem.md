# Postmortem

## What Was Built

browser-codeium v0.1.0 is a public GitHub Pages app with:

- React/Vite/TypeScript frontend built into `docs/`.
- Monaco editor with local sample workspace and folder import support where available.
- Tree-sitter WASM analysis for JavaScript, TypeScript, TSX, and JSX.
- WebGPU capability detection.
- IndexedDB workspace persistence.
- Deterministic local assistant draft panel.
- PWA manifest and service worker.
- GitHub repository link, PayPal support link, version, and commit visible in the UI.
- ADRs, local hooks, Makefile, tests, smoke test, and deployment docs.

Live URL: https://baditaflorin.github.io/browser-codeium/

Repository: https://github.com/baditaflorin/browser-codeium

## Was Mode A Correct?

Yes. Mode A was the right choice. The editor, parser, persistence, capability checks, and assistant draft all run in the browser with static assets. A runtime backend would not improve v1 enough to justify secrets, hosting, CORS, or operational work.

## What Worked

- GitHub Pages from `main /docs` made the live URL available immediately.
- Monaco and tree-sitter could be lazy-loaded so the initial non-lazy JS stayed below 200KB gzipped.
- IndexedDB was enough for local project persistence.
- Local hooks and Make targets are adequate replacements for GitHub Actions in this repo.

## What Did Not Work

- The first tree-sitter grammar package was incompatible with the current web-tree-sitter runtime and produced `need dylink section`.
- Port `4173` was already occupied on the machine, so the local preview moved to `4179`.
- Monaco worker assets are large, which is expected but worth watching.

## What Surprised Us

The compatible grammar assets came from `@vscode/tree-sitter-wasm`, while the original `tree-sitter-wasms` package built but failed at runtime.

## Accepted Tech Debt

- The assistant is deterministic and local, not a full LLM integration.
- File System Access import is read-only in v1.
- Monaco loads on the main workspace screen, so the editor payload is lazy but requested immediately after the shell renders.
- Browser storage has no cross-device sync.

## Next Improvements

1. Add optional BYO-key provider integration with clear local-only key handling.
2. Add writable File System Access handles so imported files can be saved back to disk.
3. Move tree-sitter parsing into a Web Worker for larger files.

## Time Spent vs Estimate

Estimate: 3-4 hours for a solid v0.1.0 scaffold with live Pages.

Actual: about 4 hours including repository setup, Pages configuration, tree-sitter compatibility fix, tests, docs, and smoke verification.
