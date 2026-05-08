# Privacy

browser-codeium collects no analytics in v1.

Live URL: https://baditaflorin.github.io/browser-codeium/

Repository: https://github.com/baditaflorin/browser-codeium

## What Leaves the Browser

By default, only static asset requests leave the browser:

- HTML, CSS, JavaScript, WASM, JSON, and image assets from GitHub Pages.
- User clicks on external links such as GitHub or PayPal.

## What Stays Local

- Workspace files loaded into the app.
- Edited file contents.
- IndexedDB workspace snapshots.
- UI state.

## Analytics

No analytics script is included. No usage beacon is sent. No PII is collected by this app.

## Future BYO-Key Integrations

If provider integrations are added later, API keys must be user-supplied and stored locally by the user. The frontend must not contain app-owned secrets.
