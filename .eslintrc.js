module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  ignorePatterns: ["build/**/*", "dist/**/*", "node_modules/**/*"],
  extends: ["eslint:recommended"],
  overrides: [
    // JavaScript files
    {
      files: ["*.js"],
      extends: ["google", "prettier"],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
      },
      rules: {
        "require-jsdoc": "off",
      },
    },
    // TypeScript files
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "./node_modules/gts/",
        "prettier",
      ],
      parserOptions: {
        project: ["./tsconfig.json", "./packages/*/tsconfig.json"],
      },
      rules: {
        "@typescript-eslint/no-explicit-any": "error",
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
      },
    },
  ],
};
