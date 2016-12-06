$(document).ready(function() {

    
    var $win = $(window);
    
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    
    
    
    
});



$(window).scroll(function(){
    var $win = $(window);
    
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    
 
    if( welcomeFlag ==1){
        /* Welcome Div */
        $('#welcomeDiv').animate({
            backgroundColor: '#006666',
            width: $winWidth,
            height:($winHeight* 10)/100,
            marginTop: '-5px'
        },0);         
       welcomeFlag = 0; 
    }
    
    
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


 
    if ( $(window).scrollTop()>= 0.85 * winHeight() ){             isBottomPage = 1;
        } 



    //console.log("Is bottom: "+ isBottomPage);
    //console.log("win hight: "+ winHeight());
    console.log("top Perc: "+ topPercfunc());
    //console.log("bg2 top: "+ $('.bg2PH').position().top);
    console.log ("-----scroll top: "+ $(window).scrollTop());

    if($(window).scrollTop() == 13523) {
        $(".holder").hide();
    }
             
             
        

    
});















