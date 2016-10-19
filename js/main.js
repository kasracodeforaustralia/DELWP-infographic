$( document ).ready(function() {
    
    
    /* Scrolls to the bottom of the page */
   // $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
    
    /* Get width and height of the 2 bg images*/
    var $win = $(window);
    
    // Default width and height of the bg images
    var $bgWidth = 1920;
    var $bgHeight = 18326;
    var truckW = 260;
    var truckH = 135;    
    
    // Current width and height of the bg images
    var $winWidth  = $('.bg1').width();
    var $winHeight = $('.bg1').height() + $('.bg2').height()+ $('.bg3').height() + $('.bg4').height() + 5; // This 5 pixel is added because I don't know why the height of the bg images are 5 pixel less!!
    
    var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
    var $HeightPerc = ($winHeight * 100)/$bgHeight; 
    
    /* Calculate the difference between the defualt size of the gb images and the current size of them. then, scale the items based on that */
    
    //console.log($WidthPerc);
    //console.log($HeightPerc);
    
    /* Initial styles for items */

    /* Flooding Sign default css */
    $('.floodSign').animate({
        width: ($WidthPerc * 225)/100,
        height:($HeightPerc* 245)/100,
        left: ($winWidth  *(43) )/100,
        top:  ($winHeight *(27.75) )/100
    },0);

    /* Garbage Truck default css */
    $('.garbageTruck').animate({
        width: ($WidthPerc * truckW)/100,
        height:($HeightPerc* truckH)/100,
        left: ($winWidth  *(1) )/100,
        top:  ($winHeight *(35) )/100,
        opacity:0
    },0);   
    
    
    /* Clouds default settings */
    /* Tractor default settings */
    /* Bulldozer default settings */
    /* Bilbi default settings */
    /* Fire default settings */
    /* Birds default settings */

    
    /* Default setting for Small devices */
    if($win < 578){
        
    }
    

});

/* Dynamic css for all items after resizing */
$( window ).resize(function() {
  
    /*  ---------------------------------- */
    
    /* Get width and height of the 2 bg images*/
    var $win = $(window);
    
    // Real width and height of the bg images
    var $bgWidth = 1920;
    var $bgHeight = 18326;
    
    
    // Responsive width and height of the bg images
    var $winWidth  = $('.bg1').width();
    var $winHeight = $('.bg1').height() + $('.bg2').height();
    
    var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
    var $HeightPerc = ($winHeight * 100)/$bgHeight;
    
    /*  ---------------------------------- */
    /* Items dynamic settings */
    
    /* Flooding Sing */
    $('.floodSign').animate({
        width: ($WidthPerc * 225)/100,
        height:($HeightPerc* 245)/100,
        left: ($winWidth  *(43) )/100,
        top:  ($winHeight *(27.75) )/100
    },0); 

    /* Garbage Truck */
    $('.garbageTruck').animate({
        width: ($WidthPerc * 150)/100,
        height:($HeightPerc* 80)/100,
        left: ($winWidth  *(1) )/100,
        //top:  ($winHeight *(35.57) )/100
        top:  ($winHeight *(36.7) )/100,
    },0); 
    
    /* Clouds */
    /* Tractor */
    /* Bulldozer */
    /* Bilbi */
    /* Fire */
    /* Birds */
    
});


/*
$(window).bind('orientationchange', function(event){
    console.log("Allah: " + event.orientation);
    if (event.orientation == 'landscape') {
     navigator.screenOrientation.set('landscape');
        console.log("Allah will help you")
    } 
    if (event.orientation == 'portrait') {
     navigator.screenOrientation.set('landscape');
    }

   });

$(window).on("orientationchange",function(){
  //alert("The orientation has changed!");


    //var orientation = window.orientation;    
    //var new_orientation = (orientation) ? 0 : 180 + orientation;
    //console.log(new_orientation);
        //$('body').css({
           // "-webkit-transform": "rotate(" + new_orientation + "deg)"
        //}); 
  /*  
  if(window.orientation == 0) // Portrait
  {
        alert("The orientation is Portrait!");
      //$("p").css({"background-color":"yellow","font-size":"300%"});
  }
  else // Landscape
  {
        alert("The orientation is Landscape!");
      //$("p").css({"background-color":"pink","font-size":"200%"});
  }
  
  
});
*/







