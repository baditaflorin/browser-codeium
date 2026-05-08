import { readFile } from "node:fs/promises";

const appMeta = JSON.parse(await readFile("public/data/app-meta.json", "utf8"));
const samples = JSON.parse(await readFile("public/data/samples.json", "utf8"));

if (appMeta.schemaVersion !== 1 || samples.schemaVersion !== 1) {
  throw new Error("Unsupported static data schema version");
}

if (!Array.isArray(samples.samples) || samples.samples.length === 0) {
  throw new Error("At least one sample file is required");
}

for (const sample of samples.samples) {
  if (!sample.path || typeof sample.content !== "string") {
    throw new Error(`Invalid sample entry: ${JSON.stringify(sample)}`);
  }
}

console.log(`Validated ${samples.samples.length} sample files`);
