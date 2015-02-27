/**
 * Created by hanzhendong on 2015/2/12.
 */
$F.regist('activity.work.getComment', function (tid) {
    $.ajax({
        url: $f.get("SERVER_URL").commentListUrl,
        type: 'get',
        data: {"tid": tid},
        dataType: 'json',
        success: function (data, status) {
            console.log("获取评论详细++++++++++");
            var total = data.total;
            var comData = data.items;
            var liTotal = "<li data-role='list-divider'>评论列表"
                + "<span class='ui-li-count'>"
                + total
                + "</span>"
                + "<p id='tid' style='display: none'>"
                + tid
                + +"</p>"
                + "</li>";
            $("#ul-comment").append(liTotal);
            for (var i = 0; i < comData.length; i++) {
                var list = "<li>"
                    + "<a>"
                    + "<img src='img/tu3.png'/>"
                    + "<h3>"
                    + comData[i].Author
                    + "</h3>"
                    + "<P>"
                    + comData[i].Content
                    + "</P>"
                    + "<p class='ui-li-aside'>"
                    + comData[i].Created
                    + "</P>"
                    + "</a>"
                    + "</li>";
                $("#ul-comment").append(list);
                $("#ul-comment").listview('refresh');
            }
        }
    })

})