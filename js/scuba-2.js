$(window).scroll(function(){
//$(window).on('scroll', function){
//$win.on('scroll', function(){
        var $win = $(window);

        // Real width and height of the bg images
        var $bgWidth = 1920;
        var $bgHeight = 18326;
        var scuba2W = 291;
        var scuba2H = 225;

        // Responsive width and height of the bg images
        var $winWidth  = $('.bg1').width();
        var $winHeight = $('.bg1').height() + $('.bg2').height() + $('.bg3').height() + $('.bg4').height() + 5; // This 5 pixel is added because I don't know why the height of the bg images are 5 pixel less!!
        
        var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
        var $HeightPerc = ($winHeight * 100)/$bgHeight;    
        //var top = $win.scrollTop(); //where the scroll is
    
        var topPerc = ($win.scrollTop() * 100)/$winHeight; //changeto a percentage value based on screen size percentage change
       
        console.log(topPerc);


        /* scuba-2   */ 
        if (topPerc >= 94.8){
            $('#scuba-2').css({'display': 'none', 'transform':'scale(1)', 'left': '($winWidth  *(5) )/100', 'top':  '($winHeight *(98.5) )/100'});
        } else  if ( topPerc < 94.6  && topPerc >= 94.8 ){
            $('#scuba-2').css({'display': 'block', 'transform':'scale(1)'});
            $('#scuba-2').animate({
                width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(5) )/100,
                top:  ($winHeight *(98.5) )/100,
                opacity: 1
 
            },0); 
            
        }else if (  94.4 <= topPerc &&  topPerc < 94.6){
           // $('#scuba-2').css({'transform':'scale(0.5) rotate(15deg)'});
            $('#scuba-2').animate({
       width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(10) )/100,
                top:  ($winHeight *(98.3) )/100,
                opacity: 1,
                start: function(){
                    $( this ).css({'transform':'scale(0.8)'});
                }
            }, 0); 
            
        }else if (  94.2 <= topPerc &&  topPerc < 94.4 ){
             $('#scuba-2').css({'transform':'scale(0.6)'});
             $('#scuba-2').animate({
      width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(15) )/100,
                top:  ($winHeight *(97.9) )/100,
                opacity:0.8
            }, 0); 
            
        } else if ( 94.0 <= topPerc &&  topPerc < 94.2 ){
              $('#scuba-2').css({'transform':'scale(0.6) rotate(-10deg)'});
             $('#scuba-2').animate({
     width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(18) )/100,
                top:  ($winHeight *(97.7) )/100,
                opacity:0.6
            }, 0); 
           
        }else if ( 93.8 <= topPerc &&  topPerc < 94.0 ){
            $('#scuba-2').css({'transform':'scale(0.8) rotate(5deg)'});
             $('#scuba-2').animate({
         width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(22) )/100,
                top:  ($winHeight *(97.5) )/100,
                opacity: 0.7
            }, 0); 
        }else if ( 93.6 <= topPerc &&  topPerc < 93.8 ){
            $('#scuba-2').css({'transform':'scale(1) rotate(2deg)'});
             $('#scuba-2').animate({
         width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(24.5) )/100,
                top:  ($winHeight *(97.2) )/100,
                opacity: 0.8
            }, 0); 
        }else if ( 93.4 <= topPerc &&  topPerc < 93.6 ){
            $('#scuba-2').css({'transform':'rotate(-5deg)'});
             $('#scuba-2').animate({
         width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(26.5) )/100,
                top:  ($winHeight *(97.0) )/100,
                opacity: 0.9
            }, 0); 
        }else if ( 92.2 <= topPerc &&  topPerc < 93.4 ){
            $('#scuba-2').css({'transform':'rotate(5deg)'});
             $('#scuba-2').animate({
         width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(28.5) )/100,
                top:  ($winHeight *(96.8) )/100,
                opacity: 1
            }, 0); 
        }/*else if ( 92.6 <= topPerc &&  topPerc < 92.8 ){
            $('#scuba-2').css({'transform':'rotate(-8deg)'});
             $('#scuba-2').animate({
         width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(44.5) )/100,
                top:  ($winHeight *(97.4) )/100,
                opacity: 1
            }, 0);
        }else if ( 92.4 <= topPerc &&  topPerc < 92.6 ){
            $('#scuba-2').css({'transform':'rotate(5deg)'});
             $('#scuba-2').animate({
         width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(40.5) )/100,
                top:  ($winHeight *(97.2) )/100,
                opacity: 1
            }, 0);
        }*/else if (topPerc < 94.8) {
            $('#scuba-2').css("display", 'block');
        }

        
    });