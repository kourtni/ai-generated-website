module.exports = {
  extends: ['../../../.eslintrc.js', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier'],
      plugins: ['react', 'react-hooks'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        'react/jsx-filename-extension': ['error', {extensions: ['.tsx']}],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        'prettier/prettier': ['error', {}, {usePrettierrc: true}],
      },
    },
  ],
};