/**
 * Created by hanzhendong on 2015/1/27.
 */
//导航切换content内容
$(document).ready(function () {
    $('#ul li a').click(function () {
        switch ($(this).text()) {
            case '新闻':
                $('#main-content').load('test.html');
                break;
            case '推荐':
                $('#main-content').load('recommend.html');
                break;
            case '最热':
                $('#main-content').load('hottest.html');
                break;
            case '最新':
                $('#main-content').load('latest.html');
                break;
            case '消息':
                $('#main-content').load('message.html');
                break;
            default:
                $('#main-content').load('test.html')
        }
    })
})
