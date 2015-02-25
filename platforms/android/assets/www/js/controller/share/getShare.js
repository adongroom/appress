/**
 * Created by hanzhendong on 2015/2/9.
 */
$F.regist("share.getShare", function () {
    var items = 10;
    var pageNum = parseInt($('#share-content').find('li').length / 10);
    pageNum = pageNum == 0 ? 1 : pageNum + 1;
    console.log(pageNum + "分享页数+++++");
    $("#fMoreId").hide();
    $.ajax({
        url: $f.get("SERVER_URL").shareUrl,
        type: 'get',
        data: {"limit": items, "page": pageNum},
        dataType: 'json',
        success: function (data, status) {
            //alert(data);
            var total = data.total;
            var shareData = data.items;
            console.log("获取分享++++++++++");
            for (var i = 0; i < shareData.length; i++) {
                var list = "<li><a href='comment_detail.html'><img src='img/tu4.png'/><h2>" + shareData[i].Title + "</h2><P>" + shareData[i].Content + "</P>" + shareData[i].Id + "</a></li>";
                $("#share-list").append(list);
                $("#share-list").listview('refresh');
            }
            if (total > $('#share-content').find('li').length) {
                $("fMoreId").show();
            }
        }
    })
})