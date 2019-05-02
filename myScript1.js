$(document).ready(function () {
 //C Form

    // Button C Form einblenden Slide
    $('#cSlide').on('click', function() {
        $('#pannellistC').slideToggle(1000);
        $('#button__indicator').toggleClass('hidden');
    });
    // Clear C Form
    $('#Cclear').on('click', function() {
            $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
    });
    // C Dur C Form Akkord
    $('#cDurAkk').on('click', function() {
            $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
            $('#5c, #4e, #2c1').addClass('farbeAkk')
    });
    // C Dur C Form mit Leersaiten einfärben
    $('#cLeer').on('click', function() {
            $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
            $('#5c, #4e, #3g, #2c1, #1e1').addClass('farbeAkk')
    });
    // C Dur C Form Arpeggio
    $('#cDurArp').on('click', function() {
            $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
            $('#6E, #6G, #5c, #4e, #3g, #2c1, #1e1, #1g1').addClass('farbeAkk')  
   });
    //C Dur C Form Penta
    $('#cDurPenta').on('click', function() {
            $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
            $('#6E, #6G, #5c, #4e, #3g, #2c1, #1e1, #1g1').addClass('farbeAkk');
            $('#5A, #4d, #3a, #2d1').addClass('farbePenta')   
    });
    // C Dur Ionisch 
    $('#cDurIonisch').on('click', function() {      
            $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeLeit farbeGleit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
            $('#6E, #6G, #5c, #4e, #3g, #2c1, #1e1, #1g1').addClass('farbeAkk');
            $('#5A, #4d, #3a, #2d1').addClass('farbePenta');
            $('#6F, #4f, #1f1').addClass('farbeGleit');
            $('#5B, #2b').addClass('farbeLeit');  
    });
    // C Form weisse Punkte ausblenden
    $('#clearWhite, #gclearWhite, #fclearWhite').on('click', function() {
            $('.ChcircleSW:not(.farbeAkk, .farbePenta, .farbeGleit, .farbeLeit, .farbeMixo, .farbePentaMixo, .farbeLydDor, .farbeLydDorPenta)').toggleClass('unsichtbarWeiss2');
    });
// Button G7 einblenden 
        $('#g7Slide').on('click', function() {
                $('#pannellistG').slideToggle(1000);
                $('#button__indicator2').toggleClass('hidden');
        });
// Clear G7 
        $('#Gclear').on('click', function() {
                $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        });
// G Dur Akkord
        $('#gDurAkk').on('click', function() {
                $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#6G, #5B, #1g1').addClass('farbeMixo')
        });
// G Dur Akkord mit Leersaiten
        $('#gLeer').on('click', function () {
                $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#6G, #5B, #4d, #3g, #2b, #1g1').addClass('farbeMixo')
        });
// G Dur Arpeggio
        $('#gDurArp').on('click', function() {
                $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#6G, #5B, #4d, #3g, #2b, #2d1, #1g1').addClass('farbeMixo')
        });
// G Dur Penta
        $('#gDurPenta').on('click', function() {
                $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#6G, #5B, #4d, #3g, #2b, #2d1, #1g1').addClass('farbeMixo');
                $('#6E, #5A, #4e, #3a, #1e1').addClass('farbePentaMixo')
        });


// G Mixolydisch

        $('#gDurMixo').on('click', function() {
                $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                //$('#6G, #5B, #4d, #3g, #2b, #2d1, #1g1').addClass('farbeMixo');
                //$('#6E, #5A, #4e, #3a, #1e1').addClass('farbePentaMixo');
                $('#6F, #4f, #1f1').addClass('farbeGleit');
        }); 
// Septime ein und ausblenden
       /* $('#gDurMixo').on('click', function () {
                $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2');
                $('#6F, #4f, #1f1').toggleClass('farbeGleit');
        }); */
// 4. Stufe C Form
        $('#fSlide').on('click', function () {
                $('#pannellistF').slideToggle(1000);
                $('#button__indicator3').toggleClass('hidden');
        });
// Clear F Dur C Form
        $('#fclear').on('click', function () {
                $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        });
// 4 F Dur Form 
        $('#fDurAkk').on('click', function () {
                $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#4f, #3a, #2c1, #1f1').addClass('farbeLydDor')
        });
// 4 FDur Arp C form
        $('#fDurArp').on('click', function () {
                $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#6F, #5A, #5c, #4f, #3a, #2c1, #1f1').addClass('farbeLydDor')
        });
// 4 F Dur Penta C Form
        $('#fDurPenta').on('click', function () {
                $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#6F, #5A, #5c, #4f, #3a, #2c1, #1f1').addClass('farbeLydDor');
                $('#6G, #4d, #3g, #2d1, #1g1').addClass('farbeLydDorPenta')
        });
// F dur #11 ein
        $('#fDurLyd').on('click', function () {
                $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2');
                $('#5B, #2b').addClass('farbeLeit');
        }); 
});
