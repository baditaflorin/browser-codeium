import { openDB, type DBSchema, type IDBPDatabase } from "idb";
import type { UserSettings } from "@/features/settings/settings";
import type { Workspace } from "@/features/workspace/workspace";

interface BrowserCodeiumDb extends DBSchema {
  workspaces: {
    key: "current";
    value: Workspace;
  };
  settings: {
    key: "current";
    value: UserSettings;
  };
}

let dbPromise: Promise<IDBPDatabase<BrowserCodeiumDb>> | undefined;

export function getBrowserDb(): Promise<IDBPDatabase<BrowserCodeiumDb>> {
  dbPromise ??= openDB<BrowserCodeiumDb>("browser-codeium", 2, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("workspaces")) {
        db.createObjectStore("workspaces");
      }
      if (!db.objectStoreNames.contains("settings")) {
        db.createObjectStore("settings");
      }
    }
  });
  return dbPromise;
}
