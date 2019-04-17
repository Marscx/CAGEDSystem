/*$(document).ready(function () {

    // Button G Form einblenden Slide
    $('#gfSlide').on('click', function () {
        $('#pannellistGfG').slideToggle(1000);
        $('#gfbutton__indicator').toggleClass('hidden');
    });
    // Clear G Form
    $('#gfGclear').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
    });
    // G Dur G Form Akkord
    $('#gfgDurAkk').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#g6G, #g5B, #g1g1').addClass('farbeAkk')
    });
    // G Dur G Form mit Leersaiten einfärben
    $('#gfLeer').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#g6G, #g5B, #g4d, #g3g, #g2b, #g1g1').addClass('farbeAkk')
    });
    // G Dur G Form Arpeggio
    $('#gfgDurArp').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#g6G, #g5B, #g4d, #g3g, #g2b, #g2d1, #g1g1').addClass('farbeAkk')
    });
    //G Dur G Form Penta
    $('#gfgDurPenta').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#g6G, #g5B, #g4d, #g3g, #g2b, #g2d1, #g1g1').addClass('farbeAkk');
        $('#g6E, #g5A, #g4e, #g3a, #g1e1').addClass('farbePenta')
    });
    // G Dur Ionisch 
    $('#gfgDurIonisch').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeLeit farbeGleit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#g6G, #g5B, #g4d, #g3g, #g2b, #g2d1, #g1g1').addClass('farbeAkk');
        $('#g6E, #g5A, #g4e, #g3a, #g1e1').addClass('farbePenta');
        $('#g6Fis, #g4fis, #g1fis1').addClass('farbeLeit');
        $('#g5c, #g2c1').addClass('farbeGleit');
    });
    // G Form weisse Punkte ausblenden
    $('#gfclearWhite, #gfDclearWhite, #gfCclearWhite').on('click', function () {
        $('.GcircleSW:not(.farbeAkk, .farbePenta, .farbeGleit, .farbeLeit, .farbeMixo, .farbePentaMixo, .farbeLydDor, .farbeLydDorPenta)').toggleClass('unsichtbarWeiss2');
    });
    // Button D7 einblenden 
    $('#gfd7Slide').on('click', function () {
        $('#pannellistGfD').slideToggle(1000);
        $('#gfbutton__indicator2').toggleClass('hidden');
    });
    // Clear D7 
    $('#gfDclear').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
    });
    // D Dur Akkord
    $('#gfdDurAkk').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#g3a, #g2d1, #g1fis1').addClass('farbeMixo')
    });
    // D Dur Akkord mit Leersaiten
    $('#gfdLeer').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#g4d, #g3a, #g2d1, #g1fis1').addClass('farbeMixo')
    });
    // D Dur Arpeggio
    $('#gfdDurArp').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#g6Fis, #g5A, #g4d, #g4fis, #g3a, #g2d1, #g1fis1').addClass('farbeMixo')
    });
    // D Dur Penta
    $('#gfdDurPenta').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#g6Fis, #g5A, #g4d, #g4fis, #g3a, #g2d1, #g1fis1').addClass('farbeMixo');
        $('#g6E, #g5B, #g4e, #g2b, #g1e1').addClass('farbePentaMixo')
    });


    // D Mixolydisch

    $('#gfdDurMixo').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        //$('#6G, #5B, #4d, #3g, #2b, #2d1, #1g1').addClass('farbeMixo');
        //$('#6E, #5A, #4e, #3a, #1e1').addClass('farbePentaMixo');
        $('#g5c, #g2c1').addClass('farbeGleit');
    });
    // Septime ein und ausblenden
    /* $('#gDurMixo').on('click', function () {
             $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2');
             $('#6F, #4f, #1f1').toggleClass('farbeGleit');
     }); 
    // 4. Stufe C Form
    $('#gfcSlide').on('click', function () {
        $('#pannellistGfC').slideToggle(1000);
        $('#gfbutton__indicator3').toggleClass('hidden');
    });
    // Clear C Dur G Form
    $('#gfCclear').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
    });
    // 4 C Dur Form 
    $('#gfcDurAkk').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#g5c, #g4e, #g2c1').addClass('farbeLydDor')
    });
    // C Dur G Form mit Leersaiten einfärben
    $('#gfcLeer').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#g5c, #g4e, #g3g, #g2c1, #g1e1').addClass('farbeLydDor')
    });
    // 4 C Dur Arp G form
    $('#gfcDurArp').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#g6E, #g6G,#g5c, #g4e, #g3g, #g2c1, #g1e1, #g1g1').addClass('farbeLydDor')
    });
    // 4 C Dur Penta G Form
    $('#gfcDurPenta').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#g6E, #g6G,#g5c, #g4e, #g3g, #g2c1, #g1e1, #g1g1').addClass('farbeLydDor');
        $('#g5A, #g4d, #g3a, #g2d1').addClass('farbeLydDorPenta')
    });
    // C dur #11 ein
    $('#gfcDurLyd').on('click', function () {
        $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2');
        $('#g6Fis, #g4fis, #g1fis1').addClass('farbeLeit');
    });

}); */
