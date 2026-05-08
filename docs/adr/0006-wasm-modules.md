# 0006 - WASM Modules

## Status

Accepted

## Context

The app needs robust source parsing without shipping a custom parser. Tree-sitter is the production-ready choice for syntax trees.

## Decision

Use `web-tree-sitter` plus prebuilt language WASM assets from `tree-sitter-wasms`. V1 loads JavaScript and TypeScript-capable parsing through the JavaScript grammar.

WASM is lazy-loaded when analysis is requested. Because GitHub Pages cannot set COOP/COEP headers, the app avoids WASM flows that require `SharedArrayBuffer`.

## Consequences

- Parser work stays client-side.
- Initial load is not blocked by parser assets.
- Some high-performance WASM features remain unavailable on GitHub Pages.

## Alternatives Considered

- Regex-based symbol extraction: rejected as too brittle.
- Server-side parsing: rejected by ADR 0001.
