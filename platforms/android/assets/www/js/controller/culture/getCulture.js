/**
 * Created by HuayiSeven on 2015/2/9.
 */
$F.regist('culture.getCulture', function () {
    $f.call("comm.homeList",
        'culture',
        $f.get("SERVER_URL").cultureUrl,
        function(total, items){
            for (var i = 0; i < items.length; i++) {
                var list = "<li><a href='http://www.baidu.com'><img src='img/tu4.png'/>" +
                    "<h2>" + items[i].Title + "</h2>" +
                    "<p>" + items[i].Content + "</p></a></li>";
                $("#ul-list-culture").append(list);
                $("#ul-list-culture").listview('refresh');
            }
        }
    );
});