module.exports = {
  extends: ["turbo", "prettier"],
  parserOptions: {
    sourceType: "module",
    parser: "babel-eslint",
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
};
