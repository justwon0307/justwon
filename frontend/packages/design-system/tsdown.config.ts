import { defineConfig } from "tsdown";
import { baseConfig } from "@justwon/tsdown-config/base";

export default defineConfig({
  ...baseConfig,
  entry: {
    brand: "src/brand/index.ts",
    components: "src/components/index.ts",
    icons: "src/icons/index.ts",
    theme: "src/theme/index.ts",
    globals: "src/globals.css.ts",
  },
  deps: {
    neverBundle: [
      "react",
      "react-dom",
      "@vanilla-extract/css",
      "@vanilla-extract/dynamic",
      "@vanilla-extract/recipes",
    ],
  },
});
