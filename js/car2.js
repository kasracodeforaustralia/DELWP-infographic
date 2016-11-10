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
        if ( topPerc >= 77.6 ){
            $('#car2').css({'display':'block', 'left': '($winWidth  *(car2Left) )/100', 'top':'($winHeight *(car2Top) )/100'});

        } else  if ( 77.4 <= topPerc &&  topPerc < 77.6 ){ 
            $('#car2').css({'display': 'block'});
            $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(car2Left) )/100, 
                top:  ($winHeight *(car2Top) )/100,
                
            },0); 
            
        }else if ( 77.2 <= topPerc &&  topPerc < 77.4 ){
           $('#car2').css({'display': 'block'});
            $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(51) )/100,
                top:  ($winHeight *(84.3) )/100,
                
            }, 0); 
            
        }else if ( 77.0 <= topPerc &&  topPerc < 77.2 ){
             $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(54.5))/100,
                top:  ($winHeight *(84.1) )/100,
                
            }, 0); 
            
        } else if ( 76.8 <= topPerc &&  topPerc < 77.0 ){
           $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(58) )/100,
                top:  ($winHeight *(83.9) )/100,
                
            }, 0); 
           
        }else if ( 83.4 <= topPerc &&  topPerc < 83.6 ){
           $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(61) )/100,
                top:  ($winHeight *(83.7) )/100,
                
            }, 0); 
        }else if ( 83.2 <= topPerc &&  topPerc < 83.4 ){
           $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(64.5) )/100,
                top:  ($winHeight *(83.5) )/100,
                
            }, 0); 
        }else if ( 83.0 <= topPerc &&  topPerc < 83.2 ){
           $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(68) )/100,
                top:  ($winHeight *(83.3) )/100,
                
            }, 0); 
        }else if ( 82.8 <= topPerc &&  topPerc < 83.0 ){
           $('#car2').css({'display': 'block'});
             $('#car2').animate({
                width: ($WidthPerc * car2W)/100,
                height: ($WidthPerc * car2H)/100,
                left: ($winWidth  *(69.5) )/100,
                top:  ($winHeight *(83.2) )/100,
                
            }, 0); 
        } else if (topPerc < 82.8) {
            $('#car2').css({ 'display':'block', 'opacity':'1' });
        }

        
    });