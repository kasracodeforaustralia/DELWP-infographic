$(window).scroll(function(){

    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();

     if( ($(window).scrollTop() <=  $('.bg4PH').position().top)  && truck1Flag == 1 && isBottomPage ==1){
       loadIMG('.truck1PH','img/section-5/truck1.png','item truck1');
       truck1Flag = 0;         
    } 

    /* truck1    
    if ( topPerc >= 67.8 ){
        $('.truck1').css({'display':'block', 'left': '($winWidth  *(truck1Left) )/100', 'top':'($winHeight *(truck1Top) )/100'});
    } else */ if ( 67.6 <= topPerc &&  topPerc < 67.8 ){ 
        $('.truck1').css({'display': 'block'});
        $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(truck1Left) )/100, 
            top:  ($winHeight *(truck1Top) )/100,

        },0); 
    }else  if ( 67.4 <= topPerc &&  topPerc < 67.6 ){ 
        $('.truck1').css({'display': 'block'});
        $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(2) )/100, 
            top:  ($winHeight *(67.75) )/100,

        },0); 
    } else  if ( 67.2 <= topPerc &&  topPerc < 67.4 ){ 
        $('.truck1').css({'display': 'block'});
        $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(6) )/100, 
            top:  ($winHeight *(67.95) )/100,

        },0); 

    }else if ( 67.0 <= topPerc &&  topPerc < 67.2 ){
       $('.truck1').css({'display': 'block'});
        $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(10) )/100,
            top:  ($winHeight *(68.13) )/100,

        }, 0); 

    }else if ( 66.8 <= topPerc &&  topPerc < 67.0 ){
         $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(14))/100,
            top:  ($winHeight *(68.35) )/100,

        }, 0); 

    } else if ( 66.6 <= topPerc &&  topPerc < 66.8 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(18) )/100,
            top:  ($winHeight *(68.5) )/100,

        }, 0); 

    }else if ( 66.4 <= topPerc &&  topPerc < 66.6 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(22) )/100,
            top:  ($winHeight *(68.68) )/100,

        }, 0); 
    }else if ( 66.2 <= topPerc &&  topPerc < 66.4 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(26) )/100,
            top:  ($winHeight *(68.95) )/100,

        }, 0); 
    }else if ( 66.0 <= topPerc &&  topPerc < 66.2 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(30) )/100,
            top:  ($winHeight *(69.05) )/100,

        }, 0); 
    }else if ( 65.8 <= topPerc &&  topPerc < 66.0 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(34) )/100,
            top:  ($winHeight *(69.24) )/100,

        }, 0); 
    } else if ( 65.6 <= topPerc &&  topPerc < 65.8 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(38) )/100,
            top:  ($winHeight *(69.45) )/100,

        }, 0); 
    } else if ( 65.4 <= topPerc &&  topPerc < 65.6 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(42) )/100,
            top:  ($winHeight *(69.6) )/100,

        }, 0); 
    } else if ( 65.2 <= topPerc &&  topPerc < 65.4 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(46) )/100,
            top:  ($winHeight *(69.8) )/100,

        }, 0); 
    } else if ( 65.2 <= topPerc &&  topPerc < 65.2 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(50) )/100,
            top:  ($winHeight *(70.0) )/100,

        }, 0); 
    } else if ( 65.0 <= topPerc &&  topPerc < 65.2 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(54) )/100,
            top:  ($winHeight *(70.2) )/100,

        }, 0); 
    } else if ( 64.8 <= topPerc &&  topPerc < 65.0 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(58) )/100,
            top:  ($winHeight *(70.4) )/100,

        }, 0); 
    } else if ( 64.6 <= topPerc &&  topPerc < 64.6 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(62) )/100,
            top:  ($winHeight *(70.6) )/100,

        }, 0); 
    } else if ( 64.4 <= topPerc &&  topPerc < 64.6 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(66) )/100,
            top:  ($winHeight *(70.8) )/100,

        }, 0); 
    } else if ( 64.2 <= topPerc &&  topPerc < 64.4 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(70) )/100,
            top:  ($winHeight *(71.0) )/100,

        }, 0); 
    } else if ( 64.0 <= topPerc &&  topPerc < 64.2 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(74) )/100,
            top:  ($winHeight *(71.2) )/100,

        }, 0); 
    } else if ( 63.8 <= topPerc &&  topPerc < 64.0 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(78) )/100,
            top:  ($winHeight *(71.4) )/100,

        }, 0); 
    } else if ( 63.6 <= topPerc &&  topPerc < 63.8 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(82) )/100,
            top:  ($winHeight *(71.6) )/100,

        }, 0); 
    } else if ( 63.4 <= topPerc &&  topPerc < 63.6 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  * 86 )/100,
            top:  ($winHeight * 71.8)/100,

        }, 0); 
    } else if ( 63.2<= topPerc &&  topPerc < 63.4 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(90) )/100,
            top:  ($winHeight *(72.0) )/100,

        }, 0); 
    } else if ( 63.0 <= topPerc &&  topPerc < 63.2 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  * 94 )/100,
            top:  ($winHeight * 72.2)/100,

        }, 0); 
    } else if (topPerc < 63.0) {
        $('.truck1').css({ 'display':'block', 'opacity':'1' });
    }


});