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
  

    
    //console.log("garbageTruckFlag: "+garbageTruckFlag);
    //console.log("win height: " + $(window).height());
    //console.log("bg4Flag scroll: " + bg4Flag);
    //console.log("body height/2: " + $('body').height()/2);
    //console.log("All backgrounds: " + AllBgs);
    //console.log("scroll Top: " + $(window).scrollTop());
    //console.log("position: " + ($('.bg4PH').offset().top) );    
});