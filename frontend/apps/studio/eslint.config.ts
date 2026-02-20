import { defineConfig } from "eslint/config";
import pluginQuery from "@tanstack/eslint-plugin-query";
import pluginRouter from "@tanstack/eslint-plugin-router";
import { config } from "@justwon/eslint-config/vite";

export default defineConfig([
  ...pluginQuery.configs["flat/recommended"],
  ...pluginRouter.configs["flat/recommended"],
  {
    extends: [config],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
