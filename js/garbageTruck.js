$( document ).ready(function() {
    var $win = $(window);

    // Real width and height of the bg images
    var $bgWidth = 1920;
    var $bgHeight = 10582;


    // Responsive width and height of the bg images
    var $winWidth  = $('.bg1').width();
    var $winHeight = $('.bg1').height() + $('.bg2').height();

    var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
    var $HeightPerc = ($winHeight * 100)/$bgHeight;


    $win.on('scroll', function(){
        var top = $win.scrollTop();
        var topPerc = (top * 100)/$winHeight
        //console.log(top);
        //console.log($winHeight);
        console.log(topPerc + " %");


        /* garbage truck */    
        if (topPerc <= 31){
            $('.garbageTruck').css("opacity", 0);
        }else if (topPerc > 31 && topPerc <= 32 ){
            $('.garbageTruck').animate({
                width: ($WidthPerc * 150)/100,
                height:($HeightPerc* 80)/100,
                left: ($winWidth  *(1) )/100,
                top:  ($winHeight *(35.57) )/100,
                opacity:1
            },0); 
        }else if (topPerc >32 && topPerc <= 33 ){
            $('.garbageTruck').animate({
                width: ($WidthPerc * 150)/100,
                height:($HeightPerc* 80)/100,
                left: ($winWidth  *(4) )/100,
                top:  ($winHeight *(35.8) )/100,
                opacity:1
            },0); 
        }else if (topPerc > 33 && topPerc <= 34 ){
             $('.garbageTruck').animate({
                width: ($WidthPerc * 150)/100,
                height:($HeightPerc* 80)/100,
                left: ($winWidth  *(10) )/100,
                top:  ($winHeight *(36.33) )/100,
                opacity:1
            },0); 
        } else if (topPerc > 34 && topPerc <= 35 ){
             $('.garbageTruck').animate({
                width: ($WidthPerc * 150)/100,
                height:($HeightPerc* 80)/100,
                left: ($winWidth  *(16) )/100,
                top:  ($winHeight *(36.8) )/100,
                opacity:1
            },0); 
        }/*else  if (top > 3350 && top <= 3400 ){
            $('.garbageTruck').animate({
                left: ($winWidth *(25) )/100,
                top: 3970
                },0);
        }else if (top > 3400 && top <= 3450 ){
            $('.garbageTruck').animate({
                left: ($winWidth *(17) )/100,
                top: 3900
                },0);
        }else if (top > 3450 && top <= 3500 ){
            $('.garbageTruck').animate({
                left: ($winWidth *(8) )/100,
                top: 3820
                },0);
        }else if (top > 3500 && top <= 3550 ){
            $('.garbageTruck').animate({
                left: ($winWidth *(3) )/100,
                top: 3775
                },0);
        }else if (top > 3550 && top <= 3600 ){
            $('.garbageTruck').css("display", "block");
            $('.garbageTruck').animate({
                left: ($winWidth *(-3) )/100,
                top: 3720
                },0);
        } */else {
            $('.garbageTruck').css("opacity", 0);
        }

        
    });
    
});