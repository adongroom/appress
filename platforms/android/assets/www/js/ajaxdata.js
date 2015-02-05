/**
 * Created by hanzhendong on 2015/1/27.
 */

$(document).ready(function () {
    $('#indexId').click(function () {
        switch ($('#header-ul li a[class*=active]').text()) {
            case '新闻':
                $f.call('news.getNews');
                break;
            case '推荐':
                $f.call('recommend.getRecommend')
                break;
        }

    })
})
