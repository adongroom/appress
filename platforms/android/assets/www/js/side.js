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

