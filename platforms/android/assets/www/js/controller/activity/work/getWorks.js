/**
 * Created by hanzhendong on 2015/2/10.
 */
$F.regist('activity.work.getWorks', function (actTypeId) {
    var items = 10;
    var pageNum = parseInt($('#ul-work').find('li').length / 10);
    pageNum = pageNum == 0 ? 1 : pageNum + 1;
    $("#fMoreId").hide();
    $.ajax({
        url: $f.get("SERVER_URL").workUrl,
        type: 'get',
        data: {"nid": actTypeId, "limit": items, "page": pageNum},
        dataType: 'json',
        success: function (data, status) {
            console.log("获取作品++++++++++");
            var total = data.total;
            var WorkData = data.items;
            for (var i = 0; i < WorkData.length; i++) {
                var list = "<li><a onclick='getWorkDetail(" + WorkData[i].Id + ")'><img src='img/tu4.png'/><h2>"
                    + WorkData[i].Title
                    + "</h2><P>"
                    + WorkData[i].Content
                    + "</P>"
                    + "</a>"
                    + "<div class='ui-grid-b'>"
                    + "<div style='float: right'>"
                    + "<img src='img/btn_cai.png' onclick='onStamp(" + WorkData[i].Id + ")'/>"
                    + "</div>"
                    + "<div style='float: right'>"
                    + "<img src='img/btn_zan.png' onclick='onLike(" + WorkData[i].Id + ")'/>"
                        /*  + "<p class='ui-li-count' style='float: right'>"
                         + 6
                         + "</p>"*/
                    + "</div>"
                    + "<div style='float: right'>"
                    + "<a href='#' onclick='getComment(" + WorkData[i].Id + ")'><img src='img/btn_pinglun.png'/></a>"
                    + "</div>"
                    + "</div>"
                    + "</li>";
                $("#ul-work").append(list);
                $("#ul-work").listview('refresh');
            }
            if (total > $('#ul-work').find('li').length) {
                $("fMoreId").show();
            }
        }
    })
});