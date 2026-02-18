import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export const packageConfig = defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    include: ["tests/**/*.test.{ts,tsx}"],
    coverage: {
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["tests/*"],
      provider: "v8",
      reporter: [["text", { skipFull: true }], "clover", "lcov"],
    },
  },
  resolve: {
    alias: {
      "@": resolve(process.cwd(), "src"),
    },
  },
});
