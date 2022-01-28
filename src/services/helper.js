
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
        let title = "";
        let url = ""
        if ($(this).text().includes("Watch")) {
            title = $(this).text().replace("Watch", "")
            url = $(this).find("td").find("a").attr("href")
        }

        if (title && url) {
            results.push({ title, url })
        }
    })

    return results

}
function getCricketHdIframe(html) {
    const $ = cheerio.load(html);
    let iframe = ""
    $("textarea", html).each(function () {
        let iframeTag = $(this).text()
        if (iframeTag.includes("<iframe")) {
            $1 = cheerio.load(iframeTag)
            iframe = $1("iframe", iframeTag).attr("src")

        }
    })

    return iframe

}

export {
    cricketHdHomeData,
    cricketHdSelectChannelData,
    getCricketHdIframe
}