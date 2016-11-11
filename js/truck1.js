$(window).scroll(function(){

        var $win = $(window);

        // Real width and height of the bg images
        var $bgWidth = 1920;
        var $bgHeight = 18326;
        
        // Responsive width and height of the bg images
        var $winWidth  = $('.bg1').width();
        var $winHeight = $('.bg1').height() + $('.bg2').height() + $('.bg3').height() + $('.bg4').height() + 5; // This 5 pixel is added because I don't know why the height of the bg images are 5 pixel less!!
        
        var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
        var $HeightPerc = ($winHeight * 100)/$bgHeight;    
        //var top = $win.scrollTop(); //where the scroll is
    
        var topPerc = ($win.scrollTop() * 100)/$winHeight; //changeto a percentage value based on screen size percentage change
 

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
                left: ($winWidth  *(14) )/100, 
                top:  ($winHeight *(79.1) )/100,
                
            },0); 
        } else  if ( 67.2 <= topPerc &&  topPerc < 67.4 ){ 
            $('#truck1').css({'display': 'block'});
            $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(18) )/100, 
                top:  ($winHeight *(79.25) )/100,
                
            },0); 
            
        }else if ( 67.0 <= topPerc &&  topPerc < 67.2 ){
           $('#truck1').css({'display': 'block'});
            $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(22) )/100,
                top:  ($winHeight *(79.44) )/100,
                
            }, 0); 
            
        }else if ( 78.6 <= topPerc &&  topPerc < 78.8 ){
             $('#truck1').css({'display': 'block'});
             $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(26))/100,
                top:  ($winHeight *(79.62) )/100,
                
            }, 0); 
            
        } else if ( 78.4 <= topPerc &&  topPerc < 78.6 ){
           $('#truck1').css({'display': 'block'});
             $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(30) )/100,
                top:  ($winHeight *(79.8) )/100,
                
            }, 0); 
           
        }else if ( 78.2 <= topPerc &&  topPerc < 78.4 ){
           $('#truck1').css({'display': 'block'});
             $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(34) )/100,
                top:  ($winHeight *(79.99) )/100,
                
            }, 0); 
        }else if ( 78.0 <= topPerc &&  topPerc < 78.2 ){
           $('#truck1').css({'display': 'block'});
             $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(38) )/100,
                top:  ($winHeight *(80.17) )/100,
                
            }, 0); 
        }else if ( 77.8 <= topPerc &&  topPerc < 78.0 ){
           $('#truck1').css({'display': 'block'});
             $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(42) )/100,
                top:  ($winHeight *(80.25) )/100,
                
            }, 0); 
        }else if ( 77.6 <= topPerc &&  topPerc < 77.8 ){
           $('#truck1').css({'display': 'block'});
             $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(46) )/100,
                top:  ($winHeight *(80.54) )/100,
                
            }, 0); 
        } else if ( 77.4 <= topPerc &&  topPerc < 77.6 ){
           $('#truck1').css({'display': 'block'});
             $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(50) )/100,
                top:  ($winHeight *(80.72) )/100,
                
            }, 0); 
        } else if ( 77.2 <= topPerc &&  topPerc < 77.4 ){
           $('#truck1').css({'display': 'block'});
             $('#truck1').animate({
                width: ($WidthPerc * truck1W)/100,
                height: ($WidthPerc * truck1H)/100,
                left: ($winWidth  *(54) )/100,
                top:  ($winHeight *(80.92) )/100,
                
            }, 0); 
        } else if (topPerc < 77.2) {
            $('#truck1').css({ 'display':'block', 'opacity':'1' });
        }

        
    });