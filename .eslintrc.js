module.exports = {
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'generator-star-spacing': 'off',
    'no-unused-vars': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'no-undef': 'off',
    'eol-last': [1, 'always'],
    'no-mixed-spaces-and-tabs': 2,
    'prettier/prettier': [
      'error',
      { singleQuote: true, vueIndentScriptAndStyle: false, semi: false },
    ],
    'vue/no-multiple-template-root': 0, // template Unique verification with node
    'vue/multi-word-component-names': 0,
  },
}
