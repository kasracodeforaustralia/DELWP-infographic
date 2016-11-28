$(document).ready(function() {

    
    var $win = $(window);
    
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    
    
    /* Welcome Div */
    $('#welcomeDiv').animate({
        backgroundColor: '#006666',
        width: $winWidth,
        height:($winHeight* 15)/100,
        marginTop: '-5px'
    },0); 
    
});




$(window).scroll(function(){
   
    
    console.log("PHs height: "+winHeight());
    //console.log("win height: " + $(window).height());
    //console.log("bg4Flag scroll: " + bg4Flag);
    //console.log("body height/2: " + $('body').height()/2);
    //console.log("All backgrounds: " + AllBgs);
    //console.log("scroll Top: " + $(window).scrollTop());
    //console.log("position: " + ($('.bg4PH').offset().top) );    
});