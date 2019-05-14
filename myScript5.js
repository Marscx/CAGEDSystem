$(document).ready(function () {
    // A Form
    // Button A Form einblenden Slide
    $('#afSlide').on('click', function () {
        $('#pannellistAfA').slideToggle(1000);
        $('#afbutton__indicator').toggleClass('hidden');
    });
    // Clear A Form
    $('#afAclear').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
    });
    // A Dur A Form Akkord
    $('#afaDurAkk').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#a4e, #a3a, #a2cis1').addClass('farbeAkk')
    });
    // A Dur A Form mit Leersaiten einfärben
    $('#afLeer').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#a5A, #a4e, #a3a, #a2cis1, #a1e1').addClass('farbeAkk')
    });

    // A Dur A Form Arpeggio
    $('#afaDurArp').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#a6E, #a5A, #a5cis, #a4e, #a3a, #a2cis1, #a1e1').addClass('farbeAkk')
    });
    //A Dur A Form Penta
    $('#afaDurPenta').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#a6E, #a5A, #a5cis, #a4e, #a3a, #a2cis1, #a1e1').addClass('farbeAkk');
        $('#a6Fis, #a5B, #a4fis, #a2b, #a1fis1').addClass('farbePenta')
    });
    // A Dur Ionisch 
    $('#afaDurIonisch').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeLeit farbeGleit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#a6E, #a5A, #a5cis, #a4e, #a3a, #a2cis1, #a1e1').addClass('farbeAkk');
        $('#a6Fis, #a5B, #a4fis, #a2b, #a1fis1').addClass('farbePenta');
        $('#a4d, #a2d1').addClass('farbeGleit');
        $('#a6Gis, #a3gis, #a1gis1').addClass('farbeLeit');
    });
    // A Form weisse Punkte ausblenden
    $('#afclearWhite').on('click', function () {
        $('.AcircleSW:not(.farbeAkk, .farbePenta, .farbeGleit, .farbeLeit, .farbeMixo, .farbePentaMixo, .farbeLydDor, .farbeLydDorPenta)').toggleClass('unsichtbarWeiss2');
    });
    // Button E7 einblenden 
    $('#afe7Slide').on('click', function () {
        $('#pannellistAfE').slideToggle(1000);
        $('#afbutton__indicator2').toggleClass('hidden');
    });
    // Clear E7 
    $('#afEclear').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
    });
    // E Dur Akkord
    $('#afeDurAkk').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#a5B, #a4e, #a3gis').addClass('farbeMixo')
    });
    // E Dur Akkord mit Leersaiten
    $('#afeLeer').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#a6E, #a5B, #a4e, #a3gis, #a2b, #a1e1').addClass('farbeMixo')
    });
    // E Dur Arpeggio
    $('#afeDurArp').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#a6E, #a6Gis, #a5B, #a4e, #a3gis, #a2b, #a1e1, #a1gis1').addClass('farbeMixo')
    });
    // E Dur Penta
    $('#afeDurPenta').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#a6E, #a6Gis, #a5B, #a4e, #a3gis, #a2b, #a1e1, #a1gis1').addClass('farbeMixo');
        $('#a6Fis, #a5cis, #a4fis, #a2cis1, #a1fis1').addClass('farbePentaMixo')
    });


    // E Mixolydisch

    $('#afeDurMixo').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#a4d, #a2d1').addClass('farbeGleit');
    });

    // 4. Stufe D Form
    $('#afdSlide').on('click', function () {
        $('#pannellistAfD').slideToggle(1000);
        $('#afbutton__indicator3').toggleClass('hidden');
    });
    // Clear G Dur D Form
    $('#afDclear').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
    });
    // 4 D Dur Form 
    $('#afdDurAkk').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#a3a, #a2d1, #a1fis1').addClass('farbeLydDor')
    });
    // 4 D Dur Akkord mit Leesaiten
    $('#afdLeer').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#a4d, #a3a, #a2d1, #a1fis1').addClass('farbeLydDor')
    });
    // 4 D Dur Arp 
    $('#afdDurArp').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#a6Fis, #a5A, #a4d, #a4fis, #a3a, #a2d1, #a1fis1').addClass('farbeLydDor')
    });
    // 4 D Dur Penta
    $('#afdDurPenta').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#a6Fis, #a5A, #a4d, #a4fis, #a3a, #a2d1, #a1fis1').addClass('farbeLydDor');
        $('#a6E, #a5B, #a4e, #a2b, #a1e1').addClass('farbeLydDorPenta')
    });
    // D dur #11 ein
    $('#afdDurLyd').on('click', function () {
        $('.AcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2');
        $('#a6Gis, #a3gis, #a1gis1').addClass('farbeLeit');
    });

    // Circle Manuell Click Farbe Akk
    $("circle.AcircleSW").on("click", function () {
        $(this).toggleClass('farbeAkk');
    })

    // Shift A Form ein Bund

    $("#afAshift").on("click", function () {
        $(".AcircleSW:not(#a6Gis, #a5cis, #a4fis)").attr("cx", function (n, v) {
            return parseInt(v) + 20;
        });
        $("#a6Gis, #a5cis, #a4fis").attr("cx", function (n, v) {
            return parseInt(v) - 80;
        }).attr("cy", function (n, v) {
            return parseInt(v) - 8;
        });
        $(this).toggleClass("shiftHidden");
        $("#afAshiftback").toggleClass("shiftHidden");
    });
    // Shift Back ein Bund

    $("#afAshiftback").on("click", function () {
        $(".AcircleSW:not(#a6Gis, #a5cis, #a4fis)").attr("cx", function (n, v) {
            return parseInt(v) - 20;
        });
        $("#a6Gis, #a5cis, #a4fis").attr("cx", function (n, v) {
            return parseInt(v) + 80;
        }).attr("cy", function (n, v) {
            return parseInt(v) + 8;
        });
        $(this).toggleClass("shiftHidden");
        $("#afAshift").toggleClass("shiftHidden");
    });
    


});