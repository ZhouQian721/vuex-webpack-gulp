/**
 * dom设置
 * @private
 */

/**
 * 设置domstyle
 * @param id 元素id
 * @param name css属性名
 * @param val css属性值
 * @private
 */
let _setStyleById = function (id, name, val) {
  document.getElementById(id).style[name] = val;
};

/**
 * 设置dom样式属性
 */
let _setStyle = function (dom, name, val) {
  dom.style[name] = val;
};

/**
 * 为dom添加class
 * @param dom
 * @param sClass
 * @private
 */
let _addClass = function (dom, sClass) {
  if (dom.className) {
    if (!hasClass(obj, sClass)) {
      dom.className += (' ' + sClass);
    }
  } else {
    dom.className = sClass;
  }
};

/**
 * 移除dom某class
 */
let _removeClass = function (obj, sClass) {
  var re = new RegExp('\\b' + sClass + '\\b');
  if (hasClass(obj, sClass)) {
    obj.className = obj.className.replace(re, '').replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
  }
};

/**
 * dom是否含有某class
 */
let _hasClass = function (dom, sClass) {
  var re = new RegExp('\\b' + sClass + '\\b');
  return re.test(dom.className);
};

/**
 * 切换dom某class
 */
let _toggleClass = function (dom, e) {
  return this.hasClass(dom, e) ? this.removeClass(dom, e) : this.addClass(dom, e)
};

/**
 * 设置dom属性值
 */
let _attr = function (dom, k, v) {
  if (arguments < 2) return;
  if (!v) {
    return dom.getAttribute(k);
  } else {
    dom.setAttribute(k, v);
  }
};

export default {
  setStyleById: _setStyleById,
  setStyle: _setStyle,
  addClass: _addClass,
  removeClass: _removeClass,
  hasClass: _hasClass,
  toggleClass: _toggleClass,
  attr: _attr
};
