module.exports = {
  env: {
    browser: true,
    es2020: true,
    amd: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-sort-props": "error",
    "react/jsx-props-no-spreading": "off",
    "prettier/prettier": "error",
    "react/prop-types": 0,
    "react/destructuring-assignment": [<enabled />, "always"],
    "prefer-destructuring": [
      "error",
      {
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
  },
};
