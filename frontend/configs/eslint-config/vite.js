import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";

import { appConfig } from "./app";

export const viteConfig = defineConfig([
  {
    extends: [appConfig, reactRefresh.configs.vite],
  },
]);
