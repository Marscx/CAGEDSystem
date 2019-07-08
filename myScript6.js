$(document).ready(function () {
    
    // Clear Ukulele Form
    $('#Uclear').on('click', function () {
        $('.UcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
    });
    // Ukulele Form weisse Punkte ausblenden
    $('#UclearWhite').on('click', function () {
        $('.UcircleSW:not(.farbeAkk, .farbePenta, .farbeGleit, .farbeLeit, .farbeMixo, .farbePentaMixo, .farbeLydDor, .farbeLydDorPenta)').toggleClass('unsichtbarWeiss2');
    });
    
    //Ukulele
    // Circle Manuell Click Farbe Akk
    $("circle.UcircleSW").on("click", function () {
        $(this).toggleClass('farbeAkk');
    });
    
});