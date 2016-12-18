$(window).scroll(function(){

    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();



    /* whale */ 
    if (topPerc >= 95.6){
        $('#whale').css({'display': 'none', 'transform':'scale(0.3)', 'left': '($winWidth * whaleLeft)/100', 'top':'($winHeight *(whaleTop) )/100'});
    } else  if ( topPerc < 95.4  && topPerc >= 95.6 ){
        $('#whale').css({'display': 'block', 'transform':'scale(0.3)'});
        $('#whale').animate({
            width: ($WidthPerc * whaleW)/100,
            height:($WidthPerc * whaleH)/100,
            left: ($winWidth  *(whaleLeft))/100,
            top:  ($winHeight *(whaleTop))/100,
            opacity: 0.4

        },0); 

    }else if (  95.2 <= topPerc &&  topPerc < 95.4){
        $('#whale').css({'display': 'block', 'transform':'scale(0.4) rotate(15deg)'});
        $('#whale').animate({
            width: ($WidthPerc * whaleW)/100,
            height:($WidthPerc * whaleH)/100,
            left: ($winWidth  *(70) )/100,
            top:  ($winHeight *(98.2) )/100,
            opacity: 0.5
        }, 0); 

    }else if (  95.2 <= topPerc &&  topPerc < 95.2 ){
         $('#whale').css({'display': 'block', 'transform':'scale(0.5) rotate(5deg)'});
         $('#whale').animate({
  width: ($WidthPerc * whaleW)/100,
            height:($WidthPerc * whaleH)/100,
            left: ($winWidth  *(68) )/100,
            top:  ($winHeight *(97.6) )/100,
            opacity:0.7
        }, 0); 

    } else if ( 95.0 <= topPerc &&  topPerc < 95.2 ){
          $('#whale').css({'display': 'block', 'transform':'scale(0.6) rotate(-10deg)'});
         $('#whale').animate({
 width: ($WidthPerc * whaleW)/100,
            height:($WidthPerc * whaleH)/100,
            left: ($winWidth  *(64.5) )/100,
            top:  ($winHeight *(97.4) )/100,
            opacity:0.8
        }, 0); 

    }else if ( 94.8 <= topPerc &&  topPerc < 95.0 ){
        $('#whale').css({'display': 'block', 'transform':'scale(0.75) rotate(5deg)'});
         $('#whale').animate({
     width: ($WidthPerc * whaleW)/100,
            height:($WidthPerc * whaleH)/100,
            left: ($winWidth  *(60) )/100,
            top:  ($winHeight *(97.2) )/100,
            opacity: 0.9
        }, 0); 
    }else if ( 94.6 <= topPerc &&  topPerc < 94.8 ){
        $('#whale').css({'display': 'block', 'transform':'scale(0.6) rotate(2deg)'});
         $('#whale').animate({
     width: ($WidthPerc * whaleW)/100,
            height:($WidthPerc * whaleH)/100,
            left: ($winWidth  *(56.5) )/100,
            top:  ($winHeight *(97) )/100,
            opacity: 1
        }, 0); 
    }else if ( 94.4 <= topPerc &&  topPerc < 94.6 ){
        $('#whale').css({'display': 'block', 'transform':'scale(0.5) rotate(-5deg)'});
         $('#whale').animate({
     width: ($WidthPerc * whaleW)/100,
            height:($WidthPerc * whaleH)/100,
            left: ($winWidth  *(52.5) )/100,
            top:  ($winHeight *(97) )/100,
            opacity: 1
        }, 0); 
    }else if ( 94.2 <= topPerc &&  topPerc < 94.4 ){
        $('#whale').css({'display': 'block', 'transform':'scale(0.4) rotate(5deg)'});
         $('#whale').animate({
     width: ($WidthPerc * whaleW)/100,
            height:($WidthPerc * whaleH)/100,
            left: ($winWidth  *(48.5) )/100,
            top:  ($winHeight *(96.8) )/100,
            opacity: 1
        }, 0); 
    } else if (topPerc < 94.2) {
        $('#whale').css({'display': 'block'});
    }

        
    });