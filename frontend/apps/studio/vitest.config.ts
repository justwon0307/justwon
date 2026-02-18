import { resolve } from "node:path";
import { defineConfig, mergeConfig } from "vitest/config";
import { appConfig } from "@justwon/vitest-config/app";

const mocksConfig = defineConfig({
  test: {
    setupFiles: ["./tests/vitest.setup.tsx"],
    coverage: {
      exclude: ["src/routes/**/*", "src/routeTree.gen.ts", "src/main.tsx"],
    },
  },
  resolve: {
    alias: {
      "@tests/*": resolve(process.cwd(), "tests/*"),
    },
  },
});

export default mergeConfig(appConfig, mocksConfig);
