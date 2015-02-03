/**
 * Created by hanzhendong on 2015/1/27.
 */
jQuery(document).ready(function () {
    $('li a').click(function () {
        $.each(function (i) {
            switch ($('li a')[i].text) {
                case '新闻':
                    $('bg-content').load('test.html')
                    break;
                case 2:
                    break;
                default:
            }

        })
    })
})

$(document).ready(function(){

    $("#comment").click(function(){
      $("#text").remove();
      $("#sure").remove();
        $("#c").append("<textarea id='text'></textarea><label id='sure' style='font-size:50%;'>确定</label>");
    });
    $("#praise").click(function(){
       $("#praise").append("<label>a</label>");
    });
    $("#stamp").click(function(){
       $("#stamp").append("<label>a</label>");
    });
})