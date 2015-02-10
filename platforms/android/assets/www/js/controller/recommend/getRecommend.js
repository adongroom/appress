/**
 * Created by hanzhendong on 2015/2/5.
 */
$F.regist('recommend.getRecommend', function () {
    $f.call("comm.homeList",
        'recommend',
        $f.get("SERVER_URL").recommendUrl,
        function(total, items){
            for (var i = 0; i < items.length; i++) {
                var list = "<li><a href='http://www.baidu.com'><img src='img/tu4.png'/>" +
                    "<h2>" + items[i].Title + "</h2>" +
                    "<p>" + items[i].Content + "</p></a></li>";
                $("#ul-list-recommend").append(list);
                $("#ul-list-recommend").listview('refresh');
            }
        }
    );
});