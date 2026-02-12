import { defineConfig } from "vite";
import path from "node:path";
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
      "@app": path.resolve(__dirname, "src/01.app"),
      "@pages": path.resolve(__dirname, "src/02.pages"),
      "@widgets": path.resolve(__dirname, "src/03.widgets"),
      "@features": path.resolve(__dirname, "src/04.features"),
      "@entities": path.resolve(__dirname, "src/05.entities"),
      "@shared": path.resolve(__dirname, "src/06.shared"),
    },
  },
});
