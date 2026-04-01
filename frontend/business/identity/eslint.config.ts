import { defineConfig } from "eslint/config";
import { packageConfig } from "@justwon/eslint-config/package";

export default defineConfig([
  {
    extends: [packageConfig],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
