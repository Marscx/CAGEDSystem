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
    //Guit Form weisse Punkte ausblenden
    $("#GclearWhite").on("click", function(){
        $('.GcircleSW:not(.farbeAkk, .farbePenta, .farbeGleit, .farbeLeit, .farbeMixo, .farbePentaMixo, .farbeLydDor, .farbeLydDorPenta)').toggleClass('unsichtbarWeiss2');
    });
    //Guit2 Form Manuel Click Farbe Akk
    $("circle.G2circleSW").on("click", function () {
        $(this).toggleClass('farbeAkk');
    });
    //Guit2 Form weisse Punkte ausblenden
    $("#G2clearWhite").on("click", function () {
        $('.G2circleSW:not(.farbeAkk, .farbePenta, .farbeGleit, .farbeLeit, .farbeMixo, .farbePentaMixo, .farbeLydDor, .farbeLydDorPenta)').toggleClass('unsichtbarWeiss2');
    });
    
});