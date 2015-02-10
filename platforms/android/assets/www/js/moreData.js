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
                $f.call('recommend.getRecommend');
                break;
            case '最新':
                $f.call('latest.getLatest');
                break;
            case '最热':
                $f.call('hotness.getHotness');
                break;
            case '文化':
                $f.call('culture.getCulture');
                break;
        }
    });
    $('#fMoreId').click(function () {
        switch ($('#footer li a[class*=active]').text()) {
            case '主题活动':
                $f.call('activity.getActivity');
                break;
            case '互动分享':
                $f.call('share.getShare');
                break;
        }
    })
});
