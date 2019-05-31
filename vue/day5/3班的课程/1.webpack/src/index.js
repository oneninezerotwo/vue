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
    const Vue = require('vue');
    // console.log(Vue.default)
    new Vue.default({
        el: "#demo",
        data: {
            title: 'vue'
        },
        // 120k
        template:`
            <p>hello world</p>
        `,
        // render(c) {
        //     return c('p', null, [this.title])
        // }
    })

    // const Vue = require('vue/dist/vue.js');
    // new Vue({
    //     el: "#demo",
    //     data: {
    //         title: 'vue'
    //     },
    //     template:`
    //         <p>hello world</p>
    //     `,
    //     render(c) {
    //         return c('p', null, [this.title])
    //     }
    // })
}