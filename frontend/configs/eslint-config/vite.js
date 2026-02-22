import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export const config = defineConfig([
  globalIgnores(["dist", "node_modules", "build", "coverage"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXOpeningElement[name.name='button']",
          message:
            "Use the Button component from the design system instead of raw <button> elements.",
        },
        {
          selector: "JSXOpeningElement[name.name='input']",
          message:
            "Use the Input component from the design system instead of raw <input> elements.",
        },
        {
          selector: "JSXOpeningElement[name.name='form']",
          message:
            "Use the Form component from the design system instead of raw <form> elements.",
        },
        {
          selector:
            "JSXOpeningElement[name.name='h1'], JSXOpeningElement[name.name='h2'], JSXOpeningElement[name.name='h3'], JSXOpeningElement[name.name='h4'], JSXOpeningElement[name.name='h5'], JSXOpeningElement[name.name='h6'], JSXOpeningElement[name.name='p']",
          message:
            "Use the Text component from the design system instead of raw <h1>-<h6> or <p> elements.",
        },
      ],
    },
  },
  {
    files: ["**/vitest.setup.tsx"],
    rules: {
      "no-restricted-syntax": "off",
    },
  },
]);
