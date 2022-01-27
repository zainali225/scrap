
const cheerio = require("cheerio")

const $ = cheerio.load('<h2 class="title">Hello world</h2>');


function getTags(html) {
    const $ = cheerio.load(html);
    $(".CSSTableGenerator",html).each(()=>{

    })

}