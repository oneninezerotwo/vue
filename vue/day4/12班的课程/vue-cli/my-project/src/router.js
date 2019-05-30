import Vue from 'vue'
import VueRouter from 'vue-router'
// 模块化必须显式使用Vue.use来加载路由功能
Vue.use(VueRouter)

// 详情页
import Detail from './pages/Detail.vue'
// 首页
import Home from './pages/Home.vue'
// 首页下的嵌套组件
import Wechat from './pages/Home/Wechat.vue'
import Discover from './pages/Home/Discover.vue'
import Contact from './pages/Home/Contact.vue'
import Mine from './pages/Home/Mine.vue'


// 搜索页
import Search from './pages/Search.vue'

// 定义路由
const routes = [
    {
        path: '/home', component: Home, name: 'home',
        children: [
            { path: 'wechat', component: Wechat, name: 'wechat', },
            { path: 'contact', component: Contact, name: 'contact', },
            { path: 'discover', component: Discover, name: 'discover', },
            { path: 'mine', component: Mine, name: 'mine', }
        ]
    },
    { path: '/detail/:id', component: Detail, name: 'detail' },
    { path: '/search', component: Search, name: 'search' },
    // 设置默认重定向
    { path: '/', redirect: '/home/wechat' }
]
// 实例化路由
const router = new VueRouter({
    routes
})

// 暴露路由对象，为后续挂载容器做准备
export default router