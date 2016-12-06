$(document).ready(function() {             
     $("body").keydown(function(){
        if(($(window).scrollTop() <=                    $('.bg10PH').position().top) && birdsFlag == 1 && isBottomPage ==1){
            loadIMG('.birdsPH','img/section-789/gifs/birds.gif','birds item');
            birdsFlag = 0;
        } 
    });
     
});

$(window).scroll(function(){

    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();

    
    if ( ($(window).scrollTop() <=$('.bg10PH').position().top) && birdsFlag == 1 && isBottomPage ==1){
        loadIMG('.birdsPH','img/section-789/gifs/birds.gif','birds item');
        birdsFlag = 0;
    }
    
     
    if (topPerc <= 1.42){
        $('.birds').show();
        $('.birds').animate({
            width: ($WidthPerc * birdsW)/100,
            height:($HeightPerc* birdsH)/100,

            left: ($winWidth  *(0) )/100,
            top:  ($winHeight *(0) )/100
        },0);            
    }else if (topPerc >1.42){
         $('.birds').hide();
    }
});
    
