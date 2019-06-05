const fs = require('fs');
const { JSDOM } = require('jsdom');
fs.readFile('./meituan.html',(err,data)=>{
    // console.log(data.toString());
    const html = data.toString();
    // 在node环境下生成一个dom
    const { window } = new JSDOM(html);
    // console.log(window);
    const $ = require("jquery")(window);
    // $('style')
    // console.log($('style').eq(0).html());
    let style = '';
    $('style').each((index,item)=>{
        style+=$(item).html();
        console.log($(item).html());
    })
    fs.writeFile('./mt.css',style,()=>{
        console.log('write success');
    })
    fs.writeFile('./mt.html',`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <link rel="stylesheet" href="./mt.css" />
        </head>
        <body>
            <div id="demo"></div>
            <script src="../../js/vue.js"></script>
            <script>
                new Vue({
                    el:"#demo",
                    template:${'`'}
                        <p>123</p>
                    ${'`'}
                })
            </script>
        </body>
        </html>
    `,()=>{
        console.log('write success');
    })
})

// html -> css
// html -> html

// -> vue