import Vue from 'vue'
import App from './App.vue'
import router from './router'

// weui.css
import 'weui'

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
