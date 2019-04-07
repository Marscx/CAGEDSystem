$(document).ready(function() {
// Button C Form einblenden Slide
    $('#cSlide').on('click', function() {
        $('#pannellistC').slideToggle();

    });
// Clear C Form
    $('#Cclear').on('click', function(){
        $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit');
    });
// C Dur C Form einfärben
    var $a = $('.ChcircleSW').hasClass('farbeAkk') ||
             $('.ChcircleSW').hasClass('farbPenta') ||
             $('.ChcircleSW').hasClass('farbeGleit') ||
             $('.ChcircleSW').hasClass('farbeLeit');
    //var $b = $('.ChcircleSW').removeClass('farbeAkk farbePenta');
        
    $('#cDurAkk').on('click', function($con1) { 
        $a = $con1;
        if ($a) {
            $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit');
            $('#5c, #4e, #2c1').addClass('farbeAkk')
        } else {
            $('#5c, #4e, #2c1').addClass('farbeAkk')
        }
        
    }); 
// C Dur C Form mit Leersaiten einfärben
    $('#cLeer').on('click', function ($con1) {
        $a = $con1;
        if ($a) {
            $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit');
            $('#5c, #4e, #3g, #2c1, #1e1').addClass('farbeAkk')
            
        } else {
            $('#5c, #4e, #3g, #2c1, #1e1').addClass('farbeAkk')
        }

    });
// C Dur C Form Arpeggio
    $('#cDurArp').on('click', function($con1){
        $a = $con1;
        if ($a) {
            $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit');
            $('#6E, #6G, #5c, #4e, #3g, #2c1, #1e1, #1g1').addClass('farbeAkk')
        } else {
            $('#6E, #6G, #5c, #4e, #3g, #2c1, #1e1, #1g1').addClass('farbeAkk')
        }   
    });
//C Dur C Form Penta
    $('#cDurPenta').on('click', function($con1) {
        $a = $con1;
        if ($a) {
            $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeGleit farbeLeit');
            $('#6E, #6G, #5c, #4e, #3g, #2c1, #1e1, #1g1').addClass('farbeAkk');
            $('#5A, #4d, #3a, #2d1').addClass('farbePenta')
        } else {
            $('#6E, #6G, #5c, #4e, #3g, #2c1, #1e1, #1g1').addClass('farbeAkk');
            $('#5A, #4d, #3a, #2d1').addClass('farbePenta')
        }
    });
// C Dur Ionisch 
    $('#cDurIonisch').on('click', function($con1){
        $a = $con1;
        if ($a) {
            $('.ChcircleSW').removeClass('farbeAkk farbePenta farbeLeit farbeGleit');  
            $('#6E, #6G, #5c, #4e, #3g, #2c1, #1e1, #1g1').addClass('farbeAkk'); 
            $('#5A, #4d, #3a, #2d1').addClass('farbePenta');
            $('#6F, #4f, #1f1').addClass('farbeGleit');
            $('#5B, #2b').addClass('farbeLeit');     
        } else {
            $('#6E, #6G, #5c, #4e, #3g, #2c1, #1e1, #1g1').addClass('farbeAkk');
            $('#5A, #4d, #3a, #2d1').addClass('farbePenta');
            $('#6F, #4f, #1f1').addClass('farbeGleit');
            $('#5B, #2b').addClass('farbeLeit');
        }
    });
   
});
