import { defineConfig } from "eslint/config";
import { nextConfig } from "@justwon/eslint-config/nextjs";

export default defineConfig([
  {
    extends: [nextConfig],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
