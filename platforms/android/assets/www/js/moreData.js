/**
 * Created by hanzhendong on 2015/1/27.
 */

$(document).ready(function () {
    $("#more-news").click(function(){
        $f.call("news.getNews");
    });
    $("#more-recommend").click(function(){
        $f.call("recommend.getRecommend");
    });
    $("#more-hotness").click(function(){
        $f.call("hotness.getHotness");
    });
    $("#more-latest").click(function(){
        $f.call("latest.getLatest");
    });
    $("#more-culture").click(function(){
        $f.call("culture.getCulture");
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
