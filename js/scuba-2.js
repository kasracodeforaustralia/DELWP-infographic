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
       // $('#scuba-2').width = ($WidthPerc * scuba2W)/100;
       // $('#scuba-2').height = ($WidthPerc * scuba2H)/100;
        console.log(topPerc);


        /* scuba-2   */ 
        if (topPerc >= 94.4){
            $('#scuba-2').css({'display': 'none', 'left': '($winWidth  *(10) )/100', 'top':  '($winHeight *(96.5) )/100'});
        } else  if ( topPerc < 94.2  && topPerc >= 94.4 ){
            $('#scuba-2').css({'display': 'block', 'transform':'scale(0.5'});
            $('#scuba-2').animate({
                width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(10) )/100,
                top:  ($winHeight *(96.5) )/100,
                opacity: 0.4
 
            },0); 
            
        }else if (  94.0 <= topPerc &&  topPerc < 94.2){
           // $('#scuba-2').css({'transform':'scale(0.5) rotate(15deg)'});
            $('#scuba-2').animate({
       width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(17) )/100,
                top:  ($winHeight *(96.7) )/100,
                opacity: 0.6,
                start: function(){
                    $( this ).css({'transform':'scale(0.6)'});
                }
            }, 0); 
            
        }else if (  93.8 <= topPerc &&  topPerc < 94.0 ){
             $('#scuba-2').css({'transform':'scale(0.6)'});
             $('#scuba-2').animate({
      width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(20) )/100,
                top:  ($winHeight *(96.9) )/100,
                opacity:0.7
            }, 0); 
            
        } else if ( 93.6 <= topPerc &&  topPerc < 93.8 ){
              $('#scuba-2').css({'transform':'scale(0.8) rotate(-10deg)'});
             $('#scuba-2').animate({
     width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(25.5) )/100,
                top:  ($winHeight *(97.2) )/100,
                opacity:0.8
            }, 0); 
           
        }else if ( 93.4 <= topPerc &&  topPerc < 93.6 ){
            $('#scuba-2').css({'transform':'scale(0.9) rotate(5deg)'});
             $('#scuba-2').animate({
         width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(30) )/100,
                top:  ($winHeight *(97.0) )/100,
                opacity: 0.9
            }, 0); 
        }else if ( 93.2 <= topPerc &&  topPerc < 93.4 ){
            $('#scuba-2').css({'transform':'scale(1) rotate(2deg)'});
             $('#scuba-2').animate({
         width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(35.5) )/100,
                top:  ($winHeight *(97.0) )/100,
                opacity: 1
            }, 0); 
        }else if ( 93.0 <= topPerc &&  topPerc < 93.2 ){
            $('#scuba-2').css({'transform':'rotate(-5deg)'});
             $('#scuba-2').animate({
         width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(38.5) )/100,
                top:  ($winHeight *(97.0) )/100,
                opacity: 1
            }, 0); 
        }else if ( 92.8 <= topPerc &&  topPerc < 93.0 ){
            $('#scuba-2').css({'transform':'rotate(5deg)'});
             $('#scuba-2').animate({
         width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(40.5) )/100,
                top:  ($winHeight *(97.0) )/100,
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
        }*/else if (topPerc < 94.4) {
            $('#scuba-2').css("display", 'block');
        }

        
    });