/**
 * Created by hanzhendong on 2015/1/27.
 */

$(document).ready(function () {
    $('#moreId').click(function () {
        switch ($('#header-ul li a[class*=active]').text()) {
            case '新闻':
                $f.call('news.getNews');
                break;
            case '推荐':
                $f.call('recommend.getRecommend')
                break;
        }
    });
    $('act-moreId').click(function () {
        switch ($('#footer li a[class*=active]')) {
            case '主题活动':
                $f.call('activity.getActivity');
                break;
            case '互动分享':
                break;
        }
    })
})
