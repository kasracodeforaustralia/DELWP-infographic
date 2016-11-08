$( document ).ready(function() {
        
    /* Scrolls to the bottom of the page */
  /* $('html,body').animate({scrollTop: document.body.scrollHeight},"fast"); */
    
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
    
    /* Calculate the difference between the defualt size of the gb images and the current size of them. then, scale the items based on that */
    
    //console.log($WidthPerc);
    //console.log($HeightPerc);
    
    /* Initial styles for items */
    
    /* Clouds default settings */
    var cloudW = 400;
    var cloudH = 250;
    $('.cloud').animate({
        width: ($WidthPerc * cloudW)/100,
        height:($HeightPerc* cloudH)/100,
        
        left: ($winWidth  * (10)    )/100,
        top:  ($winHeight * (22) )/100,
        opacity: 1
    },0); 
    
    
    /* Flooding Sign default css */
    var floodSingW = 225;
    var floodSingH = 245;
    $('.floodSign').animate({
        width: ($WidthPerc * floodSingW)/100,
        height:($HeightPerc* floodSingH)/100,
        
        left: ($winWidth  * (43)    )/100,
        top:  ($winHeight * (27.75) )/100,
        opacity: 1
    },0);
    

    /* Garbage Truck default css */
    var truckW = 260;
    var truckH = 135;
    
    $('.garbageTruck').animate({
        width: ($WidthPerc * truckW)/100,
        height:($HeightPerc* truckH)/100,
        
        left: ($winWidth  *(1) )/100,
        top:  ($winHeight *(35) )/100,
        opacity: 0
    },0);   
    
    /* Wind Mill default css */
    var windMillW = 350;
    var windMillH = 600;
    
    $('.windMill').animate({
        width: ($WidthPerc * windMillW)/100,
        height:($HeightPerc* windMillH)/100,
        
        left: ($winWidth  *(60) )/100,
        top:  ($winHeight *(24.5) )/100,
        opacity: 1
    },0);  
    
    
    /* cow default settings */
    var cowW = 95;
    var cowH = 75;
    
    $('.cow').animate({
        width: ($WidthPerc * cowW)/100,
        height:($HeightPerc* cowH)/100,
        
        left: ($winWidth  *(60) )/100,
        top:  ($winHeight *(26.5) )/100,
        opacity: 1
    },0);    

    /* Tractor default settings */
    /* Bulldozer default settings */
    /* Bilbi default settings */
    /* Fire default settings */
    /* Birds default settings */
    
    /* Whale */
    var whaleW = 150;
    var whaleH = 80;
    
    $('.whale').animate({
        width: ($WidthPerc * whaleW)/100,
        height:($HeightPerc* whaleH)/100,
        
        left: ($winWidth  *(90) )/100,
        top:  ($winHeight *(99.4) )/100,
        opacity:1
    },0); 

    /* Default setting for Small devices */
    if($win < 578){
        
    }
    

});

/*###########################################*/
/*#############-##-########-##-##############*/
/*################---####---#################*/
/*###################----####################*/
/*####################--#####################*/
/*###########################################*/


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
    
    /*  ---------------------------------- */
    /* Items dynamic settings */

    /* Clouds default settings */
    /*
    var cloudW = 400;
    var cloudH = 250;
    $('.cloud').animate({
        width: ($WidthPerc * cloudW)/100,
        height:($HeightPerc* cloudH)/100,
        
        left: ($winWidth  * (-10)    )/100,
        top:  ($winHeight * (22) )/100,
        opacity: 1
    },0);
    */
    
    /* Flooding Sing */
    var floodSingW = 225;
    var floodSingH = 245;
    $('.floodSign').animate({
        width: ($WidthPerc * floodSingW)/100,
        height:($HeightPerc* floodSingH)/100,
        
        left: ($winWidth  * (43)    )/100,
        top:  ($winHeight * (27.75) )/100,
        opacity: 1
    },0); 
    
    /* Garbage Truck */
    var truckW = 260;
    var truckH = 135;
    $('.garbageTruck').animate({
        width: ($WidthPerc * truckW)/100,
        height:($HeightPerc* truckH)/100,
        
        left: ($winWidth  *(1) )/100,
        top:  ($winHeight *(36.7) )/100,
        opacity: 1
    },0); 
    
    /* Wind Mill resize window css */
    var windMillW = 350;
    var windMillH = 600;
    
    $('.windMill').animate({
        width: ($WidthPerc * windMillW)/100,
        height:($HeightPerc* windMillH)/100,
        
        left: ($winWidth  *(60) )/100,
        top:  ($winHeight *(24.5) )/100,
        opacity: 1
    },0);   
    
    /* cow default settings */
    var cowW = 95;
    var cowH = 75;
    
    $('.cow').animate({
        width: ($WidthPerc * cowW)/100,
        height:($HeightPerc* cowH)/100,
        
        left: ($winWidth  *(60) )/100,
        top:  ($winHeight *(26.5) )/100,
        opacity: 1
    },0);
    
    /* Clouds */
    /* Tractor */
    /* Bulldozer */
    /* Bilbi */
    /* Fire */
    /* Birds */
    
    /* Whale */
    var whaleW = 150;
    var whaleH = 80;
    
    $('.whale').animate({
        width: ($WidthPerc * whaleW)/100,
        height:($HeightPerc* whaleH)/100,
        
        left: ($winWidth  *(90) )/100,
        top:  ($winHeight *(99.4) )/100,
        opacity:1
    },0); 
    
    
});








