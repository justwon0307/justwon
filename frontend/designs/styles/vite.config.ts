import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "globals",
      fileName: "index",
    },
  },
  plugins: [vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@": __dirname + "/src",
    },
  },
});
