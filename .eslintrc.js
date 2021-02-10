// module.exports = {
//   extends: 'erb',
//   rules: {
//     // A temporary hack related to IDE not resolving correct package.json
//     'import/no-extraneous-dependencies': 'off',
//   },
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     project: './tsconfig.json',
//     tsconfigRootDir: __dirname,
//     createDefaultProgram: true,
//   },
//   settings: {
//     'import/resolver': {
//       // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
//       node: {},
//       webpack: {
//         config: require.resolve('./.erb/configs/webpack.config.eslint.js'),
//       },
//     },
//     'import/parsers': {
//       '@typescript-eslint/parser': ['.ts', '.tsx'],
//     },
//   },
// };

module.exports = {
  extends: 'erb/typescript',
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 'off',
    'consistent-return': 'warn',
    'no-console': 'off',
    'no-template-curly-in-string': 'off',
    'react/jsx-filename-extension': 'off',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./configs/webpack.config.eslint.js'),
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
