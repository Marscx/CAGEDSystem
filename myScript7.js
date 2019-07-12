$(document).ready(function () {

    // Clear Keyboard Form
    $('#keyClear').on('click', function () {
        $('.tasteWeiss, .tasteBlack').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
    });
    
    //Keyboard
    // Tastem Manuell Click Farbe Akk
    $("rect.tasteWeiss").on("click", function () {
        $(this).toggleClass('farbeGleit');
    });
    $("rect.tasteBlack").on("click", function () {
        $(this).toggleClass('farbeMixo');
    });
    $("#keyClear").on("click", function() {
        $(".tasteWeiss, .tasteBlack").removeClass("farbeGleit farbeMixo");
    });
});