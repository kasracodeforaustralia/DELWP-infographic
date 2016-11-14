$(window).scroll(function(){

        // Responsive width and height of the bg images
        var $winWidth   = winWidth();
        var $winHeight  = winHeight();
        var $WidthPerc  = WidthPerc();
        var $HeightPerc = HeightPerc();
        var topPerc     = topPercfunc();

        /* seal */ 
        if (topPerc >= 95.0){
            $('#seal').css({'display': 'none', 'transform':'scale(0.3)', 'left': '($winWidth * sealLeft)/100', 'top':'($winHeight *(sealTop) )/100'});
        } else  if ( topPerc < 94.8  && topPerc >= 95.0 ){
            $('#seal').css({'display': 'block', 'transform':'scale(0.3)'});
            $('#seal').animate({
                width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(sealLeft))/100,
                top:  ($winHeight *(sealTop))/100,
                opacity: 1
 
            },0); 
            
        }else if (  94.6 <= topPerc &&  topPerc < 94.8){
            $('#seal').animate({
                width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(-6) )/100,
                top:  ($winHeight *(96.8) )/100,
                opacity: 0.8,
                start: function(){
                    $( this ).css({'transform':'scale(0.4) rotate(15deg)'});
                }
            }, 0); 
            
        }else if (  94.4 <= topPerc &&  topPerc < 94.6 ){
             $('#seal').css({'transform':'scale(0.5) rotate(5deg)'});
             $('#seal').animate({
      width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(-2) )/100,
                top:  ($winHeight *(96.4) )/100,
                opacity:0.7
            }, 0); 
            
        } else if ( 94.2 <= topPerc &&  topPerc < 94.4 ){
              $('#seal').css({'transform':'scale(0.6) rotate(-10deg)'});
             $('#seal').animate({
     width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(2) )/100,
                top:  ($winHeight *(96.6) )/100,
                opacity:0.6
            }, 0); 
           
        }else if ( 94.0 <= topPerc &&  topPerc < 94.2 ){
            $('#seal').css({'transform':'scale(0.75) rotate(5deg)'});
             $('#seal').animate({
         width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(6) )/100,
                top:  ($winHeight *(97) )/100,
                opacity: 0.8
            }, 0); 
        }else if ( 93.8 <= topPerc &&  topPerc < 94.0 ){
            $('#seal').css({'transform':'scale(0.6) rotate(2deg)'});
             $('#seal').animate({
         width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(10) )/100,
                top:  ($winHeight *(96.8) )/100,
                opacity: 1
            }, 0); 
        }else if ( 93.6 <= topPerc &&  topPerc < 93.8 ){
            $('#seal').css({'transform':'scale(0.5) rotate(-5deg)'});
             $('#seal').animate({
         width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(14) )/100,
                top:  ($winHeight *(97) )/100,
                opacity: 1
            }, 0); 
        }else if ( 93.4 <= topPerc &&  topPerc < 93.6 ){
            $('#seal').css({'transform':'scale(0.4) rotate(5deg)'});
             $('#seal').animate({
         width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(18) )/100,
                top:  ($winHeight *(97.2) )/100,
                opacity: 1
            }, 0); 
        }/*else if ( 93.2 <= topPerc &&  topPerc < 93.4 ){
            $('#seal').css({'transform':'rotate(-8deg)'});
             $('#seal').animate({
         width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(44.5) )/100,
                top:  ($winHeight *(96.6) )/100,
                opacity: 1
            }, 0);
        }else if ( 93.0 <= topPerc &&  topPerc < 93.2 ){
            $('#seal').css({'transform':'rotate(5deg)'});
             $('#seal').animate({
         width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(40.5) )/100,
                top:  ($winHeight *(96.6) )/100,
                opacity: 1
            }, 0);
        }else if ( 92.9 <= topPerc &&  topPerc < 93.0 ){
            $('#seal').css({'transform':'rotate(5deg)'});
             $('#seal').animate({
         width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(36.5) )/100,
                top:  ($winHeight *(96.6) )/100,
                opacity: 1
            }, 0);
        }*/else if (topPerc < 95.0) {
            $('#seal').css("display", 'block');
        }

        
    });