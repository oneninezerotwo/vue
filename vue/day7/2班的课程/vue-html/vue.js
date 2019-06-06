const fs = require('fs');
const cheerio = require('cheerio');
fs.readFile('./Detail.vue',(err,data)=>{
    // console.log(data.toString());
    let html = data.toString();
    const $ = cheerio.load(html);
    
    console.log($('template'))
})