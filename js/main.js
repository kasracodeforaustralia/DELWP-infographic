$(document).ready(function() {
    var $win = $(window);

    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
 
});

/*### Separatoring .ready and .resize funcs ###*/
/*##############-##-########-##-###############*/
/*#################---####---##################*/
/*####################----#####################*/
/*#####################--######################*/
/*#############################################*/


$( window ).resize(function() {
  
    var $win = $(window);
    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();

    alert("page resized!");
    
});

    
/*## Separatoring .resize and onscroll funcs ##*/
/*##############-##-########-##-###############*/
/*#################---####---##################*/
/*####################----#####################*/
/*#####################--######################*/
/*#############################################*/ 


$(window).scroll(function(){
    var $win = $(window);
    
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
 
 
    /* Loads flood sing when reach bg 10*/ 
    if ( ($(window).scrollTop() <=$('.bg10PH').position().top) && floodSingFlag == 1 && isBottomPage ==1 ){
        loadIMG('.floodSignPH','img/section-789/gifs/floodSign.gif','floodSign item');
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
    if ( ($(window).scrollTop() <=$('.bg10PH').position().top) && windMillFlag == 1 && isBottomPage ==1){
        loadIMG('.windMillPH','img/section-789/gifs/windMill.gif','windMill item');
        windMillFlag = 0;
    }    

    $('.windMill').animate({
        width: ($WidthPerc * windMillW)/100,
        height:($HeightPerc* windMillH)/100,
        
        left: ($winWidth  *(60) )/100,
        top:  ($winHeight *(24.5) )/100
    },0); 
 
    /* Loads fire when reach bg 9*/ 
    if ( ($(window).scrollTop() <=$('.bg9PH').position().top) && fireFlag == 1 && isBottomPage ==1){
        loadIMG('.firePH','img/section-789/gifs/fire.gif','fire item');
        fireFlag = 0;
        }    
    
    $('.fire').animate({
        width: ($WidthPerc * fireW)/100,
        height:($HeightPerc* fireH)/100,
        
        left: ($winWidth  * (18)    )/100,
        top:  ($winHeight * (17.45) )/100
    },0);
    
  
   /* Loads fireFighters when reach bg 9*/ 
    if ( ($(window).scrollTop() <=$('.bg9PH').position().top) && fireFightersFlag == 1 && isBottomPage ==1){
        loadIMG('.firefightersPH','img/section-789/Firefighters.png','firefighters item');
        fireFightersFlag = 0;
    }    
    
    $('.firefighters').animate({
        width: (($WidthPerc * firefightersW)/100)*130/100 ,
        height:(($HeightPerc* firefightersH)/100)*130/100,
        
        left: ($winWidth  * (9) )/100,
        top:  ($winHeight * (20.2) )/100
    },0);
    
 
    
    /* Loads footy Players when reach bg 8*/ 
    if ( ($(window).scrollTop() <=$('.bg8PH').position().top) && footyPlayersFlag == 1 && isBottomPage ==1){
        loadIMG('.footyPlayersPH','img/section-789/footyPlayers.png','footyPlayers item');
        footyPlayersFlag = 0;
        }      
    
    $('.footyPlayers').animate({
        width: (($WidthPerc * footyPlayersW)/100)*130/100 ,
        height:(($HeightPerc* footyPlayersH)/100)*130/100,
        
        left: ($winWidth  * (35) )/100,
        top:  ($winHeight * (34.2) )/100
    },0);      
 
    /* Loads cow when reach bg 8*/ 
    if ( ($(window).scrollTop() <=$('.bg8PH').position().top) && cowFlag == 1 && isBottomPage ==1){
        loadIMG('.cowPH','img/section-789/cow.png','cow item');
        cowFlag = 0;
    }    
    
    $('.cow').animate({
       width: ( ($WidthPerc * cowW)/100)*110/100,
       height:( ($HeightPerc* cowH)/100)*110/100,
       
       left: ($winWidth  *(64) )/100,
       top:  ($winHeight *(28.5) )/100
    },0);      
    
    /* Loads tractor when reach bg 8*/ 
    if ( ($(window).scrollTop() <=$('.bg8PH').position().top) && tractorFlag == 1 && isBottomPage ==1){
        loadIMG('.tractorPH','img/section-789/tractor.png','tractor item');
        tractorFlag = 0;
    }    
    
    $('.tractor').animate({
       width: ( ($WidthPerc * tractorW)/100)*110/100,
       height:( ($HeightPerc* tractorH)/100)*110/100,
       
       /*left: ($winWidth  *(18) )/100,
       top:  ($winHeight *(25) )/100 */
       left: ($winWidth  *(59) )/100,
       top:  ($winHeight *(31.3) )/100
    },0);  
    
   /* Loads buldozer when reach bg 7*/ 
    if ( ($(window).scrollTop() <=$('.bg7PH').position().top) && bulldozerFlag == 1 && isBottomPage ==1){
        loadIMG('.bulldozerPH','img/section-789/bulldozer.png','bulldozer item');
        bulldozerFlag = 0;
    }    
    
    $('.bulldozer').animate({
       width: ( ($WidthPerc * bulldozerW)/100)*150/100,
       height:( ($HeightPerc* bulldozerH)/100)*150/100,
       
       left: ($winWidth  *(75) )/100,
       top:  ($winHeight *(41.3) )/100
    },0);  
    

    /* tent */
    if ( ($(window).scrollTop() <=$('.bg10PH').position().top) && tentFlag == 1 && isBottomPage ==1){
        loadIMG('.tentPH','img/section-789/tent.png','tent item');
        tentFlag = 0;
    }   
   $('.tent').animate({
       width: ($WidthPerc * tentW)/100,
       height:($HeightPerc* tentH)/100,
       
        left: ($winWidth  * tentLeft)/100,
        top:  ($winHeight * tentTop)/100
    },0);

    /* firecamp */
    if ( ($(window).scrollTop() <=$('.bg10PH').position().top) && campfireFlag == 1 && isBottomPage ==1){
        loadIMG('.campfirePH','img/section-789/campfire.png','campfire item');
        firecampFlag = 0;
    }   
    $('.campfire').animate({
       width: ($WidthPerc * firecampW)/100,
       height:($HeightPerc* firecampH)/100,
       
        left: ($winWidth  * firecampLeft)/100,
        top:  ($winHeight * firecampTop)/100
    },0);
    
    // This if else statement makes usre the user is at the bottom of the pages and then starts loading images based on the user scrol (by setting isBottomFlag to 1)
    if(topPercfunc()>=94 && screenSize == "s"){
        counter++;
        if(counter >= 2){
            isBottomPage = 1;
        }
     }else if(topPercfunc()>=100 && (screenSize == "m" || screenSize == "l" ) ){
        counter++;
        if(counter >= 10){
            isBottomPage = 1;
        }
     }
    

    console.log("counter: "+ counter);
    console.log("++isBottomPage: "+ isBottomPage);
    console.log ("@@@@ screen size: " + screenSize );
    //console.log ("kkkk: "+ (0.0095 * ( WidthPerc() * ($bg1Height+$bg2Height +$bg3Height +$bg4Height ) ) ) );
    console.log ("-----TopPrec: "+ topPercfunc());


});
