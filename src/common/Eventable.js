let Eventable = function () {
  this._events = {};  //key:event name, value:function array
};

Eventable.prototype = {
  addEventListener: function (event, listener) {
    var listeners = this._events[event];

    if (listeners != null) {
      var isIn = false;
      for (let index = 0; index < listeners.length; index++) {
        if (listeners[index] == listener) {
          isIn = true;
          break;
        }
      }
      if (isIn == false) {
        listeners.push(listener);
      }
    }
    else {
      listeners = new Array();
      listeners.push(listener);
    }
    this._events[event] = listeners;
  },
  removeEventListener: function (event, listener) {
    var listeners = this._events[event];

    if (listeners != null) {
      for (let index = 0; index < listeners.length; index++) {
        if (listeners[index] == listener) {
          listeners[index] = null;
          break;
        }
      }
    }
  },
  triggerEvent: function (event) {
    let listeners = this._events[event];

    if (listeners != null) {
      for (let index = 0; index < listeners.length; index++) {
        var listener = listeners[index];
        if (listener != null) {
          listener.apply(null, Array.prototype.slice.call(arguments, 1));
        }
      }
    }
  }
};

export default Eventable;

