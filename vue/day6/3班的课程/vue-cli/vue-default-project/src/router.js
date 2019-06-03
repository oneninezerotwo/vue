import Vue from 'vue'
import VueRouter from 'vue-router'
// const Home = require('./views/Home.vue')
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'

import ChildA from './views/Detail/ChildA.vue'
import ChildB from './views/Detail/ChildB.vue'
Vue.use(VueRouter)

const routes = [
    // 如果此时路径为/detail/:id(可变化的值),加载组件Detail
    {
        path: '/detail/:id', component: Detail, children: [
            { path: 'childa', component: ChildA },
            { path: 'childb', component: ChildB }
        ]
    },
    // 如果此时路径为/home,注册组件Home
    { path: '/home', component: Home }
]

// VueRouter是vue-router提供的
export default new VueRouter({
    // 去掉# 美观 浏览器支持，服务器端运行
    // mode: 'history',
    routes // short for `routes: routes`
})