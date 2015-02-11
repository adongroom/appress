/**
 * Created by hanzhendong on 2015/2/11.
 */
$F.regist('activity.getWorkDetail', function (workId) {
    alert("发发发");
    alert(workId);
    $.ajax({
        url: $f.get("SERVER_URL").workDetailUrl,
        type: 'get',
        data: {"id": workId},
        dataType: 'json',
        success: function (data, status) {
            console.log("获取作品详细++++++++++");
            alert(data.Title)
            var list = "<h2>"
                + data.Title
                + "</h2>"
                + "<P>"
                + data.Content
                + "</P>"
                + data.Id;
            $("#ul-workDetail").append(list);
        }
    })
});