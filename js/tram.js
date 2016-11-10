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
 

        /* tram   */ 
        if ( topPerc >= 84.4 ){
            $('#tram').css({'display':'block', 'opacity':'1', 'left': '($winWidth  *(48) )/100', 'top':'($winHeight *(tramTop) )/100'});

        } else  if ( 84.2 <= topPerc &&  topPerc < 84.4 ){ 
            $('#tram').css({'display': 'block'});
            $('#tram').animate({
                width: ($WidthPerc * tramW)/100,
                height: ($WidthPerc * tramH)/100,
                left: ($winWidth  *(tramLeft) )/100, 
                top:  ($winHeight *(tramTop) )/100,
                
            },0); 
            
        }else if ( 84.0 <= topPerc &&  topPerc < 84.2 ){
           $('#tram').css({'display': 'block'});
            $('#tram').animate({
      width: ($WidthPerc * tramW)/100,
                height: ($WidthPerc * tramH)/100,
                left: ($winWidth  *(48.1) )/100,
                top:  ($winHeight *(83.5) )/100,
                
            }, 0); 
            
        }else if ( 83.8 <= topPerc &&  topPerc < 84.0 ){
             $('#tram').css({'display': 'block'});
             $('#tram').animate({
     width: ($WidthPerc * tramW)/100,
                height: ($WidthPerc * tramH)/100,
                left: ($winWidth  *(52.6))/100,
                top:  ($winHeight *(83.3) )/100,
                
            }, 0); 
            
        } else if ( 83.6 <= topPerc &&  topPerc < 83.8 ){
           $('#tram').css({'display': 'block'});
             $('#tram').animate({
    width: ($WidthPerc * tramW)/100,
                height: ($WidthPerc * tramH)/100,
                left: ($winWidth  *(55.1) )/100,
                top:  ($winHeight *(83.1) )/100,
                
            }, 0); 
           
        }else if ( 83.4 <= topPerc &&  topPerc < 83.6 ){
           $('#tram').css({'display': 'block'});
             $('#tram').animate({
    width: ($WidthPerc * tramW)/100,
                height: ($WidthPerc * tramH)/100,
                left: ($winWidth  *(58.2) )/100,
                top:  ($winHeight *(82.9) )/100,
                
            }, 0); 
        }else if ( 83.2 <= topPerc &&  topPerc < 83.4 ){
           $('#tram').css({'display': 'block'});
             $('#tram').animate({
    width: ($WidthPerc * tramW)/100,
                height: ($WidthPerc * tramH)/100,
                left: ($winWidth  *(61.8) )/100,
                top:  ($winHeight *(82.7) )/100,
                
            }, 0); 
        }/*else if ( 83.0 <= topPerc &&  topPerc < 83.2 ){
           $('#tram').css({'display': 'block'});
             $('#tram').animate({
    width: ($WidthPerc * tramW)/100,
                height: ($WidthPerc * tramH)/100,
                left: ($winWidth  *(68) )/100,
                top:  ($winHeight *(82.5) )/100,
                
            }, 0); 
        }/*else if ( 82.8 <= topPerc &&  topPerc < 83.0 ){
           $('#tram').css({'display': 'block'});
             $('#tram').animate({
    width: ($WidthPerc * tramW)/100,
                height: ($WidthPerc * tramH)/100,
                left: ($winWidth  *(69.5) )/100,
                top:  ($winHeight *(82.3) )/100,
                
            }, 0); 
        } */else if (topPerc < 83.2) {
            $('#tram').css({ 'display':'block', 'opacity':'1' });
        }

        
    });