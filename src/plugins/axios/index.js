import service from './axios';

const Qs = require('qs');
// 根据请求参数需求组装出不同的参数类型, 默认json格式
function setParam(type, param) {
  const data = {
    header: '',
    params: null,
  };
  if (type === 'json') {
    data.header = 'application/json';
    data.params = param;
  } else {
    data.header = 'application/x-www-form-urlencoded';
    data.params = Qs.stringify(param);
  }
  return data;
}

/**
 * 统一请求方法
 * @author yang
 * @date 2019/10/10
 * @param { string} method 请求方法
 * @param { string } api 请求地址
 * @param { string } paramType  请求参数格式 json or form
 * @param { Object } params 请求参数
 * * */
function reqMethod(method, api, paramType, params = {}) {
  const reqParams = setParam(paramType, params);
  return service({
    method,
    url: api,
    headers: {
      'Content-Type': reqParams.header,
    },
    data: reqParams.params,
  });
}

/**
 * axios mode
 * @author yang
 * @date 2019/4/8
 * @param url request api
 */
export default {
  // get
  get(api, params = {}) {
    return service({
      method: 'get',
      url: api,
      params,
    });
  },
  // post
  post(api, params = {}, paramType) {
    return reqMethod('post', api, paramType, params);
  },
  // put
  put(api, params = {}, paramType) {
    return reqMethod('put', api, paramType, params);
  },
  // delete
  del(api, params = {}, paramType) {
    return reqMethod('delete', api, paramType, params);
  },
  // 导出文件
  file(api, params, method = 'get') {
    return service({
      method,
      url: api,
      responseType: 'blob',
      params,
    });
  },
};
