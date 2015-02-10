/**
 * Created by hanzhendong on 2015/2/4.
 */
$F.regist('news.getNews', function () {
    $f.call("comm.homeList",
        'news',
        $f.get("SERVER_URL").newsUrl,
        function(total, items){
            for (var i = 0; i < items.length; i++) {
                var list = "<li><a href='http://www.baidu.com'><img src='img/tu4.png'/>" +
                    "<h2>" + items[i].Title + "</h2>" +
                    "<p>" + items[i].Content + "</p></a></li>";
                $("#ul-list-news").append(list);
                $("#ul-list-news").listview('refresh');
            }
        }
    );
});