import { readdir, readFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { describe, expect, it } from "vitest";
import { analyzeWithFallback } from "./fallback";
import type { AnalysisLanguage, CodeAnalysis, FileShape } from "./types";

interface ExpectedFixture {
  schemaVersion: 1;
  expected: {
    language: AnalysisLanguage;
    fileShape: FileShape;
    confidenceAtLeast?: number;
    confidenceAtMost?: number;
    mustHaveSymbols: string[];
    mustHaveDiagnosticCodes: string[];
    mustNotCrash: boolean;
  };
}

const fixturesDir = join(process.cwd(), "test/fixtures/realdata");

describe("real-data substance fixtures", () => {
  it("classifies all committed real-world inputs deterministically", async () => {
    const files = await readdir(fixturesDir);
    const expectedFiles = files.filter((file) => file.endsWith(".expected.json")).sort();

    expect(expectedFiles).toHaveLength(10);

    for (const expectedFile of expectedFiles) {
      const fixtureName = expectedFile.replace(".expected.json", "");
      const inputFile = files.find((file) => file.startsWith(`${fixtureName}.input.`));
      expect(inputFile, `${fixtureName} has an input file`).toBeTruthy();

      const expected = JSON.parse(
        await readFile(join(fixturesDir, expectedFile), "utf8")
      ) as ExpectedFixture;
      const code = await readFile(join(fixturesDir, inputFile ?? ""), "utf8");
      const analysis = analyzeWithFallback(code, inputFile ?? fixtureName);
      const secondPass = analyzeWithFallback(code, inputFile ?? fixtureName);

      expect(analysis.language, fixtureName).toBe(expected.expected.language);
      expect(analysis.fileShape, fixtureName).toBe(expected.expected.fileShape);
      expect(JSON.stringify(stabilizeTiming(analysis)), `${fixtureName} is deterministic`).toBe(
        JSON.stringify(stabilizeTiming(secondPass))
      );

      if (expected.expected.confidenceAtLeast !== undefined) {
        expect(analysis.confidence.score, fixtureName).toBeGreaterThanOrEqual(
          expected.expected.confidenceAtLeast
        );
      }
      if (expected.expected.confidenceAtMost !== undefined) {
        expect(analysis.confidence.score, fixtureName).toBeLessThanOrEqual(
          expected.expected.confidenceAtMost
        );
      }

      const symbols = new Set(analysis.symbols.map((symbol) => symbol.name));
      for (const symbol of expected.expected.mustHaveSymbols) {
        expect(
          symbols.has(symbol),
          `${basename(inputFile ?? fixtureName)} has symbol ${symbol}`
        ).toBe(true);
      }

      const diagnostics = new Set(analysis.diagnostics.map((diagnostic) => diagnostic.code));
      for (const codeName of expected.expected.mustHaveDiagnosticCodes) {
        expect(
          diagnostics.has(codeName),
          `${basename(inputFile ?? fixtureName)} has diagnostic ${codeName}`
        ).toBe(true);
      }
    }
  });
});

function stabilizeTiming(analysis: CodeAnalysis): CodeAnalysis {
  return { ...analysis, parseMs: 0 };
}
