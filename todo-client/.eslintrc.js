/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:cypress/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [ "@typescript-eslint", "custom-rules" ],
  root: true,
  env: {
    node: true,
    jest: true,
    worker: true,
    serviceworker: true,
  },
  rules: {
    "@typescript-eslint/no-var-requires": 0,

    // "no-console": 1,
    // "@typescript-eslint/no-unused-vars": 1,
    // "@typescript-eslint/no-explicit-any": 1,
    // "cypress/unsafe-to-chain-command": 1,
    "no-console": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "cypress/unsafe-to-chain-command": 0,

    "custom-rules/strict-enum": "error",
  },
  ignorePatterns: [
    "node_modules",
    "eslint-plugin-custom-rules",
    ".eslintrc.js",
  ],
}
// module.exports = {
//   extends: [ "plugin:@typescript-eslint/recommended" ],
//   plugins: [ "@typescript-eslint", "custom-rules" ],
//   root: true,
//   rules: {
//     "custom-rules/strict-enum": "error",
//   },
//   ignorePatterns: [
//     "node_modules",
//     "eslint-plugin-custom-rules",
//     ".eslintrc.js",
//   ],
// }
