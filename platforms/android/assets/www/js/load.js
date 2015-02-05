/**
 * Created by hanzhendong on 2015/1/27.
 */

$(document).ready(function () {
    /* 导航切换content内容*/
    $('#header-ul li a').click(function () {
        switch ($(this).text()) {
            case '新闻':
                $('#main-content').find('div').remove();
                $f.call("news.initNews");
                break;
            case '推荐':
                $('#main-content').find('div').remove();
                $('#main-content').load('recommend.html');
                break;
            case '最热':
                $('#main-content').find('div').remove();
                $('#main-content').load('hottest.html');
                break;
            case '最新':
                $('#main-content').find('div').remove();
                $('#main-content').load('latest.html');
                break;
            case '消息':
                $('#main-content').find('div').remove();
                $('#main-content').load('message.html');
                break;
            default:
                $('#main-content').find('div').remove();
                $('#main-content').load('test.html');
        }


    })
    /*导航切换标题*/
    $('#footer li a').click(function () {
        switch ($(this).text()) {
            case '主题活动':
                $('#header-content').load('activity.html');
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
})

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
})