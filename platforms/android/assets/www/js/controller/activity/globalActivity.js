/**
 * Created by hanzhendong on 2015/2/11.
 */
/*活动列表响应事件获取作品详情*/
function getWorks(id) {
    $('#header-content').load('activity_handle.html');
    $f.call('activity.getWorks', id);
};
/*获取作品详细*/
function getWorkDetail(id) {
    $('#main').load('work_detail.html');
    $f.call('activity.getWorkDetail', id);
}