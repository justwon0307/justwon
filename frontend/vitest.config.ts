import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: ["apps/*", "packages/*"],
    coverage: {
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "**/*/tests/*",
        "**/*.css.ts",
        "**/index.ts",
        "**/types.ts",
        "**/*.d.ts",
        "**/src/routes/**",
        "**/src/main.tsx",
        "**/src/routeTree.gen.ts",
      ],
      provider: "v8",
      reporter: [["text", { skipFull: true }]],
    },
  },
});
