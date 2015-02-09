/**
 * Created by hanzhendong on 2015/1/27.
 */
$f.config({autoLoad: true, splitChar: /\.+/g, path: "js/controller"});
/*初始化地址*/
$f.call("ServerURL");
/*初始化新闻*/
$f.call("news.getNews");
$(document).ready(function () {
    /* 导航切换content内容*/
    $('#header-ul li a').click(function () {
        switch ($(this).text()) {
            case '新闻':
                $('#ul-list').find('li').remove();
                $f.call("news.getNews");
                break;
            case '推荐':
                $('#ul-list').find('li').remove();
                $f.call("recommend.getRecommend");
                /* $('#main-content').load('recommend.html');*/
                break;
            case '最热':
                $('#ul-list').find('li').remove();
                $f.call("hotness.getHotness");
                break;
            case '最新':
                $('#ul-list').find('li').remove();
                $f.call("hotness.getHotness");
                break;
            case '文化':
                $('#ul-list').find('li').remove();
                $f.call("culture.getCulture");
                break;
            default:
                $('#ul-list').find('li').remove();
                $('#main-content').load('test.html');
        }
    });
    /*导航切换标题*/
    $('#footer li a').click(function () {
        switch ($(this).text()) {
            case'首页':
                location.reload();
                break;
            case '主题活动':
                $('#header-content').load('activity.html');
                $.call('activity.getActivity');
                break;
            case '互动分享':
                /* $('#header-ul').find('div').remove();*/
                $('#header-content').load('share.html');
                break;
            case '个人中心':
                $('#header-content').load('person.html');
                break;
        }

    })
});

$(document).ready(function () {

    $("#comment").click(function () {
        $("#text").remove();
        $("#sure").remove();
        $("#c").append("<textarea id='text'></textarea><label id='sure' style='font-size:50%;'>确定</label>");
    });
    $("#praise").click(function () {
        $("#praise").append("<label>a</label>");
    });
    $("#stamp").click(function () {
        $("#stamp").append("<label>a</label>");
    });
});