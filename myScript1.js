$(document).ready(function () {
        
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
         }); */
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
        // Button F Form einblenden Slide
        $('#ffSlide').on('click', function () {
                $('#pannellistFfF').slideToggle(1000);
                $('#ffbutton__indicator').toggleClass('hidden');
        });
        // Clear F Form
        $('#ffFclear').on('click', function () {
                $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        });
        // F Dur F Form Akkord
        $('#fffDurAkk').on('click', function () {
                $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#f4f, #f3a, #f2c1, #f1f1').addClass('farbeAkk')
        });
        // F Dur F Form mit Leersaiten einfärben
        /*$('#ffLeer').on('click', function () {
                $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#5c, #4e, #3g, #2c1, #1e1').addClass('farbeAkk')
        });*/
        // F Dur F Form Arpeggio
        $('#fffDurArp').on('click', function () {
                $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#f6F, #f5A, #f5c, #f4f, #f3a, #f2c1, #f1f1').addClass('farbeAkk')
        });
        //F Dur F Form Penta
        $('#fffDurPenta').on('click', function () {
                $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#f6F, #f5A, #f5c, #f4f, #f3a, #f2c1, #f1f1').addClass('farbeAkk');
                $('#f6G, #f4d, #f3g, #f2d1, #f1g1').addClass('farbePenta')
        });
        // F Dur Ionisch 
        $('#fffDurIonisch').on('click', function () {
                $('.FcircleSW').removeClass('farbeAkk farbePenta farbeLeit farbeGleit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#f6F, #f5A, #f5c, #f4f, #f3a, #f2c1, #f1f1').addClass('farbeAkk');
                $('#f6G, #f4d, #f3g, #f2d1, #f1g1').addClass('farbePenta');
                $('#f5Ais, #f3ais').addClass('farbeGleit');
                $('#f6E, #f4e, #f1e1').addClass('farbeLeit');
        });
        // F Form weisse Punkte ausblenden
        $('#ffclearWhite, #ffCclearWhite, #ffBbclearWhite').on('click', function () {
                $('.FcircleSW:not(.farbeAkk, .farbePenta, .farbeGleit, .farbeLeit, .farbeMixo, .farbePentaMixo, .farbeLydDor, .farbeLydDorPenta)').toggleClass('unsichtbarWeiss2');
        });
        // Button C7 einblenden 
        $('#ffc7Slide').on('click', function () {
                $('#pannellistFfC').slideToggle(1000);
                $('#ffbutton__indicator2').toggleClass('hidden');
        });
        // Clear C7 
        $('#ffCclear').on('click', function () {
                $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        });
        // C Dur Akkord
        $('#ffcDurAkk').on('click', function () {
                $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#f5c, #f4e, #f2c1').addClass('farbeMixo')
        });
        // C Dur Akkord mit Leersaiten
        $('#ffcLeer').on('click', function () {
                $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#f5c, #f4e, #f3g, #f2c1, #f1e1').addClass('farbeMixo')
        });
        // C Dur Arpeggio
        $('#ffcDurArp').on('click', function () {
                $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#f6E, #f6G ,#f5c, #f4e, #f3g, #f2c1, #f1e1, #f1g1').addClass('farbeMixo')
        });
        // C Dur Penta
        $('#ffcDurPenta').on('click', function () {
                $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#f6E, #f6G ,#f5c, #f4e, #f3g, #f2c1, #f1e1, #f1g1').addClass('farbeMixo');
                $('#f5A, #f4d, #f3a, #f2d1').addClass('farbePentaMixo')
        });


        // C Mixolydisch

        $('#ffcDurMixo').on('click', function () {
                $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                //$('#6G, #5B, #4d, #3g, #2b, #2d1, #1g1').addClass('farbeMixo');
                //$('#6E, #5A, #4e, #3a, #1e1').addClass('farbePentaMixo');
                $('#f5Ais, #f3ais').addClass('farbeGleit');
        });
        // Septime ein und ausblenden
        /* $('#gDurMixo').on('click', function () {
                 $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2');
                 $('#6F, #4f, #1f1').toggleClass('farbeGleit');
         }); */
        // 4. Stufe Bb Dur F Form
        $('#ffBbSlide').on('click', function () {
                $('#pannellistFfBb').slideToggle(1000);
                $('#ffbutton__indicator3').toggleClass('hidden');
        });
        // Clear Bb Dur F Form
        $('#ffBbclear').on('click', function () {
                $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        });
        // 4 Bb Dur Form 
        $('#ffBbDurAkk').on('click', function () {
                $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#f5Ais, #f4f, #f3ais, #f2d1, #f1f1').addClass('farbeLydDor')
        });
        // 4 Bb Dur Arp F form
        $('#ffBbDurArp').on('click', function () {
                $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#f6F, #f5Ais, #f4d, #f4f, #f3ais, #f2d1, #f1f1').addClass('farbeLydDor')
        });
        // 4 Bb Dur Penta F Form
        $('#ffBbDurPenta').on('click', function () {
                $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#f6F, #f5Ais, #f4d, #f4f, #f3ais, #f2d1, #f1f1').addClass('farbeLydDor');
                $('#f6G, #f5c, #f3g, #f2c1, #f1g1').addClass('farbeLydDorPenta')
        });
        // Bb dur #11 ein
        $('#ffBbDurLyd').on('click', function () {
                $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2');
                $('#f6E, #f4e, #f1e1').addClass('farbeLeit');
        });
        //BB
        

});
