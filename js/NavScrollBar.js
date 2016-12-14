$( document ).ready(function() {
    

    // Current width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();
    
    
    if ($winWidth < 500){
        $('.NavScrollBar').hide();
        $('.slider').hide();
         
    }else{
        // set the current map width and height
        var mapWidth  = $winWidth  *2 /100;
        var mapheight = $winHeight *3 /100;

        // Finds the offset of the scroll bar to move the black box based on that
        var NavScrollBarOffset=$('.NavScrollBar').position();
        var NavScrollBarOffsetTop = NavScrollBarOffset.top;
        var NavScrollBarOffsetLeft= NavScrollBarOffset.left;    

        $('.NavScrollBar').show();
        $('.slider').show();
        
        /* Scroll Bar Navigation default settings  */
        $('.NavScrollBar').animate({
            opacity:0.7,
            width: mapWidth,
            height:mapheight,
        },0); 

        /* Box on the scroll bar default settings  */
        $('.slider').animate({
            opacity:0.6,
            width: ($winWidth  *4 /100),
            height:($winWidth  *2.3 /100),

            left: NavScrollBarOffsetLeft - (1/3*mapWidth),
            top:  NavScrollBarOffsetTop + ( mapheight * topPerc/100)
        },0);
           
    }
    
    $('.slider').draggable({ 
       containment: ".NavScrollBar",
       axis: "y"
    });
    
    
   /*
    $('.slider').mousedown(function() {
        isDragging = true;

     })
    .mousemove(function() {
        if (isDragging == true){
        }
    }) */
    
    $('.slider').mouseup(function() {
        /* This calclate the position of the 
        slider on scroll bar in terms of percentage */
        SliderPosPrec = ( ( $('.slider').position().top -NavScrollBarOffsetTop) * 100/ mapheight ) ;

        $(window).scrollTop(SliderPosPrec * $winHeight/100);
        //isDragging = false;
    });  

    
});


/*### Separatoring .ready and .resize funcs ###*/
/*################## ##### ####################*/
/*###############  #### ####  #################*/
/*############## ## ######## ## ###############*/
/*#################   ####   ##################*/
/*####################    #####################*/
/*#####################  ######################*/
/*#############################################*/

/*
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
        $('.NavScrollBar').hide();
        $('.slider').hide();
         
    }else{
    
        /* Scroll Bar Navigation default settings  
        $('.NavScrollBar').show();
        $('.slider').show();
        
        $('.NavScrollBar').animate({ 
            width: mapWidth,
            height:mapheight
        },0); 

        /* Box on the scroll bar default settings 
        

        $('.slider').animate({
            opacity:0.6,
            width: ($winWidth  *4 /100),
            height:($winWidth  *2.3 /100),

            left: NavScrollBarOffsetLeft - (1/3*mapWidth),
            top:  NavScrollBarOffsetTop + ( mapheight * topPerc/100)
        },0); 
    }
    
    //alert("testing: " + mapheight)
  });
*/

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
    var top = $win.scrollTop();
    var topPerc     = topPercfunc();

    var welcomeDivHeight = $('#welcomeDiv').height();
    var wholePgHeightPerc = (top * 100)/($winHeight + welcomeDivHeight);
    
    // set the current map width and height
    var mapWidth  = $winWidth  *2 /100;
    //var mapheight = $winHeight *3 /100;
    var mapheight = ($winHeight + welcomeDivHeight)*3 /100;

    // Finds the offset of the scroll bar to move the black box based on that
    var NavScrollBarOffset = $('.NavScrollBar').position();
    var NavScrollBarOffsetTop = NavScrollBarOffset.top;
    var NavScrollBarOffsetLeft= NavScrollBarOffset.left;    


    /* Scroll Bar Navigation default settings  */
    //$('.NavScrollBar').show();
    //$('.slider').show();

    $('.NavScrollBar').animate({
        opacity:0.7,

        width: mapWidth,
        height:mapheight
    },0); 


    /* slider dynamic changes  */
    $('.slider').animate({
        opacity:0.6,
        width: ($winWidth  *4 /100),
        height:($winWidth  *2.3 /100),

        left: NavScrollBarOffsetLeft - (1/3*mapWidth),
        top:  NavScrollBarOffsetTop + ( mapheight * wholePgHeightPerc/100)
    },0);   


        
 });
