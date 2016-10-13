$( document ).ready(function() {
    /* Scrolls to the bottom of the page */
   // $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
    
    /* Get width and height of the 2 bg images*/
    var $win = $(window);
    
    // Real width and height of the bg images
    var $bgWidth = 1920;
    var $bgHeight = 10582;
    
    
    // Responsive width and height of the bg images
    var $winWidth  = $('.bg1').width();
    var $winHeight = $('.bg1').height() + $('.bg2').height();
    
    var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
    var $HeightPerc = ($winHeight * 100)/$bgHeight; 
    
    /* Calculate the difference and scale the items based on that */
    
    
    //console.log($WidthPerc);
    //console.log($HeightPerc);
    
    /* Initial styles for items */

    $('.floodSign').animate({
        width: ($WidthPerc * 225)/100,
        height:($HeightPerc* 245)/100,
        left: ($winWidth  *(43) )/100,
        top:  ($winHeight *(27.75) )/100
    },0);

    $('.garbageTruck').animate({
        width: ($WidthPerc * 150)/100,
        height:($HeightPerc* 80)/100,
        left: ($winWidth  *(1) )/100,
        top:  ($winHeight *(35.57) )/100,
        opacity:0
    },0);   
    //$(window).scrollLeft($(document).innerWidth()*30/100); 
    /* Small devices*/
    if($win < 578){
        
    }
    

});

$(document).mousemove(function(event){
  // console.log(event.pageX + ", " + event.pageY);
})

$( window ).resize(function() {
     /* Get width and height of the 2 bg images*/
    var $win = $(window);
    
    // Real width and height of the bg images
    var $bgWidth = 1920;
    var $bgHeight = 10582;
    
    
    // Responsive width and height of the bg images
    var $winWidth  = $('.bg1').width();
    var $winHeight = $('.bg1').height() + $('.bg2').height();
    
    var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
    var $HeightPerc = ($winHeight * 100)/$bgHeight;
    
  $('.floodSign').animate({
        width: ($WidthPerc * 225)/100,
        height:($HeightPerc* 245)/100,
        left: ($winWidth  *(43) )/100,
        top:  ($winHeight *(27.75) )/100
    },0); 
    
   $('.garbageTruck').animate({
        width: ($WidthPerc * 150)/100,
        height:($HeightPerc* 80)/100,
        left: ($winWidth  *(1) )/100,
        top:  ($winHeight *(35.57) )/100
    },0); 
    
});








