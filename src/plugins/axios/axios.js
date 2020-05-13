/**
 * axios interceptor configs
 * @author yang
 * @date 2019/4/9
 */
import axios from 'axios';
import { Toast } from 'antd-mobile';
import configs from './config';

const Axios = axios.create();
// axios 请求基础设置
Axios.defaults.baseURL = configs.baseURL;
Axios.defaults.timeout = configs.timeout;
Axios.defaults.headers = configs.header;

// 请求拦截器
Axios.interceptors.request.use((config) => config);
// 响应拦截器
Axios.interceptors.response.use((response) => {
  const { data } = response;
  if (!data.success) {
    switch (data.code) {
      case 210:
        break;
      case 431:
        break;
      case 401:
        break;
      case 432:
        break;
      default:
        break;
    }
    Toast.fail(data.msg || '未知错误');
  }
  return data;
}, (err) => {
  let msg = '';
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        msg = '请求错误';
        break;
      case 401:
        msg = '未授权，请登录';
        break;
      case 403:
        msg = '拒绝访问';
        break;
      case 404:
        msg = `请求地址出错: ${err.response.config.url}`;
        break;
      case 408:
        msg = '请求超时';
        break;
      case 500:
        msg = '服务器内部错误';
        break;
      case 501:
        msg = '服务未实现';
        break;
      case 502:
        msg = '网关错误';
        break;
      case 503:
        msg = '服务不可用';
        break;
      case 504:
        msg = '网关超时';
        break;
      case 505:
        msg = 'HTTP版本不受支持';
        break;
      default:
        msg = '请求失败！';
        break;
    }
  }
  Toast.fail(msg);
  return Promise.reject(err);
});
export default Axios;
