module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      ts: '@typescript-eslint/parser',
    },
    ecmaVersion: 13,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/no-unused-vars': 'error',
  },
}
