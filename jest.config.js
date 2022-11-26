module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globals: {
      "ts-jest": {
        tsconfig: "<rootDir>/projects/angular14-jest/tsconfig.spec.json",
      }
    },
    collectCoverage: true,
    coverageDirectory: "coverage",
    testEnvironment: 'jsdom',
  };
  