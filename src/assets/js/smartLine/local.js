
// 本地存储和获取的方法

const storage = window.sessionStorage

export default {
  get (name) {
    // 默认存储为对象格式
    var result = storage.getItem(name)
    try {
      result = (typeof result === 'string') ? JSON.parse(result) : result
    } catch (error) {
      console.log('解析失败，数据不是json格式')
      result = ''
    }
    return result
  },
  set (name, item) {
    item = typeof item === 'string' ? item : JSON.stringify(item)
    storage.setItem(name, item)
  },
  remove (name) {
    storage.removeItem(name)
  },
  clear () {
    storage.clear()
  },
  jump (href) {
    // var link = href ? href : window.location.href;
    // this.set("jumplink", {backlink:link});
    window.location.href = process.env.VUE_APP_LOGIN
  }
}
