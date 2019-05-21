$(document).ready(function () {
//G Form

        // Button G Form einblenden Slide
        $('#gfSlide').on('click', function () {
                $('#steuerElG').slideToggle(1000);
                $('#gfbutton__indicator').toggleClass('hidden');
        });
        // Clear G Form
        $('#gfGclear').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('div#steuerElG > button').removeClass('clickedAkk')
                $('div#steuerElG2 > button').removeClass('clicked5Akk')
                $('div#steuerElG3 > button').removeClass('clicked4Akk')
        });
        // G Dur G Form Akkord
        $('#gfgDurAkk').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#g6G, #g5B, #g1g1').addClass('farbeAkk')
                $(this).addClass("clickedAkk");
                $('div#steuerElG > button:not(#gfgDurAkk)').removeClass('clickedAkk')
                $('div#steuerElG2 > button').removeClass('clicked5Akk')
                $('div#steuerElG3 > button').removeClass('clicked4Akk')
        });
        // G Dur G Form mit Leersaiten einfärben
        $('#gfLeer').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#g6G, #g5B, #g4d, #g3g, #g2b, #g1g1').addClass('farbeAkk')
                $(this).addClass("clickedAkk");
                $('div#steuerElG > button:not(#gfLeer)').removeClass('clickedAkk')
                $('div#steuerElG2 > button').removeClass('clicked5Akk')
                $('div#steuerElG3 > button').removeClass('clicked4Akk')
        });
        // G Dur G Form Arpeggio
        $('#gfgDurArp').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#g6G, #g5B, #g4d, #g3g, #g2b, #g2d1, #g1g1').addClass('farbeAkk')
                $(this).addClass("clickedAkk");
                $('div#steuerElG > button:not(#gfgDurArp)').removeClass('clickedAkk')
                $('div#steuerElG2 > button').removeClass('clicked5Akk')
                $('div#steuerElG3 > button').removeClass('clicked4Akk')
        });
        //G Dur G Form Penta
        $('#gfgDurPenta').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#g6G, #g5B, #g4d, #g3g, #g2b, #g2d1, #g1g1').addClass('farbeAkk');
                $('#g6E, #g5A, #g4e, #g3a, #g1e1').addClass('farbePenta')
                $(this).addClass("clickedAkk");
                $('div#steuerElG > button:not(#gfgDurPenta)').removeClass('clickedAkk')
                $('div#steuerElG2 > button').removeClass('clicked5Akk')
                $('div#steuerElG3 > button').removeClass('clicked4Akk')
        });
        // G Dur Ionisch
        $('#gfgDurIonisch').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeLeit farbeGleit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#g6G, #g5B, #g4d, #g3g, #g2b, #g2d1, #g1g1').addClass('farbeAkk');
                $('#g6E, #g5A, #g4e, #g3a, #g1e1').addClass('farbePenta');
                $('#g6Fis, #g4fis, #g1fis1').addClass('farbeLeit');
                $('#g5c, #g2c1').addClass('farbeGleit');
                $(this).addClass("clickedAkk");
                $('div#steuerElG > button:not(#gfgDurIonisch)').removeClass('clickedAkk')
                $('div#steuerElG2 > button').removeClass('clicked5Akk')
                $('div#steuerElG3 > button').removeClass('clicked4Akk')
        });
        // G Form weisse Punkte ausblenden
        $('#gfclearWhite, #gfDclearWhite, #gfCclearWhite').on('click', function () {
                $('.GcircleSW:not(.farbeAkk, .farbePenta, .farbeGleit, .farbeLeit, .farbeMixo, .farbePentaMixo, .farbeLydDor, .farbeLydDorPenta)').toggleClass('unsichtbarWeiss2');
        });
        // Button D7 einblenden
        $('#gfd7Slide').on('click', function () {
                $('#steuerElG2').slideToggle(1000);
                $('#gfbutton__indicator2').toggleClass('hidden');
        });
        // Clear D7
        $('#gfDclear').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('div#steuerElG > button').removeClass('clickedAkk')
                $('div#steuerElG2 > button').removeClass('clicked5Akk')
                $('div#steuerElG3 > button').removeClass('clicked4Akk')
        });
        // D Dur Akkord
        $('#gfdDurAkk').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#g3a, #g2d1, #g1fis1').addClass('farbeMixo')
                $(this).addClass("clicked5Akk");
                $('div#steuerElG2 > button:not(#gfdDurAkk)').removeClass('clicked5Akk')
                $('div#steuerElG > button').removeClass('clickedAkk')
                $('div#steuerElG3 > button').removeClass('clicked4Akk')
        });
        // D Dur Akkord mit Leersaiten
        $('#gfdLeer').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#g4d, #g3a, #g2d1, #g1fis1').addClass('farbeMixo')
                $(this).addClass("clicked5Akk");
                $('div#steuerElG2 > button:not(#gfdLeer)').removeClass('clicked5Akk')
                $('div#steuerElG > button').removeClass('clickedAkk')
                $('div#steuerElG3 > button').removeClass('clicked4Akk')
        });
        // D Dur Arpeggio
        $('#gfdDurArp').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#g6Fis, #g5A, #g4d, #g4fis, #g3a, #g2d1, #g1fis1').addClass('farbeMixo')
                $(this).addClass("clicked5Akk");
                $('div#steuerElG2 > button:not(#gfdDurArp)').removeClass('clicked5Akk')
                $('div#steuerElG > button').removeClass('clickedAkk')
                $('div#steuerElG3 > button').removeClass('clicked4Akk')
        });
        // D Dur Penta
        $('#gfdDurPenta').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#g6Fis, #g5A, #g4d, #g4fis, #g3a, #g2d1, #g1fis1').addClass('farbeMixo');
                $('#g6E, #g5B, #g4e, #g2b, #g1e1').addClass('farbePentaMixo')
                $(this).addClass("clicked5Akk");
                $('div#steuerElG2 > button:not(#gfdDurPenta)').removeClass('clicked5Akk')
                $('div#steuerElG > button').removeClass('clickedAkk')
                $('div#steuerElG3 > button').removeClass('clicked4Akk')
        });


        // D Mixolydisch

        $('#gfdDurMixo').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                //$('#6G, #5B, #4d, #3g, #2b, #2d1, #1g1').addClass('farbeMixo');
                //$('#6E, #5A, #4e, #3a, #1e1').addClass('farbePentaMixo');
                $('#g5c, #g2c1').addClass('farbeGleit')
                $(this).addClass('clicked5Akk');
                $('div#steuerElG > button').removeClass('clickedAkk')
                $('div#steuerElG3 > button').removeClass('clicked4Akk')
        });
        // Septime ein und ausblenden

        // 4. Stufe C Form
        $('#gfcSlide').on('click', function () {
                $('#steuerElG3').slideToggle(1000);
                $('#gfbutton__indicator3').toggleClass('hidden');
        });
        // Clear C Dur G Form
        $('#gfCclear').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('div#steuerElG > button').removeClass('clickedAkk')
                $('div#steuerElG2 > button').removeClass('clicked5Akk')
                $('div#steuerElG3 > button').removeClass('clicked4Akk')
        });
        // 4 C Dur Form
        $('#gfcDurAkk').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#g5c, #g4e, #g2c1').addClass('farbeLydDor')
                $(this).addClass("clicked4Akk");
                $('div#steuerElG3 > button:not(#gfcDurAkk)').removeClass('clicked4Akk')
                $('div#steuerElG2 > button').removeClass('clicked5Akk')
                $('div#steuerElG > button').removeClass('clickedAkk')
        });
        // C Dur G Form mit Leersaiten einfärben
        $('#gfcLeer').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#g5c, #g4e, #g3g, #g2c1, #g1e1').addClass('farbeLydDor')
                $(this).addClass("clicked4Akk");
                $('div#steuerElG3 > button:not(#gfcLeer)').removeClass('clicked4Akk')
                $('div#steuerElG2 > button').removeClass('clicked5Akk')
                $('div#steuerElG > button').removeClass('clickedAkk')
        });
        // 4 C Dur Arp G form
        $('#gfcDurArp').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#g6E, #g6G,#g5c, #g4e, #g3g, #g2c1, #g1e1, #g1g1').addClass('farbeLydDor')
                $(this).addClass("clicked4Akk");
                $('div#steuerElG3 > button:not(#gfcDurArp)').removeClass('clicked4Akk')
                $('div#steuerElG2 > button').removeClass('clicked5Akk')
                $('div#steuerElG > button').removeClass('clickedAkk')
        });
        // 4 C Dur Penta G Form
        $('#gfcDurPenta').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
                $('#g6E, #g6G,#g5c, #g4e, #g3g, #g2c1, #g1e1, #g1g1').addClass('farbeLydDor');
                $('#g5A, #g4d, #g3a, #g2d1').addClass('farbeLydDorPenta')
                $(this).addClass("clicked4Akk");
                $('div#steuerElG3 > button:not(#gfcDurPenta)').removeClass('clicked4Akk')
                $('div#steuerElG2 > button').removeClass('clicked5Akk')
                $('div#steuerElG > button').removeClass('clickedAkk')
        });
        // C dur #11 ein
        $('#gfcDurLyd').on('click', function () {
                $('.GcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2');
                $('#g6Fis, #g4fis, #g1fis1').addClass('farbeLeit')
                $(this).addClass('clicked4Akk');
                $('div#steuerElG > button').removeClass('clickedAkk')
                $('div#steuerElG2 > button').removeClass('clicked5Akk')

        });
        // Manuell Akk Farbe hinzufügen
        $("circle.GcircleSW").on("click", function () {
                $(this).toggleClass('farbeAkk');
        })
        
        // Shift G Form ein Bund

        $("#gfGshift").on("click", function () {
                $(".GcircleSW:not(#g4fis)").attr("cx", function (n, v) {
                        return parseInt(v) + 20;
                });
                $("#g4fis").attr("cx", function (n, v) {
                        return parseInt(v) - 80;
                }).attr("cy", function (n, v) {
                        return parseInt(v) - 8;
                });
                $(this).toggle();
                $("#gfGshiftback").toggle();
        });
        // Shift Back ein Bund

        $("#gfGshiftback").on("click", function () {
                $(".GcircleSW:not(#g4fis)").attr("cx", function (n, v) {
                        return parseInt(v) - 20;
                });
                $("#g4fis").attr("cx", function (n, v) {
                        return parseInt(v) + 80;
                }).attr("cy", function (n, v) {
                        return parseInt(v) + 8;
                });
                $(this).toggle();
                $("#gfGshift").toggle();
        });

});
