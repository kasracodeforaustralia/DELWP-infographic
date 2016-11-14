$( document ).ready(function() {
    
    /* Get width and height of the 2 bg images */
    //var $win = $(window);
      
    
    // Current width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();

    /* Clouds default settings  */
    $('.cloud').animate({
        width: ($WidthPerc * cloudW)/100,
        height:($HeightPerc* cloudH)/100,
        
        left: ($winWidth  * (10)    )/100,
        top:  ($winHeight * (5) )/100,
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
    
        var padTop = (0.45 * ($WidthPerc * cloudW)/100) ; // This calculation says, the big cloud should always have padding to top like 1.4 times of it's dynamic width value
        //console.log("padTop is: " +padTop);
        //console.log("padTop1 is: " +padTop1);


        /* cloud setting */    
        if (topPerc <= 0.5){
            $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($WidthPerc * cloudH)/100,
                
                left: ($winWidth  *(78) )/100,
                top:  (top + padTop),       
                opacity:1
            },0);
        }else if (topPerc > 0.5 && topPerc <= 1 ){
            $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($WidthPerc * cloudH)/100,
                
                left: ($winWidth  *(72) )/100,
                top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc >1 && topPerc <= 1.5 ){
            $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($WidthPerc * cloudH)/100,
                
                left: ($winWidth  *(65) )/100,
                top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc >1.5 && topPerc <= 2){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($WidthPerc * cloudH)/100,
                 
                left: ($winWidth  *(58) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc >2 && topPerc <= 2.5){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(50) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 2.5 && topPerc <=3 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(42) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc >3 && topPerc <= 3.5 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(36) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 3.5 && topPerc <= 4 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(28) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 4 && topPerc <= 4.5 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(20) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 4.5 && topPerc <= 5 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(12) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 5 && topPerc <= 5.5 ){
             $('.cloud').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(0.5) )/100,
                top:  (top + padTop),
                opacity:1
            },0); 
        }else {
                $('.cloud').animate({
                    width: ($WidthPerc * cloudW)/100,
                    height:($WidthPerc * cloudH)/100,
                 
                    left: ($winWidth  *(1) )/100,
                    top:  (top + padTop),
                    opacity:0
                },0);
        }

        
    });
