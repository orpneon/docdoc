module.exports = {
  setupTestFrameworkScriptFile: './tests/utils/.setup-jest.js',
  testURL: 'http://tests',
  collectCoverage: true,
  coverageReporters: [],
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|styl)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
    '\\.(styl)$': 'jest-css-modules'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: ['<rootDir>/(tests/unit/**/*.spec.js)']
}
