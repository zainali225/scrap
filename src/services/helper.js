
const cheerio = require("cheerio")

const $ = cheerio.load('<h2 class="title">Hello world</h2>');


function cricketHdHomeData(html) {
    const $ = cheerio.load(html);
    const results = []
    $("tr", html).each(function () {
        const title = $(this).find("h2").text()
        let url = ""
        $(this).find("td").find("a").each(function () {
            let text = $(this).text()
            if ($(this).text() === "Watch") {
                url = $(this).attr("href")
            }
            // console.log('text: ', text);

        })
        if (title && url) {
            results.push({ title, url })
        }
    })

    return results

}
function cricketHdSelectChannelData(html) {
    const $ = cheerio.load(html);
    const results = []
    $("tr", html).each(function () {
        const title = $(this).find("h2").text()
        let url = ""
        $(this).find("td").find("a").each(function () {
            let text = $(this).text()
            if ($(this).text() === "Watch") {
                url = $(this).attr("href")
            }
            // console.log('text: ', text);

        })
        if (title && url) {
            results.push({ title, url })
        }
    })

    return results

}

export {
    cricketHdHomeData,
    cricketHdSelectChannelData
}