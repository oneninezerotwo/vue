console.log('test');
console.log(process.env.NODE_ENV);
const bool = !0;


if (process.env.NODE_ENV === 'development') {
    // PC端为主
    const $ = require('jquery');
    $('html').html('hello world').css({
        color: 'red'
    })
} else {
    // Mobile端为主
    // const $ = require('zepto');
    // $('html').html('hello world').css({
    //     color: 'red'
    // }) 
    const css = require('./index.css');
    const png = require('./1.png');
    console.log(css);
    document.querySelector('#demo').innerHTML = `<p>hello world2</p><img src="${png}" />`
   
}

// 100k
// 150k
