
const smartLineUrl = process.env.VUE_APP_BASE_API //飞机监控前缀
console.log(' process.env', process.env)
export default {
  // 接口前缀url
  VUE_APP_ROUTERTYPE: '', //VUE_APP_ROUTERTYPE 因为前期axios把路由设置为全局的需要判断路由类型；设置全局路由；
  CONFIG_APP_DICTIONARY: { //路由路径字典表
    'login': '@/router/routers', 
    'releaseLine': '@/pages/login/router', 
    'smartLine': '@/pages/smartLine/router'
  },
  prefix: '/v1/api/',
  prefixLine: smartLineUrl,
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: 'IFOC-ADMIN',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: true,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: 'http://192.168.0.151:18080/',
    pro: 'http://192.168.0.151:18080/'
  },
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home',
  smartLineHomeName: 'FMS06P001', 

  moduleNav: 'moduleNav',

  copyright: '©2019 恒赢智航 v1.0.0.116 保障热线:0755-87665544/188877655442',

  copyrightLogin: '恒赢智航©2019 v1.0.0.116',

  /**
   * @description 需要加载的插件
   */
  plugin: {
    'error-store': {
      showInHeader: false, // 设为false后不会在顶部显示错误日志徽标
      developmentOff: false // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    }
  }
}
