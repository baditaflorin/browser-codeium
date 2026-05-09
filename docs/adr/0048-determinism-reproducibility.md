# 0048 - Determinism and Reproducibility

## Status

Accepted

## Context

Analysis must be testable and reproducible.

## Decision

Analysis output is deterministic for identical input:

- Stable IDs use deterministic hashes.
- Results are sorted by source position and ID.
- No timestamps appear in core analysis JSON.
- Provenance includes source hash, app version, schema version, path, and parameters.

## Consequences

- Fixture tests can compare byte-identical JSON.
- Re-running analysis on the same file is safe.

## Alternatives Considered

- Include generation timestamps in analysis output: rejected because it breaks deterministic tests.
