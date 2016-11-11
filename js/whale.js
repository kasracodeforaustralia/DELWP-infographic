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
            
        var topPerc = ($win.scrollTop() * 100)/$winHeight;

        /* whale */ 
        if (topPerc >= 95.0){
            $('#whale').css({'display': 'none', 'transform':'scale(0.3)', 'left': '($winWidth  *(75) )/100', 'top':'($winHeight *(98.4) )/100'});
        } else  if ( topPerc < 94.8  && topPerc >= 95.0 ){
            $('#whale').css({'display': 'block', 'transform':'scale(0.3)'});
            $('#whale').animate({
                width: ($WidthPerc * whaleW)/100,
                height:($WidthPerc * whaleH)/100,
                left: ($winWidth  *(75))/100,
                top:  ($winHeight *(98.4))/100,
                opacity: 0.4
 
            },0); 
            
        }else if (  94.6 <= topPerc &&  topPerc < 94.8){
            $('#whale').animate({
                width: ($WidthPerc * whaleW)/100,
                height:($WidthPerc * whaleH)/100,
                left: ($winWidth  *(70) )/100,
                top:  ($winHeight *(98.2) )/100,
                opacity: 0.5,
                start: function(){
                    $( this ).css({'transform':'scale(0.4) rotate(15deg)'});
                }
            }, 0); 
            
        }else if (  94.4 <= topPerc &&  topPerc < 94.6 ){
             $('#whale').css({'transform':'scale(0.5) rotate(5deg)'});
             $('#whale').animate({
      width: ($WidthPerc * whaleW)/100,
                height:($WidthPerc * whaleH)/100,
                left: ($winWidth  *(68) )/100,
                top:  ($winHeight *(97.6) )/100,
                opacity:0.7
            }, 0); 
            
        } else if ( 94.2 <= topPerc &&  topPerc < 94.4 ){
              $('#whale').css({'transform':'scale(0.6) rotate(-10deg)'});
             $('#whale').animate({
     width: ($WidthPerc * whaleW)/100,
                height:($WidthPerc * whaleH)/100,
                left: ($winWidth  *(64.5) )/100,
                top:  ($winHeight *(97.4) )/100,
                opacity:0.8
            }, 0); 
           
        }else if ( 94.0 <= topPerc &&  topPerc < 94.2 ){
            $('#whale').css({'transform':'scale(0.75) rotate(5deg)'});
             $('#whale').animate({
         width: ($WidthPerc * whaleW)/100,
                height:($WidthPerc * whaleH)/100,
                left: ($winWidth  *(60) )/100,
                top:  ($winHeight *(97.2) )/100,
                opacity: 0.9
            }, 0); 
        }else if ( 93.8 <= topPerc &&  topPerc < 94.0 ){
            $('#whale').css({'transform':'scale(0.6) rotate(2deg)'});
             $('#whale').animate({
         width: ($WidthPerc * whaleW)/100,
                height:($WidthPerc * whaleH)/100,
                left: ($winWidth  *(56.5) )/100,
                top:  ($winHeight *(97) )/100,
                opacity: 1
            }, 0); 
        }else if ( 93.6 <= topPerc &&  topPerc < 93.8 ){
            $('#whale').css({'transform':'scale(0.5) rotate(-5deg)'});
             $('#whale').animate({
         width: ($WidthPerc * whaleW)/100,
                height:($WidthPerc * whaleH)/100,
                left: ($winWidth  *(52.5) )/100,
                top:  ($winHeight *(97) )/100,
                opacity: 1
            }, 0); 
        }else if ( 93.4 <= topPerc &&  topPerc < 93.6 ){
            $('#whale').css({'transform':'scale(0.4) rotate(5deg)'});
             $('#whale').animate({
         width: ($WidthPerc * whaleW)/100,
                height:($WidthPerc * whaleH)/100,
                left: ($winWidth  *(48.5) )/100,
                top:  ($winHeight *(96.8) )/100,
                opacity: 1
            }, 0); 
        }/*else if ( 93.2 <= topPerc &&  topPerc < 93.4 ){
            $('#whale').css({'transform':'rotate(-8deg)'});
             $('#whale').animate({
         width: ($WidthPerc * whaleW)/100,
                height:($WidthPerc * whaleH)/100,
                left: ($winWidth  *(44.5) )/100,
                top:  ($winHeight *(96.6) )/100,
                opacity: 1
            }, 0);
        }else if ( 93.0 <= topPerc &&  topPerc < 93.2 ){
            $('#whale').css({'transform':'rotate(5deg)'});
             $('#whale').animate({
         width: ($WidthPerc * whaleW)/100,
                height:($WidthPerc * whaleH)/100,
                left: ($winWidth  *(40.5) )/100,
                top:  ($winHeight *(96.6) )/100,
                opacity: 1
            }, 0);
        }else if ( 92.9 <= topPerc &&  topPerc < 93.0 ){
            $('#whale').css({'transform':'rotate(5deg)'});
             $('#whale').animate({
         width: ($WidthPerc * whaleW)/100,
                height:($WidthPerc * whaleH)/100,
                left: ($winWidth  *(36.5) )/100,
                top:  ($winHeight *(96.6) )/100,
                opacity: 1
            }, 0);
        }*/else if (topPerc < 95.0) {
            $('#whale').css("display", 'block');
        }

        
    });