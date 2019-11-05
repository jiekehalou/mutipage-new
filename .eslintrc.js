module.exports = {
  root: true,//此项是用来告诉eslint找当前配置文件不能往父级查找
  env: {
    node: true//此项指定环境的全局变量，下面的配置指定为node环境
  },
  'extends': [// 此项是用来配置vue.js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止出现未使用过的变量
    "no-unused-vars": [2, { "vars": "all", "args": "none" }],//不能有声明后未被使用的变量或参数
    "vue/html-self-closing": "off",
    'generator-star-spacing': 'off',//生成器函数*的前后空格
    'vue/no-parsing-error': [2, {
      "x-invalid-end-tag": false
    }],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
