import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  // 提供$router操控路由
  router,
  // 提供$store操控仓库
  store,
  render: (h) => h(App),
}).$mount('#app');
