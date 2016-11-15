$( document ).ready(function() {
    
    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();

    /* Garbage Truck default css */
    
    $('.bike').animate({
        width: ( ($WidthPerc * bikeW)/100)*120/100,
        height:( ($HeightPerc* bikeH)/100)*120/100,

        left: ($winWidth  *(5) )/100,
        top:  ($winHeight *(48.4) )/100,
        opacity:1
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
    
    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    
      /* Garbage Truck */

    $('.bike').animate({
        width: ( ($WidthPerc * bikeW)/100)*120/100,
        height:( ($HeightPerc* bikeH)/100)*120/100,

        left: ($winWidth  *(5) )/100,
        top:  ($winHeight *(48.4) )/100,
        opacity:1
    },0); 
    
});
    
/*## Separatoring .resize and onscroll funcs ##*/
/*##############-##-########-##-###############*/
/*#################---####---##################*/
/*####################----#####################*/
/*#####################--######################*/
/*#############################################*/   

$(window).scroll(function(){

        // Responsive width and height of the bg images
        var $winWidth   = winWidth();
        var $winHeight  = winHeight();
        var $WidthPerc  = WidthPerc();
        var $HeightPerc = HeightPerc();
        var topPerc     = topPercfunc();

     
        if (topPerc <= 37){
            $('.bike').css("opacity", 0);
        }else if (topPerc > 37 && topPerc <= 38 ){
            $('.bike').animate({
                width: ( ($WidthPerc * bikeW)/100)*120/100,
                height:( ($HeightPerc* bikeH)/100)*120/100,
                 
                left: ($winWidth  *(42) )/100,
                top:  ($winHeight *(50.1) )/100,
                opacity:1
            },0); 
        }else if (topPerc >38 && topPerc <= 39 ){ 
            $('.bike').animate({
                width: ( ($WidthPerc * bikeW)/100)*120/100,
                height:( ($HeightPerc* bikeH)/100)*120/100,
                 
                left: ($winWidth  *(39) )/100,
                top:  ($winHeight *(49.95) )/100,
                opacity:1
            },0); 
        }else if (topPerc >39 && topPerc <=40){
             $('.bike').animate({
                width: ( ($WidthPerc * bikeW)/100)*120/100,
                height:( ($HeightPerc* bikeH)/100)*120/100,
                 
                left: ($winWidth  *(36) )/100,
                top:  ($winHeight *(49.85) )/100,
                opacity:1
            },0); 
        }else if (topPerc >40 && topPerc <=41){
             $('.bike').animate({
                width: ( ($WidthPerc * bikeW)/100)*120/100,
                height:( ($HeightPerc* bikeH)/100)*120/100,
                 
                left: ($winWidth  *(33) )/100,
                top:  ($winHeight *(49.7) )/100,
                opacity:1
            },0); 
        }else if (topPerc >41 && topPerc <=42 ){
             $('.bike').animate({
                width: ( ($WidthPerc * bikeW)/100)*120/100,
                height:( ($HeightPerc* bikeH)/100)*120/100,
                 
                left: ($winWidth  *(30) )/100,
                top:  ($winHeight *(49.6) )/100,
                opacity:1
            },0); 
        }else if (topPerc >42 && topPerc <=43 ){
             $('.bike').animate({
                width: ( ($WidthPerc * bikeW)/100)*120/100,
                height:( ($HeightPerc* bikeH)/100)*120/100,
                 
                left: ($winWidth  *(27) )/100,
                top:  ($winHeight *(49.45) )/100,
                opacity:1
            },0); 
        }else if (topPerc >43 && topPerc <=44 ){
             $('.bike').animate({
                width: ( ($WidthPerc * bikeW)/100)*120/100,
                height:( ($HeightPerc* bikeH)/100)*120/100,
                 
                left: ($winWidth  *(24) )/100,
                top:  ($winHeight *(49.3) )/100,
                opacity:1
            },0); 
        }else if (topPerc >44 && topPerc <=45 ){
             $('.bike').animate({
                width: ( ($WidthPerc * bikeW)/100)*120/100,
                height:( ($HeightPerc* bikeH)/100)*120/100,
                 
                left: ($winWidth  *(21) )/100,
                top:  ($winHeight *(49.15) )/100,
                opacity:1
            },0); 
        }else if (topPerc >45 && topPerc <=46 ){
             $('.bike').animate({
                width: ( ($WidthPerc * bikeW)/100)*120/100,
                height:( ($HeightPerc* bikeH)/100)*120/100,
                
                left: ($winWidth  *(18) )/100,
                top:  ($winHeight *(49.05) )/100,
                opacity:1
            },0); 
        }else if (topPerc >46 && topPerc <= 47 ){
             $('.bike').animate({
                width: ( ($WidthPerc * bikeW)/100)*120/100,
                height:( ($HeightPerc* bikeH)/100)*120/100,
                
                left: ($winWidth  *(15) )/100,
                top:  ($winHeight *(48.9) )/100,
                opacity:1
            },0); 
        }else if (topPerc >47 && topPerc <= 48 ){
             $('.bike').animate({
                width: ( ($WidthPerc * bikeW)/100)*120/100,
                height:( ($HeightPerc* bikeH)/100)*120/100,
                
                left: ($winWidth  *(10) )/100,
                top:  ($winHeight *(48.7) )/100,
                opacity:1
            },0); 
        }else if (topPerc >48 && topPerc <= 49 ){
             $('.bike').animate({
                width: ( ($WidthPerc * bikeW)/100)*120/100,
                height:( ($HeightPerc* bikeH)/100)*120/100,

                left: ($winWidth  *(5) )/100,
                top:  ($winHeight *(48.4) )/100,
                opacity:1
            },0); 
        }else if (topPerc >49){
            //$('.bike').css("opacity", 0);
        }

        
    });