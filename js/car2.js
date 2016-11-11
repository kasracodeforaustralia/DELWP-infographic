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
 

        /* car2   */ 
        if ( topPerc >= 79.6 ){
            $('#car2').css({'display':'block', 'left': '($winWidth  *(car2Left) )/100', 'top':'($winHeight *(car2Top) )/100'});
        } else  if ( 79.4 <= topPerc &&  topPerc < 79.6 ){ 
            $('#car2').css({'display': 'block'});
            $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(car2Left) )/100, 
                top:  ($winHeight *(car2Top) )/100,
                
            },0); 
        }else  if ( 79.2 <= topPerc &&  topPerc < 79.4 ){ 
            $('#car2').css({'display': 'block'});
            $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(14) )/100, 
                top:  ($winHeight *(79.1) )/100,
                
            },0); 
        } else  if ( 79.0 <= topPerc &&  topPerc < 79.2 ){ 
            $('#car2').css({'display': 'block'});
            $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(18) )/100, 
                top:  ($winHeight *(79.25) )/100,
                
            },0); 
            
        }else if ( 78.8 <= topPerc &&  topPerc < 79.0 ){
           $('#car2').css({'display': 'block'});
            $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(22) )/100,
                top:  ($winHeight *(79.44) )/100,
                
            }, 0); 
            
        }else if ( 78.6 <= topPerc &&  topPerc < 78.8 ){
             $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(26))/100,
                top:  ($winHeight *(79.62) )/100,
                
            }, 0); 
            
        } else if ( 78.4 <= topPerc &&  topPerc < 78.6 ){
           $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(30) )/100,
                top:  ($winHeight *(79.8) )/100,
                
            }, 0); 
           
        }else if ( 78.2 <= topPerc &&  topPerc < 78.4 ){
           $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(34) )/100,
                top:  ($winHeight *(79.99) )/100,
                
            }, 0); 
        }else if ( 78.0 <= topPerc &&  topPerc < 78.2 ){
           $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(38) )/100,
                top:  ($winHeight *(80.17) )/100,
                
            }, 0); 
        }else if ( 77.8 <= topPerc &&  topPerc < 78.0 ){
           $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(42) )/100,
                top:  ($winHeight *(80.25) )/100,
                
            }, 0); 
        }else if ( 77.6 <= topPerc &&  topPerc < 77.8 ){
           $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(46) )/100,
                top:  ($winHeight *(80.54) )/100,
                
            }, 0); 
        } else if ( 77.4 <= topPerc &&  topPerc < 77.6 ){
           $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(50) )/100,
                top:  ($winHeight *(80.72) )/100,
                
            }, 0); 
        } else if ( 77.2 <= topPerc &&  topPerc < 77.4 ){
           $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(54) )/100,
                top:  ($winHeight *(80.92) )/100,
                
            }, 0); 
        } else if (topPerc < 77.2) {
            $('#car2').css({ 'display':'block', 'opacity':'1' });
        }

        
    });