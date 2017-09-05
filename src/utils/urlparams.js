/**
 * 将对象转换成url参数串&
 * @param obj
 */
export default function (obj) {
  var list = [];
  for (var key in obj) {
    var value = obj[key];
    value = value == null ? '' : value;
    list[list.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
  }
  var r20 = /%20/g;
  return list.join('&').replace(r20, '+');
};
