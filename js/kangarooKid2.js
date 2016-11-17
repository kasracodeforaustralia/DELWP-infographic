$( document ).ready(function() {
 
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();
     
    $('.kangarookid2').animate({
        width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
        height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

        left: ($winWidth  *(11) )/100,
        top:  ($winHeight *(15.3) )/100,
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
    
    $('.kangarookid2').animate({
        width: ( ($WidthPerc * kangarooW)/100)*kangarookidScale/100,
        height:( ($HeightPerc* kangarooH)/100)*kangarookidScale/100,

        left: ($winWidth  *(11) )/100,
        top:  ($winHeight *(15.3) )/100,
        opacity:1
    },0);  
    
    
});
    

$(window).scroll(function(){

    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();    
        
    
    /* kangarookid2 truck */ 

    //alert("win width is: " + winWidth());


    if (topPerc <= 0.2){
        $('.kangarookid2').css("opacity", 0);
    }else if (topPerc > 4 && topPerc <= 5 ){
        $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:( ($WidthPerc * kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(75) )/100,
            top:  ($winHeight *(15.4) )/100,
            opacity:1
        },0); 
    }else if (topPerc >5 && topPerc <= 6 ){
        $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($WidthPerc * kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(68) )/100,
            top:  ($winHeight *(15.5) )/100,
            opacity:1
        },0); 
    }else if (topPerc >6 && topPerc <=7){
         $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($WidthPerc * kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(60) )/100,
            top:  ($winHeight *(15.3) )/100,
            opacity:1
        },0); 
    }else if (topPerc >7 && topPerc <=8){
         $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:( ($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(53) )/100,
            top:  ($winHeight *(15.2) )/100,
            opacity:1
        },0); 
    }else if (topPerc >8 && topPerc <=9 ){
         $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(45) )/100,
            top:  ($winHeight *(15.6) )/100,
            opacity:1
        },0); 
    }else if (topPerc >9 && topPerc <=10 ){
         $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(38) )/100,
            top:  ($winHeight *(15.4) )/100,
            opacity:1
        },0); 
    }else if (topPerc >10 && topPerc <=11 ){
         $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(30) )/100,
            top:  ($winHeight *(15.6) )/100,
            opacity:1
        },0); 
    }else if (topPerc >11 && topPerc <=12 ){
         $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(22) )/100,
            top:  ($winHeight *(15.7) )/100,
            opacity:1
        },0); 
    }else if (topPerc >12 && topPerc <=13 ){
         $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(17) )/100,
            top:  ($winHeight *(15.5) )/100,
            opacity:1
        },0); 
    }else if (topPerc >13 && topPerc <= 14 ){
         $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(11) )/100,
            top:  ($winHeight *(15.3) )/100,
            opacity:1
        },0); 
    }else if (topPerc >20){
        $('.kangarookid2').css("opacity", 0);
    }

        
});
    

    