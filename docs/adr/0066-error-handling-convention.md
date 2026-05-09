# 0066 - Error-Handling Convention

## Status

Accepted

## Context

Most UI flows already convert errors into a readable message and surface them through toasts, but new input/output paths will multiply failure cases.

## Decision

Keep one frontend convention:

- Validate at boundaries.
- Throw `Error` with domain-language messages when work cannot proceed.
- Use `reportError(...)` only to normalize unknown values.
- Surface recoverable problems through the existing toast system and inline import/export messaging where relevant.

## Consequences

- New import/export failures read consistently.
- The app stays honest without inventing a second error surface.

## Alternatives Considered

- Add a separate global error framework: rejected as unnecessary complexity for a static app.
