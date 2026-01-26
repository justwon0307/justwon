import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import { config } from "@justwon/eslint-config/react";

export default defineConfig([
  {
    extends: [
      config,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      "import/no-cycle": "error",
      "import/no-restricted-paths": [
        "error",
        {
          basePath: import.meta.dirname,
          zones: [
            {
              target: "./src/foundations",
              from: ["./src/components", "./src/icons"],
            },
            {
              target: "./src/icons",
              from: ["./src/components", "./src/foundations"],
            },
            {
              target: "./src",
              from: ["./tests"],
            },
          ],
        },
      ],
    },
  },
]);
