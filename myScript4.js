$(document).ready(function () {
    // D Form
    // Button D Form einblenden Slide
    $('#dfSlide').on('click', function () {
        $('#steuerElD').slideToggle(1000);
        $('#dfbutton__indicator').toggleClass('hidden');
    });
    // Clear D Form
    $('#dfDclear').on('click', function () {
        $('.DcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('div#steuerElD > button').removeClass('clickedAkk')
        $('div#steuerElD2 > button').removeClass('clicked5Akk')
        $('div#steuerElD3 > button').removeClass('clicked4Akk')
    });
    // D Dur D Form Akkord
    $('#dfdDurAkk').on('click', function () {
        $('.DcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#d3a, #d2d1, #d1fis1').addClass('farbeAkk')
        $(this).addClass("clickedAkk");
        $('div#steuerElD > button:not(#dfdDurAkk)').removeClass('clickedAkk')
        $('div#steuerElD2 > button').removeClass('clicked5Akk')
        $('div#steuerElD3 > button').removeClass('clicked4Akk')
    });
    // D Dur D Form mit Leersaiten einfärben
    $('#dfLeer').on('click', function () {
        $('.DcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#d4d, #d3a, #d2d1, #d1fis1').addClass('farbeAkk')
        $(this).addClass("clickedAkk");
        $('div#steuerElD > button:not(#dfLeer)').removeClass('clickedAkk')
        $('div#steuerElD2 > button').removeClass('clicked5Akk')
        $('div#steuerElD3 > button').removeClass('clicked4Akk')
    });

    // D Dur D Form Arpeggio
    $('#dfdDurArp').on('click', function () {
        $('.DcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#d6Fis, #d5A, #d4d, #d4fis, #d3a, #d2d1, #d1fis1').addClass('farbeAkk')
        $(this).addClass("clickedAkk");
        $('div#steuerElD > button:not(#dfdDurArp)').removeClass('clickedAkk')
        $('div#steuerElD2 > button').removeClass('clicked5Akk')
        $('div#steuerElD3 > button').removeClass('clicked4Akk')
    });
    //D Dur D Form Penta
    $('#dfdDurPenta').on('click', function () {
        $('.DcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#d6Fis, #d5A, #d4d, #d4fis, #d3a, #d2d1, #d1fis1').addClass('farbeAkk');
        $('#d6E, #d5B, #d4e, #d2b, #d1e1').addClass('farbePenta')
        $(this).addClass("clickedAkk");
        $('div#steuerElD > button:not(#dfdDurPenta)').removeClass('clickedAkk')
        $('div#steuerElD2 > button').removeClass('clicked5Akk')
        $('div#steuerElD3 > button').removeClass('clicked4Akk')
    });
    // D Dur Ionisch 
    $('#dfdDurIonisch').on('click', function () {
        $('.FcircleSW').removeClass('farbeAkk farbePenta farbeLeit farbeGleit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#d6Fis, #d5A, #d4d, #d4fis, #d3a, #d2d1, #d1fis1').addClass('farbeAkk');
        $('#d6E, #d5B, #d4e, #d2b, #d1e1').addClass('farbePenta');
        $('#d6G, #d3g, #d1g1').addClass('farbeGleit');
        $('#d5cis, #d2cis1').addClass('farbeLeit');
        $(this).addClass("clickedAkk");
        $('div#steuerElD > button:not(#dfdDurIonisch)').removeClass('clickedAkk')
        $('div#steuerElD2 > button').removeClass('clicked5Akk')
        $('div#steuerElD3 > button').removeClass('clicked4Akk')
    });
    // D Form weisse Punkte ausblenden
    $('#dfclearWhite, #dfAclearWhite, #dfGclearWhite').on('click', function () {
        $('.DcircleSW:not(.farbeAkk, .farbePenta, .farbeGleit, .farbeLeit, .farbeMixo, .farbePentaMixo, .farbeLydDor, .farbeLydDorPenta)').toggleClass('unsichtbarWeiss2');
    });
    // Button A7 einblenden 
    $('#dfa7Slide').on('click', function () {
        $('#steuerElD2').slideToggle(1000);
        $('#dfbutton__indicator2').toggleClass('hidden');
    });
    // Clear A7 
    $('#dfAclear').on('click', function () {
        $('.DcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('div#steuerElD > button').removeClass('clickedAkk')
        $('div#steuerElD2 > button').removeClass('clicked5Akk')
        $('div#steuerElD3 > button').removeClass('clicked4Akk')
    });
    // A Dur Akkord
    $('#dfaDurAkk').on('click', function () {
        $('.DcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#d4e, #d3a, #d2cis1').addClass('farbeMixo')
        $(this).addClass("clicked5Akk");
        $('div#steuerElD2 > button:not(#dfaDurAkk)').removeClass('clicked5Akk')
        $('div#steuerElD > button').removeClass('clickedAkk')
        $('div#steuerElD3 > button').removeClass('clicked4Akk')
    });
    // A Dur Akkord mit Leersaiten
    $('#dfaLeer').on('click', function () {
        $('.DcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#d5A, #d4e, #d3a, #d2cis1, #d1e1').addClass('farbeMixo')
        $(this).addClass("clicked5Akk");
        $('div#steuerElD2 > button:not(#dfaLeer)').removeClass('clicked5Akk')
        $('div#steuerElD > button').removeClass('clickedAkk')
        $('div#steuerElD3 > button').removeClass('clicked4Akk')
    });
    // A Dur Arpeggio
    $('#dfaDurArp').on('click', function () {
        $('.DcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#d6E, #d5A, #d5cis, #d4e, #d3a, #d2cis1, #d1e1').addClass('farbeMixo')
        $(this).addClass("clicked5Akk");
        $('div#steuerElD2 > button:not(#dfaDurArp)').removeClass('clicked5Akk')
        $('div#steuerElD > button').removeClass('clickedAkk')
        $('div#steuerElD3 > button').removeClass('clicked4Akk')
    });
    // A Dur Penta
    $('#dfaDurPenta').on('click', function () {
        $('.DcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#d6E, #d5A, #d5cis, #d4e, #d3a, #d2cis1, #d1e1').addClass('farbeMixo');
        $('#d6Fis, #d5B, #d4fis, #d2b, #d1fis1').addClass('farbePentaMixo')
        $(this).addClass("clicked5Akk");
        $('div#steuerElD2 > button:not(#dfaDurPenta)').removeClass('clicked5Akk')
        $('div#steuerElD > button').removeClass('clickedAkk')
        $('div#steuerElD3 > button').removeClass('clicked4Akk')
    });


    // A Mixolydisch

    $('#dfaDurMixo').on('click', function () {
        $('.DcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#d6G, #d3g, #d1g1').addClass('farbeGleit');
        $(this).addClass('clicked5Akk');
        $('div#steuerElD > button').removeClass('clickedAkk')
        $('div#steuerElD3 > button').removeClass('clicked4Akk')
    });

    // 4. Stufe G Dur D Form
    $('#dfgSlide').on('click', function () {
        $('#steuerElD3').slideToggle(1000);
        $('#dfbutton__indicator3').toggleClass('hidden');
    });
    // Clear G Dur D Form
    $('#dfGclear').on('click', function () {
        $('.DcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('div#steuerElD > button').removeClass('clickedAkk')
        $('div#steuerElD2 > button').removeClass('clicked5Akk')
        $('div#steuerElD3 > button').removeClass('clicked4Akk')
    });
    // 4 G Dur Form 
    $('#dfgDurAkk').on('click', function () {
        $('.DcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#d6G, #d5B, #d1g1').addClass('farbeLydDor')
        $(this).addClass("clicked4Akk");
        $('div#steuerElD3 > button:not(#dfgDurAkk)').removeClass('clicked4Akk')
        $('div#steuerElD > button').removeClass('clickedAkk')
        $('div#steuerElD2 > button').removeClass('clicked5Akk')
    });
    // 4 G Dur Akkord mit Leesaiten
    $('#dfgLeer').on('click', function () {
        $('.DcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#d6G, #d5B, #d4d, #d3g, #d2b, #d1g1').addClass('farbeLydDor')
        $(this).addClass("clicked4Akk");
        $('div#steuerElD3 > button:not(#dfgLeer)').removeClass('clicked4Akk')
        $('div#steuerElD > button').removeClass('clickedAkk')
        $('div#steuerElD2 > button').removeClass('clicked5Akk')
    });
    // 4 D Dur Arp G form
    $('#dfgDurArp').on('click', function () {
        $('.DcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#d6G, #d5B, #d4d, #d3g, #d2b, #d2d1, #d1g1').addClass('farbeLydDor')
        $(this).addClass("clicked4Akk");
        $('div#steuerElD3 > button:not(#dfgDurArp)').removeClass('clicked4Akk')
        $('div#steuerElD > button').removeClass('clickedAkk')
        $('div#steuerElD2 > button').removeClass('clicked5Akk')
    });
    // 4 G Dur Penta D Form
    $('#dfgDurPenta').on('click', function () {
        $('.DcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#d6G, #d5B, #d4d, #d3g, #d2b, #d2d1, #d1g1').addClass('farbeLydDor');
        $('#d6E, #d5A, #d4e, #d3a, #d1e1').addClass('farbeLydDorPenta')
        $(this).addClass("clicked4Akk");
        $('div#steuerElD3 > button:not(#dfgDurPenta)').removeClass('clicked4Akk')
        $('div#steuerElD > button').removeClass('clickedAkk')
        $('div#steuerElD2 > button').removeClass('clicked5Akk')
    });
    // G dur #11 ein
    $('#dfgDurLyd').on('click', function () {
        $('.DcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2');
        $('#d5cis, #d2cis1').addClass('farbeLeit');
        $(this).addClass('clicked4Akk');
        $('div#steuerElD > button').removeClass('clickedAkk')
        $('div#steuerElD2 > button').removeClass('clicked5Akk')
    });

    // Circle Manuell Click Farbe Akk
    $("circle.DcircleSW").on("click", function () {
        $(this).toggleClass('farbeAkk');
    })

    // Shift D Form ein Bund

    $("#dfDshift").on("click", function(){
        $(".DcircleSW:not(#d4fis, #d5cis)").attr("cx", function(n, v){
            return parseInt(v) + 20;
        });
        $("#d4fis, #d5cis").attr("cx", function(n, v){
            return parseInt(v) - 80;
        }).attr("cy", function(n, v){
            return parseInt(v) - 8;
        });
        $(this).toggle();
        $("#dfDshiftback").toggle();
    });
    // Shift Back ein Bund

    $("#dfDshiftback").on("click", function () {
        $(".DcircleSW:not(#d4fis, #d5cis)").attr("cx", function (n, v) {
            return parseInt(v) - 20;
        });
        $("#d4fis, #d5cis").attr("cx", function (n, v) {
            return parseInt(v) + 80;
        }).attr("cy", function (n, v) {
            return parseInt(v) + 8;
        });
        $(this).toggle();
        $("#dfDshift").toggle();
    });


});