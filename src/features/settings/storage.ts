import { defaultUserSettings, normalizeUserSettings, type UserSettings } from "./settings";
import { getBrowserDb } from "@/features/persistence/browserDb";

const settingsStorageKey = "browser-codeium:settings";

export async function loadUserSettings(): Promise<UserSettings> {
  const localValue = window.localStorage.getItem(settingsStorageKey);
  if (localValue) {
    return normalizeUserSettings(JSON.parse(localValue) as unknown);
  }

  const db = await getBrowserDb();
  const value = await db.get("settings", "current");
  return value ? normalizeUserSettings(value) : defaultUserSettings;
}

export async function saveUserSettings(settings: UserSettings): Promise<void> {
  window.localStorage.setItem(settingsStorageKey, JSON.stringify(settings));
  const db = await getBrowserDb();
  await db.put("settings", settings, "current");
}

export async function clearUserSettings(): Promise<void> {
  window.localStorage.removeItem(settingsStorageKey);
  const db = await getBrowserDb();
  await db.delete("settings", "current");
}
