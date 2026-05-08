import { z } from "zod";

const githubCommitSchema = z.object({
  sha: z.string().min(7)
});

export async function fetchLatestCommit(): Promise<string> {
  const response = await fetch(
    "https://api.github.com/repos/baditaflorin/browser-codeium/commits/main",
    {
      headers: {
        Accept: "application/vnd.github+json"
      }
    }
  );

  if (!response.ok) {
    throw new Error(`GitHub commit lookup failed: ${response.status}`);
  }

  return githubCommitSchema.parse(await response.json()).sha.slice(0, 7);
}
