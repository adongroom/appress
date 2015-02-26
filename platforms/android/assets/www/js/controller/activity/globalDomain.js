/**
 * Created by hanzhendong on 2015/2/11.
 */
/*活动列表响应事件获取作品详情*/
function getWorks(id) {
    $('#header-content').load('activity_work.html');
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
/*评论详情*/
function getComment(tid) {
    $.mobile.changePage('comment_detail.html', "slideup", 'reloadPage');
    $f.call('activity.work.getComment', tid);
};
/*切换到评论(发送,取消)*/
function changeToComment(tid) {
    $.mobile.changePage('work_comment.html?tid=' + tid + '', 'slideup', 'reloadPage');

}
/*提交评论内容*/
function sendComment() {
    /*$.mobile.changePage('work_comment.html', 'slideup');*/
    var content = $('#commentId').val();
    var ttid = $f.call('comm.getUrlValueByKey', 'tid');
    $f.call('activity.work.onComment', ttid, content);
    getComment(ttid);
}