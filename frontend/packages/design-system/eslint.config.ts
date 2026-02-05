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
          basePath: "./",
          zones: [
            {
              target: "./src/theme",
              from: ["./src/components", "./src/icons"],
            },
            {
              target: "./src/icons",
              from: ["./src/components", "./src/theme"],
            },
            {
              target: "./src",
              from: ["./tests"],
            },
          ],
        },
      ],
    },
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["src/**/*"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/*"],
              message:
                "Use relative imports within src/. The @/* alias is only for tests.",
            },
          ],
        },
      ],
    },
  },
]);
