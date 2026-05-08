import { describe, expect, it } from "vitest";
import { analyzeWithFallback } from "./fallback";

describe("fallback analysis", () => {
  it("extracts common JavaScript and TypeScript declarations", () => {
    const result = analyzeWithFallback(
      [
        "import { z } from 'zod';",
        "export type User = { id: string };",
        "export function parseUser() { return z.object({ id: z.string() }); }",
        "const localValue = 42;"
      ].join("\n"),
      "src/user.ts"
    );

    expect(result.engine).toBe("fallback");
    expect(result.imports).toHaveLength(1);
    expect(result.exports).toHaveLength(2);
    expect(result.symbols.map((symbol) => symbol.name)).toEqual(
      expect.arrayContaining(["User", "parseUser", "localValue"])
    );
  });
});
