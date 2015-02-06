/**
 * Created by hanzhendong .
 */
$F.regist("ServerURL", function () {

    var host = 'http://192.168.1.24:8000';

    this.SERVER_URL = {
        //获取最新的地址
        latestUrl: host + "/mapi/home/get/latest",
        /*获取推荐地址*/
        recommendUrl: host + "/mapi/home/get/recommend",

        newsUrl: host + "/mapi/home/get/news",

        hotnessUrl: host + "/mapi/home/get/hotness"

    };

});