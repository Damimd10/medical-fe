module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["react-app", "plugin:storybook/recommended"],
  overrides: [
    {
      files: ["**/*.stories.*"],
      rules: {
        "import/no-anonymous-default-export": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-key": [
      "warn",
      {
        checkFragmentShorthand: true,
      },
    ],
  },
};
