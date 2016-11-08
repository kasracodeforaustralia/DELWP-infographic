$(window).scroll(function(){
//$(window).on('scroll', function){
//$win.on('scroll', function(){
        var $win = $(window);

        // Real width and height of the bg images
        var $bgWidth = 1920;
        var $bgHeight = 18326;
        var boatW = 133;
        var boatH = 218;

        // Responsive width and height of the bg images
        var $winWidth  = $('.bg1').width();
        var $winHeight = $('.bg1').height() + $('.bg2').height() + $('.bg3').height() + $('.bg4').height() + 5; // This 5 pixel is added because I don't know why the height of the bg images are 5 pixel less!!
        
        var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
        var $HeightPerc = ($winHeight * 100)/$bgHeight;    
        //var top = $win.scrollTop(); //where the scroll is
    
        var topPerc = ($win.scrollTop() * 100)/$winHeight; //changeto a percentage value based on screen size percentage change
        console.log(topPerc);


        /* whale   */ 
        if ( topPerc >= 91.8 ){
            $('#boat').css({'display':'none', 'opacity':'1'});
        } else  if ( topPerc >= 91.6  &&  topPerc < 91.8 ){
            $('#boat').css({'display': 'block', 'transform':'scale(0.5)'});
            $('#boat').animate({
                width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(72.0) )/100,
                top:  ($winHeight *(90.6) )/100,
                
            },0); 
            
        }else if ( 91.4 <= topPerc &&  topPerc < 91.6 ){
           // $('#boat').css({'transform':'scale(0.5) rotate(15deg)'});
            $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(68.5) )/100,
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
                left: ($winWidth  *(60.5))/100,
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
        }else if (topPerc < 91.8) {
            $('#boat').css({ 'display':'block', 'opacity':'1' });
        }

        
    });