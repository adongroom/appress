/**
 * Created by HuayiSeven on 2015/2/9.
 */
$F.regist('latest.getLatest', function () {
    $f.call("comm.homeList",
        'latest',
        $f.get("SERVER_URL").latestUrl,
        function(total, items){
            for (var i = 0; i < items.length; i++) {
                var list = "<li><a href='topic.html?id="+items[i].Id+"&type=latest'>" +
                    "<img src='img/tu4.png'/>" +
                    "<h2>" + items[i].Title + "</h2>" +
                    "<p>" + items[i].Content + "</p></a></li>";
                $("#ul-list-latest").append(list);
                $("#ul-list-latest").listview('refresh');
            }
        }
    );
});