import { defineConfig } from "eslint/config";
import { viteConfig } from "@justwon/eslint-config/vite";

export default defineConfig([
  {
    extends: [viteConfig],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
