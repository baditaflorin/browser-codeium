import { getBrowserDb } from "@/features/persistence/browserDb";
import { workspaceSchema, type Workspace } from "./workspace";

const workspaceStorageKey = "browser-codeium:workspace";

export async function loadWorkspace(): Promise<Workspace | null> {
  const localValue = window.localStorage.getItem(workspaceStorageKey);
  if (localValue) {
    return workspaceSchema.parse(JSON.parse(localValue) as unknown);
  }

  const db = await getBrowserDb();
  const value = await db.get("workspaces", "current");
  if (!value) {
    return null;
  }

  return workspaceSchema.parse(value);
}

export function cacheWorkspace(workspace: Workspace): void {
  window.localStorage.setItem(workspaceStorageKey, JSON.stringify(workspace));
}

export async function saveWorkspace(workspace: Workspace): Promise<void> {
  cacheWorkspace(workspace);
  const db = await getBrowserDb();
  await db.put("workspaces", workspace, "current");
}

export async function clearWorkspace(): Promise<void> {
  window.localStorage.removeItem(workspaceStorageKey);
  const db = await getBrowserDb();
  await db.delete("workspaces", "current");
}
