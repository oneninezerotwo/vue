import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import './registerServiceWorker';

Vue.prototype.$axios = axios;
// Vue.prototype.$ = jquery

Vue.config.productionTip = false;

new Vue({
  // 会在组件的实例里面有$router和$route
  router,
  // $store
  store,
  render: (h) => h(App),
}).$mount('#app');
