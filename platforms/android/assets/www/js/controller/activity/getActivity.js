/**
 * Created by hanzhendong on 2015/2/9.
 */
$F.regist("activity.getActivity", function () {
    var items = 10;
    var pageNum = parseInt($('#actvity-content').find('li').length / 10);
    pageNum = pageNum == 0 ? 1 : pageNum + 1;
    $("#fMoreId").hide();
    console.log(pageNum + "活动页数+++++");
    $.ajax({
        url: $f.get("SERVER_URL").activityUrl,
        type: 'get',
        data: {"limit": items, "page": pageNum},
        dataType: 'json',
        success: function (data, status) {
            //alert(data);
            var total = data.total;
            var actData = data.items;
            console.log("获取活动++++++++++");
            for (var i = 0; i < actData.length; i++) {
                var list = "<li><a  onclick='getWorks(" + actData[i].Id + ")'><img src='img/tu4.png'/><h2>"
                    + actData[i].Title
                    + "</h2><P>"
                    + actData[i].Content
                    + "</P>"
                    + "<h3>"
                    + actData[i].Id
                    + "</h3>"
                    + "</a></li>";
                $("#activity-list").append(list);
                $("#activity-list").listview('refresh');
            }
            if (total > $('#actvity-content').find('li').length) {
                $("fMoreId").show();
            }
        }
    })
})