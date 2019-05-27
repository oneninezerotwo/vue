// console.log(1)
// node第三方模块
// const $ = require("jquery");
// const Vue = require("vue");
const Vue = require("vue/dist/vue.js");



// 非js文件，需要用loader来处理
require("./index.css");
// $("body").html("hello world");

// console.log(Vue);

// 虚拟DOM 操作字符串是非常复杂的，对象
// 字符串模板
/* <div>
    <p name="abcdef">{{this.name}}</p>
</div> */
// 对象模板
// let vnode = createElement('div', null, [
//     createElement('p', {
//         name: "abcdef"
//     }, [this.name])
// ]);
// 把字符串转化对象
// 内存占用大
// 空间换时间
// 生命周期
// vnode 内存
// 真实DOM 硬盘

// jquery

// vue react

// cpu去渲染

// js->gpu
// VR AR

// 占内存的对象，把字符串模板转为对象
// 对象去做对比，找出最优解，来更新真实DOM

// let vnode = {
//     tag: "div",
//     children: [
//         {
//             tag: "p",
//             data: { name: "abcdef" },
//             children: [{
//                 tag: undefined,
//                 text: "yao"
//             }]
//         }
//     ]
// }

// let vnode2 = {
//     tag: "div",
//     children: [
//         {
//             tag: "p",
//             data: { name: "abcdef" },
//             children: [{
//                 tag: undefined,
//                 text: "lin"
//             }]
//         }
//     ]
// }

// vnode 比较 vnode2
// replaceChild
// vnode.children[0].children[0].text = "lin"
// new Vue.default({
//     el: "#demo",
//     data: {
//         name: "yao"
//     },
//     render(createElement) {
//         let vnode = createElement('div', null, [
//             createElement('p', {
//                 name: "abcdef"
//             }, [this.name])
//         ]);
//         vnode.tag = "header"
//         console.log(vnode);
//         return vnode;
//     }
// })
// let template = require("./index.html");
import template from "./index.html";
import xheader from "./xheader.vue";
new Vue({
    el: "#demo",
    template,
    data: {
        name: "yao"
    },
    // 注册组件
    components:{
        xheader
    }
})