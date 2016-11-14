$( document ).ready(function() {
    
    var $win = $(window);
    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    
    /* fire default css */
    
    /* Firefighters default css  */
    $('.firefighters').animate({
        width: (($WidthPerc * firefightersW)/100)*130/100 ,
        height:(($HeightPerc* firefightersH)/100)*130/100,
        
        left: ($winWidth  * (9) )/100,
        top:  ($winHeight * (20.2) )/100
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
    
    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc(); 

    /* Firefighters default css  */
    $('.firefighters').animate({
        width: (($WidthPerc * firefightersW)/100)*130/100 ,
        height:(($HeightPerc* firefightersH)/100)*130/100,
        
        left: ($winWidth  * (9) )/100,
        top:  ($winHeight * (20.2) )/100
    },0);
    
    
});