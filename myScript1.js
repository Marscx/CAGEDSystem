$(document).ready(function () {
    // Button C Form einblenden Slide
    $('#cSlide').on('click', function () {
        $('#pannellistC').slideToggle(1000);
        $('#button__indicator').toggleClass('hidden');

    });
    // Clear C Form
    $('#Cclear').on('click', function () {
        $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit unsichtbarWeiss2');
    });
    

    $('#cDurAkk').on('click', function ($con1) {
        
            $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit unsichtbarWeiss2');
            $('#5c, #4e, #2c1').addClass('farbeAkk')
        

    });
    // C Dur C Form mit Leersaiten einfärben
    $('#cLeer').on('click', function ($con1) {
       
            $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit unsichtbarWeiss2');
            $('#5c, #4e, #3g, #2c1, #1e1').addClass('farbeAkk')

       

    });
    // C Dur C Form Arpeggio
    $('#cDurArp').on('click', function ($con1) {
        
            $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit unsichtbarWeiss2');
            $('#6E, #6G, #5c, #4e, #3g, #2c1, #1e1, #1g1').addClass('farbeAkk')
        
   });
    //C Dur C Form Penta
    $('#cDurPenta').on('click', function ($con1) {
        
            $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit unsichtbarWeiss2');
            $('#6E, #6G, #5c, #4e, #3g, #2c1, #1e1, #1g1').addClass('farbeAkk');
            $('#5A, #4d, #3a, #2d1').addClass('farbePenta')
        
    });
    // C Dur Ionisch 
    $('#cDurIonisch').on('click', function ($con1) {
        
            $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeLeit farbeGleit unsichtbarWeiss2');
            $('#6E, #6G, #5c, #4e, #3g, #2c1, #1e1, #1g1').addClass('farbeAkk');
            $('#5A, #4d, #3a, #2d1').addClass('farbePenta');
            $('#6F, #4f, #1f1').addClass('farbeGleit');
            $('#5B, #2b').addClass('farbeLeit');
        
    });
    // C Form weisse Punkte ausblenden
    $('#clearWhite').on('click', function () {
        $('.ChcircleSW:not(.farbeAkk, .farbePenta, .farbeGleit, .farbeLeit)').toggleClass('unsichtbarWeiss2');

    });


});
