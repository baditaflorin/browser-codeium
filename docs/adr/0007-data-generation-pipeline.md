# 0007 - Data Generation Pipeline

## Status

Accepted

## Context

Mode B pipelines are not needed because the project does not transform external datasets.

## Decision

Do not include a Go or scheduled data-generation pipeline in v1.

Static metadata is maintained manually in `public/data/` and validated by frontend tests.

## Consequences

- `make data` is a no-op that validates static data.
- There are no generated data artifacts beyond the Vite Pages build.

## Alternatives Considered

- Add a Go generator anyway: rejected because it adds operational surface without value.
