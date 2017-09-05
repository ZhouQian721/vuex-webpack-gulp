/**
 * 是否为空值
 * @param val
 * @returns {boolean}
 * @private
 */
function _isNull(val) {
  return val === null || val === undefined || val === '';
}

/**
 * 是否为无效输入（全部为空白）
 * @param val
 * @private
 */
function _isEmptyInput(val) {
  let res = val.replace(/&nbsp;/g, '').replace(/<br>/g, '').replace(/\s/g, '');
  return res.length === 0;
}

export default {
  isNull: _isNull,
  isEmptyInput: _isEmptyInput
};
