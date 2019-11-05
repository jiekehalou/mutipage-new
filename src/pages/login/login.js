

// import '@/styles/index.less'
// import '@/assets/iconfont/iconfont.css'
import Vue from 'vue'
import App from '@/view/common/App'
import router from './router'

import iView from 'iview'
import config from '@/config'
import local from '@/assets/js/smartLine/local'
Vue.prototype.$config = config
Vue.use(require('vue-wechat-title'))//设置title;
Vue.use(iView)
iView.LoadingBar.config({
    color: '#92bae4',
    failedColor: '#ed4014',
    height: 3
})
iView.Message.config({
    duration: 4
})
const LOGIN_PAGE_NAME = 'login'
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start()
    const token = local.get('token')
    // 未登录且要跳转的页面不是登录页
    if (!token && to.name !== LOGIN_PAGE_NAME) {
        iView.LoadingBar.finish()
        // 跳转到登录页
        next({ name: LOGIN_PAGE_NAME })
    } else if (!token && to.name === LOGIN_PAGE_NAME) {
        iView.LoadingBar.finish()
        // 未登陆且要跳转的页面是登录页
        next() // 跳转
    } else if (token && to.name === LOGIN_PAGE_NAME) {
        iView.LoadingBar.finish()
        // 已登录且要跳转的页面是登录页
        next()
    } else {
        next()
    }
})
router.afterEach(to => {
    iView.LoadingBar.finish()
    window.scrollTo(0, 0)
})
router.onError(error => {
    iView.Message.error(`加载页面异常，${error.iView.Message}`)
    iView.LoadingBar.error()
})


Vue.config.productionTip = false

// /* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

