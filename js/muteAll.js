$( document ).ready(function() {
    
    // Current width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();
    
    
    /* muteAll default settings  
    if (muteAll == 1){
        $('.muteAll').animate({
            width: ($WidthPerc * muteW)/100,
            height:($HeightPerc* muteH)/100,

            left: ($winWidth  * 80  /100),
            top:  ($winHeight * (1) )/100
        },0);        
    }
*/
    
    /* muteAll default settings  
    if (muteAll == 0){
        $('.speaker').animate({
            width: ($WidthPerc * speakerW)/100,
            height:($HeightPerc* speakerH)/100,   

            left: ($winWidth  * 80  /100),
            top:  ($winHeight * (1) )/100
        },0);        
    }
 

    $(".muteAll").click(function(){
        $(".speaker").css({ display: 'block' });
        $(".muteAll").css({ display: 'none' }); 
        muteAll = 0; 

    });

    $(".speaker").click(function(){
        $(".muteAll").css({ display: 'block' });
        $(".speaker").css({ display: 'none' });    
        muteAll = 1; 
    });
    */
    
    /* feedback Button default settings  */
    $('.feedbackBtn').animate({
        width: ($WidthPerc * feedbackW)/100,
        height:($HeightPerc* feedbackH)/100, 
        
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

    //var top = $win.scrollTop();
    
    /* feedback Button default settings  */
    $('.feedbackBtn').animate({
        width: ($WidthPerc * feedbackW)/100,
        height:($HeightPerc* feedbackH)/100, 
        
        left: ($winWidth  * 85  /100),
        top:  ($win.scrollTop() + ($win.height()*0.5/ 100) )
    },0); 
    
    /*    
    if(muteAll == 1){
        $(".speaker").css({ display: 'none' });
        
        $('.muteAll').animate({ 
            width: ($WidthPerc * muteW)/100,
            height:($HeightPerc* muteH)/100,

            left: ($winWidth  * 80  /100),
            top:  (top + ($win.height()*1/ 100) )
        },0);         
    }

    
    if(muteAll == 0){
        $(".muteAll").css({ display: 'none' }); 
        
        $('.speaker').animate({ 
            width: ($WidthPerc * speakerW)/100,
            height:($HeightPerc* speakerH)/100,

            left: ($winWidth  * 80  /100),
            top:  (top + ($win.height()*1/ 100) )
        },0);   

    }
     */   

     
    
});





















