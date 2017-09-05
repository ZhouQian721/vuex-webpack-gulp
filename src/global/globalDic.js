/**
 * 全局kay:value字典数据
 * 当前html字体大小值 htmlFontSize:number
 * 滚动到顶部是否加载更多 loadMore：true
 * 差评原因数组 downReasonArr：[]
 */

var _globaldic = {};

// 默认值
_globaldic.loadMore = true;
_globaldic.downReasonArr = [];

module.exports = {
  get: function (key) {
    return _globaldic[key];
  },
  set: function (key, value) {
    _globaldic[key] = value;
  },
  clear: function (key) {
    _globaldic[key] = null;
  },
  clearAll: function () {
    _globaldic = {};
  }
};
