# 0015 - Deployment Topology

## Status

Accepted

## Context

ADR 0001 selects Mode A.

## Decision

Deploy only through GitHub Pages at `https://baditaflorin.github.io/browser-codeium/`.

No Docker Compose, nginx, backend server, TLS termination config, or Prometheus deployment is included in v1.

## Consequences

- Deployment is a git push.
- Rollback is a git revert of the Pages build commit.
- Runtime backend scale and maintenance are not concerns.

## Alternatives Considered

- Docker backend on port 25342: rejected because v1 has no runtime API.
