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
    
    //SECTION-4 
    /* truck1 */
    $('#truck1').animate({
       width: ($WidthPerc * truck1W)/100,
       height:($HeightPerc* truck1H)/100,
       
        left: ($winWidth  * truck1Left)/100,
        top:  ($winHeight * truck1Top)/100
    },0);

    /* mcg */
    $('#mcg').animate({
       width: ($WidthPerc * mcgW)/100,
       height:($HeightPerc* mcgH)/100,
       
        left: ($winWidth  * mcgLeft)/100,
        top:  ($winHeight * mcgTop)/100
    },0);

    /* building */
    $('#building').animate({
       width: ($WidthPerc * buildingW)/100,
       height:($HeightPerc* buildingH)/100,
       
        left: ($winWidth  * buildingLeft)/100,
        top:  ($winHeight * buildingTop)/100
    },0);

    /* building-two */
    $('#building-two').animate({
       width: ($WidthPerc * building2W)/100,
       height:($HeightPerc* building2H)/100,
       
        left: ($winWidth  * building2Left)/100,
        top:  ($winHeight * building2Top)/100
    },0);

    /* building-three */
    $('#building-three').animate({
       width: ($WidthPerc * building3W)/100,
       height:($HeightPerc* building3H)/100,
       
        left: ($winWidth  * building3Left)/100,
        top:  ($winHeight * building3Top)/100
    },0);

    /* Car1 */
    $('#car1').animate({
       width: ($WidthPerc * car1W)/100,
       height:($HeightPerc* car1H)/100,
       
        left: ($winWidth  *(car1Left) )/100,
        top:  ($winHeight *(car1Top) )/100
    },0); 

    /* flags-building */
    $('#flags-building').animate({
       width: ($WidthPerc * flgbuildingW)/100,
       height:($HeightPerc* flgbuildingH)/100,
       
        left: ($winWidth  *(flgbuildingLeft) )/100,
        top:  ($winHeight *(flgbuildingTop) )/100        
            
        
    },0);
    $('#flags-building').css({'transform': 'rotate(-2deg)'});
   
    /* ab-flag */
    $('#ab-flag').animate({
       width: ($WidthPerc * abflagW)/100,
       height:($HeightPerc* abflagH)/100,
       
        left: ($winWidth  * abflagLeft )/100,
        top:  ($winHeight * abflagTop )/100        
    },0);

   /* au-flag */
    $('#au-flag').animate({
       width: ($WidthPerc * auflagW)/100,
       height:($HeightPerc* auflagH)/100,
       
        left: ($winWidth  * auflagLeft)/100,
        top:  ($winHeight * auflagTop )/100        
    },0);

   /* apartment-block */
    $('#apartment-block').animate({
       width: ($WidthPerc * apartblockW)/100,
       height:($HeightPerc* apartblockH)/100,
       
        left: ($winWidth  *(apartblockLeft) )/100,
        top:  ($winHeight *(apartblockTop) )/100
    },0);

    /* glass-building */
    $('#glass-building').animate({
       width: ($WidthPerc * glassbldngW)/100,
       height:($HeightPerc* glassbldngH)/100,
       
        left: ($winWidth  * glassbldngLeft )/100,
        top:  ($winHeight * glassbldngTop )/100
    },0);

    /* solar-building */
    $('#solar-building').animate({
       width: ($WidthPerc * solarbldngW)/100,
       height:($HeightPerc* solarbldngH)/100,
       
        left: ($winWidth  * solarbldngLeft )/100,
        top:  ($winHeight * solarbldngTop )/100
    },0);

    /* eureka-tower */
    $('#eureka-tower').animate({
       width: ($WidthPerc * eurekaW)/100,
       height:($HeightPerc* eurekaH)/100,
       
        left: ($winWidth  *(eurekaLeft) )/100,
        top:  ($winHeight *(eurekaTop) )/100
    },0);

   /* arts-centre */
    $('#arts-centre').animate({
       width: ($WidthPerc * artcW)/100,
       height:($HeightPerc* artcH)/100,
       
        left: ($winWidth  *(artcLeft) )/100,
        top:  ($winHeight *(artcTop) )/100
    },0);

    //SECTION-3 CITY
    /* Tram */
    $('#tram').animate({
       width: ($WidthPerc * tramW)/100,
       height:($HeightPerc* tramH)/100,
       

        left: ($winWidth  *(tramLeft) )/100,
        top:  ($winHeight *(tramTop) )/100,

    },0); 
    
    /* Car2 */
    $('#car2').animate({
       width: ($WidthPerc * car2W)/100,
       height:($HeightPerc* car2H)/100,
       
        left: ($winWidth  *(car2Left) )/100,
        top:  ($winHeight *(car2Top) )/100
    },0); 
    
     /* bus */
    $('#bus').animate({
       width: ($WidthPerc * busW)/100,
       height:($HeightPerc* busH)/100,
       
        left: ($winWidth  *(busLeft) )/100,
        top:  ($winHeight *(busTop) )/100
    },0); 

    /* Church */
    $('#church').animate({
       width: ($WidthPerc * churchW)/100,
       height:($HeightPerc* churchH)/100,
 
        left: ($winWidth  *(churchLeft) )/100,
        top:  ($winHeight *(churchTop) )/100
    },0);

    //SECTION-2 FORESHORE
    /* Boat */
    $('#boat').animate({
       width: ($WidthPerc * boatW )/100,
       height:($HeightPerc* boatH )/100,
       
        left: ($winWidth  * boatLeft )/100,
        top:  ($winHeight * boatTop )/100
    },0); 

    //SECTION-1 SEA/BAY
    /* Whale */
    $('#whale').animate({
        width: ($WidthPerc * whaleW)/100,
        height:($HeightPerc* whaleH)/100,

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
        width: ($WidthPerc * scuba2W)/100, 
        height: ($HeightPerc* scuba2H)/100,
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
    
    //SECTION-5
    /* truck1 */
    $('#truck1').animate({
       width: ($WidthPerc * truck1W)/100,
       height:($HeightPerc* truck1H)/100,
       
        left: ($winWidth  * truck1Left)/100,
        top:  ($winHeight * truck1Top)/100
    },0);

     /* mcg */
    $('#mcg').animate({
       width: ($WidthPerc * mcgW)/100,
       height:($HeightPerc* mcgH)/100,
       
        left: ($winWidth  * mcgLeft)/100,
        top:  ($winHeight * mcgTop)/100
    },0);

    /* building */
    $('#building').animate({
       width: ($WidthPerc * buildingW)/100,
       height:($HeightPerc* buildingH)/100,
       
        left: ($winWidth  * buildingLeft)/100,
        top:  ($winHeight * buildingTop)/100
    },0);

    /* building-two */
    $('#building-two').animate({
       width: ($WidthPerc * building2W)/100,
       height:($HeightPerc* building2H)/100,
       
        left: ($winWidth  * building2Left)/100,
        top:  ($winHeight * building2Top)/100
    },0);

    /* building-three */
    $('#building-three').animate({
       width: ($WidthPerc * building3W)/100,
       height:($HeightPerc* building3H)/100,
       
        left: ($winWidth  * building3Left)/100,
        top:  ($winHeight * building3Top)/100
    },0);

    //SECTION-4 
    /* Car1 */
    $('#car1').animate({
       width: ($WidthPerc * car1W)/100,
       height:($HeightPerc* car1H)/100,
       
        left: ($winWidth  *(car1Left) )/100,
        top:  ($winHeight *(car1Top) )/100
    },0); 

    /* flags-building */
    $('#flags-building').animate({
       width: ($WidthPerc * flgbuildingW)/100,
       height:($HeightPerc* flgbuildingH)/100,
       
        left: ($winWidth  *(flgbuildingLeft) )/100,
        top:  ($winHeight *(flgbuildingTop) )/100
    },0);
    $('#flags-building').css({'transform': 'rotate(-2deg)'});
       
    /* ab-flag */
    $('#ab-flag').animate({
       width: ($WidthPerc * abflagW)/100,
       height:($HeightPerc* abflagH)/100,
       
        left: ($winWidth  * abflagLeft )/100,
        top:  ($winHeight * abflagTop )/100        
    },0);

   /* au-flag */
    $('#au-flag').animate({
       width: ($WidthPerc * auflagW)/100,
       height:($HeightPerc* auflagH)/100,
       
        left: ($winWidth  * auflagLeft)/100,
        top:  ($winHeight * auflagTop )/100        
    },0);

    /* apartment-block */
    $('#apartment-block').animate({
       width: ($WidthPerc * apartblockW)/100,
       height:($HeightPerc* apartblockH)/100,
       
        left: ($winWidth  * apartblockLeft )/100,
        top:  ($winHeight * apartblockTop )/100
    },0);

    /* glass-building */
    $('#glass-building').animate({
       width: ($WidthPerc * glassbldngW)/100,
       height:($HeightPerc* glassbldngH)/100,
       
        left: ($winWidth  * glassbldngLeft )/100,
        top:  ($winHeight * glassbldngTop )/100
    },0);

    /* solar-building */
    $('#solar-building').animate({
       width: ($WidthPerc * solarbldngW)/100,
       height:($HeightPerc* solarbldngH)/100,
       
        left: ($winWidth  * solarbldngLeft )/100,
        top:  ($winHeight * solarbldngTop )/100
    },0);

    /* eureka-tower */
    $('#eureka-tower').animate({
       width: ($WidthPerc * eurekaW)/100,
       height:($HeightPerc* eurekaH)/100,
       
        left: ($winWidth  *(eurekaLeft) )/100,
        top:  ($winHeight *(eurekaTop) )/100
    },0);

   /* arts-centre */
    $('#arts-centre').animate({
       width: ($WidthPerc * artcW)/100,
       height:($HeightPerc* artcH)/100,
       
        left: ($winWidth  *(artcLeft) )/100,
        top:  ($winHeight *(artcTop) )/100
    },0);
   

    //SECTION-3 CITY
    /* Tram */
    $('#tram').animate({
       width: ($WidthPerc * tramW)/100,
       height:($HeightPerc* tramH)/100,
       
        left: ($winWidth  *(tramLeft) )/100,
        top:  ($winHeight *(tramTop) )/100
    },0); 

    /* Car2 */
    $('#car2').animate({
       width: ($WidthPerc * car2W)/100,
       height:($HeightPerc* car2H)/100,
       
        left: ($winWidth  *(car2Left) )/100,
        top:  ($winHeight *(car2Top) )/100
    },0); 

    /* bus */
    $('#bus').animate({
       width: ($WidthPerc * busW)/100,
       height:($HeightPerc* busH)/100,
       
        left: ($winWidth  *(busLeft) )/100,
        top:  ($winHeight *(busTop) )/100
    },0); 
    
    /* Church */
    $('#church').animate({
       width: ($WidthPerc * churchW)/100,
       height:($HeightPerc* churchH)/100,
       
        left: ($winWidth  *(churchLeft) )/100,
        top:  ($winHeight *(churchTop) )/100
    },0);

    //SECTION-2 FORESHORE
    /* Boat */
    $('#boat').animate({
       width: ($WidthPerc * boatW )/100,
       height:($HeightPerc* boatH )/100,
       
        left: ($winWidth  * boatLeft )/100,
        top:  ($winHeight * boatTop )/100
    },0); 

    //SECTION-1 SEA-BAY
    /* Whale */
    $('#whale').animate({
        width: ($WidthPerc * whaleW)/100,
        height:($HeightPerc* whaleH)/100,
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
        width: ($WidthPerc * scuba2W)/100, 
        height: ($HeightPerc* scuba2H)/100,
        left: ($winWidth  *(5) )/100,
        top:  ($winHeight *(98.5) )/100
    },0); 
    
});








