import { defineProject, mergeConfig } from "vitest/config";
import { sharedConfig } from "@justwon/vitest-config/shared";

const appConfig = defineProject({
  test: {
    setupFiles: ["./tests/vitest.setup.tsx"],
  },
});

export default mergeConfig(sharedConfig, appConfig);
