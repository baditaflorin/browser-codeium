# 0009 - Configuration and Secrets Management

## Status

Accepted

## Context

GitHub Pages has no secret runtime. Frontend code must not contain application-owned secrets.

## Decision

Build-time public values use `VITE_*` environment variables. `.env.example` documents placeholders only. Real `.env` files are ignored.

The app exposes BYO-key UX boundaries for future provider integrations, but v1 does not require an app-owned provider key.

## Consequences

- No secrets are committed.
- Public version, commit, repository URL, and PayPal URL can be embedded safely.
- Secret scanning is enforced by local hooks.

## Alternatives Considered

- Encrypt secrets in frontend assets: rejected because obfuscated frontend secrets are still public.
- Runtime backend proxy: rejected by ADR 0001.
