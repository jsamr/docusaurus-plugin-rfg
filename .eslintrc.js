module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  "extends": [
    "prettier"
  ],
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['lib/', 'types/'],
  rules: {
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
    ],
    'no-eval': 'off'
  }
};
