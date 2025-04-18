// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  ignorePatterns: ['/node_modules/*'],
};
