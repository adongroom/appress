/**
 * Created by hanzhendong on 2015/2/9.
 */
$F.regist("activity.getActivity", function () {
    var items = 10;
    var pageNum = parseInt($('#actvity-content').find('li').length / 10);
    pageNum = pageNum == 0 ? 1 : pageNum + 1;
    console.log(pageNum + "活动页数+++++");
    $.ajax({
        url: '',
        type: 'get',
        dataType: 'json',
        data: {limit: items, page: pageNum},
        success: function (data, status) {
            console.log("获取新闻++++++++++");
            for (var i = 0; i < data.length; i++) {
                var list = "<li><a href='activity_comment.html'><img src='img/tu4.png'/><h2>" + data[i].Title + "</h2>" + data[i].Id + "</a></li>";
                $("#activity-list").append(list);
                $("#activity-list").listview('refresh');
            }
        }
    })
})