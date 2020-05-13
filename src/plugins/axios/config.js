/**
 * axios request configs
 * @author yang
 * @date 2019/4/8
 * @param {String} baseURL  request url
 * @param {Object} header   request header
 * @param {Object} timeout  Timeout
 */
export default {
  baseURL: 'http://yapi.gyang.live/mock/15/api/app', // 请求地址
  header: { 'Content-Type': 'application/json;charset=UTF-8' },
  timeout: 600000,
};
