import { z } from "zod";
import { assetUrl } from "@/lib/baseUrl";

const appMetaSchema = z.object({
  schemaVersion: z.literal(1),
  productName: z.string(),
  pagesUrl: z.string().url(),
  repositoryUrl: z.string().url(),
  supportUrl: z.string().url(),
  deploymentMode: z.literal("Mode A"),
  capabilities: z.array(z.string())
});

const samplesSchema = z.object({
  schemaVersion: z.literal(1),
  samples: z.array(
    z.object({
      path: z.string(),
      language: z.string(),
      content: z.string()
    })
  )
});

export type AppMeta = z.infer<typeof appMetaSchema>;
export type SamplesPayload = z.infer<typeof samplesSchema>;

async function fetchJson<T>(path: string, schema: z.ZodSchema<T>): Promise<T> {
  const response = await fetch(assetUrl(path));
  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}: ${response.status}`);
  }

  return schema.parse(await response.json());
}

export function fetchAppMeta(): Promise<AppMeta> {
  return fetchJson("data/app-meta.json", appMetaSchema);
}

export function fetchSamples(): Promise<SamplesPayload> {
  return fetchJson("data/samples.json", samplesSchema);
}
