import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import { config } from "@justwon/eslint-config/react";

export default defineConfig([
  {
    extends: [config, importPlugin.flatConfigs.recommended],
    rules: {
      "import/no-unresolved": "off",
      "import/no-cycle": "error",
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            {
              target: "./src/foundation",
              from: ["./src/components", "./src/icons"],
            },
            {
              target: "./src/icons",
              from: ["./src/components", "./src/foundation"],
            },
          ],
        },
      ],
    },
  },
]);
