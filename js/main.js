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


/* Dynamic css for all items after resizing */
$( window ).resize(function() {
  
    var $win = $(window);
    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();

    /* Welcome Div */
    if($win.width()/$win.height() <= 0.8){
         $('#welcomeDiv').animate({
            backgroundColor: '#006666',
            width: $winWidth,
            height:($winHeight* 15)/100,
            marginTop: '-5px'
        },0);          
    }else if(0.8 < $win.width()/$win.height()  && $win.width()/$win.height() <= 1.1){
        $('#welcomeDiv').animate({
            backgroundColor: '#006666',
            width: $winWidth,
            height:($winHeight* 12)/100,
            marginTop: '-5px'
        },0);          
    }else if(1.1 < $win.width()/$win.height()){ 
        $('#welcomeDiv').animate({
            backgroundColor: '#006666',
            width: $winWidth,
            height:($winHeight* 8)/100,
            marginTop: '-5px'
        },0);              
    }
   

    
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
    
 
    if( welcomeFlag ==1){
        /* Welcome Div */
        if($win.width()/$win.height() <= 0.8){
             $('#welcomeDiv').animate({
                
                width: $winWidth,
                height:($winHeight* 15)/100,
               
            },0);          
        }else if(0.8 < $win.width()/$win.height()  && $win.width()/$win.height() <= 1.1){
              $('#welcomeDiv').animate({
                
                width: $winWidth,
                height:($winHeight* 12)/100
                
            },0);          
        }else if(1.1 < $win.width()/$win.height()){    
            $('#welcomeDiv').animate({
                
                width: $winWidth,
                height:($winHeight* 8)/100
                
            },0);              
        }
   
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


 
    /* This section sets the isBottomPage flag if 2 conditions are met - first: if we scrolled down 85 percent of the page- second: if we reach to welcomeDiv section */
    if ($(window).scrollTop()  >= 0.95 * winHeight() ){    
        if ( ($(window).scrollTop()+ $(window).height())>= $('#welcomeDiv').position().top){             
            isBottomPage = 1;
        }      
    } 


    //console.log("wel Pos: "+ $('#welcomeDiv').position().top);
    //console.log("scrollTop+win.height: "+ ($(window).scrollTop()+ $(window).height()));
    //console.log("bg2 top: "+ $('.bg2PH').position().top);
    console.log ("---top perc: "+ topPercfunc());
    console.log ("-----scroll top: "+ $(window).scrollTop());

    console.log("width/height: "+ $win.width()/$win.height());


    if(isBottomPage == 1 && aredotshidden == 0) {//$(window).scrollTop() == 13523) {
        $(".holder").hide();
        aredotshidden = 1;
        console.log ("isBottomPage = 1")
    }
 
});
