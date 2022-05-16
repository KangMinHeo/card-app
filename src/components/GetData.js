const axios = require("axios");
const cherrio = require("cheerio");
const log = console.log;

const getHtml = async () => {
    try{
        return await axios.get("https://sports.news.naver.com/kbaseball/record/index?category=kbo");
    } catch (error) {
        console.error(error);
    }
};

getHtml().then(html => {
    let divList = [];
    const $ = cherrio.load(html.data);
    const $bodyList = $("div#container div.tbl_box tbody#regularTeamRecordList_table").children("tr");

    $bodyList.each(function(i, elem) {
        divList[i] = {
            title: $(this).find("td.tm span").text(),
            image: $(this).find("td.tm img").attr("src")
        };
    });

    const data = divList.filter(n => n.title);
    return data;
})
.then(res => log(res))