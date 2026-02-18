import { resolve } from "node:path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export const appConfig = defineConfig({
  plugins: [tsconfigPaths(), react(), vanillaExtractPlugin()],
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
      "@app": resolve(process.cwd(), "src/01.app"),
      "@pages": resolve(process.cwd(), "src/02.pages"),
      "@widgets": resolve(process.cwd(), "src/03.widgets"),
      "@features": resolve(process.cwd(), "src/04.features"),
      "@entities": resolve(process.cwd(), "src/05.entities"),
      "@shared": resolve(process.cwd(), "src/06.shared"),
    },
  },
});
