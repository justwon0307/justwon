import { defineConfig, mergeConfig } from "vitest/config";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { reactConfig } from "@justwon/vitest-config/react";

const vanillaConfig = defineConfig({
  plugins: [vanillaExtractPlugin()],
});

export default mergeConfig(reactConfig, vanillaConfig);
