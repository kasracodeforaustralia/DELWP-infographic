$(window).scroll(function(){

    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();

    
    if ( ($(window).scrollTop() <=$('.bg5PH').position().top) && bikeFlag == 1 ){
        loadIMG('.bikePH','img/section-789/bike.png','bike');
        bikeFlag = 0;
    }    

    if (topPerc <= 37){
        $('.bike').css("opacity", 0);
    }else if (topPerc > 37 && topPerc <= 38 ){
        $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(27) )/100,
            top:  ($winHeight *(49.43) )/100,
            opacity:1
        },0); 
    }else if (topPerc >38 && topPerc <= 39 ){ 
        $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(25) )/100,
            top:  ($winHeight *(49.35) )/100,
            opacity:1
        },0); 
    }else if (topPerc >39 && topPerc <=40){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(23) )/100,
            top:  ($winHeight *(49.2) )/100,
            opacity:1
        },0); 
    }else if (topPerc >40 && topPerc <=41){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(21) )/100,
            top:  ($winHeight *(49.12) )/100,
            opacity:1
        },0); 
    }else if (topPerc >41 && topPerc <=42 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(19) )/100,
            top:  ($winHeight *(49.03) )/100,
            opacity:1
        },0); 
    }else if (topPerc >42 && topPerc <=43 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(17) )/100,
            top:  ($winHeight *(48.94) )/100,
            opacity:1
        },0); 
    }else if (topPerc >43 && topPerc <=44 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(15) )/100,
            top:  ($winHeight *(48.85) )/100,
            opacity:1
        },0); 
    }else if (topPerc >44 && topPerc <=45 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(13) )/100,
            top:  ($winHeight *(48.76) )/100,
            opacity:1
        },0); 
    }else if (topPerc >45 && topPerc <=46 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(11) )/100,
            top:  ($winHeight *(48.68) )/100,
            opacity:1
        },0); 
    }else if (topPerc >46 && topPerc <= 47 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(9) )/100,
            top:  ($winHeight *(48.58) )/100,
            opacity:1
        },0); 
    }else if (topPerc >47 && topPerc <= 48 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(7) )/100,
            top:  ($winHeight *(48.51) )/100,
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