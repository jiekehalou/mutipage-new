
console.log('login', 'loginrouter.js')
import Vue from 'vue'
import Router from 'vue-router'
const _import = file => () => import('@/view/' + file + '.vue');
// const login = _import("login/login");//登陆页
const moduleNav = _import("module/index");//模块管理;
Vue.use(Router);
export default new Router({
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    hashbang: true,
    PositionDescriptor() {
        return { x: 0, y: 0, selector: "#main" }
    },
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    mode: 'hash',
    routes: [
        {
            path: '/login',
            name: 'login',
            meta: {
                title: 'Login - 登录',
            },
            component: () => import('@/view/login/login.vue')
        },
        {
            path: '/moduleNav',
            name: 'moduleNav',
            meta: {
                title: 'module - 导航',
            },
            component: moduleNav
        },
        {
            path: '', redirect: { path: '/login' }
        },
    ]
})





