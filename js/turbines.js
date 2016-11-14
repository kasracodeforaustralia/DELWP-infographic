
$( document ).ready(function() {

    var $win = $(window);
    
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    
    
        /* -------  All turbines ------*/
    $('#turbine1').animate({
        width: (($WidthPerc * turbineW)/100) *60 /100,
        height:(($HeightPerc* turbineH)/100) *60 /100,
        
        left: ($winWidth  *(18) )/100,
        top:  ($winHeight *(1.8) )/100
    },0);       
    $('#turbine2').animate({
        width: (($WidthPerc * turbineW)/100) *120 /100,
        height:(($HeightPerc* turbineH)/100) *120 /100,

        left: ($winWidth  *(27) )/100,
        top:  ($winHeight *(1.5) )/100
    },0);
    
    $('#turbine3').animate({
        width: ( (($WidthPerc * turbineW)/100) ) *70 /100,
        height:( (($HeightPerc* turbineH)/100 ) *70 /100),

        left: ($winWidth  *(40) )/100,
        top:  ($winHeight *(1.65) )/100
    },0);

    $('#turbine4').animate({
        width: (($WidthPerc * turbineW)/100) *105 /100,
        height:(($HeightPerc* turbineH)/100) *105 /100,

        left: ($winWidth  *(50) )/100,
        top:  ($winHeight *(1.5) )/100
    },0);

    $('#turbine5').animate({
        width: (($WidthPerc * turbineW)/100) *75 /100,
        height:(($HeightPerc* turbineH)/100) *75 /100,

        left: ($winWidth  *(62) )/100,
        top:  ($winHeight *(1.3) )/100
    },0);

    $('#turbine6').animate({
        width: (($WidthPerc * turbineW)/100) *95 /100,
        height:(($HeightPerc* turbineH)/100) *95 /100,

        left: ($winWidth  *(73) )/100,
        top:  ($winHeight *(1.6) )/100
    },0);  

    
});


/*### Separatoring .ready and .resize funcs ###*/
/*##############-##-########-##-###############*/
/*#################---####---##################*/
/*####################----#####################*/
/*#####################--######################*/
/*#############################################*/


/* Dynamic css for all items after resizing */
$( window ).resize(function() {
  
    /*  ---------------------------------- */
    /* Get width and height of the 2 bg images */
    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();    
    
    
         /* -------  All turbines ------*/
    $('#turbine1').animate({
        width: (($WidthPerc * turbineW)/100) *60 /100,
        height:(($HeightPerc* turbineH)/100) *60 /100,
        
        left: ($winWidth  *(18) )/100,
        top:  ($winHeight *(1.8) )/100
    },0);       
    $('#turbine2').animate({
        width: (($WidthPerc * turbineW)/100) *120 /100,
        height:(($HeightPerc* turbineH)/100) *120 /100,

        left: ($winWidth  *(27) )/100,
        top:  ($winHeight *(1.5) )/100
    },0);
    
    $('#turbine3').animate({
        width: ( (($WidthPerc * turbineW)/100) ) *70 /100,
        height:( (($HeightPerc* turbineH)/100 ) *70 /100),

        left: ($winWidth  *(40) )/100,
        top:  ($winHeight *(1.65) )/100
    },0);

    $('#turbine4').animate({
        width: (($WidthPerc * turbineW)/100) *105 /100,
        height:(($HeightPerc* turbineH)/100) *105 /100,

        left: ($winWidth  *(50) )/100,
        top:  ($winHeight *(1.5) )/100
    },0);

    $('#turbine5').animate({
        width: (($WidthPerc * turbineW)/100) *75 /100,
        height:(($HeightPerc* turbineH)/100) *75 /100,

        left: ($winWidth  *(62) )/100,
        top:  ($winHeight *(1.3) )/100
    },0);

    $('#turbine6').animate({
        width: (($WidthPerc * turbineW)/100) *95 /100,
        height:(($HeightPerc* turbineH)/100) *95 /100,

        left: ($winWidth  *(73) )/100,
        top:  ($winHeight *(1.6) )/100
    },0);  
    
});
    
