import { expect, test } from "@playwright/test";

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
  await expect(page.getByText("Version: v0.1.0")).toBeVisible();
  await expect(page.getByText(/Commit: (main|[a-f0-9]{7})/)).toBeVisible();

  await page.getByRole("button", { name: "Analyze", exact: true }).click();
  await expect(page.getByText("tree-sitter", { exact: true })).toBeVisible({ timeout: 15_000 });

  await page.getByRole("button", { name: "Generate local assistant draft" }).click();
  await expect(page.getByText(/Local draft for/)).toBeVisible();
  expect(browserErrors).toEqual([]);
});
