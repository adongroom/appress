/**
 * Created by hanzhendong on 2015/2/4.
 */
$F.regist('news.getNews', function () {
    var items = 10;
    var pageNum = parseInt($('#main-content').find('li').length / 10);
    pageNum = pageNum == 0 ? 1 : pageNum + 1;
    console.log(pageNum + "页数+++++");
    $.ajax({
        url: $f.get("SERVER_URL").newsUrl,
        type: "get",
        dataType: 'json',
        data: {"limit": items, "page": pageNum},
        success: function (data, status) {
            console.log("获取新闻++++++++++");
            //var total = data.total;
            var items = data.items;

            for (var i = 0; i < items.length; i++) {
                var li = "<li><a href='news_details.html'><img src='img/tu4.png'/>" +
                    "<h2>" + items[i].Title + "</h2>" + items[i].Id + "</a></li>";
                $("#ul-list").append(li);
                $("#ul-list").listview('refresh');
            }
        }
    })
});