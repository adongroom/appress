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
//防止手贱用户多次点击
var times = 0;//点击次数
var preClickTime;//上一次点击的时间（毫秒）
var currentClickTime;//当前点击时间
function countClickedTimes() {

    if (times === 0) {
        preClickTime = new Date().getTime();//首次点击的时间
        times++;
        alert("当前点击次数:" + times);
        return;
    }
    currentClickTime = new Date().getTime();
//alert(currentClickTime - preClickTime);
    if ((currentClickTime - preClickTime) < 3000) {//如果是3秒内重复点击
        alert("亲，您的点击速度过快...");
        preClickTime = currentClickTime;
        return;
    }

    times++;
    preClickTime = currentClickTime;
    alert("当前点击次数:" + times);
}
function callBackData() {
    var items = 10;
    //获取页面数
    countClickedTimes();
    $.ajax({
        url: "http://192.168.1.166:8000/mapi/home/get/latest",
        type: "get",
        dataType: 'json',
        data: {"limit": items, "page": times},
        success: function (data, status) {
            /*  var c = JSON.parse(data)*/
            alert(data[0].Title)
            alert(data[1].Content)
            var i = 0;
            for (i = 0; i <= items; i++) {
                var list = "<li><a href='http://www.baidu.com'><img src='img/tu4.png'/><h2>" + data[i].Title + "</h2>" + data[i].Id + "</a></li>";
                $("[name='list']").append(list);
                $('ul').listview();
                $('ul').listview('refresh');
                $("#list").find("li:last").slideDown(300)

            }

        }
    })

}
