import { defineConfig } from "eslint/config";
import { config } from "@justwon/eslint-config/nextjs";

export default defineConfig([
  {
    extends: [config],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
