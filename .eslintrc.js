// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['standard', 'plugin:vue/recommended'],
  // required to lint *.vue files
  plugins: ['vue'],
  globals: {
    'describe': false,
    'it': false,
    'test': false,
    'jest': false,
    'expect': false,
    'beforeAll': false,
    'beforeEach': false,
    'spyOn': false,
    'jasmine': false,
    'afterEach': false
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'indent': 0,
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': 0,
    'no-multiple-empty-lines': 0,
    'no-mixed-operators': 0,
    'space-before-blocks': 0,
    'prefer-promise-reject-errors': 0,
    'camelcase': 0,
    'no-useless-escape': 0,
    'one-var': 0,
    'vue/html-indent': 0,
    'vue/attributes-order': 0,
    'no-unused-expressions': 0, // temporary, because of optional-chaining
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/max-attributes-per-line': [2, {
      'singleline': 1,
      'multiline': {
        'max': 1,
        'allowFirstLine': true
      }
    }],
    'no-control-regex': 0,
    'semi': ['error', 'never']
  }
}
