import { defineProject, mergeConfig } from "vitest/config";
import { sharedConfig } from "@justwon/vitest-config/shared";

const additionalConfig = defineProject({
  test: {
    setupFiles: ["./tests/setup.ts"],
  },
});

export default mergeConfig(sharedConfig, additionalConfig);
