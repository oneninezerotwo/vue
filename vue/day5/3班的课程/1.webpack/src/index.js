console.log("yao");
const env = {
    mobile: true
}
// if (process.env.NODE_ENV === 'development') {
//     const $ = require('jquery');
//     $('body').html('hello world');
// } else {
//     document.querySelector('body').innerHTML = 'hello world';
// }


if (!env.mobile) {
    const $ = require('jquery');
    $('#demo').html('jquery');
} else {
    // const Vue = require('vue');
    // console.log(Vue.default)
    // new Vue.default({
    //     el: "#demo",
    //     data: {
    //         title: 'vue'
    //     },
    //     // 120k
    //     template:`
    //         <p>hello world</p>
    //     `,
    //     // render(c) {
    //     //     return c('p', null, [this.title])
    //     // }
    // })


}



// const {
//     render,
//     define,
//     html
// } = require('omi');

// console.log(Omi)

// const eno = require('./eno.omi.jsx');
// define('my-eno', eno.default)
// console.log(eno);

// omi-loader
// 单文件组件
const Vue = require('vue/dist/vue.js');
// const template = require('./demo.html')
// require('./index.css')
// Vue.extend();创建组件
// const eno = require('./components/eno.vue');
import eno from './components/eno.vue'
console.log(eno);
new Vue({
    el: "#demo",
    data: {
        title: 'vue',
        img: require('./1.jpg')
    },
    template:`
        <div>
            <eno></eno>
        </div>
    `,
    components:{
        eno
    }
    // render(c) {
    //     return c('p', null, [this.title])
    // }
})


// render(html`<my-eno />`, '#demo')