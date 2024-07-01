module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  ignorePatterns: ['build/**/*', 'dist/**/*', 'node_modules/**/*'],
  overrides: [
    // JavaScript files
    {
      files: ['*.js'],
      extends: [
        'eslint:recommended',
        'google',
      ],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      rules: {
        'require-jsdoc': 'off',
        // You can adjust other JavaScript-specific rules here
      },
    },
    // TypeScript files
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        './node_modules/gts/',
      ],
      parserOptions: {
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        'max-len': 'off', // Turn off max-len for TypeScript files
        // You can adjust other TypeScript-specific rules here
      },
    },
  ],
};
