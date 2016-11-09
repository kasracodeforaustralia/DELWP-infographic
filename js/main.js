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

    /* Clouds default settings */
    var cloudW = 400;
    var cloudH = 250;
    $('.cloud').animate({
        width: ($WidthPerc * cloudW)/100,
        height:($HeightPerc* cloudH)/100,
        
        left: ($winWidth  * (10)    )/100,
        top:  ($winHeight * (22) )/100,
        opacity: 1
    },0);
 
    $('.cloud2').animate({
        width: (($WidthPerc * cloudW)/100) *40/100,
        height:(($HeightPerc* cloudH)/100) *40/100,
        
        left: ($winWidth  * (10)    )/100,
        top:  ($winHeight * (22) )/100,
        opacity: 1
    },0);    
    
    /* Kangaroo*/
    
    var kangarooW = 300;
    var kangarooH =270;
    
    $('.kangaroo').animate({
        width: ($WidthPerc * kangarooW)/100,
        height:($HeightPerc* kangarooH)/100,
        
        left: ($winWidth  * (20)    )/100,
        top:  ($winHeight * (21) )/100
    },0); 
    
     /* turbines default settings */

    var turbineW = 200;
    var turbineH = 400;
    

        /* -------  All turbines ------*/
    $('#turbine1').animate({
        width: ($WidthPerc * turbineW)/100,
        height:($HeightPerc* turbineH)/100,
        
        left: ($winWidth  *(10) )/100,
        top:  ($winHeight *(1.5) )/100
    },0);       
    $('#turbine2').animate({
        width: ( (($WidthPerc * turbineW)/100) ) *60 /100,
        height:( (($HeightPerc* turbineH)/100 ) * 60 /100),

        left: ($winWidth  *(24) )/100,
        top:  ($winHeight *(1.7) )/100
    },0);
    
    $('#turbine3').animate({
        width: ( (($WidthPerc * turbineW)/100) ) *190 /100,
        height:( (($HeightPerc* turbineH)/100 ) *190 /100),

        left: ($winWidth  *(30) )/100,
        top:  ($winHeight *(1.6) )/100
    },0);

    $('#turbine4').animate({
        width: ( (($WidthPerc * turbineW)/100) ) *140 /100,
        height:( (($HeightPerc* turbineH)/100 ) *140 /100),

        left: ($winWidth  *(50) )/100,
        top:  ($winHeight *(2) )/100
    },0);

    $('#turbine5').animate({
        width: ($WidthPerc * turbineW)/100,
        height:($HeightPerc* turbineH)/100,

        left: ($winWidth  *(60) )/100,
        top:  ($winHeight *(1.5) )/100
    },0);

    $('#turbine6').animate({
        width: ( (($WidthPerc * turbineW)/100) ) *120 /100,
        height:( (($HeightPerc* turbineH)/100 ) *120 /100),

        left: ($winWidth  *(70) )/100,
        top:  ($winHeight *(1.8) )/100
    },0);  
    
     /* turbines default settings end */   
    
    
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

    /* Windmill default settings */
    var windMillW = 350;
    var windMillH = 600;
    
    $('.windMill').animate({
        width: ($WidthPerc * windMillW)/100,
        height:($HeightPerc* windMillH)/100,
        
        left: ($winWidth  *(60) )/100,
        top:  ($winHeight *(24.5) )/100,
        opacity: 1
    },0); 

    

    
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
       

        left: ($winWidth  *(46) )/100,
        top:  ($winHeight *(84.3) )/100,

    },0); 
    
    /* Car2 */
    $('#car2').animate({
       width: ($WidthPerc * 149)/100,
       height:($HeightPerc* 86)/100,
       
        left: ($winWidth  *(8) )/100,
        top:  ($winHeight *(78.5) )/100
    },0); 
    
    /* Church */
    $('#church').animate({
       width: ($WidthPerc * 921)/100,
       height:($HeightPerc* 755)/100,
 
        left: ($winWidth  *(churchTop) )/100,
        top:  ($winHeight *(churchLeft) )/100
    },0);

    //SECTION-2 FORESHORE
    /* Boat */
    $('#boat').animate({
       width: ($WidthPerc * 133)/100,
       height:($HeightPerc* 218)/100,
       
        left: ($winWidth  *(70) )/100,
        top:  ($winHeight *(90.6) )/100
    },0); 

    //SECTION-1 SEA/BAY
    /* Whale */
    $('#whale').animate({
        width: ($WidthPerc * 832)/100,
        height:($HeightPerc* 425)/100,

        left: ($winWidth  *(75) )/100,
        top:  ($winHeight *(98.4) )/100
    },0); 


    /* whaleNet */
    $('#whaleNet').animate({ 
        width: ($WidthPerc * whaleNetW)/100, 
        height:($HeightPerc* whaleNetH)/100,
        left: ($winWidth  *(80) )/100,
        top:  ($winHeight *(95.7) )/100
    },0); 

    
    /* Scuba-2 */
    $('#scuba-2').animate({ 
      //  width: ($WidthPerc * 291)/100, 
     //   height: ($HeightPerc* 225)/100,
        width: ($WidthPerc * 221)/100, 
        height: ($HeightPerc* 170)/100,
        left: ($winWidth  *(5) )/100,
        top:  ($winHeight *(98.5) )/100
    },0); 
    

    /* Default setting for Small devices */
    if($win < 578){
        
    }
    

});


