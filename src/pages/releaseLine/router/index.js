
console.log('releaseLine', 'releaseLine.js')
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

Vue.use(Router)
export default new Router({
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    hashbang: true,
    PositionDescriptor() {
        return { x: 0, y: 0, selector: "#app" }
    },
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    mode: 'hash',
    // base: process.env.BASE_URL,
    routes
})





