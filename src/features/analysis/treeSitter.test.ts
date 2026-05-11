import { describe, expect, it } from "vitest";
import { grammarFile, isTreeSitterCandidate } from "./treeSitter";

describe("grammarFile", () => {
  it("returns the JS grammar for .js / .cjs / .mjs", () => {
    expect(grammarFile("foo.js")).toBe("tree-sitter-javascript.wasm");
    expect(grammarFile("foo.cjs")).toBe("tree-sitter-javascript.wasm");
    expect(grammarFile("foo.mjs")).toBe("tree-sitter-javascript.wasm");
  });

  it("returns the TS grammar for .ts and the TSX grammar for .tsx / .jsx", () => {
    expect(grammarFile("foo.ts")).toBe("tree-sitter-typescript.wasm");
    expect(grammarFile("foo.tsx")).toBe("tree-sitter-tsx.wasm");
    expect(grammarFile("foo.jsx")).toBe("tree-sitter-tsx.wasm");
  });

  it("returns the Python grammar for .py and .pyi", () => {
    expect(grammarFile("foo.py")).toBe("tree-sitter-python.wasm");
    expect(grammarFile("foo.pyi")).toBe("tree-sitter-python.wasm");
  });

  it("returns the Go grammar for .go", () => {
    expect(grammarFile("foo.go")).toBe("tree-sitter-go.wasm");
  });

  it("returns the Rust grammar for .rs", () => {
    expect(grammarFile("foo.rs")).toBe("tree-sitter-rust.wasm");
  });

  it("is case-insensitive", () => {
    expect(grammarFile("FOO.PY")).toBe("tree-sitter-python.wasm");
    expect(grammarFile("Foo.Rs")).toBe("tree-sitter-rust.wasm");
  });
});

describe("isTreeSitterCandidate", () => {
  it("accepts every shipped grammar extension", () => {
    for (const ext of [".js", ".cjs", ".mjs", ".jsx", ".ts", ".tsx", ".py", ".pyi", ".go", ".rs"]) {
      expect(isTreeSitterCandidate(`foo${ext}`), `should accept ${ext}`).toBe(true);
    }
  });

  it("rejects extensions we don't have a grammar for", () => {
    for (const ext of [".md", ".json", ".yaml", ".html", ".css", ".sh"]) {
      expect(isTreeSitterCandidate(`foo${ext}`), `should reject ${ext}`).toBe(false);
    }
  });

  it("rejects files with no extension at all", () => {
    expect(isTreeSitterCandidate("Makefile")).toBe(false);
    expect(isTreeSitterCandidate("README")).toBe(false);
  });
});
