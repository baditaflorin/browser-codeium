import react from "@vitejs/plugin-react";
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

const packageJson = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf8")
) as {
  version: string;
};

function readCommit(): string {
  try {
    return execSync("git rev-parse --short HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    return "local";
  }
}

export default defineConfig({
  base: "/browser-codeium/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.VITE_APP_VERSION ?? packageJson.version),
    __GIT_COMMIT__: JSON.stringify(process.env.VITE_GIT_COMMIT ?? readCommit()),
    __REPOSITORY_URL__: JSON.stringify(
      process.env.VITE_REPOSITORY_URL ?? "https://github.com/baditaflorin/browser-codeium"
    ),
    __PAYPAL_URL__: JSON.stringify(
      process.env.VITE_PAYPAL_URL ?? "https://www.paypal.com/paypalme/florinbadita"
    )
  },
  build: {
    outDir: "docs",
    emptyOutDir: false,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("monaco-editor") || id.includes("@monaco-editor")) {
            return "monaco";
          }
          if (id.includes("web-tree-sitter")) {
            return "tree-sitter";
          }
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "react";
          }
          if (id.includes("@tanstack")) {
            return "query";
          }
          return undefined;
        }
      }
    }
  }
});
