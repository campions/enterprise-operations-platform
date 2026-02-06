const config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json'
    }
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': '<rootDir>/src/tests/__mocks__/styleMock.ts'
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/']
};

module.exports = config;
