$(document).ready(function() { 
    /*
     $("body").keydown(function(){
        if(($(window).scrollTop() <=                    $('.bg2PH').position().top) && busFlag == 1 && isBottomPage ==1){
           loadIMG('.busPH','img/section-3/bus.png','item bus hiddenItem');
           busFlag = 0;
        } 
    });
   */  
});

$(window).scroll(function(){

    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();

    if( ($(window).scrollTop() <=  $('.bg2PH').position().top)  && busFlag == 1 && isBottomPage ==1){
       loadIMG('.busPH','img/section-3/bus.png','item bus hiddenItem');
       busFlag = 0;
    } 

        /* bus   */ 

    if ( topPerc >= 81.4 ){
        $('.bus').hide();
        $('.bus').css({'left': '($winWidth * busLeft )/100', 'top':'($winHeight * busTop )/100'});

    } else  if ( 81.2 <= topPerc &&  topPerc < 81.4 ){ 
        $('.bus').show();
        $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(busLeft) )/100, 
            top:  ($winHeight *(busTop) )/100,

        },0); 


    } else  if ( 80.8 <= topPerc &&  topPerc < 81.2 ){ 
        $('.bus').show();
        $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(32) )/100, 
            top:  ($winHeight *(79.55) )/100,

        },0); 


    } else  if ( 80.6 <= topPerc &&  topPerc < 80.8 ){ 
        $('.bus').show();
        $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(38) )/100, 
            top:  ($winHeight *(79.85) )/100,

        },0); 


    } else if ( 80.4 <= topPerc &&  topPerc < 80.6 ){
       $('.bus').show();
       $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(47) )/100,
            top:  ($winHeight *(80.3) )/100,

        }, 0); 


    } else if ( 80.2 <= topPerc &&  topPerc < 80.4 ){
         //$('.bus').css({'display': 'block'});
         $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(52))/100,
            top:  ($winHeight *(80.5) )/100,

        }, 0); 


    } else if ( 80.0 <= topPerc &&  topPerc < 80.2 ){
       //$('.bus').css({'display': 'block'});
       $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(56) )/100,
            top:  ($winHeight *(80.7) )/100,

        }, 0); 

    }else if ( 79.8 <= topPerc &&  topPerc < 80.0 ){
       //$('.bus').css({'display': 'block'});
       $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(60) )/100,
            top:  ($winHeight *(80.8) )/100,

        }, 0); 

    }else if ( 79.6 <= topPerc &&  topPerc < 79.8 ){
      // $('.bus').css({'display': 'block'});
       $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(64) )/100,
            top:  ($winHeight *(81.0) )/100,

        }, 0); 

    }else if ( 79.4 <= topPerc &&  topPerc < 79.6 ){
       $('.bus').show();
       $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(68) )/100,
            top:  ($winHeight *(81.2) )/100,

        }, 0); 
    } else if (topPerc < 79.4) {
        $('.bus').show();
        //$('.bus').css({ 'display':'block', 'opacity':'1' });

    }


});