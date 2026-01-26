import { defineConfig, mergeConfig } from "vitest/config";
import { nextjsConfig } from "@justwon/vitest-config/nextjs";

const mocksConfig = defineConfig({
  test: {
    setupFiles: ["./tests/vitest.setup.tsx"],
  },
});

export default mergeConfig(nextjsConfig, mocksConfig);
