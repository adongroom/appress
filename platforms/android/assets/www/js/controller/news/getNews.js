/**
 * Created by hanzhendong on 2015/2/4.
 */
$F.regist('news.getNews', function () {
    var items = 10;
    var pageNum = parseInt($('#main-content').find('li').length / 10);
    console.log(pageNum + "页数");
    $.ajax({
        url: $f.get("SERVER_URL").latestUrl,
        type: "get",
        dataType: 'json',
        data: {"limit": items, "page": pageNum + 1},
        success: function (data, status) {
            console.log("获取新闻++++++++++");
            /*  var c = JSON.parse(data)*/
            /*alert(data[0].Title)
             alert(data[1].Content)*/
            var i = 0;
            for (i = 0; i <= items; i++) {
                var list = "<li><a href='http://www.baidu.com'><img src='img/tu4.png'/><h2>" + data[i].Title + "</h2>" + data[i].Id + "</a></li>";
                $("#ul-list").append(list);
            }
            $("#ul-list").listview();
            $("#ul-list").listview('refresh');
        }
    })
})