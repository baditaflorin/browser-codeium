# 0001 - Deployment Mode

## Status

Accepted

## Context

browser-codeium must ship as a public GitHub Pages app first. The core features are an in-browser editor, code structure analysis, local storage, and optional user-supplied AI configuration. None of those require application-owned secrets or server-side mutation in v1.

## Decision

Use Mode A: Pure GitHub Pages.

The frontend is a static Vite application built into `docs/`. Monaco runs in the browser. Tree-sitter runs through WASM loaded as static assets. WebGPU is detected and used only when the browser supports it. User projects and preferences stay in browser storage.

No runtime backend, Docker service, nginx deployment, or server metrics are part of v1.

## Consequences

- The public surface is static and easy to host.
- The app cannot provide cross-device sync in v1.
- Any external AI provider integration must use a BYO-key flow stored locally by the user.
- GitHub Pages limitations shape routing, service worker scope, and cache strategy.

## Alternatives Considered

- Mode B: rejected because v1 has no offline data pipeline.
- Mode C: rejected because auth, server-side storage, and runtime secrets are non-goals.
