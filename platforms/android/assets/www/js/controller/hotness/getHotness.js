/**
 * Created by HuayiSeven on 2015/2/6.
 */
$F.regist('hotness.getHotness', function () {
    $f.call("comm.homeList",
        "hotness",
        $f.get("SERVER_URL").hotnessUrl,
        function(total, items){
            for (var i = 0; i < items.length; i++) {
                var list = "<li><a href='topic.html?id="+items[i].Id+"&type=hotness'>" +
                    "<img src='img/tu4.png'/>" +
                    "<h2>" + items[i].Title + "</h2>" +
                    "<p>" + items[i].Content + "</p></a></li>";
                $("#ul-list-hotness").append(list);
                $("#ul-list-hotness").listview('refresh');
            }
        }
    );
});