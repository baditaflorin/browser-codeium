# 0002 - Architecture Overview and Module Boundaries

## Status

Accepted

## Context

The app needs to feel like a lightweight IDE while remaining static-hosted. The browser must own editing, parsing, local persistence, and capability detection.

## Decision

Use a feature-oriented frontend:

- `features/workspace` owns local files, samples, and persistence.
- `features/editor` owns Monaco integration and editor state.
- `features/analysis` owns tree-sitter parsing and derived code structure.
- `features/assistant` owns local coding actions and BYO-key-ready UI boundaries.
- `features/system` owns version, commit, WebGPU, and runtime capability checks.

Shared UI and utility code live under `components/` and `lib/`.

## Consequences

- Browser APIs are isolated behind feature modules.
- Tests can target pure logic without loading Monaco.
- WASM and editor code can stay lazy-loaded.

## Alternatives Considered

- Route-first layout: rejected because v1 is a single workspace screen.
- Backend-centered architecture: rejected by ADR 0001.
