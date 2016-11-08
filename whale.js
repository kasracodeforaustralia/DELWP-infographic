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
        var $HeightPerc = ($winHeight * 100) /$bgHeight;    
        
        var top = $win.scrollTop();
    
        var topPerc = (top * 100)/$winHeight;
    
        console.log(topPerc);


        /* whale   */ 
    
        if (topPerc <= 87.5){
            $('.whale').animate({ opacity:0},0);
            
        }else if (topPerc > 88.2 && topPerc <= 88.5 ){
            $('.whale').animate({
                width: (($WidthPerc * whaleW)/100)*83/100,
                height:(($WidthPerc * whaleH)/100)*83/100,
                
                left: ($winWidth  *(70) )/100,
                top:  ($winHeight *(93) )/100,
                opacity:1
            },0); 

        }else if (topPerc >88.5 && topPerc <= 88.8 ){
            $('.whale').animate({
                width: (($WidthPerc * whaleW)/100)*75/100,
                height:((($WidthPerc * whaleH)/100))*75/100,
                
                left: ($winWidth  *(82) )/100,
                top:  ($winHeight *(95) )/100,
                opacity:1
            },0); 

            
        }else if (topPerc >88.8 && topPerc <= 89 ) {
            $('.whale').animate({
                width: (($WidthPerc * whaleW)/100)*68/100,
                height:(($WidthPerc * whaleH)/100)*68/100,
                
                left: ($winWidth  *(86) )/100,
                top:  ($winHeight *(98) )/100,        
                opacity: 1
            },0);
        }else if (topPerc > 89) {
            $('.whale').animate({
                width: (($WidthPerc * whaleW)/100)*60/100,
                height:(($WidthPerc * whaleH)/100)*60/100,
                
                left: ($winWidth  *(90) )/100,
                top:  ($winHeight *(99.4) )/100,        
                opacity: 1
            },0);
        }

        
    });