$(window).scroll(function(){
//$(window).on('scroll', function){
//$win.on('scroll', function(){
        var $win = $(window);

        // Real width and height of the bg images
        var $bgWidth = 1920;
        var $bgHeight = 18326;
        var whaleW = 317;
        var whaleH = 131;

        // Responsive width and height of the bg images
        var $winWidth  = $('.bg1').width();
        var $winHeight = $('.bg1').height() + $('.bg2').height() + $('.bg3').height() + $('.bg4').height() + 5; // This 5 pixel is added because I don't know why the height of the bg images are 5 pixel less!!
        
        var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
        var $HeightPerc = ($winHeight * 100)/$bgHeight;    
        var top = $win.scrollTop(); //where the scroll is
    
        var topPerc = (top * 100)/$winHeight; //changeto a percentage value based on screen size percentage change

    
        console.log(topPerc);
        //console.log("Win Width: " + $WidthPerc + " %");
        //console.log("Win Height: " + $HeightPerc + " %");
        //console.log("height: " + $winHeight);


        /* whale */    
        if (topPerc <= 94){
            $('#whale').css("opacity", 0);
        }else if (topPerc > 94 && topPerc <= 94.2 ){
            $('#whale').animate({
                width: ($WidthPerc * whaleW)/100,
                //height:($HeightPerc* 80)/100,
                height:($WidthPerc * whaleH)/100,
                
                left: ($winWidth  *(65) )/100,
                top:  ($winHeight *(95) )/100,
                opacity:1
            },0); 
        }/*else if (topPerc >92.2 && topPerc <= 92.4 ){
            $('#whale').animate({
                width: ($WidthPerc * whaleW)/100,
                height:($WidthPerc * whaleH)/100,
                
                left: ($winWidth  *(85) )/100,
                top:  ($winHeight *(92.2) )/100,
                opacity:1
            },0); 
        }else if (topPerc >75.4 && topPerc <=75.6){
             $('#whale').animate({
                width: ($WidthPerc * whaleW)/100,
                height:($WidthPerc * whaleH)/100,
                 
                left: ($winWidth  *(10) )/100,
                top:  ($winHeight *(37.29) )/100,
                opacity:1
            },0); 
        }else if (topPerc >35.6 && topPerc <=35.8){
             $('#whale').animate({
                width: ($WidthPerc * whaleW)/100,
                height:($HeightPerc* whaleH)/100,
                 
                left: ($winWidth  *(16) )/100,
                top:  ($winHeight *(37.57) )/100,
                opacity:1
            },0); 
        }else if (topPerc >35.8 && topPerc <=36 ){
             $('#whale').animate({
                width: ($WidthPerc * whaleW)/100,
                height:($HeightPerc* whaleH)/100,
                 
                left: ($winWidth  *(27) )/100,
                top:  ($winHeight *(38.1) )/100,
                opacity:1
            },0); 
        }else if (topPerc >36 && topPerc <=36.2 ){
             $('#whale').animate({
                width: ($WidthPerc * whaleW)/100,
                height:($HeightPerc* whaleH)/100,
                 
                left: ($winWidth  *(38) )/100,
                top:  ($winHeight *(38.62) )/100,
                opacity:1
            },0); 
        }else if (topPerc >36.2 && topPerc <=36.4 ){
             $('#whale').animate({
                width: ($WidthPerc * whaleW)/100,
                height:($HeightPerc* whaleH)/100,
                 
                left: ($winWidth  *(50) )/100,
                top:  ($winHeight *(39.2) )/100,
                opacity:1
            },0); 
        }else if (topPerc >36.4 && topPerc <=36.6 ){
             $('#whale').animate({
                width: ($WidthPerc * whaleW)/100,
                height:($HeightPerc* whaleH)/100,
                 
                left: ($winWidth  *(65) )/100,
                top:  ($winHeight *(39.93) )/100,
                opacity:1
            },0); 
        }else if (topPerc >36.6 && topPerc <=36.8 ){
             $('#whale').animate({
                width: ($WidthPerc * whaleW)/100,
                height:($HeightPerc* whaleH)/100,
                 
                left: ($winWidth  *(80) )/100,
                top:  ($winHeight *(40.65) )/100,
                opacity:1
            },0); 
        }else if (topPerc >36.8 && topPerc <= 37 ){
             $('#whale').animate({
                width: ($WidthPerc * whaleW)/100,
                height:($HeightPerc* whaleH)/100,
                 
                left: ($winWidth  *(86.7) )/100,
                top:  ($winHeight *(40.98) )/100,
                opacity:1
            },0); 
        }*/else {
            $('#whale').css("opacity", 0);
        }

        
    });