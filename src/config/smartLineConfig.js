// const BASEURL = 'http://192.168.201.103:28083/v1/api/';
// const BASEURL = '/api/';
const BASEURL = process.env.VUE_APP_BASE_API // 基础模块；
const RELEASEURL = process.env.VUE_APP_RELEASE_API // 数字化放行；
const SOCKETURL = process.env.VUE_APP_ADSB_SCOKET // 地图飞机socket;
const GISMAPURL_GREEN = 'http://192.168.0.194:6080/arcgis/rest/services/airway_green/MapServer' // 专题图绿色ArcGIS;
const GISMAPURL_BROWN = 'http://192.168.0.194:6080/arcgis/rest/services/airway_brown/MapServer' // 专题图绿色ArcGIS;
const GISMAPURL_WHITE = 'http://192.168.0.194:6080/arcgis/rest/services/airway_white/MapServer' // 专题图绿色ArcGIS;
const GEOSERVERURL = 'http://192.168.0.194:8099/geoserver/hyzh/wms' // 专用底图GeoServer;
const WEATHERFILTURL = 'http://192.168.0.194:8090/' // 气象文件地址;
const SOCKETURL_FOCUSFLY = process.env.VUE_APP_FOCUSFLY_SOCKETURL // 关注航班告警socket;
const VUE_APP_FOCUSFLYSTATUS_SOCKETURL = process.env.VUE_APP_FOCUSFLYSTATUS_SOCKETURL // 关注航班告警socket根据用户修改;
const SOCKETURL_ALTN = process.env.VUE_APP_ALTN_SOCKETURL // 备降场分析获取备降场socket;
const TIMEOUT = 1000 * 30
const SOCKETTIMEINTERVAL = 1000 * 30 // socket重连接时间；
const dowloadMapType = 'GeoServer' // 毕传参数智能传递可选值（ArcGIS 或 GeoServer）
export { BASEURL, RELEASEURL, WEATHERFILTURL, TIMEOUT, GISMAPURL_GREEN, GISMAPURL_BROWN, GISMAPURL_WHITE, GEOSERVERURL, SOCKETTIMEINTERVAL, SOCKETURL, SOCKETURL_FOCUSFLY, VUE_APP_FOCUSFLYSTATUS_SOCKETURL, SOCKETURL_ALTN, dowloadMapType }
