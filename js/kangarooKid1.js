$( document ).ready(function() {
 
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();
     
    $('.kangarookid1').animate({
        width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
        height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

        left: ($winWidth  *(20) )/100,
        top:  ($winHeight *(14.5) )/100,
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
    
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();
    
    $('.kangarookid1').animate({
        width: ( ($WidthPerc * kangarooW)/100)*kangarookidScale/100,
        height:( ($HeightPerc* kangarooH)/100)*kangarookidScale/100,

        left: ($winWidth  *(20) )/100,
        top:  ($winHeight *(14.5) )/100,
        opacity:1
    },0);  
    
    
});
    

$(window).scroll(function(){

    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();    
        
    
    /* kangarookid1 truck */ 

    //alert("win width is: " + winWidth());


    if (topPerc <= 0.2){
        $('.kangarookid1').css("opacity", 0);
    }else if (topPerc > 4 && topPerc <= 5 ){
        $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:( ($WidthPerc * kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(82) )/100,
            top:  ($winHeight *(13.8) )/100,
            opacity:1
        },0); 
    }else if (topPerc >5 && topPerc <= 6 ){
        $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($WidthPerc * kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(80) )/100,
            top:  ($winHeight *(13.5) )/100,
            opacity:1
        },0); 
    }else if (topPerc >6 && topPerc <=7){
         $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($WidthPerc * kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(70) )/100,
            top:  ($winHeight *(13.6) )/100,
            opacity:1
        },0); 
    }else if (topPerc >7 && topPerc <=8){
         $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:( ($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(62) )/100,
            top:  ($winHeight *(13.7) )/100,
            opacity:1
        },0); 
    }else if (topPerc >8 && topPerc <=9 ){
         $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(53) )/100,
            top:  ($winHeight *(13.7) )/100,
            opacity:1
        },0); 
    }else if (topPerc >9 && topPerc <=10 ){
         $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(47) )/100,
            top:  ($winHeight *(14.2) )/100,
            opacity:1
        },0); 
    }else if (topPerc >10 && topPerc <=11 ){
         $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(42) )/100,
            top:  ($winHeight *(14.4) )/100,
            opacity:1
        },0); 
    }else if (topPerc >11 && topPerc <=12 ){
         $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(35) )/100,
            top:  ($winHeight *(14.3) )/100,
            opacity:1
        },0); 
    }else if (topPerc >12 && topPerc <=13 ){
         $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(27) )/100,
            top:  ($winHeight *(14.2) )/100,
            opacity:1
        },0); 
    }else if (topPerc >13 && topPerc <= 14 ){
         $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(20) )/100,
            top:  ($winHeight *(14.4) )/100,
            opacity:1
        },0); 
    }else if (topPerc >20){
        $('.kangarookid1').css("opacity", 0);
    }

        
});
    

    