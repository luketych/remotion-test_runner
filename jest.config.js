/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'jest-puppeteer',
  testMatch: ['**/__tests__/**/*.e2e.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'jest-environment-puppeteer',
  setupFilesAfterEnv: ['./src/__tests__/setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  testTimeout: 30000, // Increased timeout for E2E tests
  verbose: true,
};