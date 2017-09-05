/**
 * 对象或数组遍历
 * @param obj
 * @param callback
 * @returns {*}
 */
var each = function (obj, callback) {
  var length, i = 0;

  if (isArray(obj)) {
    length = obj.length;
    for (; i < length; i++) {
      if (callback.call(obj[i], i, obj[i]) === false) {
        break;
      }
    }
  } else {
    for (i in obj) {
      if (callback.call(obj[i], i, obj[i]) === false) {
        break;
      }
    }
  }

  return obj;
};

export default each;

