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
    

    //$(".churchPH").css({'left': '($winWidth  * churchLeft)/100', 'top':'($winHeight * churchTop)/100'});
    //$(".tramPH").css({'left': '($winWidth  * tramLeft)/100', 'top':'($winHeight * tramTop)/100'});
   

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

        left: ($winWidth  * whaleLeft )/100,
        top:  ($winHeight * whaleTop )/100
    },0); 


    /* whaleNet */
    $('#whaleNet').animate({ 
        width: ($WidthPerc * whaleNetW)/100, 
        height:($HeightPerc* whaleNetH)/100,
        left: ($winWidth  * whaleNetTop )/100,
        top:  ($winHeight * whaleNetLeft )/100
    },0); 

    
    /* Scuba-2 */
    $('#scuba-2').animate({ 
        width: ($WidthPerc * scuba2W)/100, 
        height: ($HeightPerc* scuba2H)/100,
        left: ($winWidth  * scuba2Left )/100,
        top:  ($winHeight * scuba2Top )/100
    },0); 

    /* Seal */
    $('#seal').animate({ 
        width: ($WidthPerc * sealW)/100, 
        height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * sealLeft )/100,
        top:  ($winHeight * sealTop )/100
    },0); 
    
});




$(window).scroll(function(){
   
    
    console.log("PHs height: "+ winHeight());
    console.log("topPerc: "+ topPercfunc());
    console.log("bg2 top: "+ $('.bg2PH').position().top);
    console.log ("scroll top: "+ $(window).scrollTop());
    //console.log("win height: " + $(window).height());
    //console.log("bg4Flag scroll: " + bg4Flag);
    //console.log("body height/2: " + $('body').height()/2);
    //console.log("All backgrounds: " + AllBgs);
    //console.log("scroll Top: " + $(window).scrollTop());
    //console.log("position: " + ($('.bg4PH').offset().top) );    
});