import _Api from './api';
import _axios from 'axios';

// 接口跟路径
let baseUrl = 'http://';
/**
 * http 请求
 * @param 接口名称（配置文件中）
 * @param get请求参数实体
 * @param post请求参数实体
 * @param 成功回调
 * @param 失败回调
 * @returns {*}
 *
 */
export default function (name, getParams, bodyParams, success, error) {

  let commonParams = {};

  let apiConfig = _Api[name];
  if (!apiConfig) {
    return error('not found config.[api:' + name + ']');
  }

  // 请求配置对象
  let reqObj = {};
  typeof(apiConfig) == 'string' ? reqObj.url = apiConfig : reqObj = apiConfig;
  reqObj.method = reqObj.method || 'GET';

  // 参数整合
  if (getParams) {
    Object.assign(getParams, commonParams);
  } else {
    getParams = commonParams;
  }

  _axios({
    method: reqObj.method,
    url: baseUrl + reqObj.url,
    params: getParams,
    data: bodyParams
  }).then(function (response) {
    if (response.data && response.data.code == 0) {
      success && success(response.data);
    } else {
      console.log("req失败", response);
      error && error(response);
    }
  }).catch(function (err) {
    console.log("req失败", err);
    error && error(err);
  });
}

