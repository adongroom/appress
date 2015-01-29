/**
 * Created by hanzhendong on 2015/1/27.
 */<
$(function () {
    $("#circle-news-list").bind("swipeleft", function () {
        $.mobile.changePage("#class-page");
    });
    $("#class-news-list").bind("swiperight", function () {
        $.mobile.changePage("#index", {transition: "slide", reverse: true}, true, true);
    });
});
