export async function copyTextToClipboard(value: string): Promise<void> {
  if (!navigator.clipboard?.writeText) {
    throw new Error("Clipboard write is not available in this browser.");
  }

  await navigator.clipboard.writeText(value);
}

export async function readTextFromClipboard(): Promise<string> {
  if (!navigator.clipboard?.readText) {
    throw new Error("Clipboard read is not available in this browser.");
  }

  const value = await navigator.clipboard.readText();
  if (!value.trim()) {
    throw new Error("Clipboard is empty.");
  }
  return value;
}

export function downloadTextFile(filename: string, content: string, type = "text/plain"): void {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}
