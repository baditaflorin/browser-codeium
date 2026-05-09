# Phase 3 Feature Claims Audit

Date: 2026-05-09

Product: browser-codeium v0.3.0

## Status Grid

| Claim                                            | Source | Status        | Notes                                                             |
| ------------------------------------------------ | ------ | ------------- | ----------------------------------------------------------------- |
| Monaco editor                                    | README | shipped fully | Present and functional.                                           |
| Import your own files without Chromium-only APIs | README | shipped fully | Standard file input, drag/drop, paste, and clipboard paths exist. |
| Chromium folder import where browser supports it | README | shipped fully | Still supported, now as one path among several.                   |
| Tree-sitter analysis for JS/TS/TSX/JSX           | README | shipped fully | Matches the current product boundary.                             |
| Workspace state export/import                    | README | shipped fully | Present and covered by tests.                                     |
| Small-workspace share links                      | README | shipped fully | Present with a documented payload limit.                          |
| Persisted settings and session restore           | README | shipped fully | Present and covered by the stranger flow.                         |
| IndexedDB and localStorage persistence           | README | shipped fully | Matches implementation.                                           |
| PWA shell                                        | README | shipped fully | Shell assets are installable and cached.                          |
| Visible version and build commit                 | README | shipped fully | Present in UI.                                                    |
| Public GitHub and PayPal links                   | README | shipped fully | Present in header.                                                |
| Deterministic local coding draft                 | UI     | shipped fully | Present; future-provider language has been removed.               |

## Notes

- README now includes a verified feature checklist and explicit limitations.
- No README claim is left without a real path in the product.
