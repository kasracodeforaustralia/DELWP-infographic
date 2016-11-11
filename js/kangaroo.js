$( document ).ready(function() {
 
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();
     
    $('.kangaroo').animate({
        width: ($WidthPerc * kangarooW)/100,
        height:($HeightPerc* kangarooH)/100,
        
        left: ($winWidth  * (20)    )/100,
        top:  ($winHeight * (21) )/100
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
    
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();
    
    $('.kangaroo').animate({
        width: ($WidthPerc * kangarooW)/100,
        height:($HeightPerc* kangarooH)/100,
        
        left: ($winWidth  * (20)    )/100,
        top:  ($winHeight * (21) )/100
    },0);  
    
    
});
    

$(window).scroll(function(){

    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();    
        
    
    /* kangaroo truck */ 

    //alert("win width is: " + winWidth());


    if (topPerc <= 11){
        $('.kangaroo').css("opacity", 0);
    }else if (topPerc > 11 && topPerc <= 12 ){
        $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($WidthPerc * kangarooH)/100,

            left: ($winWidth  *(70) )/100,
            top:  ($winHeight *(20.5) )/100,
            opacity:1
        },0); 
    }else if (topPerc >12 && topPerc <= 13 ){
        $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($WidthPerc * kangarooH)/100,

            left: ($winWidth  *(65) )/100,
            top:  ($winHeight *(20.7) )/100,
            opacity:1
        },0); 
    }else if (topPerc >13 && topPerc <=14){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($WidthPerc * kangarooH)/100,

            left: ($winWidth  *(60) )/100,
            top:  ($winHeight *(20.9) )/100,
            opacity:1
        },0); 
    }else if (topPerc >14 && topPerc <=15){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(55) )/100,
            top:  ($winHeight *(21.2) )/100,
            opacity:1
        },0); 
    }else if (topPerc >15 && topPerc <=16 ){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(50) )/100,
            top:  ($winHeight *(21.3) )/100,
            opacity:1
        },0); 
    }else if (topPerc >16 && topPerc <=17 ){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(45) )/100,
            top:  ($winHeight *(21.5) )/100,
            opacity:1
        },0); 
    }else if (topPerc >17 && topPerc <=18 ){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(40) )/100,
            top:  ($winHeight *(21.4) )/100,
            opacity:1
        },0); 
    }else if (topPerc >18 && topPerc <=19 ){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(35) )/100,
            top:  ($winHeight *(21.45) )/100,
            opacity:1
        },0); 
    }else if (topPerc >19 && topPerc <=20 ){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(30) )/100,
            top:  ($winHeight *(21.4) )/100,
            opacity:1
        },0); 
    }else if (topPerc >20 && topPerc <= 21 ){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(25) )/100,
            top:  ($winHeight *(21.3) )/100,
            opacity:1
        },0); 
    }else {
        $('.kangaroo').css("opacity", 0);
    }

        
});
    

    