/**
 * Created by HuayiSeven on 2015/2/6.
 */
$F.regist('hotness.getHotness', function () {
    var items = 10;
    var pageNum = parseInt($('#main-content').find('li').length / 10);
    pageNum = pageNum == 0 ? 1 : pageNum;
    console.log(pageNum + "页数");
    $.ajax({
        url: $f.get("SERVER_URL").hotnessUrl,
        type: "get",
        dataType: 'json',
        data: {"limit": items, "page": pageNum + 1},
        success: function (data, status) {
            console.log("最热最热++++++++++");
            if(!$("#ul-list")[0]){
                $('#main-content').append(
                    "<ul data-role='listview' data-icon='false' id='ul-list'></ul>");
            }
            var ulist = $("#ul-list");
            //console.log(ulist);
            for (var i = 0; i <= items; i++) {
                var li = "<li><a href='http://www.baidu.com'><img src='img/tu4.png'/>" +
                    "<h2>" + data[i].Title + "</h2>" + data[i].Id + "</a></li>";
                ulist.append(li);
                ulist.listview();
                ulist.listview('refresh');
            }


        }
    })
});