/*### Separatoring .ready and .resize funcs ###*/
/*##############-##-########-##-###############*/
/*#################---####---##################*/
/*####################----#####################*/
/*#####################--######################*/
/*#############################################*/


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
      
     /* turbines default settings */

    var turbineW = 200;
    var turbineH = 400;
    

        /* -------  All turbines ------*/
    $('#turbine1').animate({
        width: ($WidthPerc * turbineW)/100,
        height:($HeightPerc* turbineH)/100,
        
        left: ($winWidth  *(10) )/100,
        top:  ($winHeight *(1.5) )/100
    },0);       
    $('#turbine2').animate({
        width: ( (($WidthPerc * turbineW)/100) ) *60 /100,
        height:( (($HeightPerc* turbineH)/100 ) * 60 /100),

        left: ($winWidth  *(24) )/100,
        top:  ($winHeight *(1.7) )/100
    },0);
    
    $('#turbine3').animate({
        width: ( (($WidthPerc * turbineW)/100) ) *190 /100,
        height:( (($HeightPerc* turbineH)/100 ) *190 /100),

        left: ($winWidth  *(30) )/100,
        top:  ($winHeight *(1.6) )/100
    },0);

    $('#turbine4').animate({
        width: ( (($WidthPerc * turbineW)/100) ) *140 /100,
        height:( (($HeightPerc* turbineH)/100 ) *140 /100),

        left: ($winWidth  *(50) )/100,
        top:  ($winHeight *(2) )/100
    },0);

    $('#turbine5').animate({
        width: ($WidthPerc * turbineW)/100,
        height:($HeightPerc* turbineH)/100,

        left: ($winWidth  *(60) )/100,
        top:  ($winHeight *(1.5) )/100
    },0);

    $('#turbine6').animate({
        width: ( (($WidthPerc * turbineW)/100) ) *120 /100,
        height:( (($HeightPerc* turbineH)/100 ) *120 /100),

        left: ($winWidth  *(70) )/100,
        top:  ($winHeight *(1.8) )/100
    },0);  
    
     /* turbines default settings end */   
    
    /* Kangaroo*/
    
    var kangarooW = 300;
    var kangarooH =270;
    
    $('.kangaroo').animate({
        width: ($WidthPerc * kangarooW)/100,
        height:($HeightPerc* kangarooH)/100,
        
        left: ($winWidth  * (20)    )/100,
        top:  ($winHeight * (21) )/100
    },0);
    
    
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

    /* Wind Mill default css */
    var windMillW = 350;
    var windMillH = 600;
    
    $('.windMill').animate({
        width: ($WidthPerc * windMillW)/100,
        height:($HeightPerc* windMillH)/100,
        
        left: ($winWidth  *(60) )/100,
        top:  ($winHeight *(24.5) )/100,
        opacity: 1
    },0);   
    

    /* Tractor */
    /* Bulldozer */
    /* Bilbi */
    /* Fire */
    /* Birds */
    
    //SECTION-3 CITY
    /* Tram */
    $('#tram').animate({
       width: ($WidthPerc * 206)/100,
       height:($HeightPerc* 170)/100,
       
        left: ($winWidth  *(48) )/100,
        top:  ($winHeight *(84.5) )/100
    },0); 

    /* Car2 */
    $('#car2').animate({
       width: ($WidthPerc * 149)/100,
       height:($HeightPerc* 86)/100,
       
        left: ($winWidth  *(8) )/100,
        top:  ($winHeight *(78.5) )/100
    },0); 
    
    /* Church */
    $('#church').animate({
       width: ($WidthPerc * 921)/100,
       height:($HeightPerc* 755)/100,
       
        left: ($winWidth  *(churchTop) )/100,
        top:  ($winHeight *(churchLeft) )/100
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
        width: ($WidthPerc * 832)/100,
        height:($HeightPerc* 425)/100,
        left: ($winWidth  *(75) )/100,
        top:  ($winHeight *(98.4) )/100
    },0); 

    /* whaleNet */
    $('#whaleNet').animate({ 
        width: ($WidthPerc * whaleNetW)/100, 
        height:($HeightPerc* whaleNetH)/100,
        left: ($winWidth  *(80) )/100,
        top:  ($winHeight *(95.7) )/100
    },0); 

    
    /* Scuba-2 */
    $('#scuba-2').animate({ 
       //  width: ($WidthPerc * 291)/100, 
     //   height: ($HeightPerc* 225)/100,
        width: ($WidthPerc * 221)/100, 
        height: ($HeightPerc* 170)/100,
        left: ($winWidth  *(5) )/100,
        top:  ($winHeight *(98.5) )/100
    },0); 
    
});








