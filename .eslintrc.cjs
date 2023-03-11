const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['svelte3', '@typescript-eslint'],
  ignorePatterns: ['*.cjs', 'vite.config.ts'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    },
    {
      files: ['*.tsx', '*.ts'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/switch-exhaustiveness-check': 'error'
      },
      parserOptions: {
        project: path.join(__dirname, 'tsconfig.json')
      }
    }
  ],
  settings: {
    'svelte3/typescript': () => require('typescript')
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  }
};
