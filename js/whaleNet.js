$(window).scroll(function(){
        
        // Responsive width and height of the bg images
        var $winWidth   = winWidth();
        var $winHeight  = winHeight();
        var $WidthPerc  = WidthPerc();
        var $HeightPerc = HeightPerc();
        var topPerc     = topPercfunc();

        /* whaleNet   */ 
        if (topPerc >= 95.5){
            $('#whaleNet').css({'display': 'none', 'transform':'scale(0.4)', 'left': '($winWidth * whaleNetLeft )/100', 'top':'($winHeight * whaleNetTop )/100'});
        } else  if ( topPerc < 95.3  && topPerc >= 95.5 ){
            $('#whaleNet').css({'display': 'block', 'transform':'scale(0.4)'});
            $('#whaleNet').animate({
                width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  * whaleNetTop )/100,
                top:  ($winHeight * whaleNetLeft )/100,
                opacity: 0.2
 
            },0); 
            
        }else if (  95.1 <= topPerc &&  topPerc < 95.3){
            $('#whaleNet').animate({
                width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(76.5) )/100,
                top:  ($winHeight *(95.9) )/100,
                opacity: 0.4,
                start: function(){
                    $( this ).css({'transform':'scale(0.5) rotate(15deg)'});
                }
            }, 0); 
            
        }else if (  94.8 <= topPerc &&  topPerc < 95.1 ){
             $('#whaleNet').css({'transform':'scale(0.6) rotate(5deg)'});
             $('#whaleNet').animate({
      width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(72) )/100,
                top:  ($winHeight *(96.2) )/100,
                opacity:0.7
            }, 0); 
            
        } else if ( 94.6 <= topPerc &&  topPerc < 94.8 ){
              $('#whaleNet').css({'transform':'scale(0.8) rotate(-10deg)'});
             $('#whaleNet').animate({
     width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(68.5) )/100,
                top:  ($winHeight *(96.4) )/100,
                opacity:0.8
            }, 0); 
           
        }else if ( 94.4 <= topPerc &&  topPerc < 94.6 ){
            $('#whaleNet').css({'transform':'scale(0.9) rotate(5deg)'});
             $('#whaleNet').animate({
         width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(63) )/100,
                top:  ($winHeight *(96.6) )/100,
                opacity: 0.9
            }, 0); 
        }else if ( 94.2 <= topPerc &&  topPerc < 94.4 ){
            $('#whaleNet').css({'transform':'scale(1) rotate(2deg)'});
             $('#whaleNet').animate({
         width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(60.5) )/100,
                top:  ($winHeight *(96.8) )/100,
                opacity: 1
            }, 0); 
        }else if ( 94.0 <= topPerc &&  topPerc < 94.2 ){
            $('#whaleNet').css({'transform':'rotate(-5deg)'});
             $('#whaleNet').animate({
         width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(56.5) )/100,
                top:  ($winHeight *(97) )/100,
                opacity: 1
            }, 0); 
        }else if ( 93.8 <= topPerc &&  topPerc < 94.0 ){
            $('#whaleNet').css({'transform':'rotate(5deg)'});
             $('#whaleNet').animate({
         width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(52.5) )/100,
                top:  ($winHeight *(96.8) )/100,
                opacity: 1
            }, 0); 
        }else if ( 93.6 <= topPerc &&  topPerc < 93.8 ){
            $('#whaleNet').css({'transform':'rotate(-8deg)'});
             $('#whaleNet').animate({
         width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(44.5) )/100,
                top:  ($winHeight *(97) )/100,
                opacity: 1
            }, 0);
        }else if ( 93.4 <= topPerc &&  topPerc < 93.6 ){
            $('#whaleNet').css({'transform':'rotate(5deg)'});
             $('#whaleNet').animate({
         width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(40.5) )/100,
                top:  ($winHeight *(97) )/100,
                opacity: 1
            }, 0);
        }else if (topPerc < 95.5) {
            $('#whaleNet').css("display", 'block');
        }

        
    });