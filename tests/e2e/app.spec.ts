import { expect, test, type Page } from "@playwright/test";

function activeFileHeading(page: Page) {
  return page.locator("main > section").getByRole("heading");
}

test("loads the IDE shell and runs a happy path", async ({ page }) => {
  const browserErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") {
      browserErrors.push(message.text());
    }
  });
  page.on("pageerror", (error) => browserErrors.push(error.message));
  await page.route(
    "https://api.github.com/repos/baditaflorin/browser-codeium/commits/main",
    (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ sha: "6446ca6f00000000000000000000000000000000" })
      })
  );

  await page.goto(process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:4179/browser-codeium/");

  await expect(page.getByRole("heading", { name: "browser-codeium" })).toBeVisible();
  await expect(page.getByRole("link", { name: /GitHub/i })).toHaveAttribute(
    "href",
    "https://github.com/baditaflorin/browser-codeium"
  );
  await expect(page.getByRole("link", { name: /PayPal/i })).toHaveAttribute(
    "href",
    "https://www.paypal.com/paypalme/florinbadita"
  );
  await expect(page.getByText("Version: v0.3.0")).toBeVisible();
  await expect(page.getByText(/Commit: (main|[a-f0-9]{7})/)).toBeVisible();
  await expect(activeFileHeading(page)).toHaveText("src/example.ts");

  await page
    .getByRole("button", { name: "Analyze", exact: true })
    .click({ timeout: 1000 })
    .catch(() => {});
  await expect(page.getByText("tree-sitter", { exact: true })).toBeVisible({ timeout: 15_000 });

  await page.getByRole("button", { name: "Generate local assistant draft" }).click();
  await expect(page.getByText(/Local draft for/)).toBeVisible();
  expect(browserErrors).toEqual([]);
});

test("supports a stranger workflow for import export restore share and settings", async ({
  page,
  context,
  browserName
}) => {
  test.skip(browserName !== "chromium", "Clipboard permissions are only exercised in Chromium.");

  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.route(
    "https://api.github.com/repos/baditaflorin/browser-codeium/commits/main",
    (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ sha: "fc7ebb5000000000000000000000000000000000" })
      })
  );

  await page.goto(process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:4179/browser-codeium/");

  await page
    .locator('input[type="file"]')
    .first()
    .setInputFiles([
      {
        name: "notes.ts",
        mimeType: "text/plain",
        buffer: Buffer.from("export function greet(name: string) {\n  return `hi ${name}`;\n}\n")
      }
    ]);

  await expect(activeFileHeading(page)).toHaveText("notes.ts");
  await expect(page.getByText("tree-sitter", { exact: true })).toBeVisible({ timeout: 15_000 });

  const stateDownload = page.waitForEvent("download");
  await page.getByRole("button", { name: "State", exact: true }).click();
  const downloadedState = await stateDownload;
  const statePath = await downloadedState.path();
  expect(statePath).toBeTruthy();

  await page.getByLabel("Word wrap").selectOption("off");
  await page.reload();
  await expect(activeFileHeading(page)).toHaveText("notes.ts");
  await expect(page.getByLabel("Word wrap")).toHaveValue("off");

  await page.getByRole("button", { name: "Share", exact: true }).click();
  const sharedUrl = await page.evaluate(() => navigator.clipboard.readText());
  expect(sharedUrl).toContain("#workspace=");

  await page.getByRole("button", { name: "Fresh", exact: true }).click();
  await expect(activeFileHeading(page)).toHaveText("untitled.ts");

  await page
    .locator('input[type="file"]')
    .nth(1)
    .setInputFiles(statePath ?? "");
  await expect(activeFileHeading(page)).toHaveText("notes.ts");

  await page.goto(sharedUrl);
  await expect(activeFileHeading(page)).toHaveText("notes.ts");
});
