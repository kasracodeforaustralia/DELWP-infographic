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
    
        var padTop = (1 * ($WidthPerc * cloudW)/100) ; // This calculation says, the big cloud should always have padding to top like 1.4 times of it's dynamic width value
        


        /* cloud setting */    
        if (topPerc <= 0.5){
            $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($WidthPerc * cloudH)/100,
                
                left: ($winWidth  *(78) )/100,
                top:  (top + padTop),       
                opacity:1
            },0);
        }else if (topPerc > 0.5 && topPerc <= 1 ){
            $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($WidthPerc * cloudH)/100,
                
                left: ($winWidth  *(72) )/100,
                top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc >1 && topPerc <= 1.5 ){
            $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($WidthPerc * cloudH)/100,
                
                left: ($winWidth  *(65) )/100,
                top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc >1.5 && topPerc <= 2){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($WidthPerc * cloudH)/100,
                 
                left: ($winWidth  *(58) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc >2 && topPerc <= 2.5){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(50) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 2.5 && topPerc <=3 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(42) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc >3 && topPerc <= 3.5 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(36) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 3.5 && topPerc <= 4 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(28) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 4 && topPerc <= 4.5 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(20) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 4.5 && topPerc <= 5 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(12) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 5 && topPerc <= 5.5 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(0.5) )/100,
                top:  (top + padTop),
                opacity:1
            },0); 
        }else {
                $('.cloud').animate({
                    width: ($WidthPerc * cloudW)/100,
                    height:($WidthPerc * cloudH)/100,
                 
                    left: ($winWidth  *(1) )/100,
                    top:  (top + padTop),
                    opacity:0
                },0);
        }

        
    });