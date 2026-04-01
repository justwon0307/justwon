import { defineConfig } from "eslint/config";
import reactRefresh from "eslint-plugin-react-refresh";
import pluginQuery from "@tanstack/eslint-plugin-query";
import pluginRouter from "@tanstack/eslint-plugin-router";

import { appConfig } from "./app";

export const viteConfig = defineConfig([
  ...pluginQuery.configs["flat/recommended"],
  ...pluginRouter.configs["flat/recommended"],
  {
    extends: [appConfig, reactRefresh.configs.vite],
  },
]);
