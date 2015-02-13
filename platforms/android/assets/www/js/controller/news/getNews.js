/**
 * Created by hanzhendong on 2015/2/4.
 */
$F.regist('news.getNews', function () {
    $f.call("comm.homeList",
        'news',
        $f.get("SERVER_URL").newsUrl,
        function(total, items){
            var host = $f.get("SERVER_URL").host;
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var img = item.Headimg ? host + item.Headimg : 'img/tu4.png';
                var list = "<li><a href='topic.html?id=" + item.Id + "&type=news'>" +
                    "<img src='" + img + "'/>" +
                    "<h2>" + item.Title + "</h2>" +
                    "<p>" + item.Content + "</p></a></li>";
                $("#ul-list-news").append(list);
                $("#ul-list-news").listview('refresh');
            }
        }
    );
});