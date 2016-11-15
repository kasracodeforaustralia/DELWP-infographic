$( document ).ready(function() {
    

    // Current width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();
    
    
    if ($winWidth < 500){
        $('.NavScrollBar').css({display: 'none' });
        $('.PosOnScrollBar').css({display: 'none'});
         
    }else{
        // set the current map width and height
        var mapWidth  = $winWidth  *2 /100;
        var mapheight = $winHeight *3 /100;

        // Finds the offset of the scroll bar to move the black box based on that
        var NavScrollBarOffset=$('.NavScrollBar').position();
        var NavScrollBarOffsetTop = NavScrollBarOffset.top;
        var NavScrollBarOffsetLeft= NavScrollBarOffset.left;    

        $('.NavScrollBar').css({display: 'block' });
        $('.PosOnScrollBar').css({display: 'block'});
        
        /* Scroll Bar Navigation default settings  */
        $('.NavScrollBar').animate({
            opacity:0.7,
            width: mapWidth,
            height:mapheight,
        },0); 

        /* Box on the scroll bar default settings  */
        $('.PosOnScrollBar').animate({
            opacity:0.6,
            width: ($winWidth  *4 /100),
            height:($winWidth  *2.3 /100),

            left: NavScrollBarOffsetLeft - (1/3*mapWidth),
            top:  NavScrollBarOffsetTop + ( mapheight * topPerc/100)
        },0);
           
    }
    
 
    
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
    // Current width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();
    
    // set the current map width and height
    var mapWidth  = $winWidth  *2 /100;
    var mapheight = $winHeight *3 /100;
    
    // Finds the offset of the scroll bar to move the black box based on that
    var NavScrollBarOffset = $('.NavScrollBar').position();
    var NavScrollBarOffsetTop = NavScrollBarOffset.top;
    var NavScrollBarOffsetLeft= NavScrollBarOffset.left;    

    
    if ($winWidth < 500){
        $('.NavScrollBar').css({display: 'none' });
        $('.PosOnScrollBar').css({display: 'none'});
         
    }else{
    
        /* Scroll Bar Navigation default settings  */
        $('.NavScrollBar').css({display: 'block' });
        $('.PosOnScrollBar').css({display: 'block'});
        
        $('.NavScrollBar').animate({ 
            width: mapWidth,
            height:mapheight
        },0); 

        /* Box on the scroll bar default settings */

        $('.PosOnScrollBar').animate({
                opacity:0.6,
                width: ($winWidth  *4 /100),
                height:($winWidth  *2.3 /100),

                left: NavScrollBarOffsetLeft - (1/3*mapWidth),
                top:  NavScrollBarOffsetTop + ( mapheight * topPerc/100)
        },0);  
        
    }
    
    //alert("testing: " + mapheight)
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

    if ($winWidth < 500){
        $('.NavScrollBar').css({display: 'none'});
        $('.PosOnScrollBar').css({display: 'none'});
        
        
    }else{    
        var $WidthPerc  = WidthPerc();
        var $HeightPerc = HeightPerc();
        var topPerc     = topPercfunc();

        // set the current map width and height
        var mapWidth  = $winWidth  *2 /100;
        var mapheight = $winHeight *3 /100;

        // Finds the offset of the scroll bar to move the black box based on that
        var NavScrollBarOffset = $('.NavScrollBar').position();
        var NavScrollBarOffsetTop = NavScrollBarOffset.top;
        var NavScrollBarOffsetLeft= NavScrollBarOffset.left;    


        /* Scroll Bar Navigation default settings  */
        $('.NavScrollBar').css({display: 'block'});
        $('.PosOnScrollBar').css({display: 'block'});
        
        $('.NavScrollBar').animate({
            opacity:0.7,
            
            width: mapWidth,
            height:mapheight
        },0); 

        /* Box on the scroll bar dynamic changes  */
       // $('.PosOnScrollBar').css({ display: 'block'},0);
        $('.PosOnScrollBar').animate({
            opacity:0.6,
            //display: 'block',
            width: ($winWidth  *4 /100),
            height:($winWidth  *2.3 /100),

            left: NavScrollBarOffsetLeft - (1/3*mapWidth),
            top:  NavScrollBarOffsetTop + ( mapheight * topPerc/100)
        },0);   

        // console.log("map top position: " + NavScrollBarOffsetTop);
    }
        
    });
