# Vue-cli

`command-line interface`命令行界面

Vue + Webpack + Vue-loader + Loader = Vue-cli

Vue的开发环境的集合包

在正常工作中，我开发Vue都会一键安装它

# Getting Started

全局安装，产生vue.cmd命令
```js
Install:
npm install -g @ i
```
# OR
```js
yarn global add @vue/cli
Create a project:

# 使用以下命令创建项目，你可以选择默认设置，也可以选择高级设置，获取需要的配置
vue create my-project
# OR
vue ui
```

> TSLint + TypeScript

# 创建第一个组件

- node_module 脚手架的所有依赖文件夹
- public 发布之后，跟index.html同一个url下的资源文件，主页的模板，图片，logo，不会打包进去JS
- src 开发的文件夹（一般开发只用修改该文件夹）
    - assets 开发的图片资源文件打包进JS
    - components 存放vue后缀的单文件组件 公共组件，复用组件
    - views 存放vue后缀的单文件组件 页面组件配合 vue-router使用的
    - App.vue是父组件
    - main.ts是主逻辑文件，入口文件
    - registerServiceWorker pwa使用的
    - router 路由配置文件
    - store vuex状态管理
- dist 发布的文件夹

# vue-router

vue vue-router vuex vue-devtools

实现vue的路由，express路由里面出现过，

|协议|域名|端口|路由||
|-|-|-|-|-|
|http://|localhost:|3000|/abc|后端|
|http://|localhost:|3000|/abc.html|前端|

后端路由，负责处理请求和响应

前端路由，负责是页面的切换和跳转
```js
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
```
进入`/foo`,切换foo组件，反之进入`/bar`切换到bar组件

实现单页面应用程序，从头到尾我们只在一个页面下做跳转

如果`/foo`切换到`/bar`的话，foo组件会销毁，bar组件会创建