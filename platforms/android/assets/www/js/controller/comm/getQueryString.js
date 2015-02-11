/**
 * Created by HuayiSeven on 2015/2/11.
 */
$F.regist('comm.getQueryString', function (name) {
    console.log("查询了url的:" + name);
    var rtn = 1;
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    //console.log(r);
    if (r != null) {
        rtn = unescape(r[2]);
    }
    else{
        rtn = null;
    }
    console.log("查询id的rtn: " + rtn);
    console.log(window);
    $.ajax({
        url: $f.get("SERVER_URL").topicUrl,
        type: "get",
        dataType: 'json',
        data: {"id": rtn},
        success: function (data) {
            $('#topic-title').html("nothing");
            $('#topic-content').html(data.Content);

        }
    })
});