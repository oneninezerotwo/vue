// console.log('test');
// console.log(process.env.NODE_ENV);
// const bool = !0;
// if (process.env.NODE_ENV === 'development') {
//     // PC端为主
//     const $ = require('jquery');
//     $('html').html('hello world').css({
//         color: 'red'
//     })
// } else {
//     // Mobile端为主
//     // const $ = require('zepto');
//     // $('html').html('hello world').css({
//     //     color: 'red'
//     // }) 
//     const css = require('./index.css');
//     const png = require('./1.png');
//     console.log(css);
//     document.querySelector('#demo').innerHTML = `<p>hello world2</p><img src="${png}" />`

// }

// var $ = require('jquery')
// $('html').html('hello world').css({
//     color: 'red'
// })

// 100k
// 150k

var status = {
    mobile: true
}

if (status.mobile) {
    // var Vue = require('vue')
    var Vue = require('vue/dist/vue')
} else {
    var $ = require('jquery')
}
console.log(Vue)
// common.js 经过删改的版本 没有template 只留下render 120k
// webpack去做
// new Vue.default({
//     el:"#demo",
//     data:{
//         title: 'hello world'
//     },
//     // render(c){
//     //     return c('p',null,this.title)
//     // },
//     // webpack会处理template把它转为render
//     template:`
//         <p>hello world</p>
//     `
// })

var template = require('./demo.html');
new Vue({
    el: "#demo",
    data: {
        title: 'hello world',
        src: require('./1.png')
    },
    // render(c){
    //     return c('p',null,this.title)
    // },
    // webpack会处理template把它转为render
    template
})