/**
 * Created by hanzhendong on 2015/2/3.
 */
$F.regist('news.initNews', function () {
    $.ajax({
        url: $f.get("SERVER_URL").latestUrl,
        type: "get",
        dataType: 'json',
        data: {"limit": 10, "page": 1},
        success: function (data, status) {
            /*  var c = JSON.parse(data)*/
            /*alert(data[0].Title)
             alert(data[1].Content)*/
            var i = 0;
            for (i = 0; i <= 10; i++) {
                var list = "<li><a href='http://www.baidu.com'><img src='img/tu4.png'/><h2>" + data[i].Title + "</h2>" + data[i].Id + "</a></li>";
                $("[name='list']").append(list);
                $('ul').listview();
                $('ul').listview('refresh');
                $("#list").find("li:last").slideDown(300)

            }

        }
    })
})