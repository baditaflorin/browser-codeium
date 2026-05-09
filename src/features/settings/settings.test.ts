import { describe, expect, it } from "vitest";
import { defaultUserSettings, normalizeUserSettings } from "./settings";

describe("user settings", () => {
  it("fills missing values from defaults", () => {
    const settings = normalizeUserSettings({ autoAnalyze: false });
    expect(settings.autoAnalyze).toBe(false);
    expect(settings.fontSize).toBe(defaultUserSettings.fontSize);
  });
});
