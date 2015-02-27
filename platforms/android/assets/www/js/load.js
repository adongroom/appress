/**
 * Created by hanzhendong on 2015/1/27.
 */
$f.config({autoLoad: true, splitChar: /\.+/g, path: "js/controller"});
/*初始化地址*/
$f.call("ServerURL");
/*初始化新闻*/
$f.call("news.getNews");
$f.call("recommend.getRecommend");
$f.call("latest.getLatest");
$f.call("hotness.getHotness");

$f.call("culture.getCulture");

$(document).ready(function () {
    /* 导航切换content内容*/
    $('#header-ul li a').click(function () {
        console.log("上面导航切换");
        $('#div-news').hide();
        $('#div-recommend').hide();
        $('#div-latest').hide();
        $('#div-hotness').hide();
        $('#div-culture').hide();
        switch ($(this).text()) {
            case '新闻':
                console.log("切换到新闻");
                $('#div-news').show();
                break;
            case '推荐':
                console.log("切换到推荐");
                $('#div-recommend').show();
                break;
            case '最热':
                console.log("切换到最热");
                $('#div-hotness').show();
                break;
            case '最新':
                console.log("切换到最新");
                $('#div-latest').show();
                break;
            case '文化':
                console.log("切换到文化");
                $('#div-culture').show();
                break;
            default:
                $('#div-news').show();
        }
    });
    /*导航切换标题*/
    $('#footer li a').click(function () {
        $('#header-content').hide();
        $('#activity').hide();
        $('#share').hide();

        switch ($(this).text()) {
            case'首页':
                //location.reload();
                $('#header-content').show();
                break;
            case '主题活动':
                //$('#header-content').load('activity.html');
                $('#activity').show();
                if( !$('#activity').attr('showed') ){
                    $f.call('activity.getActivity');
                    $('#activity').attr('showed', 'true');
                }
                break;
            case '互动分享':
                //$('#header-content').load('share.html');
                $('#share').show();
                if( !$('#share').attr('showed')){
                    $('#share').attr('showed', 'true');
                    $f.call('share.getShare');
                }
                break;
            case '个人中心':
                //$('#header-content').load('person.html');
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