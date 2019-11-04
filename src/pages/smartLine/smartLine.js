// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import '@/assets/iconfont/iconfont.css'

//VUE_APP_ROUTERTYPE 因为前期axios把路由设置为全局的需要判断路由类型；设置全局路由；
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/assets/iconfont/iconfont.css'
import '@/styles/index.less'
import config from '@/config'
import Vue from 'vue'
import App from './App'
import router from './router/index'
// config.VUE_APP_ROUTERTYPE ='login'
// console.log('首页config.VUE_APP_ROUTERTYPE', config.VUE_APP_ROUTERTYPE)
import iView from 'iview'
import i18n from '@/locale'

// 引入滚动条;
import HappyScroll from 'vue-happy-scroll'
import 'vue-happy-scroll/docs/happy-scroll.css'
Vue.use(HappyScroll)
// 全局过滤器

// import { directive as clickOutside } from 'v-click-outside-x'
// import installPlugin from '@/plugin'

/* eslint-disable */

Vue.use(iView, {
    i18n: (key, value) => i18n.t(key, value)
})

iView.LoadingBar.config({
    color: '#92bae4',
    failedColor: '#ed4014',
    height: 3
})
iView.Message.config({
    duration: 4
})

/**
 * @description 注册admin内置插件
 */
// installPlugin(Vue)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
// Vue.directive('clickOutside', clickOutside)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    i18n,
    render: h => h(App)
})
