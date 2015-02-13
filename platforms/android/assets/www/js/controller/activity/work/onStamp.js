/**
 * Created by hanzhendong on 2015/2/12.
 */
$F.regist('activity.work.onStamp', function (tId) {
    $.ajax({
        url: $f.get("SERVER_URL").stampUrl,
        type: 'get',
        data: {"tid": tId},
        dataType: 'json',
        success: function (data, status) {
            alert(data.Msg)
        }
    })
});