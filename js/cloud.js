$(window).scroll(function(){
//$(window).on('scroll', function){
//$win.on('scroll', function(){
        var $win = $(window);

        // Real width and height of the bg images
        var $bgWidth = 1920;
        var $bgHeight = 18326;
        var cloudW = 400;
        var cloudH = 250;

        // Responsive width and height of the bg images
        var $winWidth  = $('.bg1').width();
        var $winHeight = $('.bg1').height() + $('.bg2').height() + $('.bg3').height() + $('.bg4').height() + 5; // This 5 pixel is added because I don't know why the height of the bg images are 5 pixel less!!
        
        var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
        var $HeightPerc = ($winHeight * 100) /$bgHeight;    
        var top = $win.scrollTop();
    
        var topPerc = (top * 100)/$winHeight;

    
        console.log(topPerc);
        //console.log("Win Width: " + $WidthPerc + " %");
        //console.log("Win Height: " + $HeightPerc + " %");
        //console.log("height: " + $winHeight);


        /* garbage truck */    
        if (topPerc <= 1){
            $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($WidthPerc * cloudH)/100,
                
                left: ($winWidth  *(80) )/100,
                top:  ($winHeight *(2) )/100,        opacity:1
            },0);
        }else if (topPerc > 1 && topPerc <= 2 ){
            $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($WidthPerc * cloudH)/100,
                
                left: ($winWidth  *(70) )/100,
                top:  ($winHeight *(2.5) )/100,
                opacity:1
            },0); 
        }else if (topPerc >2 && topPerc <= 3 ){
            $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($WidthPerc * cloudH)/100,
                
                left: ($winWidth  *(60) )/100,
                top:  ($winHeight *(3) )/100,
                opacity:1
            },0); 
        }else if (topPerc >3 && topPerc <=4){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($WidthPerc * cloudH)/100,
                 
                left: ($winWidth  *(50) )/100,
                top:  ($winHeight *(3.5) )/100,
                opacity:1
            },0); 
        }/*else if (topPerc >35.6 && topPerc <=35.8){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(16) )/100,
                top:  ($winHeight *(37.57) )/100,
                opacity:1
            },0); 
        }else if (topPerc >35.8 && topPerc <=36 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(27) )/100,
                top:  ($winHeight *(38.1) )/100,
                opacity:1
            },0); 
        }else if (topPerc >36 && topPerc <=36.2 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(38) )/100,
                top:  ($winHeight *(38.62) )/100,
                opacity:1
            },0); 
        }else if (topPerc >36.2 && topPerc <=36.4 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(50) )/100,
                top:  ($winHeight *(39.2) )/100,
                opacity:1
            },0); 
        }else if (topPerc >36.4 && topPerc <=36.6 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(65) )/100,
                top:  ($winHeight *(39.93) )/100,
                opacity:1
            },0); 
        }else if (topPerc >36.6 && topPerc <=36.8 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(80) )/100,
                top:  ($winHeight *(40.65) )/100,
                opacity:1
            },0); 
        }else if (topPerc >36.8 && topPerc <= 37 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(86.7) )/100,
                top:  ($winHeight *(40.98) )/100,
                opacity:1
            },0); 
        }*/ else {
                $('.cloud').animate({
                    width: ($WidthPerc * cloudW)/100,
                    height:($WidthPerc * cloudH)/100,
                 
                    left: ($winWidth  *(1) )/100,
                    top:  ($winHeight *(4) )/100,
                    opacity:1
                },0);
        }

        
    });