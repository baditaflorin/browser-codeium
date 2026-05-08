# 0011 - Logging Strategy

## Status

Accepted

## Context

Mode A has no server logs. Browser console output should stay minimal in production.

## Decision

Use user-visible error states and a small local logger wrapper. Production builds do not emit routine console logs. Unexpected errors may be logged with sanitized messages during development.

## Consequences

- The app avoids noisy production console output.
- Debugging relies on reproducible UI states and browser devtools.

## Alternatives Considered

- Remote log collection: rejected because v1 has no analytics or backend.
