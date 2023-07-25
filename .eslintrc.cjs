module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    indent: ["error", 2],
    semi: ["error", "always"],
    quotes: ["error", "single"],

    "no-console": "warn",
    "no-unused-vars": "warn",

    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",

    "react/destructuring-assignment": "off",

    "no-unused-vars": ["error", { args: "none" }],
  },
};
