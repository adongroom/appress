/**
 * Created by hanzhendong on 2015/1/27.
 */

/*$(function () {
 $("p:contains('查看更多')").bind("click", function () {
 var i = 0;
 for (i = 0; i <= 10; i++) {
 var list = "<li><a href='http://www.baidu.com'><img src='img/tu4.png'/><h2>个人收藏互动分享</h2><p>新增列表项</p>" + i + "</a></li>";
 $("#list").append(list);
 $('ul').listview();
 $('ul').listview('refresh');
 $("#list").find("li:last").slideDown(300);
 }
 });
 *//** 计算手指滑动时起始点处的DOM元素的序号 *//*
 function getScrollPosition(event) {
 var target = $(event.target);
 while (target.attr("id") == undefined) {
 target = target.parent();
 }
 //手指滑动触点的<li>元素的ID
 var targetId = target.attr('id');
 //手指滑动触点的<li>元素的序号
 var position;
 //手指滑动触点的Tag
 var targetTag = "li";
 if (targetId != undefined && targetId.indexOf(targetTag) == 0) {
 position = targetId.substring(targetTag.length);
 }
 return position;
 }
 });*/
//添加数据
function searchData() {
    var i = 0;
    for (i = 0; i <= 10; i++) {
        var list = "<li><a href='http://www.baidu.com'><img src='img/tu4.png'/><h2>个人收藏互动分享</h2><p>新增列表项</p>" + i + "</a></li>";
        $("[name='list']").append(list);
        $('ul').listview();
        $('ul').listview('refresh');
        $("#list").find("li:last").slideDown(300)

    }
}

function callBack() {
    $.ajax({
        url: "http://192.168.1.166:8000/",
        type: "get",
        success: function (data, status) {
            alert(data + status)
            var c = JSON.parse(data.responseText)
            console.log(c)
            alert(c)
            alert(data)

        }
    })

}
