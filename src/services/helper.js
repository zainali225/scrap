
const cheerio = require("cheerio")
import { fetchAddress } from '@api/methods'
import { Dimensions } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'



const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

export const wp = float => WIDTH * float / 100
export const hp = float => HEIGHT * float / 100
export const sHeight = getStatusBarHeight()


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

async function cricketHdSelectChannelData(url) {

    const html = await fetchAddress(url)
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

function freeStreamsHomeData(html) {
    const $ = cheerio.load(html);
    const results = []
    $("tr", html).each(function () {
        const title = $(this).find(".event-title").text()
        // console.log('title: ', title);
        let icon = $(this).find("td").find("img").attr("src")
        let time = $(this).find("td").text()

        let urls = []
        $(this).find("td").find("a").each(function () {

            let obj = {
                title: $(this).text(),
                url: $(this).attr("href")
            }
            urls.push(obj)
            // console.log('text: ', text);

        })
        if (title && icon && time && !!urls.length) {
            results.push({ title, urls, time, icon })
        }
        else {
            // console.log(title, icon, time, urls)
        }
    })

    return results

}

function getFreeStreamsIframe(html) {
    const $ = cheerio.load(html);

    let iframe = ""
    $(".entry-content", html).each(function () {
        let iframeTag = $(this).text()
        console.log('iframeTag: ', iframeTag);

    })

    return iframe

}



export {
    cricketHdHomeData,
    cricketHdSelectChannelData,
    getCricketHdIframe,
    freeStreamsHomeData,
    getFreeStreamsIframe
}