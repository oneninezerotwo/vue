# vue介绍

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。

如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。

[vue官网](https://cn.vuejs.org/)
[vue官网教程](https://cn.vuejs.org/v2/guide/)

先下载`vue.js`，然后在html文件中引入

尤雨溪

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
```

`jquery.js` 提供`$或者jQuery`全局变量

`vue.js`  提供`Vue`全局变量

Vue 的核心库只关注视图层  读音view

双向数据绑定，选项data里面数据变视图跟着变

如果页面注重操作节点，jquery

如果页面数据比较多，建议用vue

- View重视图层
- 构建用户界面的框架
- 有一个完整生态支持，完整技术链
- 驱动大型项目
- MV框架 express MVC

数据驱动框架
angular(mvc) react(mv) vue(mv)

节点驱动库
```js
$(view)(.val)(model)
$(view)(.css)(model)
$(view)(.attr)(model)
```

# 开发工具

用git下载工具，然后方便我们开发vue项目
```bash
git clone https://github.com/vuejs/vue-devtools.git
```

# helloworld

1. 先实例化`Vue`,里面允许我们放很多选项(https://cn.vuejs.org/v2/api/),可以放**数据，DOM，生命钩子，资源和组合**

```js
var vm = new Vue({
  // 选项
})
```
你用jQ，第一要有数据，第二要有节点，没节点，数据没意义
```js
$.ajax()//
$(el).html(data)
//寻找节点，然后放数据
```

2. 放入必要的选项，el和data是必须要有的

el就是寻找节点（找作用域），data就是配合`{{}}`来渲染数据
```js
var vm = new Vue({
    // 选项
    data:{
        name:"lemon1"
    },
    el:"#demo"
})
```

3. 在view层的`id`为`demo`的作用域里面配合`{{}}`绑定数据

```html
<div id="demo">
    <p>{{num+1+'1'}}</p>
</div>
```

# jQuery和Vue的表达式和指令

文本值 v-text

```js
$().text();

<p>{{name}}</p>
<p v-text="name"></p>
```

属性值

`:style`和`:class`是必须接受一个对象

`:xxx`都可以接受任何变量
```js
$().attr();
$().css();
$().addClass();

<p :name="name"></p>
```

插入html结构
```js
$().html()

<div v-html="html"></div>
```


显示或者隐藏，本质是控制css，节点一直存在的，频繁切换（选项卡，加载的动画）
```js
$().show()
$().hide()

<div v-show="!bool">你好</div>
```

对节点增加或者删除，节点要不存在或者不存在
```js
$().append()
$().remove()

<div v-if="!bool">你好</div>
<div v-else>假的</div>
```

v-for放哪里，那个节点就饿跟着遍历对应的数组,支持嵌套其他指令`v-for,v-if和v-show`
```html
$().each()

<div v-for="item in arr" v-text="item.name"></div>
```

`v-on:click`简写为`@click`，就是把原生的onmousedown->@mousedown，把on改为@，把事件监听函数方法选项的`methods`里面
```html
$().on()
$().click()

<button @click="loadMore">查看更多</button>
```

`v-bind:xxx`简写为`:xxx`
```html
<p v-bind:name="name">测试</p>
<p :name="name">测试</p>
```

`v-model`是把视图的值，带回选项`data`里面，只能用在这三个标签里面

视图层影响数据层`v-model`或者`v-on:click`
```
<input v-model="name" />
<select>
<textarea>
```

# 指令使用示意图

<img src="屏幕快照 2018-10-29 下午3.38.33.png" />

