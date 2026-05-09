import { z } from "zod";

export const userSettingsSchema = z.object({
  schemaVersion: z.literal(1),
  autoAnalyze: z.boolean(),
  restoreLastSession: z.boolean(),
  wordWrap: z.enum(["on", "off"]),
  fontSize: z.number().int().min(12).max(20)
});

export type UserSettings = z.infer<typeof userSettingsSchema>;

export const defaultUserSettings: UserSettings = {
  schemaVersion: 1,
  autoAnalyze: true,
  restoreLastSession: true,
  wordWrap: "on",
  fontSize: 14
};

export function normalizeUserSettings(value: unknown): UserSettings {
  if (!value || typeof value !== "object") {
    return defaultUserSettings;
  }

  return userSettingsSchema.parse({
    ...defaultUserSettings,
    ...value
  });
}
