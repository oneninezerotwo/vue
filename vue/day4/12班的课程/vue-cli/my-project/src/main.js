import Vue from 'vue'
import App from './App.vue'
// 引入路由对象
import router from './router.js'
// 引入状态管理对象
import store from './store.js'
// ajax库
// import axios from 'axios'
// weui样式
import 'weui'
// import $ from 'jquery'

// Vue继承jquery的方法
// Vue.prototype.$ = $
// Vue继承axios方法
// Vue.prototype.$axios = axios

// 发布的时候，代码错误不提醒
Vue.config.productionTip = false
// eslint
new Vue({
  el: "#app",
  // 挂载路由实例
  router,
  // 配置状态管理
  store,
  // 渲染App组件
  render: h => h(App),
})
// .$mount('#app')
