$( document ).ready(function() {
        
    /* Scrolls to the bottom of the page */
 // $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
    
    /* Get width and height of the 2 bg images*/
    var $win = $(window);
    
    // Default width and height of the bg images
    var $bgWidth = 1920;
    var $bgHeight = 18326;    
    
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
    var floodSingW = 225;
    var floodSingH = 245;
    $('.floodSign').animate({
        width: ($WidthPerc * floodSingW)/100,
        height:($HeightPerc* floodSingH)/100,
        
        left: ($winWidth  * (43)    )/100,
        top:  ($winHeight * (27.75) )/100
    },0);

    /* Garbage Truck default css */
    var truckW = 260;
    var truckH = 135;
    
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
    
    //SECTION-3 CITY
    /* Tram */
    $('#tram').animate({
       width: ($WidthPerc * 206)/100,
       height:($HeightPerc* 170)/100,
       
<<<<<<< HEAD
        left: ($winWidth  *(48) )/100,
        top:  ($winHeight *(84.5) )/100
=======
        left: ($winWidth  *(46) )/100,
        top:  ($winHeight *(84.3) )/100,
>>>>>>> c354b474fbe28810b2832c3f9fbf915d49356a2a
    },0); 

    /* Whale */
    $('#whale').animate({
        width: ($WidthPerc * 317)/100,
        height:($HeightPerc* 131)/100,
        left: ($winWidth  *(80) )/100,
        top:  ($winHeight *(98.4) )/100
    },0); 

<<<<<<< HEAD
    /* Scuba-1 */
    $('#scuba-1').css({ 'width': '($WidthPerc * 221)/100', 
        'height':'($HeightPerc* 59)/100',
       
        'left': '($winWidth  *(80) )/100',
        'top':  '($winHeight *(96.5) )/100',
    },0); 

    /* Scuba-2 */
    $('#scuba-2').css({ 'width': '($WidthPerc * 291)/100', 
        'height':'($HeightPerc* 225)/100',
       
        'left': '($winWidth  *(10) )/100',
        'top':  '($winHeight *(96.5) )/100',
    },0); 
    
=======
>>>>>>> c354b474fbe28810b2832c3f9fbf915d49356a2a
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
    
    
    // Current width and height of the bg images
    var $winWidth  = $('.bg1').width();
    var $winHeight = $('.bg1').height() + $('.bg2').height()+ $('.bg3').height() + $('.bg4').height() + 5; // This 5 pixel is added because I don't know why the height of the bg images are 5 pixel less!!
    
    var $WidthPerc  = ($winWidth * 100) /$bgWidth ;
    var $HeightPerc = ($winHeight * 100)/$bgHeight; 
    
    /*  ---------------------------------- */
    /* Items dynamic settings */
    
    /* Flooding Sing */
    var floodSingW = 225;
    var floodSingH = 245;
    $('.floodSign').animate({
        width: ($WidthPerc * floodSingW)/100,
        height:($HeightPerc* floodSingH)/100,
        
        left: ($winWidth  * (43)    )/100,
        top:  ($winHeight * (27.75) )/100
    },0); 

    /* Garbage Truck */
    var truckW = 260;
    var truckH = 135;
    $('.garbageTruck').animate({
        width: ($WidthPerc * truckW)/100,
        height:($HeightPerc* truckH)/100,
        
        left: ($winWidth  *(1) )/100,
        top:  ($winHeight *(36.7) )/100
    },0); 
    
    /* Clouds */
    /* Tractor */
    /* Bulldozer */
    /* Bilbi */
    /* Fire */
    /* Birds */
    
    //SECTION-3 CITY
    /* Tram */
<<<<<<< HEAD
    $('#tram').animate({
       width: ($WidthPerc * 206)/100,
       height:($HeightPerc* 170)/100,
       
        left: ($winWidth  *(48) )/100,
        top:  ($winHeight *(84.5) )/100
=======
    $('#tram').css({
       'width': '($WidthPerc * 186)/100',
       'height': '($HeightPerc* 154)/100',
       
        'left': '($winWidth  *(46) )/100',
        'top':  '($winHeight *(84.3) )/100',
>>>>>>> c354b474fbe28810b2832c3f9fbf915d49356a2a
    },0); 

    //SECTION-2 FORESHORE
    /* Boat */
    $('#boat').animate({
       width: ($WidthPerc * 133)/100,
       height:($HeightPerc* 218)/100,
       
        left: ($winWidth  *(70) )/100,
        top:  ($winHeight *(90.6) )/100
    },0); 

    //SECTION-1 SEA-BAY
    /* Whale */
    $('#whale').animate({
        width: ($WidthPerc * 317)/100,
        height:($HeightPerc* 131)/100,
        left: ($winWidth  *(80) )/100,
        top:  ($winHeight *(98.4) )/100
    },0); 

    /* Scuba-1*/
    $('#scuba-1').css({ 'width': '($WidthPerc * 221)/100', 
        'height':'($HeightPerc* 59)/100',
       
        'left': '($winWidth  *(80) )/100',
<<<<<<< HEAD
        'top':  '($winHeight *(96.5) )/100',
    },0);  
    /* Scuba-2*/
    $('#scuba-2').css({ 'width': '($WidthPerc * 291)/100', 
        'height':'($HeightPerc* 225)/100',
       
        'left': '($winWidth  *(10) )/100',
        'top':  '($winHeight *(96.5) )/100',
    },0);  
=======
        'top':  '($winHeight *(95.7) )/100',
    },0); 
>>>>>>> c354b474fbe28810b2832c3f9fbf915d49356a2a
});








