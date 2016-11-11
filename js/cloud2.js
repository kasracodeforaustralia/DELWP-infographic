$( document ).ready(function() {
    
    /* Get width and height of the 2 bg images */
    var $win = $(window);
      
    
    // Current width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc(); 
    //var topPerc     = topPercfunc();  

    /* Cloud 2 default settings  */
 
    $('.cloud2').animate({
        width: (($WidthPerc * cloudW)/100) *40/100,
        height:(($HeightPerc* cloudH)/100) *40/100,
        
        left: ($winWidth  * (10)    )/100,
        top:  ($winHeight * (22) )/100,
        opacity: 1
    },0); 
    
  });


/*### Separatoring .ready and .resize funcs ###*/
/*################## ##### ####################*/
/*###############  #### ####  #################*/
/*############## ## ######## ## ###############*/
/*#################   ####   ##################*/
/*####################    #####################*/
/*#####################  ######################*/
/*#############################################*/



$(window).scroll(function(){
    
    var $win = $(window);
    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc(); 
    var topPerc     = topPercfunc();
    
    var top = $win.scrollTop();

    var padTop = (1.4 * ($WidthPerc * cloud2W)/100) ; // This calculation says, the small cloud should always have padding to top like 1.4 times of it's dynamic width value




    /* cloud2 setting */    
    if (topPerc <= 0.5){
        $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(82) )/100,
            top:  (top + padTop),       
            opacity:1
        },0);
    }else if (topPerc >0.5 && topPerc <= 1){
         $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(72) )/100,
             top:  (top + padTop),
            opacity:1
        },0); 
    }else if (topPerc >1 && topPerc <= 1.5){
         $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(62) )/100,
             top:  (top + padTop),
            opacity:1
        },0); 
    }else if (topPerc >1.5 && topPerc <= 2){
         $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(52) )/100,
             top:  (top + padTop),
            opacity:1
        },0); 
    }else if (topPerc >2 && topPerc <= 2.5){
         $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(42) )/100,
             top:  (top + padTop),
            opacity:1
        },0); 
    }else if (topPerc > 2.5 && topPerc <=3 ){
         $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(32) )/100,
             top:  (top + padTop),
            opacity:1
        },0); 
    }else if (topPerc >3 && topPerc <= 3.5 ){
         $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(22) )/100,
             top:  (top + padTop),
            opacity:1
        },0); 
    }else if (topPerc > 3.5 && topPerc <= 4 ){
         $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(12) )/100,
             top:  (top + padTop),
            opacity:1
        },0); 
    }else if (topPerc > 4 && topPerc <= 4.5 ){
         $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(1) )/100,
             top:  (top + padTop),
            opacity:1
        },0); 
    }else {
        $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

                left: ($winWidth  *(1) )/100,
                top:  (top + padTop),
                opacity:0
        },0);
    }

        
    });