// @flow
/* eslint-disable no-useless-escape */

module.exports = {
  collectCoverage: true,
  verbose: true,
  setupTestFrameworkScriptFile: "./jest.setup.js",
  "moduleNameMapper": {
    "@app/(.*)$": "<rootDir>/app/$1"
  },
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "./app/components/style/*.js"
  ]
}
