$(window).scroll(function(){

        // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();

    if( ($(window).scrollTop() <=  $('.bg5PH').position().top)  && trainFlag == 1 && isBottomPage ==1){
           loadIMG('.trainPH','img/section-5/train.png','item train');
           trainFlag = 0;          
    } 

    /* train   */ 
    if ( topPerc >= 60.0 ){
        $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)', 'left': '($winWidth  *(trainLeft) )/100', 'top':'($winHeight *(trainTop) )/100'});
    } else  if ( 59.8 <= topPerc &&  topPerc < 60.0 ){ 
        $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
        $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(trainLeft) )/100, 
            top:  ($winHeight *(trainTop) )/100,

        },0); 
    } else  if ( 59.6 <= topPerc &&  topPerc < 59.8 ){ 
        $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
        $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(-14) )/100, 
            top:  ($winHeight *(57.79) )/100,

        },0); 
    } else  if ( 59.4 <= topPerc &&  topPerc < 59.6 ){ 
        $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
        $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(-4) )/100, 
            top:  ($winHeight *(58.18) )/100,

        },0); 
    } else  if ( 59.2 <= topPerc &&  topPerc < 59.4 ){ 
        $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
        $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(0) )/100, 
            top:  ($winHeight *(58.38) )/100,

        },0); 

    }else if ( 59.0 <= topPerc &&  topPerc < 59.2 ){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
        $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(4) )/100,
            top:  ($winHeight *(58.56) )/100,

        }, 0); 

    }else if ( 58.8 <= topPerc &&  topPerc < 59.0 ){
         $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(8))/100,
            top:  ($winHeight *(58.76) )/100,

        }, 0); 

    } else if ( 58.6 <= topPerc &&  topPerc < 58.8 ){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(12) )/100,
            top:  ($winHeight *(58.94) )/100,

        }, 0); 

    }else if ( 58.4 <= topPerc &&  topPerc < 58.6 ){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(16) )/100,
            top:  ($winHeight *(59.14) )/100,

        }, 0); 
    }else if ( 58.2 <= topPerc &&  topPerc < 58.4 ){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(20) )/100,
            top:  ($winHeight *(59.32) )/100,

        }, 0); 
    }else if ( 58.0 <= topPerc &&  topPerc < 58.2 ){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(24) )/100,
            top:  ($winHeight *(59.54) )/100,

        }, 0); 
    }else if ( 57.8 <= topPerc &&  topPerc < 58.0 ){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(28) )/100,
            top:  ($winHeight *(59.71) )/100,

        }, 0); 
    } else if ( 57.6 <= topPerc &&  topPerc < 57.8 ){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(32) )/100,
            top:  ($winHeight *(59.90) )/100,

        }, 0); 
    } else if ( 57.4 <= topPerc &&  topPerc < 57.6 ){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(36) )/100,
            top:  ($winHeight *(60.08) )/100,

        }, 0); 
    } else if ( 57.2 <= topPerc &&  topPerc < 57.4 ){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(40) )/100,
            top:  ($winHeight *(60.26) )/100,

        }, 0); 
    } else if ( 57.0 <= topPerc &&  topPerc < 57.2 ){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(44) )/100,
            top:  ($winHeight *(60.46) )/100,

        }, 0); 
    } else if ( 56.8 <= topPerc &&  topPerc < 57.0 ){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(48) )/100,
            top:  ($winHeight *(60.66) )/100,

        }, 0); 
    } else if (topPerc < 56.8) {
        $('.train').show();
        //$('.train').css({'opacity':'1', 'transform': 'rotate(-1deg)' });
    }


});