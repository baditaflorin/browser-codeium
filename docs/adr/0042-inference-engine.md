# 0042 - Inference Engine

## Status

Accepted

## Context

The v1 engine extracts symbols but does not infer file shape or domain meaning.

## Decision

Introduce analysis schema v2 with these inferred concepts:

- Language family.
- File shape: normal module, barrel, entrypoint, pipeline, minified bundle, huge file, partial file, empty file, unsupported language.
- Confidence score and reasons.
- Stable IDs for symbols and diagnostics.
- Provenance metadata with source hash, app version, schema version, and parameters.

## Consequences

- UI and assistant can adapt to analysis quality.
- Tests can assert deterministic analysis properties.
- Heuristics must be documented and conservative.

## Alternatives Considered

- Add more regexes only: rejected because it would still produce flat, overconfident output.
