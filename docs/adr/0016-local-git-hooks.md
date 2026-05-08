# 0016 - Local Git Hooks

## Status

Accepted

## Context

The project must avoid GitHub Actions and keep quality checks local.

## Decision

Use plain `.githooks/` scripts wired by `make install-hooks`.

Hooks:

- `pre-commit`: formatting check, lint, typecheck, gitleaks.
- `commit-msg`: Conventional Commits validation.
- `pre-push`: tests, build, Pages output validation, smoke.
- `post-merge` and `post-checkout`: dependency/install hints.

## Consequences

- Contributors can inspect hooks without installing a hook framework.
- Hook behavior is reproducible through Make targets.

## Alternatives Considered

- Lefthook: rejected to reduce one more tool dependency.
