module.exports = {
  extends: ["turbo", "eslint:recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      excludedFiles: ["*.js"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    },
  ],
  ignorePatterns: ["dist", "node_modules"],
};
