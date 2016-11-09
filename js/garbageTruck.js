$(window).scroll(function(){
//$(window).on('scroll', function){
//$win.on('scroll', function(){
        var $win = $(window);

        // Real width and height of the bg images
        var $bgWidth = 1920;
        var $bgHeight = 18326;
        var truckW = 260;
        var truckH = 135;

        // Responsive width and height of the bg images
        var $winWidth  = $('.bg1').width();
        var $winHeight = $('.bg1').height() + $('.bg2').height() + $('.bg3').height() + $('.bg4').height() + 5; // This 5 pixel is added because I don't know why the height of the bg images are 5 pixel less!!
        
        var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
        var $HeightPerc = ($winHeight * 100)/$bgHeight;    
        var top = $win.scrollTop();
    
        var topPerc = (top * 100)/$winHeight;

    
        console.log(topPerc);
        //console.log("Win Width: " + $WidthPerc + " %");
        //console.log("Win Height: " + $HeightPerc + " %");
        //console.log("height: " + $winHeight);


        /* garbage truck */    
        if (topPerc <= 30){
            $('.garbageTruck').css("opacity", 0);
        }else if (topPerc > 30 && topPerc <= 31 ){
            $('.garbageTruck').animate({
                width: ($WidthPerc * truckW)/100,
                height:($HeightPerc* truckH)/100,
                 
                left: ($winWidth  *(85.9) )/100,
                top:  ($winHeight *(40.88) )/100,
                opacity:1
            },0); 
        }else if (topPerc >31 && topPerc <= 32 ){ 
            $('.garbageTruck').animate({
                width: ($WidthPerc * truckW)/100,
                height:($HeightPerc* truckH)/100,
                 
                left: ($winWidth  *(80) )/100,
                top:  ($winHeight *(40.60) )/100,
                opacity:1
            },0); 
        }else if (topPerc >32 && topPerc <=33){
             $('.garbageTruck').animate({
                width: ($WidthPerc * truckW)/100,
                height:($HeightPerc* truckH)/100,
                 
                left: ($winWidth  *(65) )/100,
                top:  ($winHeight *(39.88) )/100,
                opacity:1
            },0); 
        }else if (topPerc >33 && topPerc <=34){
             $('.garbageTruck').animate({
                width: ($WidthPerc * truckW)/100,
                height:($HeightPerc* truckH)/100,
                 
                left: ($winWidth  *(50) )/100,
                top:  ($winHeight *(39.15) )/100,
                opacity:1
            },0); 
        }else if (topPerc >34 && topPerc <=35 ){
             $('.garbageTruck').animate({
                width: ($WidthPerc * truckW)/100,
                height:($HeightPerc* truckH)/100,
                 
                left: ($winWidth  *(38) )/100,
                top:  ($winHeight *(38.58) )/100,
                opacity:1
            },0); 
        }else if (topPerc >35 && topPerc <=36 ){
             $('.garbageTruck').animate({
                width: ($WidthPerc * truckW)/100,
                height:($HeightPerc* truckH)/100,
                 
                left: ($winWidth  *(27) )/100,
                top:  ($winHeight *(38.05) )/100,
                opacity:1
            },0); 
        }else if (topPerc >36 && topPerc <=37 ){
             $('.garbageTruck').animate({
                width: ($WidthPerc * truckW)/100,
                height:($HeightPerc* truckH)/100,
                 
                left: ($winWidth  *(16) )/100,
                top:  ($winHeight *(37.52) )/100,
                opacity:1
            },0); 
        }else if (topPerc >38 && topPerc <=39 ){
             $('.garbageTruck').animate({
                width: ($WidthPerc * truckW)/100,
                height:($WidthPerc * truckH)/100,
                 
                left: ($winWidth  *(10) )/100,
                top:  ($winHeight *(37.24) )/100,
                opacity:1
            },0); 
        }else if (topPerc >39 && topPerc <=40 ){
             $('.garbageTruck').animate({
                width: ($WidthPerc * truckW)/100,
                height:($WidthPerc * truckH)/100,
                
                left: ($winWidth  *(4) )/100,
                top:  ($winHeight *(36.95) )/100,
                opacity:1
            },0); 
        }else if (topPerc >40 && topPerc <= 41 ){
             $('.garbageTruck').animate({
                width: ($WidthPerc * truckW)/100,
                height:($WidthPerc * truckH)/100,
                
                left: ($winWidth  *(1) )/100,
                top:  ($winHeight *(36.80) )/100,
                opacity:1
            },0); 
        }else {
            $('.garbageTruck').css("opacity", 0);
        }

        
    });