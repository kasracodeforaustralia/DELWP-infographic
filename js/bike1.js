$(window).scroll(function(){

    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();

    
    if ( ($(window).scrollTop() <=$('.bg5PH').position().top) && bikeFlag == 1 && isBottomPage ==1){
        loadIMG('.bikePH','img/section-789/bike.png','bike item hiddenItem');
        bikeFlag = 0;
    }    

    if (topPerc <= 37){
        $('.bike').hide();
    }else if (topPerc > 37 && topPerc <= 38 ){
        $('.bike').show();
        $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(27) )/100,
            top:  ($winHeight *(49.46) )/100
        },0); 
    }else if (topPerc >38 && topPerc <= 39 ){ 
        $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(25) )/100,
            top:  ($winHeight *(49.38) )/100
        },0); 
    }else if (topPerc >39 && topPerc <=40){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(23) )/100,
            top:  ($winHeight *(49.23) )/100
        },0); 
    }else if (topPerc >40 && topPerc <=41){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(21) )/100,
            top:  ($winHeight *(49.15) )/100
        },0); 
    }else if (topPerc >41 && topPerc <=42 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(19) )/100,
            top:  ($winHeight *(49.06) )/100
        },0); 
    }else if (topPerc >42 && topPerc <=43 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(17) )/100,
            top:  ($winHeight *(48.97) )/100
        },0); 
    }else if (topPerc >43 && topPerc <=44 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(15) )/100,
            top:  ($winHeight *(48.88) )/100
        },0); 
    }else if (topPerc >44 && topPerc <=45 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(13) )/100,
            top:  ($winHeight *(48.79) )/100
        },0); 
    }else if (topPerc >45 && topPerc <=46 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(11) )/100,
            top:  ($winHeight *(48.71) )/100
        },0); 
    }else if (topPerc >46 && topPerc <= 47 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(9) )/100,
            top:  ($winHeight *(48.61) )/100
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
        $('.bike').show(); 
        $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(5) )/100,
            top:  ($winHeight *(48.43) )/100
        },0); 
    }else if (topPerc >49){
        $('.bike').hide();
    }

        
    });