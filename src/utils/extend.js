var class2type = (function () {
  var class2type = {};
  var arr = "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ");
  arr.forEach(function (name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });
  return class2type;
})();

var _type = function (obj) {
  if (obj == null) {
    return obj + "";
  }
  return typeof obj === "object" || typeof obj === "function" ?
  class2type[{}.toString.call(obj)] || "object" :
    typeof obj;
};

var isArray = Array.isArray;

var isFunction = function (obj) {
  return _type(obj) === "function";
};

var isPlainObject = function (obj) {
  return _type(obj) === 'object';
};

var extend = function () {
  var src, copyIsArray, copy, name, options, clone,
    target = arguments[0] || {},
    i = 1,
    length = arguments.length,
    deep = false;

  // Handle a deep copy situation
  if (typeof target === "boolean") {
    deep = target;

    // skip the boolean and the target
    target = arguments[i] || {};
    i++;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if (typeof target !== "object" && !isFunction(target)) {
    target = {};
  }

  // extend jQuery itself if only one argument is passed
  if (i === length) {
    target = this;
    i--;
  }

  for (; i < length; i++) {

    // Only deal with non-null/undefined values
    if (( options = arguments[i] ) != null) {

      // Extend the base object
      for (name in options) {
        src = target[name];
        copy = options[name];

        // Prevent never-ending loop
        if (target === copy) {
          continue;
        }

        // Recurse if we're merging plain objects or arrays
        if (deep && copy && ( isPlainObject(copy) ||
          ( copyIsArray = isArray(copy) ) )) {

          if (copyIsArray) {
            copyIsArray = false;
            clone = src && isArray(src) ? src : [];

          } else {
            clone = src && isPlainObject(src) ? src : {};
          }

          // Never move original objects, clone them
          target[name] = extend(deep, clone, copy);

          // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
};

export default extend;
