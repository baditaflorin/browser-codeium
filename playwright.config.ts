import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  expect: {
    timeout: 5_000
  },
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:4173/browser-codeium/",
    trace: "on-first-retry"
  },
  webServer: process.env.PLAYWRIGHT_SKIP_SERVER
    ? undefined
    : {
        command: "npm run preview",
        url: "http://127.0.0.1:4173/browser-codeium/",
        reuseExistingServer: !process.env.CI,
        timeout: 60_000
      },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ]
});
