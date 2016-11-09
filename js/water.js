$( document ).ready(function() {
    
    /* Detecting CSS animation support */
    var supportedFlag = $.keyframe.isSupported();
    /* Enable debugging to the console */  
    $.keyframe.debug = true;    

    
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
    //var top = $win.scrollTop();
    
   
$.keyframe.define([{
        name: 'waterColor',
        '0%':   {
            'top':  ($winHeight *(28) )/100 + "px",
            'left': ($winWidth  *(35) )/100+ "px",  
            'background-color': "#069dd8"
        },
        '100%': {
            'top':  ($winHeight *(28) )/100+ "px",
            'left': ($winWidth  *(35) )/100+ "px",  
            'background-color': "#91CEE7"
        }
    
    }]);
    
    $('.water').playKeyframe({
        name: 'waterColor',
        duration: '0.3s',
        iterationCount: 'infinite'
    });    
    
    
    
});


/*### Separatoring .ready and .resize funcs ###*/
/*##############-##-########-##-###############*/
/*#################---####---##################*/
/*####################----#####################*/
/*#####################--######################*/
/*#############################################*/


/* Dynamic css for all items after resizing */
$( window ).resize(function() {
    /* Detecting CSS animation support */
    var supportedFlag = $.keyframe.isSupported();
    /* Enable debugging to the console */  
    $.keyframe.debug = true;    

    
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


    
    
    
});    
    
    