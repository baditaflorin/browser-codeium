import { openDB, type DBSchema, type IDBPDatabase } from "idb";
import { workspaceSchema, type Workspace } from "./workspace";

interface BrowserCodeiumDb extends DBSchema {
  workspaces: {
    key: "current";
    value: Workspace;
  };
}

let dbPromise: Promise<IDBPDatabase<BrowserCodeiumDb>> | undefined;

function getDb(): Promise<IDBPDatabase<BrowserCodeiumDb>> {
  dbPromise ??= openDB<BrowserCodeiumDb>("browser-codeium", 1, {
    upgrade(db) {
      db.createObjectStore("workspaces");
    }
  });
  return dbPromise;
}

export async function loadWorkspace(): Promise<Workspace | null> {
  const db = await getDb();
  const value = await db.get("workspaces", "current");
  if (!value) {
    return null;
  }

  return workspaceSchema.parse(value);
}

export async function saveWorkspace(workspace: Workspace): Promise<void> {
  const db = await getDb();
  await db.put("workspaces", workspace, "current");
}

export async function clearWorkspace(): Promise<void> {
  const db = await getDb();
  await db.delete("workspaces", "current");
}
