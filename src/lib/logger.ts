export function reportError(error: unknown): string {
  if (error instanceof Error) {
    if (import.meta.env.DEV) {
      console.error(error);
    }
    return error.message;
  }

  const message = String(error);
  if (import.meta.env.DEV) {
    console.error(message);
  }
  return message;
}
