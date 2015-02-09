/**
 * Created by HuayiSeven on 2015/2/9.
 */
$F.regist('latest.getLatest', function () {
    var items = 10;
    var pageNum = parseInt($('#main-content').find('li').length / 10);
    pageNum = pageNum == 0 ? 1 : pageNum + 1;
    console.log(pageNum + "页数+++++");
    $.ajax({
        url: $f.get("SERVER_URL").latestUrl,
        type: "get",
        dataType: 'json',
        data: {"limit": items, "page": pageNum},
        success: function (data, status) {
            console.log("=== latest  最新 ");
            for (var i = 0; i < data.length; i++) {
                var list = "<li><a href='http://www.baidu.com'><img src='img/tu4.png'/><h2>" + data[i].Title + "</h2>" + data[i].Id + "</a></li>";
                $("#ul-list").append(list);
                $("#ul-list").listview('refresh');
            }
        }
    })
});