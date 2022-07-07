module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['google'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'new-cap': ['error', {capIsNewExceptions: ['Router']}],
  },
  ignorePatterns: ['build/*'],
};
