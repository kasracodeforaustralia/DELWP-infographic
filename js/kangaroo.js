$( document ).ready(function() {
    
    /* Scrolls to the bottom of the page */
 // $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
    
    /* Get width and height of the 2 bg images*/
    var $win = $(window);
    
    // Default width and height of the bg images
    var $bgWidth = 1920;
    var $bgHeight = 18326;    
    
    // Current width and height of the bg images
    var $winWidth  = $('.bg1').width();
    var $winHeight = $('.bg1').height() + $('.bg2').height()+ $('.bg3').height() + $('.bg4').height() + 5; // This 5 pixel is added because I don't know why the height of the bg images are 5 pixel less!!
    
    var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
    var $HeightPerc = ($winHeight * 100)/$bgHeight; 
    
    var kangarooW = 300;
    var kangarooH =270;
    
    $('.kangaroo').animate({
        width: ($WidthPerc * kangarooW)/100,
        height:($HeightPerc* kangarooH)/100,
        
        left: ($winWidth  * (20)    )/100,
        top:  ($winHeight * (21) )/100
    },0);       
    
});

/*### Separatoring .ready and .resize funcs ###*/
/*##############-##-########-##-###############*/
/*#################---####---##################*/
/*####################----#####################*/
/*#####################--######################*/
/*#############################################*/

/* Dynamic css for all items after resizing */
$( window ).resize(function() {
  
    /*  ---------------------------------- */
    
    /* Get width and height of the 2 bg images*/
    var $win = $(window);
    
    // Real width and height of the bg images
    var $bgWidth = 1920;
    var $bgHeight = 18326;
    
    
    // Current width and height of the bg images
    var $winWidth  = $('.bg1').width();
    var $winHeight = $('.bg1').height() + $('.bg2').height()+ $('.bg3').height() + $('.bg4').height() + 5; // This 5 pixel is added because I don't know why the height of the bg images are 5 pixel less!!
    
    var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
    var $HeightPerc = ($winHeight * 100)/$bgHeight;
    
    var kangarooW = 300;
    var kangarooH =270;
    
    $('.kangaroo').animate({
        width: ($WidthPerc * kangarooW)/100,
        height:($HeightPerc* kangarooH)/100,
        
        left: ($winWidth  * (20)    )/100,
        top:  ($winHeight * (21) )/100
    },0);  
    
    
});

$(window).scroll(function(){
//$(window).on('scroll', function){
//$win.on('scroll', function(){
        var $win = $(window);

        // Real width and height of the bg images
        var $bgWidth = 1920;
        var $bgHeight = 18326;
        var kangarooW = 300;
        var kangarooH = 270;

        // Responsive width and height of the bg images
        var $winWidth  = $('.bg1').width();
        var $winHeight = $('.bg1').height() + $('.bg2').height() + $('.bg3').height() + $('.bg4').height() + 5; // This 5 pixel is added because I don't know why the height of the bg images are 5 pixel less!!
        
        var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
        var $HeightPerc = ($winHeight * 100)/$bgHeight;    
        var top = $win.scrollTop();
    
        var topPerc = (top * 100)/$winHeight;

    
        //console.log(topPerc);
        //console.log("Win Width: " + $WidthPerc + " %");
        //console.log("Win Height: " + $HeightPerc + " %");
        //console.log("height: " + $winHeight);


        /* garbage truck */    
        if (topPerc <= 11){
            $('.kangaroo').css("opacity", 0);
        }else if (topPerc > 11 && topPerc <= 12 ){
            $('.kangaroo').animate({
                width: ($WidthPerc * kangarooW)/100,
                height:($WidthPerc * kangarooH)/100,
                
                left: ($winWidth  *(70) )/100,
                top:  ($winHeight *(20.5) )/100,
                opacity:1
            },0); 
        }else if (topPerc >12 && topPerc <= 13 ){
            $('.kangaroo').animate({
                width: ($WidthPerc * kangarooW)/100,
                height:($WidthPerc * kangarooH)/100,
                
                left: ($winWidth  *(65) )/100,
                top:  ($winHeight *(20.7) )/100,
                opacity:1
            },0); 
        }else if (topPerc >13 && topPerc <=14){
             $('.kangaroo').animate({
                width: ($WidthPerc * kangarooW)/100,
                height:($WidthPerc * kangarooH)/100,
                 
                left: ($winWidth  *(60) )/100,
                top:  ($winHeight *(20.9) )/100,
                opacity:1
            },0); 
        }else if (topPerc >14 && topPerc <=15){
             $('.kangaroo').animate({
                width: ($WidthPerc * kangarooW)/100,
                height:($HeightPerc* kangarooH)/100,
                 
                left: ($winWidth  *(55) )/100,
                top:  ($winHeight *(21.2) )/100,
                opacity:1
            },0); 
        }else if (topPerc >15 && topPerc <=16 ){
             $('.kangaroo').animate({
                width: ($WidthPerc * kangarooW)/100,
                height:($HeightPerc* kangarooH)/100,
                 
                left: ($winWidth  *(50) )/100,
                top:  ($winHeight *(21.3) )/100,
                opacity:1
            },0); 
        }else if (topPerc >16 && topPerc <=17 ){
             $('.kangaroo').animate({
                width: ($WidthPerc * kangarooW)/100,
                height:($HeightPerc* kangarooH)/100,
                 
                left: ($winWidth  *(45) )/100,
                top:  ($winHeight *(21.5) )/100,
                opacity:1
            },0); 
        }else if (topPerc >17 && topPerc <=18 ){
             $('.kangaroo').animate({
                width: ($WidthPerc * kangarooW)/100,
                height:($HeightPerc* kangarooH)/100,
                 
                left: ($winWidth  *(40) )/100,
                top:  ($winHeight *(21.4) )/100,
                opacity:1
            },0); 
        }else if (topPerc >18 && topPerc <=19 ){
             $('.kangaroo').animate({
                width: ($WidthPerc * kangarooW)/100,
                height:($HeightPerc* kangarooH)/100,
                 
                left: ($winWidth  *(35) )/100,
                top:  ($winHeight *(21.45) )/100,
                opacity:1
            },0); 
        }else if (topPerc >19 && topPerc <=20 ){
             $('.kangaroo').animate({
                width: ($WidthPerc * kangarooW)/100,
                height:($HeightPerc* kangarooH)/100,
                 
                left: ($winWidth  *(30) )/100,
                top:  ($winHeight *(21.4) )/100,
                opacity:1
            },0); 
        }else if (topPerc >20 && topPerc <= 21 ){
             $('.kangaroo').animate({
                width: ($WidthPerc * kangarooW)/100,
                height:($HeightPerc* kangarooH)/100,
                 
                left: ($winWidth  *(25) )/100,
                top:  ($winHeight *(21.3) )/100,
                opacity:1
            },0); 
        }else {
            $('.kangaroo').css("opacity", 0);
        }

        
    });