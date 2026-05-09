# 0060 - Completeness Audit Findings and Phase 3 Success Metrics

## Status

Accepted

## Context

Phase 2 made the analysis engine smarter, but the product is still incomplete around real-user input, output, persistence, and shell ergonomics.

## Decision

Use `docs/phase3/*.md` as the canonical completeness audit. Phase 3 is done only when:

- A stranger can import their own code without relying on Chromium folder APIs.
- A stranger can export and restore workspace state.
- Persisted preferences survive reload.
- README claims match tested behavior.

## Consequences

- The main usability work shifts from analysis quality to input/output and session lifecycle.
- Feature additions that are only polish remain out of scope.

## Alternatives Considered

- Treat the current app as complete enough because docs are mostly truthful: rejected because truthful docs do not solve missing user workflows.
