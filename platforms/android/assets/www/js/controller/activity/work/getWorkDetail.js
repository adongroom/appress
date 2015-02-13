/**
 * Created by hanzhendong on 2015/2/11.
 */
$F.regist('activity.work.getWorkDetail', function (workId) {
    $.ajax({
        url: $f.get("SERVER_URL").workDetailUrl,
        type: 'get',
        data: {"id": workId},
        dataType: 'json',
        success: function (data, status) {
            console.log("获取作品详细++++++++++");
            var list = "<h2>"
                + data.Title
                + "</h2>"
                + "<P>"
                + data.Content
                + "</P>";
            $("#ul-workDetail").append(list);
        }
    })
});