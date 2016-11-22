
$( document ).ready(function() {

    var $win = $(window);
    
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    
 
    $('.birds').css({display: 'none' });
    
        /* -------  All turbines ------
    $('.birds').animate({
        width: ($WidthPerc * birdsW)/100,
        height:($HeightPerc* birdsH)/100,
        
        left: ($winWidth  *(0) )/100,
        top:  ($winHeight *(0) )/100
    },0);       
    */
    
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
    /* Get width and height of the 2 bg images */
    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();    
    
    $('.birds').css({display: 'none' });
    /* -------  All turbines ------
    $('.birds').animate({
        width: ($WidthPerc * birdsW)/100,
        height:($HeightPerc* birdsH)/100,
        
        left: ($winWidth  *(0) )/100,
        top:  ($winHeight *(0) )/100
    },0); */      

});



$(window).scroll(function(){

        // Responsive width and height of the bg images
        var $winWidth   = winWidth();
        var $winHeight  = winHeight();
        var $WidthPerc  = WidthPerc();
        var $HeightPerc = HeightPerc();
        var topPerc     = topPercfunc();

     
        if (topPerc <= 1.42){
            $('.birds').css({display: 'block' })
            $('.birds').animate({
                width: ($WidthPerc * birdsW)/100,
                height:($HeightPerc* birdsH)/100,

                left: ($winWidth  *(0) )/100,
                top:  ($winHeight *(0) )/100
            },0);            
        }else if (topPerc >1.42){
            $('.birds').css({display: 'none' });
              
        }
});
    
