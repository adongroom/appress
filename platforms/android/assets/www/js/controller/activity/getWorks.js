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
        data: {"id": actTypeId},
        dataType: 'json',
        success: function (data, status) {
            console.log("获取作品++++++++++");
            for (var i = 0; i < data.length; i++) {
                var list = "<li><a href='#'><img src='img/tu4.png'/><h2>"
                    + data[i].Title
                    + "</h2><P>"
                    + data[i].Content
                    + "</P>"
                    + data[i].Id
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