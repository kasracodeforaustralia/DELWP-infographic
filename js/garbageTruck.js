$(window).scroll(function(){
//$(window).on('scroll', function){
//$win.on('scroll', function(){
        var $win = $(window);

        // Real width and height of the bg images
        var $bgWidth = 1920;
        var $bgHeight = 10582;


        // Responsive width and height of the bg images
        var $winWidth  = $('.bg1').width();
        var $winHeight = $('.bg1').height() + $('.bg2').height();

        var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
        var $HeightPerc = ($winHeight * 100)/$bgHeight;    
        var top = $win.scrollTop();
    
        var topPerc = (top * 100)/$winHeight;


        /* garbage truck */    
        if (topPerc <= 28){
            $('.garbageTruck').css("opacity", 0);
        }else if (topPerc > 28 && topPerc <= 29 ){
            $('.garbageTruck').animate({
                width: ($WidthPerc * 150)/100,
                height:($HeightPerc* 80)/100,
                
                left: ($winWidth  *(1) )/100,
                top:  ($winHeight *(35.57) )/100,
                opacity:1
            },0); 
        }else if (topPerc >29 && topPerc <= 30 ){
            $('.garbageTruck').animate({
                width: ($WidthPerc * 150)/100,
                height:($HeightPerc* 80)/100,
                
                left: ($winWidth  *(4) )/100,
                top:  ($winHeight *(35.8) )/100,
                opacity:1
            },0); 
        }else if (topPerc > 30 && topPerc <= 31 ){
             $('.garbageTruck').animate({
                width: ($WidthPerc * 150)/100,
                height:($HeightPerc* 80)/100,
                 
                left: ($winWidth  *(10) )/100,
                top:  ($winHeight *(36.33) )/100,
                opacity:1
            },0); 
        } else if (topPerc > 31 && topPerc <= 32 ){
             $('.garbageTruck').animate({
                width: ($WidthPerc * 150)/100,
                height:($HeightPerc* 80)/100,
                 
                left: ($winWidth  *(16) )/100,
                top:  ($winHeight *(36.8) )/100,
                opacity:1
            },0); 
        } else if (topPerc > 32 && topPerc <= 33 ){
             $('.garbageTruck').animate({
                width: ($WidthPerc * 150)/100,
                height:($HeightPerc* 80)/100,
                 
                left: ($winWidth  *(27) )/100,
                top:  ($winHeight *(37.7) )/100,
                opacity:1
            },0); 
        }else if (topPerc > 33 && topPerc <= 34 ){
             $('.garbageTruck').animate({
                width: ($WidthPerc * 150)/100,
                height:($HeightPerc* 80)/100,
                 
                left: ($winWidth  *(38) )/100,
                top:  ($winHeight *(38.65) )/100,
                opacity:1
            },0); 
        } else if (topPerc > 34 && topPerc <= 35 ){
             $('.garbageTruck').animate({
                width: ($WidthPerc * 150)/100,
                height:($HeightPerc* 80)/100,
                 
                left: ($winWidth  *(50) )/100,
                top:  ($winHeight *(39.65) )/100,
                opacity:1
            },0); 
        }else if (topPerc > 35 && topPerc <= 36 ){
             $('.garbageTruck').animate({
                width: ($WidthPerc * 150)/100,
                height:($HeightPerc* 80)/100,
                 
                left: ($winWidth  *(65) )/100,
                top:  ($winHeight *(40.9) )/100,
                opacity:1
            },0); 
        }else if (topPerc > 36 && topPerc <= 37 ){
             $('.garbageTruck').animate({
                width: ($WidthPerc * 150)/100,
                height:($HeightPerc* 80)/100,
                 
                left: ($winWidth  *(80) )/100,
                top:  ($winHeight *(42.15) )/100,
                opacity:1
            },0); 
        }else if (topPerc > 37 && topPerc <= 38 ){
             $('.garbageTruck').animate({
                width: ($WidthPerc * 150)/100,
                height:($HeightPerc* 80)/100,
                 
                left: ($winWidth  *(92.5) )/100,
                top:  ($winHeight *(43.16) )/100,
                opacity:1
            },0); 
        }/*else if (topPerc > 34 && top <= 35 ){
            $('.garbageTruck').animate({
                width: ($WidthPerc * 150)/100,
                height:($HeightPerc* 80)/100,
                
                left: ($winWidth  *(50) )/100,
                top:  ($winHeight *(38.5) )/100,
                opacity:1
                },0);
        }else if (topPerc > 35 && top <= 36 ){
            $('.garbageTruck').animate({
                width: ($WidthPerc * 150)/100,
                height:($HeightPerc* 80)/100,
                
                left: ($winWidth  *(68) )/100,
                top:  ($winHeight *(39) )/100,
                opacity:1
                },0);
        }else if (topPerc > 36 && top <= 37 ){
            $('.garbageTruck').css("display", "block");
            $('.garbageTruck').animate({
                width: ($WidthPerc * 150)/100,
                height:($HeightPerc* 80)/100,
                left: ($winWidth  *(90) )/100,
                top:  ($winHeight *(39.5) )/100,
                opacity:1
                },0);
        }*/ else {
            $('.garbageTruck').css("opacity", 0);
        }

        
    });