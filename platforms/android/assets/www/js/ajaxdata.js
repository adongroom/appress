/**
 * Created by hanzhendong on 2015/1/27.
 */
$f.config({autoLoad: true, splitChar: /\.+/g, path: "js/controller"});
$f.call("SetServerURL");
$f.call("news.initNews")
$(document).ready(function () {
    $('#indexId').click(function () {
        $f.call('news.getNews')
    })
})
