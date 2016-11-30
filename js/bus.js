$(window).scroll(function(){

        // Responsive width and height of the bg images
        var $winWidth   = winWidth();
        var $winHeight  = winHeight();
        var $WidthPerc  = WidthPerc();
        var $HeightPerc = HeightPerc();
        var topPerc     = topPercfunc();

    if ( ($(window).scrollTop() <=$('.bg2PH').position().top) && busFlag == 1 && busCounter == 2){
        loadIMG('.busPH','img/section-3/bus.png','item bus');
        busFlag = 0;
    }    
    if ($(window).scrollTop() <=$('.bg2PH').position().top){
        busCounter++;
        
    }


        /* bus   */ 
        if ( topPerc >= 81.2 ){
            $('.bus').hide();
            //$('.bus').css({'display':'block', 'left': '($winWidth * busLeft )/100', 'top':'($winHeight * busTop )/100'});

        } else  if ( 81.0 <= topPerc &&  topPerc < 81.2 ){ 
            $('.bus').show();
            //$('.bus').css({'display': 'block'});
            $('.bus').animate({
                width: ($WidthPerc * busW)/100,
                height: ($WidthPerc * busH)/100,
                left: ($winWidth  *(busLeft) )/100, 
                top:  ($winHeight *(busTop) )/100,
                
            },0); 
            
        }else if ( 80.8 <= topPerc &&  topPerc < 81.0 ){
            $('.bus').show();
            //$('.bus').css({'display': 'block'});
            $('.bus').animate({
                width: ($WidthPerc * busW)/100,
                height: ($WidthPerc * busH)/100,
                left: ($winWidth  *(47) )/100,
                top:  ($winHeight *(80.2) )/100,
                
            }, 0); 
            
        }else if ( 80.6 <= topPerc &&  topPerc < 80.8 ){
             //$('.bus').css({'display': 'block'});
             $('.bus').animate({
                width: ($WidthPerc * busW)/100,
                height: ($WidthPerc * busH)/100,
                left: ($winWidth  *(52))/100,
                top:  ($winHeight *(80.4) )/100,
                
            }, 0); 
            
        } else if ( 80.4 <= topPerc &&  topPerc < 80.6 ){
            //$('.bus').css({'display': 'block'});
             $('.bus').animate({
                width: ($WidthPerc * busW)/100,
                height: ($WidthPerc * busH)/100,
                left: ($winWidth  *(56) )/100,
                top:  ($winHeight *(80.6) )/100,
                
            }, 0); 
           
        }else if ( 80.2 <= topPerc &&  topPerc < 80.4 ){
           //$('.bus').css({'display': 'block'});
             $('.bus').animate({
                width: ($WidthPerc * busW)/100,
                height: ($WidthPerc * busH)/100,
                left: ($winWidth  *(60) )/100,
                top:  ($winHeight *(80.8) )/100,
                
            }, 0); 
        }else if ( 80.0 <= topPerc &&  topPerc < 80.2 ){
           //$('.bus').css({'display': 'block'});
             $('.bus').animate({
                width: ($WidthPerc * busW)/100,
                height: ($WidthPerc * busH)/100,
                left: ($winWidth  *(64) )/100,
                top:  ($winHeight *(81.0) )/100,
                
            }, 0); 
        }else if ( 79.8 <= topPerc &&  topPerc < 80.0 ){
             $('.bus').show();
             //$('.bus').css({'display': 'block'});
             $('.bus').animate({
                width: ($WidthPerc * busW)/100,
                height: ($WidthPerc * busH)/100,
                left: ($winWidth  *(68) )/100,
                top:  ($winHeight *(81.2) )/100,
                
            }, 0); 
        }  /*else if ( 79.6 <= topPerc &&  topPerc < 79.8 ){
           $('.bus').css({'display': 'block'});
             $('.bus').animate({
                width: ($WidthPerc * busW)/100,
                height: ($WidthPerc * busH)/100,
                left: ($winWidth  *(72) )/100,
                top:  ($winHeight *(81.4) )/100,
                
            }, 0); 
        } else if ( 79.4 <= topPerc &&  topPerc < 79.6 ){
           $('.bus').css({'display': 'block'});
             $('.bus').animate({
                width: ($WidthPerc * busW)/100,
                height: ($WidthPerc * busH)/100,
                left: ($winWidth  *(76) )/100,
                top:  ($winHeight *(81.6) )/100,
                
            }, 0); 
        } else if ( 79.2 <= topPerc &&  topPerc < 79.4 ){
           $('.bus').css({'display': 'block'});
             $('.bus').animate({
                width: ($WidthPerc * busW)/100,
                height: ($WidthPerc * busH)/100,
                left: ($winWidth  *(80) )/100,
                top:  ($winHeight *(81.8) )/100,
                
            }, 0); 
        } else if ( 79.0 <= topPerc &&  topPerc < 79.2 ){
           $('.bus').css({'display': 'block'});
             $('.bus').animate({
                width: ($WidthPerc * busW)/100,
                height: ($WidthPerc * busH)/100,
                left: ($winWidth  *(84) )/100,
                top:  ($winHeight *(82.0) )/100,
                
            }, 0); 
        } else if ( 78.8 <= topPerc &&  topPerc < 79.0 ){
           $('.bus').css({'display': 'block'});
             $('.bus').animate({
                width: ($WidthPerc * busW)/100,
                height: ($WidthPerc * busH)/100,
                left: ($winWidth  *(88) )/100,
                top:  ($winHeight *(82.2) )/100,
                
            }, 0); 
        }*/ else if (topPerc < 79.8) {
                $('.bus').show();
                //$('.bus').css({ 'display':'block', 'opacity':'1' });
        }

        
    });