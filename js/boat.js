$(window).scroll(function(){
    
// Responsive width and height of the bg images
        var $winWidth   = winWidth();
        var $winHeight  = winHeight();
        var $WidthPerc  = WidthPerc();
        var $HeightPerc = HeightPerc();
        var topPerc     = topPercfunc();

        /* boat   */ 
        if ( topPerc >= 91.8 ){
            $('#boat').css({'display':'none', 'opacity':'1'});
        } else  if ( topPerc >= 91.6  &&  topPerc < 91.8 ){
            $('#boat').css({'display': 'block', 'transform':'scale(0.5)'});
            $('#boat').animate({
                width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  * boatLeft )/100,
                top:  ($winHeight * boatTop )/100
                
            },0); 
            
        }else if ( 91.4 <= topPerc &&  topPerc < 91.6 ){
            $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(78.5) )/100,
                top:  ($winHeight *(90.2) )/100,
                
                start: function(){
                    $( this ).css({'transform':'scale(0.6) skewX(15deg)'});
                }
            }, 0); 
            
        }else if ( 91.2 <= topPerc &&  topPerc < 91.4 ){
             $('#boat').css({'transform':'scale(0.7) skewX(5deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(68.5))/100,
                top:  ($winHeight *(90.4) )/100,
                
            }, 0); 
            
        } else if ( 91.0 <= topPerc &&  topPerc < 91.2){
              $('#boat').css({'transform':'scale(0.8) skewX(-10deg)'});
             $('#boat').animate({
                  width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(53.5) )/100,
                top:  ($winHeight *(91.0) )/100,
                
            }, 0); 
           
        }else if ( 90.8 <= topPerc &&  topPerc < 91.0 ){
            $('#boat').css({'transform':'scale(0.9) skewX(5deg)'});
             $('#boat').animate({
               width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(47) )/100,
                top:  ($winHeight *(91.5) )/100,
              
            }, 0); 
        }else if ( 90.6 <= topPerc &&  topPerc < 90.8 ){
            $('#boat').css({'transform':'scale(0.95) skewX(5deg)'});
             $('#boat').animate({
                width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(42) )/100,
                top:  ($winHeight *(91.8) )/100,
              
            }, 0); 
        }else if ( 90.4 <= topPerc &&  topPerc < 90.6 ){
            $('#boat').css({'transform':'scale(1) skewX(-5deg)'});
             $('#boat').animate({
                width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(38.5) )/100,
                top:  ($winHeight *(91.5) )/100,
              
            }, 0); 
        }else if ( 90.2 <= topPerc &&  topPerc < 90.4 ){
            $('#boat').css({'transform':'scale(1) skewX(5deg)'});
             $('#boat').animate({
             width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(34.8) )/100,
                top:  ($winHeight *(91.1) )/100,
              
            }, 0); 
        }else if ( 90.0 <= topPerc &&  topPerc < 90.2 ){
            $('#boat').css({'transform':'scale(1) skewX(2deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(30.4) )/100,
                top:  ($winHeight *(91.4) )/100,
              
            }, 0); 
        }else if ( 89.8 <= topPerc &&  topPerc < 90.0 ){
            $('#boat').css({'transform':'scale(1) skewX(2deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(27.0) )/100,
                top:  ($winHeight *(92.4) )/100,
              
            }, 0);
        }else if ( 89.6 <= topPerc &&  topPerc < 89.8 ){
            $('#boat').css({'transform':'scale(1) skewX(2deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(25.0) )/100,
                top:  ($winHeight *(93.4) )/100,
              
            }, 0);
        } else if ( 89.4 <= topPerc &&  topPerc < 89.6 ){
            $('#boat').css({'transform':'scale(1) skewX(-2deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(15.0) )/100,
                top:  ($winHeight *(93.4) )/100,
              
            }, 0);
        } else if ( 89.2 <= topPerc &&  topPerc < 89.4 ){
            $('#boat').css({'transform':'scale(1) skewX(-2deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(5.0) )/100,
                top:  ($winHeight *(93.4) )/100,
              
            }, 0);
        } else if ( 89.0 <= topPerc &&  topPerc < 89.2 ){
            $('#boat').css({'transform':'scale(1) skewX(-2deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(0) )/100,
                top:  ($winHeight *(93.4) )/100,
              
            }, 0);
        } else if ( 88.8 <= topPerc &&  topPerc < 89.0 ){
            $('#boat').css({'transform':'scale(1) skewX(-2deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(-5) )/100,
                top:  ($winHeight *(93.4) )/100,
              
            }, 0);
        } else if ( 88.6 <= topPerc &&  topPerc < 88.8 ){
            $('#boat').css({'transform':'scale(1) skewX(-2deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(-15) )/100,
                top:  ($winHeight *(93.4) )/100,
              
            }, 0);
        } else if (topPerc < 91.8) {
            $('#boat').css({ 'display':'block', 'opacity':'1' });
        }

        
    });