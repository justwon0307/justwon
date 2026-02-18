import { defineConfig } from "vite";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // tanstack plugin이 react plugin보다 먼저와야한다
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    vanillaExtractPlugin(),
  ],
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src/01.app"),
      "@pages": resolve(__dirname, "src/02.pages"),
      "@widgets": resolve(__dirname, "src/03.widgets"),
      "@features": resolve(__dirname, "src/04.features"),
      "@entities": resolve(__dirname, "src/05.entities"),
      "@shared": resolve(__dirname, "src/06.shared"),
    },
  },
});
