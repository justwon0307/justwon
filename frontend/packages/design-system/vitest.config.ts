import { defineConfig, mergeConfig } from "vitest/config";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { packageConfig } from "@justwon/vitest-config/package";

const additionalConfig = defineConfig({
  plugins: [vanillaExtractPlugin()],
  test: {
    setupFiles: ["./tests/setup.ts"],
    coverage: {
      exclude: ["**/*/colors.ts"],
    },
  },
});

export default mergeConfig(packageConfig, additionalConfig);
