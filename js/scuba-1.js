$(window).scroll(function(){
//$(window).on('scroll', function){
//$win.on('scroll', function(){
        var $win = $(window);

        // Real width and height of the bg images
        var $bgWidth = 1920;
        var $bgHeight = 18326;
        var scuba1W = 221;
        var scuba1H = 59;

        // Responsive width and height of the bg images
        var $winWidth  = $('.bg1').width();
        var $winHeight = $('.bg1').height() + $('.bg2').height() + $('.bg3').height() + $('.bg4').height() + 5; // This 5 pixel is added because I don't know why the height of the bg images are 5 pixel less!!
        
        var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
        var $HeightPerc = ($winHeight * 100)/$bgHeight;    
        //var top = $win.scrollTop(); //where the scroll is
    
        var topPerc = ($win.scrollTop() * 100)/$winHeight; //changeto a percentage value based on screen size percentage change
       // $('#scuba-1').width = ($WidthPerc * scuba1W)/100;
       // $('#scuba-1').height = ($WidthPerc * scuba1H)/100;


        /* scuba-1   */ 
        if (topPerc >= 95.0){
            $('#scuba-1').css({'display': 'none', 'transform':'scale(0.4)', 'left': '($winWidth  *(80) )/100', 'top':'($winHeight *(95.4) )/100'});
        } else  if ( topPerc < 94.8  && topPerc >= 95.0 ){
            $('#scuba-1').css({'display': 'block', 'transform':'scale(0.4)'});
            $('#scuba-1').animate({
                width: ($WidthPerc * scuba1W)/100,
                height:($WidthPerc * scuba1H)/100,
                left: ($winWidth  *(80) )/100,
                top:  ($winHeight *(95.4) )/100,
                opacity: 0.4
 
            },0); 
            
        }else if (  94.6 <= topPerc &&  topPerc < 94.8){
           // $('#scuba-1').css({'transform':'scale(0.5) rotate(15deg)'});
            $('#scuba-1').animate({
       width: ($WidthPerc * scuba1W)/100,
                height:($WidthPerc * scuba1H)/100,
                left: ($winWidth  *(75.5) )/100,
                top:  ($winHeight *(95.6) )/100,
                opacity: 0.5,
                start: function(){
                    $( this ).css({'transform':'scale(0.5) rotate(15deg)'});
                }
            }, 0); 
            
        }else if (  94.4 <= topPerc &&  topPerc < 94.6 ){
             $('#scuba-1').css({'transform':'scale(0.6) rotate(5deg)'});
             $('#scuba-1').animate({
      width: ($WidthPerc * scuba1W)/100,
                height:($WidthPerc * scuba1H)/100,
                left: ($winWidth  *(70) )/100,
                top:  ($winHeight *(95.6) )/100,
                opacity:0.7
            }, 0); 
            
        } else if ( 94.2 <= topPerc &&  topPerc < 94.4 ){
              $('#scuba-1').css({'transform':'scale(0.8) rotate(-10deg)'});
             $('#scuba-1').animate({
     width: ($WidthPerc * scuba1W)/100,
                height:($WidthPerc * scuba1H)/100,
                left: ($winWidth  *(65.5) )/100,
                top:  ($winHeight *(95.4) )/100,
                opacity:0.8
            }, 0); 
           
        }else if ( 94.0 <= topPerc &&  topPerc < 94.2 ){
            $('#scuba-1').css({'transform':'scale(0.9) rotate(5deg)'});
             $('#scuba-1').animate({
         width: ($WidthPerc * scuba1W)/100,
                height:($WidthPerc * scuba1H)/100,
                left: ($winWidth  *(60) )/100,
                top:  ($winHeight *(95.2) )/100,
                opacity: 0.9
            }, 0); 
        }else if ( 93.8 <= topPerc &&  topPerc < 94.0 ){
            $('#scuba-1').css({'transform':'scale(1) rotate(2deg)'});
             $('#scuba-1').animate({
         width: ($WidthPerc * scuba1W)/100,
                height:($WidthPerc * scuba1H)/100,
                left: ($winWidth  *(55.5) )/100,
                top:  ($winHeight *(95.2) )/100,
                opacity: 1
            }, 0); 
        }else if ( 93.6 <= topPerc &&  topPerc < 93.8 ){
            $('#scuba-1').css({'transform':'rotate(-5deg)'});
             $('#scuba-1').animate({
         width: ($WidthPerc * scuba1W)/100,
                height:($WidthPerc * scuba1H)/100,
                left: ($winWidth  *(52.5) )/100,
                top:  ($winHeight *(97) )/100,
                opacity: 1
            }, 0); 
        }else if ( 93.4 <= topPerc &&  topPerc < 93.6 ){
            $('#scuba-1').css({'transform':'rotate(5deg)'});
             $('#scuba-1').animate({
         width: ($WidthPerc * scuba1W)/100,
                height:($WidthPerc * scuba1H)/100,
                left: ($winWidth  *(48.5) )/100,
                top:  ($winHeight *(97) )/100,
                opacity: 1
            }, 0); 
        }else if ( 93.2 <= topPerc &&  topPerc < 93.4 ){
            $('#scuba-1').css({'transform':'rotate(-8deg)'});
             $('#scuba-1').animate({
         width: ($WidthPerc * scuba1W)/100,
                height:($WidthPerc * scuba1H)/100,
                left: ($winWidth  *(44.5) )/100,
                top:  ($winHeight *(97) )/100,
                opacity: 1
            }, 0);
        }else if ( 93.0 <= topPerc &&  topPerc < 93.2 ){
            $('#scuba-1').css({'transform':'rotate(5deg)'});
             $('#scuba-1').animate({
         width: ($WidthPerc * scuba1W)/100,
                height:($WidthPerc * scuba1H)/100,
                left: ($winWidth  *(40.5) )/100,
                top:  ($winHeight *(97) )/100,
                opacity: 1
            }, 0);
        }else if (topPerc < 95.0) {
            $('#scuba-1').css("display", 'block');
        }

        
    });