
export const tool = {
  requestFullScreen (element) {
    // 判断各种浏览器，找到正确的方法
    var requestMethod = element.requestFullScreen || // W3C
      element.webkitRequestFullScreen || // Chrome等
      element.mozRequestFullScreen || // FireFox
      element.msRequestFullScreen // IE11
    if (requestMethod) {
      requestMethod.call(element)
    } else if (typeof window.ActiveXObject !== 'undefined') { // for Internet
      // Explorer
      var wscript = new ActiveXObject('WScript.Shell')
      if (wscript !== null) {
        wscript.SendKeys('{F11}')
      }
    }
  },
  formatDate (date, fmt) {
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S': date.getMilliseconds() // 毫秒
    }

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str))
      }
    }
    return fmt
  },
  padLeftZero (str) {
    return ('00' + str).substr(str.length)
  },
  GetUrlParam (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
  }
}
