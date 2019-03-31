//C Form Dur Akkord ohne Leersaiten
$(document).ready(function() {
    $('#cAkkordFarbe').on('click', function() {
            $('.cFormAkk').toggleClass('CcircleSW farbeAkk');
       } );

    $('#cAkkordFarbeLeer').on('click', function(t) {
            $('.cFormAkkLeer').toggleClass('CcircleSW farbeAkk');
       } );
//C Form Dur Arpeggio 
    $('#cArpeggioFarbe').on('click', function() {
            $('.cFormArp').toggleClass('CcircleSW farbeAkk'); 
    } );
// c Gleit Leitton Farbe
    $('#cGleitLeit').on('click', function() {
        $('.cFormGl').toggleClass('CcircleSW farbeGleit');
        $('.cFormLe').toggleClass('CcircleSW farbeLeit');
    });
//c Penta 2 und 6 Farbe
    $('#cPentaFarbe').on('click', function() {
        $('.cFormPenta').toggleClass('CcircleSW farbePenta');
    });
//C Form weisse Punkte verstecken
    $('#cHideWhite, #GDHideWhite, #FsDHideWhite').on('click', function() {
        $('.CcircleSW').toggleClass('unsichtbarWeiss');
    });
//C Form G Dur Dominant Akkord
    $('#GDAkkordFarbe').on('click', function() {
            $('.cFormGAkk').toggleClass('CcircleSW farbeMixo');

    } );
    $('#GDAkkordFarbeLeer').on('click', function() {
            $('.cFormGAkkLeer').toggleClass('CcircleSW farbeMixo');
       } );

//C Form G Dur Dominant Arpeggio
    $('#GDArpeggioFarbe').on('click', function() {
            $('.cFormGArp').toggleClass('CcircleSW farbeMixo');
    } );
//C Form G Dur Septime
    $('#G7septFarbe').on('click', function() {
            $('.cFormG7Arp7').toggleClass('CcircleSW farbeMixo7');
    } );
//C Form G Dur Mixo Penta 
    $('#GDPentaFarbe').on('click', function() {
            $('.cFormGPenta').toggleClass('CcircleSW farbePentaMixo');
    } );
//C Form Button Toggle Tonika 
    $('#tonikaC').click(function(){
        $('#pannellistC').slideToggle();
    });
//C Form Button Toggle Dominante
    $('#dominantC').click(function(){
        $('#pannellistDC').slideToggle();
    });
// C Form 4 Lydisch Toggle
    $('#subdominantC').click(function(){
        $('#pannellistSDC').slideToggle();
    });
// C Form Lydisch F Akkord
    $('#FsDAkkordFarbe').on('click', function() {
        $('.cFormFAkk').toggleClass('CcircleSW farbeLydDor');

    } );
    $('#FsDAkkordFarbeLeer').on('click', function() {
        $('.cFormFAkkLeer').toggleClass('CcircleSW farbeLydDor');
    } );
// C Form Lydisch F Arpeggio
    $('#FsDArpeggioFarbe').on('click', function() {
        $('.cFormFArp').toggleClass('CcircleSW farbeLydDor');
    } );
// C Form Lydisch F Penta
    $('#FsDPentaFarbe').on('click', function() {
        $('.cFormFPenta').toggleClass('CcircleSW farbeLydDorPenta');
    } );
// C Form Lydisch F #11
    $('#fLydFarbe').on('click', function() {
        $('.cFormF11').toggleClass('CcircleSW farbeLeit');
    } );

// Am Form Button Toggle 6m
    $('#tonikaAm').click(function(){
        $('#pannellistAm').slideToggle();
    });
// Am Form Moll Akkord
    $('#amAkkordFarbe').on('click', function() {
            $('.amFormAkk').toggleClass('AmcircleSW farbeAkk');
    } );
    $('#amAkkordFarbeLeer').on('click', function() {
            $('.amFormAkkLeer').toggleClass('AmcircleSW farbeAkk');
    } );
// Am Form Penta
    $('#amPentaFarbe').on('click', function() {
        $('.amFormPenta').toggleClass('AmcircleSW farbePenta');
    });
// Am Form Arppeggio
    $('#amArpeggioFarbe').on('click', function() {
        $('.amFormArp').toggleClass('AmcircleSW farbeAkk');
    } );
// Am Aeolisch Töne
    $('#amGleitLeit').on('click', function() {
        $('.amForm6').toggleClass('AmcircleSW farbeGleit');
        $('.amForm9').toggleClass('AmcircleSW farbeLeit');
    });
// Am Button weisse Punkte Hide
    $('#amHideWhite, #DmDorHideWhite').on('click', function() {
        $('.AmcircleSW').toggleClass('unsichtbarWeiss');
    });
// Am Form Button Toggle Dm Dorisch
    $('#dorischDm').click(function(){
        $('#pannellistDmDor').slideToggle();
    });
// Am Form Dm Dorisch Akkord
    $('#DmDorAkkordFarbe').on('click', function() {
        $('.amFormDmAkk').toggleClass('AmcircleSW farbeLydDor');
    } );
    $('#DmDorAkkordFarbeLeer').on('click', function() {
        $('.amFormDmAkkLeer').toggleClass('AmcircleSW farbeLydDor');
    } );
// Am Form Dm Dorisch Arpeggio
    $('#DmDorArpeggioFarbe').on('click', function() {
        $('.amFormDmArp').toggleClass('AmcircleSW farbeLydDor');
    } );
// Am Form Dm Penta 
    $('#DmDorPentaFarbe').on('click', function() {
        $('.amFormDmPenta').toggleClass('AmcircleSW farbeLydDorPenta');
    });
// Am Form Dm 6/9
    $('#DmDorGleitLeit').on('click', function() {
        $('.amFormDm6').toggleClass('AmcircleSW farbeLeit');
    });
//A Form Button Toggle 
    $('#tonikaA').click(function(){
        $('#pannellistA').slideToggle();
    });
// A Form Dur Akkord 
    $('#aAkkordFarbe').on('click', function() {
        $('.aFormAkk').toggleClass('AcircleSW farbeAkk');
    }); 
// A Form Button weisse Punkte Hide
    $('#aHideWhite').on('click', function() {
        $('.AcircleSW').toggleClass('unsichtbarWeiss');
    });
//g Form Akkord
    $('#gAkkordFarbe').on('click', function() {
            $('.gFormAkk').toggleClass('GcircleSW farbeAkk');
   } );
    $('#gAkkordFarbeLeer').on('click', function() {
            $('.gFormAkkLeer').toggleClass('GcircleSW farbeAkk');
   } );
//g Form Arpeggio
    $('#gArpeggioFarbe').on('click', function() {
        $('.gFormArp').toggleClass('GcircleSW farbeAkk');
    } );

// g Form Penta
    $('#gPentaFarbe').on('click', function() {
        $('.gFormPenta').toggleClass('GcircleSW farbePenta');
    });
// G Form Leit und Gleitton
    $('#gGleitLeit').on('click', function() {
        $('.gFormGl').toggleClass('GcircleSW farbeGleit');
        $('.gFormLe').toggleClass('GcircleSW farbeLeit');
    });
// G Form Button Toggle Tonika
    $('#tonikaG').click(function(){
        $('#pannellistG').slideToggle();
    });
//G Form Button Toggle Dominante
    $('#dominantG').click(function(){
        $('#pannellistDG').slideToggle();
    });
//G Form Dur Akkord Dominante
    $('#dDAkkordFarbe').on('click', function() {
            $('.gFormDAkk').toggleClass('GcircleSW farbeMixo');

    } );
    $('#dDAkkordFarbeLeer').on('click', function() {
            $('.gFormDAkkLeer').toggleClass('GcircleSW farbeMixo');
       } );
//G Form Dur Arpeggio Dominante
    $('#dDArpeggioFarbe').on('click', function() {
            $('.gFormDArp').toggleClass('GcircleSW farbeMixo');
    } );
//G Form Septime D7
    $('#d7septFarbe').on('click', function() {
            $('.gFormD7Arp7').toggleClass('GcircleSW farbeMixo7');
    } );
//GForm Mixo Penta D
    $('#dDPentaFarbe').on('click', function() {
            $('.gFormDPenta').toggleClass('GcircleSW farbePentaMixo');
    } );
// G Form Button Hide White
    $('#gHideWhite, #DDHideWhite, #CsDHideWhite').on('click', function() {
        $('.GcircleSW').toggleClass('unsichtbarWeiss');
    });
// G Form 4 Lydisch Toggle
$('#subdominantG').click(function(){
    $('#pannellistSDG').slideToggle();
});
// G Form Lydisch C Akkord
$('#CsDAkkordFarbe').on('click', function() {
    $('.gFormCAkk').toggleClass('GcircleSW farbeLydDor');

} );
$('#CsDAkkordFarbeLeer').on('click', function() {
    $('.gFormCAkkLeer').toggleClass('GcircleSW farbeLydDor');
} );
// G Form Lydisch C Arpeggio
$('#CsDArpeggioFarbe').on('click', function() {
    $('.gFormCArp').toggleClass('GcircleSW farbeLydDor');
} );
// G Form Lydisch C Penta
$('#CsDPentaFarbe').on('click', function() {
    $('.gFormCPenta').toggleClass('GcircleSW farbeLydDorPenta');
} );
// g Form Lydisch C #11
$('#cLydFarbe').on('click', function() {
    $('.gFormC11').toggleClass('GcircleSW farbeLeit');
} );
//Em Form Button Toggle
    $('#tonikaEm').click(function(){
        $('#pannellistEm').slideToggle();
    });

//Em Form Akkord
    $('#emAkkordFarbe').on('click', function() {
            $('.emFormAkk').toggleClass('EmcircleSW farbeAkk');
    } );

    $('#emAkkordFarbeLeer').on('click', function() {
        $('.emFormAkkLeer').toggleClass('EmcircleSW farbeAkk');
    } );
// Em Form Arpeggio
    $('#emArpeggioFarbe').on('click', function() {
        $('.emFormArp').toggleClass('EmcircleSW farbeAkk');
    } );
//Em Form Penta
    $('#emPentaFarbe').on('click', function() {
        $('.emFormPenta').toggleClass('EmcircleSW farbePenta');
    });
//Em Form Aeolisch
    $('#emGleitLeit').on('click', function() {
        $('.emForm6').toggleClass('EmcircleSW farbeGleit');
        $('.emForm9').toggleClass('EmcircleSW farbeLeit');
    });
// Em Form Button Hide White
    $('#emHideWhite, #AmDorHideWhite').on('click', function() {
        $('.EmcircleSW').toggleClass('unsichtbarWeiss');
    });
// Em Form Am Dorisch Toggle
    $('#dorischAm').click(function(){
        $('#pannellistAmDor').slideToggle();
    });
// Em Form Am Dorisch Akkord
    $('#AmDorAkkordFarbe').on('click', function() {
        $('.emFormAmAkk').toggleClass('EmcircleSW farbeLydDor');
    } );

    $('#AmDorAkkordFarbeLeer').on('click', function() {
    $('.emFormAmAkkLeer').toggleClass('EmcircleSW farbeLydDor');
    } );
// Em Form Am Dorisch Arpeggio
    $('#AmDorArpeggioFarbe').on('click', function() {
        $('.emFormAmArp').toggleClass('EmcircleSW farbeLydDor');
    } );
// Em Form Am Dorisch Penta
    $('#AmDorPentaFarbe').on('click', function() {
        $('.emFormAmPenta').toggleClass('EmcircleSW farbeLydDorPenta');
    });
// Em Form Am Dorisch 6
    $('#AmDorGleitLeit').on('click', function() {
        $('.emFormAm6').toggleClass('EmcircleSW farbeLeit');
    });
//E Form Button Toggle
    $('#tonikaE').click(function(){
        $('#pannellistE').slideToggle();
    });
//E Form Akkord
    $('#eAkkordFarbe').on('click', function() {
            $('.eFormAkk').toggleClass('EcircleSW farbeAkk');
    });
//E Form Button Hide White
    $('#eHideWhite').on('click', function() {
        $('.EcircleSW').toggleClass('unsichtbarWeiss');
    });
//F Form Button Toggle
    $('#tonikaF').click(function(){
        $('#pannellistF').slideToggle();
    });
//F Form Akkord
    $('#fAkkordFarbe').on('click', function() {
            $('.fFormAkk').toggleClass('FcircleSW farbeAkk');
    });
//F Form Arppeggio
    $('#fArpeggioFarbe').on('click', function() {
            $('.fFormArp').toggleClass('FcircleSW farbeAkk');
    });
//F Form Penta
    $('#fPentaFarbe').on('click', function() {
            $('.fFormPenta').toggleClass('FcircleSW farbePenta');
    });
//F Form Gleit Leit
    $('#fGleitLeit').on('click', function() {
            $('.fFormLe').toggleClass('FcircleSW farbeLeit');
            $('.fFormGl').toggleClass('FcircleSW farbeGleit');
    });
//F Form Button Hide WHite
    $('#fHideWhite, #cDHideWhite').on('click', function() {
        $('.FcircleSW').toggleClass('unsichtbarWeiss');
    });
//F Form Dominant Button Toggle
    $('#dominantF').click(function(){
        $('#pannellistDF').slideToggle();
    });
//F Form Dominant Dur Akkord
    $('#cDAkkordFarbe').on('click', function() {
            $('.fFormCAkk').toggleClass('FcircleSW farbeMixo');

    } );
    $('#cDAkkordFarbeLeer').on('click', function() {
            $('.fFormCAkkLeer').toggleClass('FcircleSW farbeMixo');
    } );
// F Form Dominant Arp
    $('#cDArpeggioFarbe').on('click', function() {
            $('.fFormCArp').toggleClass('FcircleSW farbeMixo');
    } );
// F Form Dominant Dur Penta
    $('#cDPentaFarbe').on('click', function() {
            $('.fFormCPenta').toggleClass('FcircleSW farbePentaMixo');
    } );
//F Form Dominant 7
    $('#C7septFarbe').on('click', function() {
            $('.fFormC7Arp7').toggleClass('FcircleSW farbeMixo7');
    } );

//Dm Form Button Toggle
    $('#tonikaDm').click(function(){
        $('#pannellistDm').slideToggle();
    });
//Dm Form Akkord
    $('#dmAkkordFarbe').on('click', function() {
            $('.dmFormAkk').toggleClass('DmcircleSW farbeAkk');
    });
    $('#dmAkkordFarbeLeer').on('click', function() {
            $('.dmFormAkkLeer').toggleClass('DmcircleSW farbeAkk');
       } );
// Dm Form Arpeggio
    $('#dmArpeggioFarbe').on('click', function() {
            $('.dmFormArp').toggleClass('DmcircleSW farbeAkk');
    });
// Dm Form Penta
    $('#dmPentaFarbe').on('click', function() {
            $('.dmFormPenta').toggleClass('DmcircleSW farbePenta');
    });
// Dm Form Aeolisch Modus
    $('#dmGleitLeit').on('click', function() {
            $('.dmForm6').toggleClass('DmcircleSW farbeGleit');
            $('.dmForm9').toggleClass('DmcircleSW farbeLeit');
    });
//Dm Form Button Hide White
    $('#dmHideWhite').on('click', function() {
        $('.DmcircleSW').toggleClass('unsichtbarWeiss');
    });
//D Form Button Toggle
    $('#tonikaD').click(function(){
        $('#pannellistD').slideToggle();
    });

//D Form Akkord
    $('#dAkkordFarbe').on('click', function() {
            $('.dFormAkk').toggleClass('DcircleSW farbeAkk');
    });
//D Form Button Hide White
    $('#dHideWhite').on('click', function() {
        $('.DcircleSW').toggleClass('unsichtbarWeiss');
    });

// Einblenden im Chromatischen Grid-System TEST
    $('#test').on('click', function() { 
        $('#5c, #4e, #2c1').toggleClass('farbeAkk')
    });


});
