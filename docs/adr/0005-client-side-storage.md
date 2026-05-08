# 0005 - Client-Side Storage Strategy

## Status

Accepted

## Context

Users need local persistence for the current project, editor contents, preferences, and optional user-supplied provider settings.

## Decision

Use IndexedDB for project files and workspace state. Use `localStorage` only for small non-sensitive UI preferences.

V1 does not store app-owned secrets. Optional user-supplied API keys are treated as user-local settings and are never transmitted except to the provider endpoint the user chooses.

## Consequences

- The app works offline after first load.
- Large project sync and collaboration are not available in v1.
- Storage failures surface as UI errors with recovery actions.

## Alternatives Considered

- OPFS: deferred because IndexedDB has broader library support and easier testing.
- Server database: rejected by ADR 0001.
