/**
 * Created by hanzhendong on 2015/2/10.
 */
$F.regist('activity.getWorks', function (actTypeId) {
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
                alert(WorkData[i].Title)
                var list = "<li><a href='#'><img src='img/tu4.png'/><h2>"
                    + WorkData[i].Title
                    + "</h2><P>"
                    + WorkData[i].Content
                    + "</P>"
                    + WorkData[i].Id
                    + "<div style='float:right'>"
                    + "<div>"
                    + "<div style='float: right'>"
                    + "<img src='img/btn_cai.png'/>"
                    + "</div>"
                    + "<div style='float: right'>"
                    + "<img src='img/btn_zan.png'/>"
                    + "</div>"
                    + "<div style='float: right'>"
                    + "<img src='img/btn_pinglun.png'/>"
                    + "</div>"
                    + "</div>"
                    + "</div>"
                    + "</a></li>";
                $("#ul-work").append(list);
                $("#ul-work").listview('refresh');
            }
            if (total > $('#ul-work').find('li').length) {
                $("fMoreId").show();
            }
        }
    })
});