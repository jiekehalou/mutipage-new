module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止出现未使用过的变量
    "no-unused-vars": [2, { "vars": "all", "args": "none" }],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
