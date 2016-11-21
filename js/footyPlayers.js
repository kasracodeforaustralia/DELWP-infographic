$( document ).ready(function() {
    
    var $win = $(window);
    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    
    /* fire default css */
    
    /* footyPlayers default css  */
    $('.footyPlayers').animate({
        width: (($WidthPerc * footyPlayersW)/100)*130/100 ,
        height:(($HeightPerc* footyPlayersH)/100)*130/100,
        
        left: ($winWidth  * (35) )/100,
        top:  ($winHeight * (34.2) )/100
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

    /* footyPlayers default css  */
    $('.footyPlayers').animate({
        width: (($WidthPerc * footyPlayersW)/100)*130/100 ,
        height:(($HeightPerc* footyPlayersH)/100)*130/100,
        
        left: ($winWidth  * (35) )/100,
        top:  ($winHeight * (34.2) )/100
    },0);
    
    
});