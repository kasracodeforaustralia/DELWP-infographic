$(window).scroll(function(){

    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();    
        
    
    
    if ( ($(window).scrollTop() <=$('.bg7PH').position().top) && kangarooFlag == 1 ){
        loadIMG('.kangarooPH','img/section-789/gifs/kangaroo.gif','kangaroo item');
        kangarooFlag = 0;
    }


    if (topPerc <= 0.2){
        $('.kangaroo').hide();
    }else if (topPerc > 4 && topPerc <= 5 ){
        $('.kangaroo').show();
        $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($WidthPerc * kangarooH)/100,

            left: ($winWidth  *(82) )/100,
            top:  ($winHeight *(13.9) )/100
        },0); 
    }else if (topPerc >5 && topPerc <= 6 ){
        $('.kangaroo').show();
        $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($WidthPerc * kangarooH)/100,

            left: ($winWidth  *(75) )/100,
            top:  ($winHeight *(14) )/100
        },0); 
    }else if (topPerc >6 && topPerc <=7){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($WidthPerc * kangarooH)/100,

            left: ($winWidth  *(70) )/100,
            top:  ($winHeight *(14.1) )/100
        },0); 
    }else if (topPerc >7 && topPerc <=8){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(63) )/100,
            top:  ($winHeight *(14.3) )/100
        },0); 
    }else if (topPerc >8 && topPerc <=9 ){
         $('.kangaroo').show();
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(54) )/100,
            top:  ($winHeight *(14.2) )/100
        },0); 
    }else if (topPerc >9 && topPerc <=10 ){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(47) )/100,
            top:  ($winHeight *(14.3) )/100
        },0); 
    }else if (topPerc >10 && topPerc <=11 ){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(42) )/100,
            top:  ($winHeight *(14.5) )/100
        },0); 
    }else if (topPerc >11 && topPerc <=12 ){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(35) )/100,
            top:  ($winHeight *(14.4) )/100
        },0); 
    }else if (topPerc >12 && topPerc <=13 ){
        $('.kangaroo').show();
        $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(27) )/100,
            top:  ($winHeight *(14.5) )/100
        },0); 
    }else if (topPerc >13 && topPerc <= 14 ){
        $('.kangaroo').show();
        $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(20) )/100,
            top:  ($winHeight *(14.6) )/100
        },0); 
    }else if (topPerc >20){
        $('.kangaroo').hide();
    }

        
});
    

    