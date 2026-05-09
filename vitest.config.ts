import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify("test"),
    __GIT_COMMIT__: JSON.stringify("test"),
    __REPOSITORY_URL__: JSON.stringify("https://github.com/baditaflorin/browser-codeium"),
    __PAYPAL_URL__: JSON.stringify("https://www.paypal.com/paypalme/florinbadita")
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  test: {
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: [
        "src/features/analysis/fallback.ts",
        "src/features/analysis/substance.ts",
        "src/features/assistant/assistant.ts",
        "src/features/settings/settings.ts",
        "src/features/workspace/workspaceTransfer.ts",
        "src/features/system/webgpu.ts",
        "src/features/workspace/workspace.ts"
      ],
      thresholds: {
        statements: 70,
        branches: 55,
        functions: 70,
        lines: 70
      }
    }
  }
});
