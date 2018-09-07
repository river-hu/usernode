var express = require('express');
var router = express.Router();
var url = '';
/* GET users listing. */
router.get('/', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");

    var superagent = require('superagent');
    var cheerio = require('cheerio');
    var send = res;
    const reptileUrl = "http://www.pmtown.com/archives/category/%E6%97%A9%E6%8A%A5"; //泡面早班车早报页面地址

    superagent.get(reptileUrl).end(function (err, res) {
        // 抛错拦截
        if (err) {
            return Error(err);
        }
        /**
        * res.text 包含未解析前的响应内容
        * 我们通过cheerio的load方法解析整个文档，就是html页面所有内容，可以通过console.log($.html());在控制台查看
        */
        let $ = cheerio.load(res.text);
        // 以下代码与页面dom结构有关
        $('.item-title a').each(function (i, elem) {  //获取最新的新闻页面的地址
            if (i == 0) {
                console.log($(elem).attr("href"))
                url = $(elem).attr("href");
                getnew($(elem).attr("href"))
            }

        });
    });
    function getnew(url) { // 获取当前页面的新闻
        superagent.get(url).end(function (err, res) {
            // 抛错拦截
            if (err) {
                return Error(err);
            }
            /**
            * res.text 包含未解析前的响应内容
            * 我们通过cheerio的load方法解析整个文档，就是html页面所有内容，可以通过console.log($.html());在控制台查看
            */
            let $ = cheerio.load(res.text);
            let data = [{ data: "【泡面早班车】" }, { data: "【今日头条】" }];
            // 以下代码与页面dom结构有关
            $('.entry-content h2').each(function (i, elem) {
                data.push({
                    data: $(elem).text()
                })
            });
            data.push({
                data: "【周边新闻】"
            })
            $(".entry-content h1+p").each(function (i, elem) {
                let str = '';
                if (i == 0) {
                    // $(elem).text()
                    let arr = $(elem).text().split("\n");
                    for (let j in arr) {
                        data.push({
                            data: arr[j]
                        })
                    }

                }

                if (i == 1) {
                    data.push({
                        data: "【融资收购】"
                    })
                    // $(elem).text()
                    let arr = $(elem).text().split("\n");
                    for (let j in arr) {
                        data.push({
                            data: arr[j]
                        })
                    }
                }

            })
            let senddata = {
                data: data,
                url: url
            }
            send.send(senddata)
        });
    }


});

module.exports = router;
