/**
 * Created by hanzhendong on 2015/2/15.
 */
$F.regist('activity.work.onComment', function (tid, content) {
    $.ajax({
        url: $f.get("SERVER_URL").commentUrl,
        type: 'post',
        data: {"tid": tid, "content": content},
        dataType: 'json',
        success: function (data, status) {
            alert(data.Msg);
        }
    })
});