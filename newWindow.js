$(document).ready(function () {

    function nWin() {
        var w = window.open();
        var html = $("#cFormSvg").html();

        $(w.document.body).html(html);
    }

    $(function () {
        $("button#cNewWindow").click(nWin);
    });



});