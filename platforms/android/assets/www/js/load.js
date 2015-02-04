/**
 * Created by hanzhendong on 2015/1/27.
 */
//导航切换content内容
$(document).ready(function () {
    $('#ul li a').click(function () {
        switch ($(this).text()) {
            case '新闻':
                $('#main-content').find('div').remove()
                $f.call("news.initNews")
                break;
            case '推荐':
                $('#main-content').find('div').remove()
                $('#main-content').load('recommend.html');
                break;
            case '最热':
                $('#main-content').find('div').remove()
                $('#main-content').load('hottest.html');
                break;
            case '最新':
                $('#main-content').find('div').remove()
                $('#main-content').load('latest.html');
                break;
            case '消息':
                $('#main-content').find('div').remove()
                $('#main-content').load('message.html');
                break;
            default:
                $('#main-content').find('div').remove()
                $('#main-content').load('test.html')
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