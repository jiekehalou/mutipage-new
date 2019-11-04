import axios from 'axios'
// import store from '@/store'
import router from '@/router'
// import { throwErr } from '@/libs/util'
import { Message } from 'iview'
import store from 'store'

// const addErrorLog = errorInfo => {
//   const { statusText, status, request: { responseURL } } = errorInfo
//   let info = {
//     type: 'ajax',
//     code: status,
//     mes: statusText,
//     url: responseURL
//   }
//   if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
// }

class HttpRequest {
  // eslint-disable-next-line no-undef
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      // baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'responseType': 'json',
        'mode': 'cors',
        'withCredentials': true
      }
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      this.queue[url] = true

      if (config.method === 'get') {
        config.data = true
      }
      config.headers['Content-Type'] = 'application/json;'
      if (store.get('token')) config.headers['Authorization'] = store.get('token')
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(({ data }) => {
      // 全局处理接口响应
      const { isSucceed, statusCode, message } = data
      if (isSucceed) {
        return Promise.resolve(data)
      } else {
        if (statusCode === 401) {
          // Message.warning('登录过期,请重新登录')
          Message.warning(message)
          router.push('login')
        }
        return Promise.resolve(data)
      }
    }, error => {
      this.destroy(url)
      if (error && error.response) {
        let res = {}
        res.isSucceed = false
        res.data = null
        res.statusCode = error.response.status
        // throwErr 捕捉服务端的http状态码 定义在utils工具类的方法
        // res.message = throwErr(error.response.status, error.response)  - -
        return Promise.resolve(res)
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.resolve({ isSucceed: false, status: '-1', message: '服务器无响应' })
      }
    })
  }
  request (options) {
    const instance = axios.create({
      // timeout: 8000
      timeout: 60 * 1000
    })
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
