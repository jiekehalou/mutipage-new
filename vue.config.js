const CopyWebpackPlugin = require('copy-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//gzip 压缩
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

const pages = {
  // 1.登录+系统导航页面
  'login/login': {
    entry: './src/pages/login/login.js',
    template: 'public/template.html',
    filename: `login/login.html`,
    title: '登陆',
  },
  // 2.系统管理
  'systemManagement/systemManagement': {
    entry: './src/pages/systemManagement/systemManagement.js',
    template: 'public/template.html',
    title: '系统管理',
    filename: `systemManagement/systemManagement.html`,
  },
  // // //3.数字化放行
  // 'releaseLine/releaseLine': {
  //   entry: './src/pages/releaseLine/releaseLine.js',
  //   template: 'public/template.html',
  //   filename: 'releaseLine.html',
  //   title: '数字化放行',
  // },
  // // //4.飞机监控
  // 'smartLine/smartLine': {
  //   entry: './src/pages/smartLine/smartLine.js',
  //   template: './src/pages/smartLine/smartLine.html',
  //   filename: 'smartLine.html',
  //   title: '智能飞机监控系统',
  // },

  // //5.运行限制
  // 'operatingLimits/operatingLimits': {
  //   entry: './src/pages/operatingLimits/operatingLimits.js',
  //   template: 'public/template.html',
  //   title: '运行限制',
  //   filename: 'operatingLimits.html',
  // },
  // //6.运行规则库
  // 'operationRules/operationRules': {
  //   entry: './src/pages/operationRules/operationRules.js',
  //   template: 'public/template.html',
  //   title: '运行规则库',
  //   filename: 'operationRules.html',
  // },
}
// const pageNum = Object.keys(pages).length
module.exports = {
  // configureWebpack: {
  //     devtool: 'source-map'
  // },
  //...
  pages: {
    ...pages
  },
  publicPath: './',
  outputDir: 'dist', // 打包的目录
  // lintOnSave: process.env.NODE_ENV !== 'production', // 在保存时校验格式
  lintOnSave: false, // 在保存时校验格式
  filenameHashing: false,
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  transpileDependencies: [
    // 'webpack-dev-server/client',
    // 'vue-calendar-component'
  ],
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('api', resolve('src/api'))
    // config.output.filename('[name].[hash].js').end();
    // config.output.filename('[name].js').end();
    config.optimization.splitChunks({
      cacheGroups: {
        default: false,//第三方库提取
        // vendors: {
        //   name: 'chunk-vendors',
        //   minChunks: pageNum,
        //   test: /node_modules/,
        //   priority: -10,
        //   chunks: 'initial'
        // },
        // common: {}
      }
    });
  },
  configureWebpack: (config) => {
    //删除console插件
    let plugins = [
      // new UglifyJsPlugin({
      //   uglifyOptions: {
      //     compress: {
      //       // warnings: false,
      //       drop_console: true,
      //       drop_debugger: true
      //     },
      //     output: {
      //       // 去掉注释内容
      //       comments: false,
      //     }
      //   },
      //   sourceMap: false,
      //   parallel: true,
      // }),
      new CopyWebpackPlugin([
        {
          from: 'static',
          to: 'static'
        }
      ]),
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: productionGzipExtensions,
        threshold: 10240,
        minRatio: 0.8
      })
    ];
    //只有打包生产环境才需要将console删除
    if (process.env.NODE_ENV === 'production') {
      config.plugins = [...config.plugins, ...plugins];
    }
  },
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    index: '/login.html' ,   //  默认启动页面
    // host: '0.0.0.0',
    port: 8090, // 服务端口
    https: false,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/v1/api': {
        target: 'http://192.168.201.193:18080/',
        // target: 'http://192.168.0.189:28081/',
        // target: 'http://192.168.0.189:28081/',
        changeOrigin: true,
        // ws: true,
        // pathRewrite: {
        //   '^/v1/api': ''
        // },
      },
      '/v1/release': { //数字化放行接口总汇合；后期会合并到一起；
        target: 'http://192.168.0.151:18080/',
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          '^/v1/release': '/v1/api'
        }
      },
    }, // 设置代理
    disableHostCheck: true,
    before: app => {
    },
    // externals:{ //此处可使用cdn引入
    //   "ol":"ol"
    // }
  },
  css: {
    // extract: true, // 是否使用css分离插件 ExtractTextPlugin
    // sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      less: {
        javascriptEnabled: true //less 配置
      }
    }, // css预设器配置项
    // modules: true // 启用 CSS modules for all css / pre-processor files.
  },
}
