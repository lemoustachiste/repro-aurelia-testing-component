module.exports = {
  modulePaths: [
    '<rootDir>/src/',
    '<rootDir>/node_modules'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  setupFiles: [
    '<rootDir>/tests/jest-aurelia.config.ts'
  ],
  testRegex: '\\.(test|spec)\\.(ts|js)x?$',
  globals: {
    'ts-jest': {
      diagnostics: false
    },
    CURRENT_APPLICATION: null
  }
};
