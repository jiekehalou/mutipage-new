import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import smartLine from './module/smartLine'
import smartLinePublicinfo from './module/smartLinePublicinfo'// 航班监控
import mapInfo from './module/map'// 航班监控地图
import Emgerncy from './module/emgerncy'// 航班监控应急处理
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app,
    smartLine,
    smartLinePublicinfo,
    mapInfo,
    Emgerncy
  }
})
