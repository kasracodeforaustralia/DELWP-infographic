$(window).scroll(function(){
//$(window).on('scroll', function){
//$win.on('scroll', function(){
        var $win = $(window);

        // Real width and height of the bg images
        var $bgWidth = 1920;
        var $bgHeight = 18326;
        var cloud2W = 400;
        var cloud2H = 250;

        // Responsive width and height of the bg images
        var $winWidth  = $('.bg1').width();
        var $winHeight = $('.bg1').height() + $('.bg2').height() + $('.bg3').height() + $('.bg4').height() + 5; // This 5 pixel is added because I don't know why the height of the bg images are 5 pixel less!!
        
        var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
        var $HeightPerc = ($winHeight * 100) /$bgHeight;    
        var top = $win.scrollTop();
    
        var topPerc = (top * 100)/$winHeight;
    
        var padTop = (1.4 * ($WidthPerc * cloud2W)/100) ; // This calculation says, the small cloud should always have padding to top like 1.4 times of it's dynamic width value
    
        var smallCloud = 60; // make the cloud X% smaller

        /* cloud2 setting */    
        if (topPerc <= 0.5){
            $('.cloud2').animate({
                width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
                height:(($HeightPerc* cloud2H)/100) *smallCloud/100,
                
                left: ($winWidth  *(82) )/100,
                top:  (top + padTop),       
                opacity:1
            },0);
        }else if (topPerc >0.5 && topPerc <= 1){
             $('.cloud2').animate({
                width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
                height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

                left: ($winWidth  *(72) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc >1 && topPerc <= 1.5){
             $('.cloud2').animate({
                width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
                height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

                left: ($winWidth  *(62) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc >1.5 && topPerc <= 2){
             $('.cloud2').animate({
                width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
                height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

                left: ($winWidth  *(52) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc >2 && topPerc <= 2.5){
             $('.cloud2').animate({
                width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
                height:(($HeightPerc* cloud2H)/100) *smallCloud/100,
                 
                left: ($winWidth  *(42) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 2.5 && topPerc <=3 ){
             $('.cloud2').animate({
                width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
                height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

                left: ($winWidth  *(32) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc >3 && topPerc <= 3.5 ){
             $('.cloud2').animate({
                width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
                height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

                left: ($winWidth  *(22) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 3.5 && topPerc <= 4 ){
             $('.cloud2').animate({
                width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
                height:(($HeightPerc* cloud2H)/100) *smallCloud/100,
                 
                left: ($winWidth  *(12) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 4 && topPerc <= 4.5 ){
             $('.cloud2').animate({
                width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
                height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

                left: ($winWidth  *(1) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else {
            $('.cloud2').animate({
                width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
                height:(($HeightPerc* cloud2H)/100) *smallCloud/100,
                 
                    left: ($winWidth  *(1) )/100,
                    top:  (top + padTop),
                    opacity:0
            },0);
        }

        
    });