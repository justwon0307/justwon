import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/test-utils/jest.setup.tsx"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*/contexts.ts",
    "!src/**/*/index.ts",
    "!src/**/*/metadata.ts",
    "!src/**/*/styles.ts",
    "!src/**/*/testdata.ts",
    "!src/**/*/types.ts",
    "!src/**/*.d.ts",
    "!src/**/@x/*",
    "!src/test-utils/renderer.tsx",
  ],
  moduleNameMapper: {
    "^@app/(.*)$": "<rootDir>/src/01.app/$1",
    "^@pages/(.*)$": "<rootDir>/src/02.pages/$1",
    "^@widgets/(.*)$": "<rootDir>/src/03.widgets/$1",
    "^@features/(.*)$": "<rootDir>/src/04.features/$1",
    "^@entities/(.*)$": "<rootDir>/src/05.entities/$1",
    "^@shared/(.*)$": "<rootDir>/src/06.shared/$1",
    "^@test-utils/(.*)$": "<rootDir>/src/test-utils/$1",
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
