# 0012 - Metrics and Observability

## Status

Accepted

## Context

The default for Mode A and Mode B is no analytics unless usage insight is worth the privacy cost.

## Decision

Ship v1 with no analytics.

The UI displays local diagnostics only: version, commit, storage status, parser status, and WebGPU support.

## Consequences

- No PII or usage telemetry is collected.
- Product decisions rely on GitHub stars, issues, and direct user feedback.

## Alternatives Considered

- Plausible analytics: deferred until there is an explicit need and privacy notice.
- Custom beacon endpoint: rejected because it would create a backend.
