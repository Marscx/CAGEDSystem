$(document).ready(function () {
// F Form Achtung es wird die E Form zuerst angezeigt Noten sind mit der shift Form beschriftet!!!
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
        $('#f5c, #f4f, #f3a').addClass('farbeAkk')
    });
    //F Dur F Form mit Leersaiten einfärben
    $('#ffLeer').on('click', function () {
        $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#f6F, #f5c, #f4f, #f3a, #f2c1, #f1f1').addClass('farbeAkk')
    });
    // F Dur F Form Arpeggio
    $('#fffDurArp').on('click', function () {
        $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#f6F, #f5A, #f5c, #f4f, #f3a, #f2c1, #f1f1, #f1gis1').addClass('farbeAkk')
    });
    //F Dur F Form Penta
    $('#fffDurPenta').on('click', function () {
        $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#f6F, #f5A, #f5c, #f4f, #f3a, #f2c1, #f1f1, #f1gis1').addClass('farbeAkk');
        $('#f6G, #f4d, #f3g, #f2d1, #f1g1').addClass('farbePenta')
    });
    // F Dur Ionisch 
    $('#fffDurIonisch').on('click', function () {
        $('.FcircleSW').removeClass('farbeAkk farbePenta farbeLeit farbeGleit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#f6F, #f5A, #f5c, #f4f, #f3a, #f2c1, #f1f1, #f1gis1').addClass('farbeAkk');
        $('#f6G, #f4d, #f3g, #f2d1, #f1g1').addClass('farbePenta');
        $('#f5Ais, #f3ais').addClass('farbeGleit');
        $('#f6Dis, #f6E, #f4e, #f1e1').addClass('farbeLeit');
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
        $('#f5c, #f4e, #f2c1, #f1g1').addClass('farbeMixo')
    });
    /* C Dur Akkord mit Leersaiten
    $('#ffcLeer').on('click', function () {
        $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#f5c, #f4e, #f3g, #f2c1, #f1e1').addClass('farbeMixo')
    });*/
    // C Dur Arpeggio
    $('#ffcDurArp').on('click', function () {
        $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#f6E, #f6G ,#f5c, #f4e, #f3g, #f2c1, #f1e1, #f1g1').addClass('farbeMixo')
    });
    // C Dur Penta
    $('#ffcDurPenta').on('click', function () {
        $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#f6Dis, #f6E, #f6G ,#f5c, #f4e, #f3g, #f2c1, #f1e1, #f1g1').addClass('farbeMixo');
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

    // 4. Stufe Bb Dur F Form
    $('#ffBbSlide').on('click', function () {
        $('#pannellistFfBb').slideToggle(1000);
        $('#ffbutton__indicator3').toggleClass('hidden');
    });
    // Clear Bb Dur F Form
    $('#ffBbclear').on('click', function () {
        $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
    });
    // 4 Bb Dur Akkord
    $('#ffBbDurAkk').on('click', function () {
        $('.FcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit farbeMixo farbePentaMixo unsichtbarWeiss2 farbeLydDor farbeLydDorPenta');
        $('#f4f, #f3ais, #f2d1').addClass('farbeLydDor')
    });
    // 4 Bb Dur Form Leersaiten
    $('#ffBbLeer').on('click', function () {
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
        $('#f6Dis, #f6E, #f4e, #f1e1').addClass('farbeLeit');
    });
        //BB
    // Circle Manuell Click Farbe Akk
    $("circle.FcircleSW").on("click",  function(){
        $(this).toggleClass('farbeAkk');
    })
    // Kontroll buttons ausblenden

    $(".headerButton").on("click", function(){
        $(".button, .buttonSlide, li").toggleClass("controlHidden");
        $('#headButton__indicator').toggleClass('hidden');
    })
    // cagefd Pannels ein und ausblenden
    $("#cButton").on("click", function(){
        $("#cFormPanel").toggleClass("controlHidden");
    });
    $("#gButton").on("click", function () {
        $("#gFormPanel").toggleClass("controlHidden");
    });
    $("#dButton").on("click", function () {
        $("#dFormPanel").toggleClass("controlHidden");
    });
    $("#fButton").on("click", function () {
        $("#fFormPanel").toggleClass("controlHidden");
    });
    $("#aButton").on("click", function () {
        $("#aFormPanel").toggleClass("controlHidden");
    });
    // Shift F Form ein Bund

    $("#ffFshift").on("click", function () {
        $(".FcircleSW:not(#f5A, #f4d, #f3g, #f1e1)").attr("cx", function (n, v) {
            return parseInt(v) + 20;
        });
        $("#f5A, #f4d, #f3g, #f1e1").attr("cx", function (n, v) {
            return parseInt(v) - 80;
        }).attr("cy", function (n, v) {
            return parseInt(v) - 8;
        });
        $(this).toggleClass("shiftHidden");
        $("#ffFshiftback").toggleClass("shiftHidden");
        $("#f6Dis").toggleClass("shiftHidden");
    });
    // Shift Back ein Bund

    $("#ffFshiftback").on("click", function () {
        $(".FcircleSW:not(#f5A, #f4d, #f3g, #f1e1)").attr("cx", function (n, v) {
            return parseInt(v) - 20;
        });
        $("#f5A, #f4d, #f3g, #f1e1").attr("cx", function (n, v) {
            return parseInt(v) + 80;
        }).attr("cy", function (n, v) {
            return parseInt(v) + 8;
        });
        
        $(this).toggleClass("shiftHidden");
        $("#ffFshift").toggleClass("shiftHidden");
        $("#f6Dis").toggleClass("shiftHidden");
    });
    
});