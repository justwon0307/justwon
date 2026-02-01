import { defineConfig, mergeConfig } from "vitest/config";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { reactConfig } from "@justwon/vitest-config/react";

const additionalConfig = defineConfig({
  plugins: [vanillaExtractPlugin()],
  test: {
    coverage: {
      exclude: ["**/*/colors.ts"],
    },
  },
});

export default mergeConfig(reactConfig, additionalConfig);
