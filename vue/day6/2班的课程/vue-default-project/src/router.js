import Vue from 'vue'
import VueRouter from 'vue-router'
// 显示使用这个VueRouter
Vue.use(VueRouter)
import Panel from './views/Panel'
import Detail from './views/Detail'
// 定义路由规则
const routes = [
  { path: '/home', component: Panel },
  { path: '/detail', component: Detail }
]
// modulo.exports commone.jsa规范 require
// ES6的规范
export default new VueRouter({
  routes // (缩写) 相当于 routes: routes
})