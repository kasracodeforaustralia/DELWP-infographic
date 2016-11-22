$( document ).ready(function() {
    
    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();

    /* Garbage Truck default css */
    
    $('.footy').animate({
        width: ( ($WidthPerc * footyW)/100)*30/100,
        height:( ($HeightPerc* footyH)/100)*30/100,

        left: ($winWidth  *(58.8) )/100,
        top:  ($winHeight *(34.7) )/100,
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

    $('.footy').animate({
        width: ( ($WidthPerc * footyW)/100)*30/100,
        height:( ($HeightPerc* footyH)/100)*30/100,

        left: ($winWidth  *(58.8) )/100,
        top:  ($winHeight *(34.7) )/100,
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

     
        if (topPerc <= 24){
            //$('.footy').css("opacity", 0);
        }else if (topPerc >24 && topPerc <=25){
             $('.footy').animate({
                width: ( ($WidthPerc * footyW)/100)*40/100,
                height:( ($HeightPerc* footyH)/100)*40/100,

                left: ($winWidth  *(32) )/100,
                top:  ($winHeight *(35.8) )/100,
                opacity:1
            },0); 
        }else if (topPerc >25 && topPerc <=26 ){
             $('.footy').animate({
                width: ( ($WidthPerc * footyW)/100)*39/100,
                height:( ($HeightPerc* footyH)/100)*39/100,
                
                left: ($winWidth  *(35) )/100,
                top:  ($winHeight *(35.5) )/100,
                opacity:1
            },0); 
        }else if (topPerc >26 && topPerc <=27 ){
             $('.footy').animate({
                width: ( ($WidthPerc * footyW)/100)*38/100,
                height:( ($HeightPerc* footyH)/100)*38/100,
                
                left: ($winWidth  *(38) )/100,
                top:  ($winHeight *(35.2) )/100,
                opacity:1
            },0); 
        }else if (topPerc >27 && topPerc <=28 ){
             $('.footy').animate({
                width: ( ($WidthPerc * footyW)/100)*37/100,
                height:( ($HeightPerc* footyH)/100)*37/100,
                
                left: ($winWidth  *(42) )/100,
                top:  ($winHeight *(35) )/100,
                opacity:1
            },0); 
        }else if (topPerc >28 && topPerc <=29 ){
             $('.footy').animate({
                width: ( ($WidthPerc * footyW)/100)*36/100,
                height:( ($HeightPerc* footyH)/100)*36/100,
                
                left: ($winWidth  *(45) )/100,
                top:  ($winHeight *(34.8) )/100,
                opacity:1
            },0); 
        }else if (topPerc >29 && topPerc <=30 ){
             $('.footy').animate({
                width: ( ($WidthPerc * footyW)/100)*35/100,
                height:( ($HeightPerc* footyH)/100)*35/100,
                
                left: ($winWidth  *(48) )/100,
                top:  ($winHeight *(34.7) )/100,
                opacity:1
            },0); 
        }else if (topPerc >30 && topPerc <= 31 ){
             $('.footy').animate({
                width: ( ($WidthPerc * footyW)/100)*34/100,
                height:( ($HeightPerc* footyH)/100)*34/100,
                
                left: ($winWidth  *(52) )/100,
                top:  ($winHeight *(34.6) )/100,
                opacity:1
            },0); 
        }else if (topPerc >31 && topPerc <= 32 ){
             $('.footy').animate({
                width: ( ($WidthPerc * footyW)/100)*33/100,
                height:( ($HeightPerc* footyH)/100)*33/100,
                
                left: ($winWidth  *(55) )/100,
                top:  ($winHeight *(34.6) )/100,
                opacity:1
            },0); 
        }else if (topPerc >32 && topPerc <= 33 ){
             $('.footy').animate({
                width: ( ($WidthPerc * footyW)/100)*32/100,
                height:( ($HeightPerc* footyH)/100)*32/100,
                
                left: ($winWidth  *(56) )/100,
                top:  ($winHeight *(34.6) )/100,
                opacity:1
            },0); 
        }else if (topPerc >33 && topPerc <= 34 ){
             $('.footy').animate({
                width: ( ($WidthPerc * footyW)/100)*32/100,
                height:( ($HeightPerc* footyH)/100)*32/100,
                
                left: ($winWidth  *(58) )/100,
                top:  ($winHeight *(34.65) )/100,
                opacity:1
            },0); 
        }else if (topPerc >34 && topPerc <= 35 ){
             $('.footy').animate({
                width: ( ($WidthPerc * footyW)/100)*32/100,
                height:( ($HeightPerc* footyH)/100)*32/100,
                
                left: ($winWidth  *(58.8) )/100,
                top:  ($winHeight *(34.7) )/100,
                opacity:1
            },0); 
        }else if (topPerc >35){
            //$('.footy').css("opacity", 0);
        }

        
    });