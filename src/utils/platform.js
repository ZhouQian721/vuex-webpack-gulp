/*
 * 使用环境
 */
let _u = navigator.userAgent.toLowerCase();
let _app = navigator.appVersion;

// 内核
let _getCore = function () {
  return {
    trident: _u.indexOf('trident') > -1, //IE内核
    webKit: _u.indexOf('applewebKit') > -1, //苹果、谷歌内核
    mobile: !!_u.match(/applewebKit.*mobile.*/), //是否为移动终端
    android: _u.indexOf('android') > -1 || _u.indexOf('adr') > -1, //android终端
    iPad: _u.indexOf('ipad') > -1, //是否iPad
    weixin: _u.indexOf('micromessenger') > -1, //是否微信 （2015-01-22新增）
  };
};

// 是否为ios
let _isIos = function () {
  if (/(iphone|ipad|ipod|ios)/i.test(_u)) {
    return true;
  }
  return false;
};

// 是否为安卓
let _isAndriod = function () {
  if (/(android)/i.test(_u)) {
    return true;
  }
  return false;
};

// 是否为chrome
let _isChrome = function () {
  if (_u.indexOf('crios') !== -1 || _u.indexOf('chrome') !== -1) {
    return true;
  }
  return false;
};

// 是否为qq浏览器
let _isQQ = function () {
  if (_u.indexOf('mqqbrowser') !== -1) {
    return true;
  }
  return false;
};

// 是否为uc浏览器
let _isUC = function () {
  if (_u.indexOf('ucbrowser') !== -1) {
    return true;
  }
  return false;
};

export default {
  isIos: _isIos,
  isAndriod: _isAndriod
}

