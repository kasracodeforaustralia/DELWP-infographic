$( document ).ready(function() {
    
    // Current width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();

    /* muteAll default settings  */
    $('.muteAll').animate({
        
        left: ($winWidth  * 93  /100),
        top:  ($winHeight * (90) )/100
    },0);
    
    /* muteAll default settings  */
    $('.speaker').animate({
        
        left: ($winWidth  * 93  /100),
        top:  ($winHeight * (90) )/100
    },0); 

    $(".muteAll").click(function(){
        $(".muteAll").css({ display: 'none' }); 
        $(".speaker").css({ display: 'block' });
        muteAll = 0; 
    });

    $(".speaker").click(function(){
        $(".speaker").css({ display: 'none' });
        $(".muteAll").css({ display: 'block' });
        muteAll = 1; 
    });
    
    /* feedback Button default settings  */
    $('.feedbackBtn').animate({
        
        left: ($winWidth  * 85  /100),
        top:  ($winHeight * (0.5) )/100
    },0);     
    
  });

$(window).scroll(function(){
        
    var $win = $(window);

    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();

    var top = $win.scrollTop();
        

    $('.muteAll').animate({ 
        left: ($winWidth  * 93  /100),
        top:  (top + ($win.height()*90/ 100) )
    },0); 
    
    $('.speaker').animate({ 
        left: ($winWidth  * 93  /100),
        top:  (top + ($win.height()*90/ 100) )
    },0);    

    /* feedback Button default settings  */
    $('.feedbackBtn').animate({
        
        left: ($winWidth  * 85  /100),
        top:  (top + ($win.height()*0.5/ 100) )
    },0);      
    
});





















