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
        if ( topPerc >= 81.2 ){
            $('#car2').css({'display':'block', 'left': '($winWidth  *(car2Left) )/100', 'top':'($winHeight *(car2Top) )/100'});

        } else  if ( 81.0 <= topPerc &&  topPerc < 81.2 ){ 
            $('#car2').css({'display': 'block'});
            $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(car2Left) )/100, 
                top:  ($winHeight *(car2Top) )/100,
                
            },0); 
            
        }else if ( 80.8 <= topPerc &&  topPerc < 81.0 ){
           $('#car2').css({'display': 'block'});
            $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(4) )/100,
                top:  ($winHeight *(78.6) )/100,
                
            }, 0); 
            
        }else if ( 80.6 <= topPerc &&  topPerc < 80.8 ){
             $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(8))/100,
                top:  ($winHeight *(78.7) )/100,
                
            }, 0); 
            
        } else if ( 80.4 <= topPerc &&  topPerc < 80.6 ){
           $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(10) )/100,
                top:  ($winHeight *(78.8) )/100,
                
            }, 0); 
           
        }else if ( 80.2 <= topPerc &&  topPerc < 80.4 ){
           $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(14) )/100,
                top:  ($winHeight *(79.0) )/100,
                
            }, 0); 
        }else if ( 80.0 <= topPerc &&  topPerc < 80.2 ){
           $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(17) )/100,
                top:  ($winHeight *(79.2) )/100,
                
            }, 0); 
        }else if ( 80.8 <= topPerc &&  topPerc < 80.0 ){
           $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(20) )/100,
                top:  ($winHeight *(79.4) )/100,
                
            }, 0); 
        }else if ( 80.6 <= topPerc &&  topPerc < 80.8 ){
           $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(24) )/100,
                top:  ($winHeight *(79.6) )/100,
                
            }, 0); 
        } else if (topPerc < 82.8) {
            $('#car2').css({ 'display':'block', 'opacity':'1' });
        }

        
    });