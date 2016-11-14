$(window).scroll(function(){

        // Responsive width and height of the bg images
        var $winWidth   = winWidth();
        var $winHeight  = winHeight();
        var $WidthPerc  = WidthPerc();
        var $HeightPerc = HeightPerc();
        var topPerc     = topPercfunc();

        /* truck1   */ 
        if ( topPerc >= 67.8 ){
            $('#truck1').css({'display':'block', 'left': '($winWidth  *(truck1Left) )/100', 'top':'($winHeight *(truck1Top) )/100'});
        } else  if ( 67.6 <= topPerc &&  topPerc < 67.8 ){ 
            $('#truck1').css({'display': 'block'});
            $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(truck1Left) )/100, 
                top:  ($winHeight *(truck1Top) )/100,
                
            },0); 
        }else  if ( 67.4 <= topPerc &&  topPerc < 67.6 ){ 
            $('#truck1').css({'display': 'block'});
            $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(2) )/100, 
                top:  ($winHeight *(67.75) )/100,
                
            },0); 
        } else  if ( 67.2 <= topPerc &&  topPerc < 67.4 ){ 
            $('#truck1').css({'display': 'block'});
            $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(6) )/100, 
                top:  ($winHeight *(67.95) )/100,
                
            },0); 
            
        }else if ( 67.0 <= topPerc &&  topPerc < 67.2 ){
           $('#truck1').css({'display': 'block'});
            $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(10) )/100,
                top:  ($winHeight *(68.13) )/100,
                
            }, 0); 
            
        }else if ( 66.8 <= topPerc &&  topPerc < 67.0 ){
             $('#truck1').css({'display': 'block'});
             $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(14))/100,
                top:  ($winHeight *(68.35) )/100,
                
            }, 0); 
            
        } else if ( 66.6 <= topPerc &&  topPerc < 66.8 ){
           $('#truck1').css({'display': 'block'});
             $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(18) )/100,
                top:  ($winHeight *(68.5) )/100,
                
            }, 0); 
           
        }else if ( 66.4 <= topPerc &&  topPerc < 66.6 ){
           $('#truck1').css({'display': 'block'});
             $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(22) )/100,
                top:  ($winHeight *(68.68) )/100,
                
            }, 0); 
        }else if ( 66.2 <= topPerc &&  topPerc < 66.4 ){
           $('#truck1').css({'display': 'block'});
             $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(26) )/100,
                top:  ($winHeight *(68.95) )/100,
                
            }, 0); 
        }else if ( 66.0 <= topPerc &&  topPerc < 66.2 ){
           $('#truck1').css({'display': 'block'});
             $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(30) )/100,
                top:  ($winHeight *(69.05) )/100,
                
            }, 0); 
        }else if ( 65.8 <= topPerc &&  topPerc < 66.0 ){
           $('#truck1').css({'display': 'block'});
             $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(34) )/100,
                top:  ($winHeight *(69.24) )/100,
                
            }, 0); 
        } else if ( 65.6 <= topPerc &&  topPerc < 65.8 ){
           $('#truck1').css({'display': 'block'});
             $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(38) )/100,
                top:  ($winHeight *(69.45) )/100,
                
            }, 0); 
        } else if ( 65.4 <= topPerc &&  topPerc < 65.6 ){
           $('#truck1').css({'display': 'block'});
             $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(42) )/100,
                top:  ($winHeight *(69.6) )/100,
                
            }, 0); 
        } else if ( 65.2 <= topPerc &&  topPerc < 65.4 ){
           $('#truck1').css({'display': 'block'});
             $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(46) )/100,
                top:  ($winHeight *(69.8) )/100,
                
            }, 0); 
        } else if (topPerc < 65.4) {
            $('#truck1').css({ 'display':'block', 'opacity':'1' });
        }

        
    });