import Eventable from './../common/Eventable';

let eventable = new Eventable();
let name = 'icsapp';

export default {
  register: function (callback) {
    eventable.addEventListener(name, callback);
  },
  unregister: function (callback) {
    eventable.removeEventListener(name, callback);
  },
  dispatch: function (action) {
    eventable.triggerEvent(name, action);
  }
};
