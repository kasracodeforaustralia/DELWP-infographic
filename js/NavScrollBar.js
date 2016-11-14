$( document ).ready(function() {
    
    /* Get width and height of the 2 bg images */
    //var $win = $(window);
      
    
    // Current width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();
    
    var $curWinHei = (window).height;
    
    // get the current map width and height
    var mapWidth  = $winWidth  *2 /100
    var mapheight = $winHeight *3 /100
    
    
    // The top position of the Scroll bar (which is 35% fixed from the top of the window) is calculated
    var TopOfTheScrollBar = (topPerc*winHeight() )/100;
    // This is where the BLACK BOX should be placed on top of the scroll bar
    
    var backBoxPos = TopOfTheScrollBar + mapheight;
    
    /* Scroll Bar Navigation default settings  */
    $('.NavScrollBar').animate({
        width: mapWidth,
        height:mapheight//,
        
       //left: '3%',
        //top:  '35%'
    },0); 
    
    /* Box on the scroll bar default settings  */
    $('.PosOnScrollBar').animate({
        width: ($winWidth  *4 /100),
        height:($winWidth  *4 /100),
        
        left: '1.27%',
        top:  backBoxPos
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


$( window ).resize(function() {
    
    /* Get width and height of the bg images */
    //var $win = $(window);
      
    
    // Current width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();

    var $curWinHei = (window).height;
    
    // get the current map width and height
    var mapWidth  = $winWidth  *2 /100
    var mapheight = $winHeight *3 /100
    
    // The top position of the Scroll bar (which is 35% fixed from the top of the window) is calculated
    
    var TopOfTheScrollBar = (topPerc*winHeight() )/100;
    // This is where the BLACK BOX should be placed on top of the scroll bar
    
    var backBoxPos = TopOfTheScrollBar + mapheight;
    
    /* Scroll Bar Navigation default settings  */
    $('.NavScrollBar').animate({
        width: mapWidth,
        height:mapheight//,
        
       //left: '3%',
        //top:  '35%'
    },0); 
    
    /* Box on the scroll bar default settings  */
    $('.PosOnScrollBar').animate({
        width: ($winWidth  *4 /100),
        height:($winWidth  *4 /100),
        
        left: '1.27%',
        top:  backBoxPos
    },0);
    
    //console.log("top: " + TopOfTheScrollBar);    
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
    
        var $curWinHei = (window).height;

        // get the current map width and height
        var mapWidth  = $winWidth  *2 /100
        var mapheight = $winHeight *3 /100

        // The top position of the Scroll bar (which is 35% fixed from the top of the window) is calculated

        var TopOfTheScrollBar = (topPerc*winHeight() )/100;
        // This is where the BLACK BOX should be placed on top of the scroll bar

        var backBoxPos = TopOfTheScrollBar + mapheight;

        /* Scroll Bar Navigation default settings  */
        $('.NavScrollBar').animate({
            width: mapWidth,
            height:mapheight//,

           //left: '3%',
            //top:  '35%'
        },0); 

        /* Box on the scroll bar default settings  */
        $('.PosOnScrollBar').animate({
            width: ($winWidth  *4 /100),
            height:($winWidth  *4 /100),

            left: '1.27%',
            top:  backBoxPos
        },0);   

        /*  setting */   

/*
        if (topPerc <= 0.5){
            $('.NavScrollBar').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($WidthPerc * cloudH)/100,
                
                left: ($winWidth  *(78) )/100,
                top:  (top + padTop),       
                opacity:1
            },0);
        }else if (topPerc > 0.5 && topPerc <= 1 ){
            $('.NavScrollBar').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($WidthPerc * cloudH)/100,
                
                left: ($winWidth  *(72) )/100,
                top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc >1 && topPerc <= 1.5 ){
            $('.NavScrollBar').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($WidthPerc * cloudH)/100,
                
                left: ($winWidth  *(65) )/100,
                top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc >1.5 && topPerc <= 2){
             $('.NavScrollBar').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($WidthPerc * cloudH)/100,
                 
                left: ($winWidth  *(58) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc >2 && topPerc <= 2.5){
             $('.NavScrollBar').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(50) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 2.5 && topPerc <=3 ){
             $('.NavScrollBar').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(42) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc >3 && topPerc <= 3.5 ){
             $('.NavScrollBar').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(36) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 3.5 && topPerc <= 4 ){
             $('.NavScrollBar').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(28) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 4 && topPerc <= 4.5 ){
             $('.NavScrollBar').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(20) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 4.5 && topPerc <= 5 ){
             $('.NavScrollBar').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(12) )/100,
                 top:  (top + padTop),
                opacity:1
            },0); 
        }else if (topPerc > 5 && topPerc <= 5.5 ){
             $('.NavScrollBar').animate({
                width: ($WidthPerc * cloudW)/100,
                height:($HeightPerc* cloudH)/100,
                 
                left: ($winWidth  *(0.5) )/100,
                top:  (top + padTop),
                opacity:1
            },0); 
        }else {
                $('.NavScrollBar').animate({
                    width: ($WidthPerc * cloudW)/100,
                    height:($WidthPerc * cloudH)/100,
                 
                    left: ($winWidth  *(1) )/100,
                    top:  (top + padTop),
                    opacity:0
                },0);
        }
*/
        
    });
