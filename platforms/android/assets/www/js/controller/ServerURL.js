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
        /*新闻地址*/
        newsUrl: host + "/mapi/home/get/news",
        /*最热地址*/
        hotnessUrl: host + "/mapi/home/get/hotness",
        /*文化地址*/
        cultureUrl: host + "/mapi/home/get/culture",
        /*主题活动地址*/
        activityUrl: host + "/mapi/activity/get/activitytypelist",
        /*互动分享地址*/
        shareUrl: host + "/mapi/share/get/sharetypelist",
        /*作品列表地址*/
        workUrl: host + "/mapi/activity/get/activityarticlelist",

        /*作品详情地址*/
        workDetailUrl: host + "/mapi/activity/get/activityarticle"

    };

});