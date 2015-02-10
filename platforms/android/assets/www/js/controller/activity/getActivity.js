/**
 * Created by hanzhendong on 2015/2/9.
 */
$F.regist("activity.getActivity", function () {
    var items = 10;
    var pageNum = parseInt($('#actvity-content').find('li').length / 10);
    pageNum = pageNum == 0 ? 1 : pageNum + 1;
    console.log(pageNum + "活动页数+++++");
    $.ajax({
        url: $f.get("SERVER_URL").activityUrl,
        type: 'get',
        data: {"limit": items, "page": pageNum},
        dataType: 'json',
        success: function (data, status) {
            //alert(data);
            var actData = data.items
            console.log("获取活动++++++++++");
            for (var i = 0; i < actData.length; i++) {
                var list = "<li><a href='activity_handle.html'><img src='img/tu4.png'/><h2>" + actData[i].Title + "</h2><P>" + actData[i].Content + "</P>" + actData[i].Id + "</a></li>";
                $("#activity-list").append(list);
                $("#activity-list").listview('refresh');
            }
        }
    })
})