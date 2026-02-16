import { defineConfig, mergeConfig } from "vitest/config";
import { appConfig } from "@justwon/vitest-config/app";

const mocksConfig = defineConfig({
  test: {
    setupFiles: ["./tests/vitest.setup.tsx"],
  },
});

export default mergeConfig(appConfig, mocksConfig);
