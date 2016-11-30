$(window).scroll(function(){

    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();

    
    if ( ($(window).scrollTop() <=$('.bg5PH').position().top) && whiteCarFlag == 1 ){
        loadIMG('.whiteCarPH','img/section-789/whiteCar.png','whiteCar');
        whiteCarFlag = 0;
    }

    if (topPerc <= 37){
        $('.whiteCar').hide();
    }else if (topPerc >39 && topPerc <=40){
        $('.whiteCar').show();
        $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*120/100,
            height:( ($HeightPerc* whiteCarH)/100)*120/100,

            left: ($winWidth  *(65) )/100,
            top:  ($winHeight *(51.4) )/100,
            opacity:1
        },0); 
    }else if (topPerc >40 && topPerc <=41){
         $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*120/100,
            height:( ($HeightPerc* whiteCarH)/100)*120/100,

            left: ($winWidth  *(60) )/100,
            top:  ($winHeight *(51.17) )/100,
            opacity:1
        },0); 
    }else if (topPerc >41 && topPerc <=42 ){
         $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*120/100,
            height:( ($HeightPerc* whiteCarH)/100)*120/100,

            left: ($winWidth  *(55) )/100,
            top:  ($winHeight *(50.95) )/100,
            opacity:1
        },0); 
    }else if (topPerc >42 && topPerc <=43 ){
         $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*140/100,
            height:( ($HeightPerc* whiteCarH)/100)*140/100,

            left: ($winWidth  *(50) )/100,
            top:  ($winHeight *(50.67) )/100,
            opacity:1
        },0); 
    }else if (topPerc >43 && topPerc <=44 ){
         $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*140/100,
            height:( ($HeightPerc* whiteCarH)/100)*140/100,

            left: ($winWidth  *(45) )/100,
            top:  ($winHeight *(50.45) )/100,
            opacity:1
        },0); 
    }else if (topPerc >44 && topPerc <=45 ){
         $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*140/100,
            height:( ($HeightPerc* whiteCarH)/100)*140/100,

            left: ($winWidth  *(40) )/100,
            top:  ($winHeight *(50.23) )/100,
            opacity:1
        },0); 
    }else if (topPerc >45 && topPerc <=46 ){
         $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*140/100,
            height:( ($HeightPerc* whiteCarH)/100)*140/100,

            left: ($winWidth  *(35) )/100,
            top:  ($winHeight *(50) )/100,
            opacity:1
        },0); 
    }else if (topPerc >46 && topPerc <= 47 ){
         $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*140/100,
            height:( ($HeightPerc* whiteCarH)/100)*140/100,

            left: ($winWidth  *(30) )/100,
            top:  ($winHeight *(49.78) )/100,
            opacity:1
        },0); 
    }else if (topPerc >47 && topPerc <= 48 ){
         $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*140/100,
            height:( ($HeightPerc* whiteCarH)/100)*140/100,

            left: ($winWidth  *(25) )/100,
            top:  ($winHeight *(49.55) )/100,
            opacity:1
        },0); 
    }else if (topPerc >48 && topPerc <= 49 ){
        $('.whiteCar').show();
        $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*140/100,
            height:( ($HeightPerc* whiteCarH)/100)*140/100,

            left: ($winWidth  *(20) )/100,
            top:  ($winHeight *(49.35) )/100,
            opacity:1
        },0); 
    }else if (topPerc >49){
        $('.whiteCar').hide();
    }

        
    });