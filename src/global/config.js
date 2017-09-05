var _config = {};
// 主页地址
_config['goto_home'] = function () {
  window.location.href = "";
};

export default {
  set: function (config) {
    Object.assign(_config, config);
  },
  get: function (key) {
    return _config[key];
  }
};
