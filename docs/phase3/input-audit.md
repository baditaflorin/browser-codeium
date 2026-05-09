# Phase 3 Input Audit

Date: 2026-05-09

Product: browser-codeium v0.3.0

## Status Grid

| Input path              | Status       | Notes                                                                      |
| ----------------------- | ------------ | -------------------------------------------------------------------------- |
| Sample/demo loader      | works fully  | Loads the bundled sample workspace.                                        |
| Restored autosave       | works fully  | Restores the last saved workspace when the setting is enabled.             |
| Folder picker           | works fully  | Chromium-only by platform, with honest copy and a non-Chromium path.       |
| Multi-file import       | works fully  | Standard file input supports batch import.                                 |
| Single-file upload      | works fully  | Standard file input imports one file cleanly.                              |
| Drag and drop           | works fully  | Dropped files import into a fresh workspace.                               |
| Paste text              | works fully  | Inline file-path plus content form creates a workspace from pasted code.   |
| Clipboard read          | works fully  | Clipboard text can be imported into a named file with browser permissions. |
| URL input               | out of scope | Explicitly cut in ADR 0063 for Mode A honesty around CORS.                 |
| Mobile picker           | works fully  | Standard file input provides the browser-native mobile picker path.        |
| Imported state file     | works fully  | Versioned JSON workspace snapshots can be restored from file input.        |
| Deep link state restore | works fully  | Small workspace snapshots can round-trip through the URL hash.             |

## Before vs After

- Before: 3 green, 2 yellow, 7 red.
- After: 10 green, 0 yellow, 1 out of scope.

## Notes

- A stranger no longer needs Chromium folder APIs to bring code into the app.
- The one intentionally missing input path is remote URL fetch, which would over-promise what a static GitHub Pages app can do reliably.
