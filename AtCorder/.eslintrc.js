module.exports = {
  env: { browser: true, node: true, es6: true },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
  ],
  rules: {
    "semi": "error"
  }
};
