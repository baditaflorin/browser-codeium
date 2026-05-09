# 0043 - Domain Vocabulary and UI Language

## Status

Accepted

## Context

V1 speaks in implementation terms such as parser status and generic diagnostics.

## Decision

Use code-domain vocabulary:

- "Barrel file" for mostly re-export modules.
- "Entrypoint" for bootstrap/client files.
- "Transformation pipeline" for staged parse/transform/postprocess modules.
- "Minified bundle" for compressed production assets.
- "Unsupported language" for files that open but cannot be deeply parsed.
- "Partial input" for likely truncated code.

## Consequences

- Diagnostics become more understandable.
- Confidence explanations are tied to recognizable code shapes.

## Alternatives Considered

- Keep parser-centric names: rejected because users care what kind of file it is, not which heuristic fired.
