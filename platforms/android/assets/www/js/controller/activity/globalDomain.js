/**
 * Created by hanzhendong on 2015/2/11.
 */
/*活动列表响应事件获取作品详情*/
function getWorks(id) {
    $('#header-content').load('activity_handle.html');
    $f.call('activity.work.getWorks', id);
};
/*获取作品详细*/
function getWorkDetail(id) {
    $('#main').load('work_detail.html');
    $f.call('activity.work.getWorkDetail', id);
};
/*活动作品踩*/
function onStamp(tid) {
    //alert("踩你妹" + tid);
    $f.call('activity.work.onStamp', tid);
};
/*活动作品赞*/
function onLike(tid) {
    $f.call('activity.work.onLike', tid);
};
/*活动作品评论*/
function onLike(tid) {
    $f.call('activity.work.onLike', tid);
};
/*评论详情*/
function getComment(tid) {
    //$('#main').load('activity_comment.html');
    /* alert(tid)*/
    // var pageData = {url: 'activity_comment.html', type: 'get', data: {tid: tid}};
    $.mobile.changePage('activity_comment.html?tid=' + tid + '', 'slideup');
    //$.mobile.changePage({url: "activity_comment.html", type: "get", data: {tid: tid}});
    $f.call('activity.work.getComment', tid);
}
function onComment(workId) {
    alert($('#commentId').val() + workId)
}