# 0049 - Inspectability and Debug Surface

## Status

Accepted

## Context

Power users and maintainers need to inspect confidence, file shape, diagnostics, and performance marks.

## Decision

Add a `?debug=1` mode that shows analysis internals inside the existing runtime panel. This does not add a new workflow or page.

## Consequences

- Debug data helps support real-world failures.
- Normal users do not see internal fields by default.

## Alternatives Considered

- Always show full JSON: rejected because it would clutter the existing surface.
