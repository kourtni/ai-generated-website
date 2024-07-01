module.exports = {
  extends: ['../../.eslintrc.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
      ],
      plugins: ['react', 'react-hooks'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        'react/jsx-filename-extension': ['error', {'extensions': ['.tsx']}],
        '@typescript-eslint/explicit-function-return-type': ['error', {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        }],
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        // You can adjust other React and TypeScript-specific rules here
      },
    },
  ],
};
