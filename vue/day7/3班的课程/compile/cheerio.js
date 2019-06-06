const cheerio = require('cheerio');
const fs = require('fs');
fs.readFile('./source.html',(err,data)=>{
    // console.log(data.toString());
    const html = data.toString();
    const $ = cheerio.load(html);
    let style = '';
    $('style').each((index,item)=>{
        console.log($(item).html());
        style += $(item).html();
        // console.log(item)
    })

    fs.writeFile('./mt.css',style,()=>{
        console.log('success')
    })

    // vue模板
    fs.writeFile('./vue.html',`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <link rel="stylesheet" href="mt.css" />
        </head>
        <body>
            <div id="demo"></div>
            <script src="../../../js/vue.js"></script>
            <script>
                new Vue({
                    el:"#demo",
                    template:${'`'}
                        <div>hello world</div>
                    ${'`'}
                })
            </script>
        </body>
        </html>
    `,()=>{
        console.log('success')
    })
    fs.writeFile('./vue.vue',`
        <template>
        
        </template>
        <script>
        export default {
            
        }
        </script>
        <style scoped>
            ${style}
        </style>
    `,()=>{
        console.log('success')
    })
})
