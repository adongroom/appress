/**
 * Created by HuayiSeven on 2015/2/6.
 */
$F.regist('hotness.getHotness', function () {
    var items = 10;
    var pageNum = parseInt($('#main-content').find('li').length / 10);
    pageNum = pageNum == 0 ? 1 : pageNum + 1;
    console.log(pageNum + "页数");
    $("#moreId").hide();
    $.ajax({
        url: $f.get("SERVER_URL").hotnessUrl,
        type: "get",
        dataType: 'json',
        data: {"limit": items, "page": pageNum},
        success: function (data, status) {
            console.log("最热最热++++++++++");
            var total = data.total;
            var items = data.items;
            var ulist = $("#ul-list");

            for (var i = 0; i < items.length; i++) {
                var li = "<li><a href='http://www.baidu.com'><img src='img/tu4.png'/>" +
                    "<h2>" + items[i].Title + "</h2>" +
                    "<p>" + items[i].Content + "</p></a></li>";
                ulist.append(li);
                ulist.listview('refresh');
            }

            if(total > $('#main-content').find('li').length){
                $("#moreId").show();
            }
        }
    })
});