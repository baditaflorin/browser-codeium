import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111318",
        panel: "#191d24",
        panelSoft: "#222733",
        line: "#343b49",
        mist: "#d7dbe3",
        muted: "#9aa4b5",
        cyan: "#7dd3fc",
        green: "#7bd88f",
        amber: "#ffd166",
        coral: "#ff8a7a"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"]
      }
    }
  },
  plugins: []
} satisfies Config;
