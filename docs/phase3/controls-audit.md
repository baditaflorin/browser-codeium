# Phase 3 Controls Audit

Date: 2026-05-09

Product: browser-codeium v0.3.0

## Status Grid

| Control                          | Status      | Notes                                                                       |
| -------------------------------- | ----------- | --------------------------------------------------------------------------- |
| `Files`                          | works fully | Imports one or many files.                                                  |
| `Folder`                         | works fully | Chromium-only browser capability, with fallback guidance in the same panel. |
| `Sample`                         | works fully | Loads the bundled sample workspace.                                         |
| `Fresh`                          | works fully | Clears persisted state and starts from `untitled.ts`.                       |
| `Save`                           | works fully | Saves the current workspace.                                                |
| `State`                          | works fully | Exports a versioned workspace snapshot.                                     |
| `Restore`                        | works fully | Imports a saved snapshot.                                                   |
| `Share`                          | works fully | Copies a shareable URL when the workspace fits the payload limit.           |
| `Paste a file` actions           | works fully | Imports from inline text or clipboard.                                      |
| File list buttons                | works fully | Switches active file.                                                       |
| `Copy file`                      | works fully | Copies the current file content.                                            |
| `Download file`                  | works fully | Downloads the current file.                                                 |
| `Analyze` / `Cancel`             | works fully | Runs or cancels analysis.                                                   |
| Analysis panel action            | works fully | Mirrors the main analyze control.                                           |
| `Generate local assistant draft` | works fully | Produces a deterministic draft.                                             |
| `Copy draft`                     | works fully | Copies the current draft.                                                   |
| Settings controls                | works fully | Persist across reload, including immediate reload.                          |
| `Check WebGPU`                   | works fully | Refreshes capability status.                                                |
| Toast dismiss                    | works fully | Removes the current toast.                                                  |
| `GitHub` / `PayPal` links        | works fully | Open the public repository and support link.                                |
| Commit/version link              | works fully | Opens commit history while still showing the build identifier.              |

## Notes

- No visible production control is a stub.
- The reset semantics are now explicit: `Fresh` means genuinely fresh.
