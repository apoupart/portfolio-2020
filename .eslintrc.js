module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }]
  },
};
