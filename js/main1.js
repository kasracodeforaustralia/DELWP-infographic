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
        height:($winHeight* 30)/100,
        marginTop: '-5px'
    },0); 
    
    //SECTION-2 FORESHORE
    /* Boat 
    $('#boat').animate({

       width: ($WidthPerc * boatW )/100,
       height:($HeightPerc* boatH )/100,

        left: ($winWidth  * boatLeft )/100,
        top:  ($winHeight * boatTop )/100
    },0); 

    //SECTION-1 SEA/BAY
    /* Whale 
    $('#whale').animate({
        width: ($WidthPerc * whaleW)/100,
        height:($HeightPerc* whaleH)/100,

        left: ($winWidth  * whaleLeft )/100,
        top:  ($winHeight * whaleTop )/100
    },0); 


    /* whaleNet 
    $('#whaleNet').animate({ 
        width: ($WidthPerc * whaleNetW)/100, 
        height:($HeightPerc* whaleNetH)/100,
        left: ($winWidth  * whaleNetTop )/100,
        top:  ($winHeight * whaleNetLeft )/100
    },0); 

    
    /* Scuba-2 
    $('#scuba-2').animate({ 
        width: ($WidthPerc * scuba2W)/100, 
        height: ($HeightPerc* scuba2H)/100,
        left: ($winWidth  * scuba2Left )/100,
        top:  ($winHeight * scuba2Top )/100
    },0); 

    /* Seal 
    $('#seal').animate({ 
        width: ($WidthPerc * sealW)/100, 
        height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * sealLeft )/100,
        top:  ($winHeight * sealTop )/100
    },0); */

    
});



$(window).scroll(function(){
    var $win = $(window);
    
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    
    
    /* Loads flood sing when reach bg 10*/ 
    if ( ($(window).scrollTop() <=$('.bg10PH').position().top) && floodSingFlag == 1 ){
            loadIMG('.floodSignPH','img/section-789/gifs/floodSign.gif','floodSign');
            floodSingFlag = 0;
        }    

    /* Flooding Sign default css  */
    $('.floodSign').animate({
        width: ($WidthPerc * floodSingW)/100,
        height:($HeightPerc* floodSingH)/100,
        
        left: ($winWidth  * (43)    )/100,
        top:  ($winHeight * (27.75) )/100
        
    },0);
   
    /* Loads wind mill when reach bg 10*/ 
    if ( ($(window).scrollTop() <=$('.bg10PH').position().top) && windMillFlag == 1 ){
            loadIMG('.windMillPH','img/section-789/gifs/windMill.gif','windMill');
            windMillFlag = 0;
        }    

    $('.windMill').animate({
        width: ($WidthPerc * windMillW)/100,
        height:($HeightPerc* windMillH)/100,
        
        left: ($winWidth  *(60) )/100,
        top:  ($winHeight *(24.5) )/100
    },0);     
    
  
    /* Loads fire when reach bg 9*/ 
    if ( ($(window).scrollTop() <=$('.bg9PH').position().top) && fireFlag == 1 ){
        loadIMG('.firePH','img/section-789/gifs/fire.gif','fire');
        fireFlag = 0;
        }    
    
    $('.fire').animate({
        width: ($WidthPerc * fireW)/100,
        height:($HeightPerc* fireH)/100,
        
        left: ($winWidth  * (18)    )/100,
        top:  ($winHeight * (17.45) )/100
    },0);
    
  
   /* Loads fireFighters when reach bg 9*/ 
    if ( ($(window).scrollTop() <=$('.bg9PH').position().top) && fireFightersFlag == 1 ){
        loadIMG('.firefightersPH','img/section-789/Firefighters.png','firefighters');
        fireFightersFlag = 0;
    }    
    
    $('.firefighters').animate({
        width: (($WidthPerc * firefightersW)/100)*130/100 ,
        height:(($HeightPerc* firefightersH)/100)*130/100,
        
        left: ($winWidth  * (9) )/100,
        top:  ($winHeight * (20.2) )/100
    },0);
    

    //console.log("PHs height: "+ winHeight());
    //console.log("topPerc: "+ topPercfunc());
    //console.log("bg2 top: "+ $('.bg2PH').position().top);
    //console.log ("scroll top: "+ $(window).scrollTop());
   
});