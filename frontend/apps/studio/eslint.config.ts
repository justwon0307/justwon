import { defineConfig } from "eslint/config";
import pluginQuery from "@tanstack/eslint-plugin-query";
import { config } from "@justwon/eslint-config/vite";

export default defineConfig([
  ...pluginQuery.configs["flat/recommended"],
  {
    extends: [config],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
