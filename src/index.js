// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import _config from './global/config';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

require('./assets/style/common.less');

Vue.config.productionTip = false;

/* eslint-disable no-new */

(function (window) {
  var vm;
  var myApp = function (options) {
    var defaults = {
      config: {}
    };

    Object.assign(defaults, options);

    _config.set(defaults.config);
    Vue.use(ElementUI);

    vm = new Vue({
      el: '#app',
      store,
      router,
      template: '<App/>',
      components: {
        App
      }
    });
  };
  window.myApp = myApp;
})(window);

