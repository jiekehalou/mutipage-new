
import { Message } from 'iview'
import { SOCKETTIMEINTERVAL } from '@/config/smartLineConfig.js'
class FlyWebSocket {
  constructor (SOCKETURL, cb, manual = false) {
    this.webSocketTimer = null
    this.lockReconnect = false
    this.SOCKETTIMEINTERVAL = SOCKETTIMEINTERVAL
    this.ws = null
    this.cb = cb
    this.manual = manual// 手否是手动关闭
    this.SOCKETURL = SOCKETURL
    this.init()
  }
  init () {
    if (!this.SOCKETURL) return
    if ('WebSocket' in window) {
      try {
        this.ws = new WebSocket(this.SOCKETURL)
      } catch (error) {
        // console.log(error)
      }
      this.ws.onopen = () => {
        // this.ws.send("发送数据");
        // console.log('this.SOCKETURL', this.SOCKETURL)
        this.lockReconnect = true// 已经连接
      }
      this.ws.onmessage = (evt) => {
        var received_msg = evt.data
        if (this.cb && typeof (this.cb) === 'function') {
          this.cb(received_msg, this.ws)
        }
      }
      this.ws.onerror = () => {
        this.lockReconnect = false// 连接失败
        this.ws && this.ws.close && this.ws.close()
        this.ws = null
      }
      this.ws.onclose = () => {
        if (!this.manual) this.reconnect(this.lockReconnect)
      }
      window.onbeforeunload = () => {
        this.manual = true
        this.ws && this.ws.close()
      }
    } else {
      // 浏览器不支持 WebSocket
      Message.info('您的浏览器不支持 WebSocket!')
    }
  }
  reconnect (lockReconnect) {
    if (lockReconnect) return
    this.lockReconnect = true
    this.webSocketTimer && clearTimeout(this.webSocketTimer)
    this.webSocketTimer = setTimeout(() => { // 没连接上会一直重连，设置延迟避免请求过多
      this.init()
    }, this.SOCKETTIMEINTERVAL)
  }
}
export { FlyWebSocket }
