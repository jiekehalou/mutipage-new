import HttpRequest from '@/libs/axios'
// const baseUrl = process.env.TARGET_ENV === 'localDev' ? '' : process.env.VUE_APP_API_URL
// import config from '@/config'
// const baseUrl = process.env.VUE_APP_API_URL
// console.log(process.env, 'OPPS')
// console.log(baseUrl, 'baseUrl')
const baseUrl = ''
const axios = new HttpRequest(baseUrl)
export default axios
