module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "prettier",
    "next/core-web-vitals",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  ignorePatterns: ["**/API/index.js"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["off"],
    quotes: ["error", "double"],
    "react/no-unknown-property": ["off", { ignore: ["css"] }],
    "react/react-in-jsx-scope": "off",
  },
};
