module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/no-array-index-key': 'warn',
    'dot-notation': 'warn',
  },
  globals: {
    fetch: false,
    window: true,
  },
};
