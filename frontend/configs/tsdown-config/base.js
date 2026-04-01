import { defineConfig } from "tsdown";

export const baseConfig = defineConfig({
  entry: {
    index: "src/index.ts",
  },
  dts: {
    resolve: true,
    compilerOptions: {
      incremental: false,
      composite: false,
    },
  },
  deps: {
    neverBundle: ["react"],
  },
});
