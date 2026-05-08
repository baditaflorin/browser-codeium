# 0004 - Static Data Contract

## Status

Accepted

## Context

Mode A does not use a backend or scheduled data pipeline. The app still needs stable static metadata for version display, sample workspace loading, and Pages diagnostics.

## Decision

Ship static JSON from `public/data/` and copy it into `docs/data/` during build.

Current contract:

- `data/app-meta.json`
- `data/samples.json`

All files include a `schemaVersion` field. Breaking contract changes move to a new versioned path such as `data/v2/`.

## Consequences

- The frontend can fetch metadata through ordinary `fetch`.
- Data is small and committed with the Pages build.
- No release-hosted artifacts are required in v1.

## Alternatives Considered

- GitHub Release artifacts: rejected because v1 data is tiny.
- Runtime API: rejected by ADR 0001.
