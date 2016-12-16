$(document).ready(function() {
var $win = $(window);

    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    
    if(navigator.userAgent.indexOf("Chrome") != -1 ){
        //alert('Chrome');
    }else if(navigator.userAgent.indexOf("Firefox") != -1 ){
         //alert('Firefox');
    }else {
      alert('Please use Chrome or Firefox browsers for better compatibility and support.'); 
    }
    
/* Background images - 14 backgrounds &&&&&&&&&&& */
    $('.allBgs').animate({ 
        width:  $winWidth, 
        height: $winHeight     
    });
    
    /* ُCreating Place Holders (PH) for background (bg) images*/
    
    $('.bg5PH').animate({ width: $winWidth, height: ($bg5Height * $WidthPerc)/100    });
    $('.bg6PH').animate({width: $winWidth,height: ($bg6Height * $WidthPerc)/100}); 
    $('.bg7PH').animate({width: $winWidth,height: ($bg7Height * $WidthPerc)/100}); 
    $('.bg8PH').animate({width: $winWidth,height: ($bg8Height * $WidthPerc)/100}); 
    $('.bg9PH').animate({width: $winWidth,height: ($bg9Height * $WidthPerc)/100}); 
    $('.bg10PH').animate({width: $winWidth,height: ($bg10Height * $WidthPerc)/100}); 
    $('.bg11PH').animate({ width: $winWidth,height: ($bg11Height * $WidthPerc)/100}); 
    $('.bg12PH').animate({width: $winWidth,height: ($bg12Height * $WidthPerc)/100}); 
    $('.bg13PH').animate({width: $winWidth, height: ($bg13Height * $WidthPerc)/100}); 
    $('.bg14PH').animate({width: $winWidth,height: ($bg14Height * $WidthPerc)/100}); 
    
    /* ُEnd of creating Place Holders (PH) */
    
    
    /* If user scrolls using keyboard, this event handler will fire up to load the bg images */
    $("body").keydown(function(){
        if(($(window).scrollTop() <=                    $('.bg3PH').position().top) && bg5Flag == 1 && isBottomPage ==1){
           loadIMG('.bg5PH','img/14bgs/bg5.png','bg5 bg');
           bg5Flag = 0; 
        } 
        if ( ($(window).scrollTop() <= $('.bg4PH').position().top) && bg6Flag == 1 && isBottomPage ==1){
           loadIMG('.bg6PH','img/14bgs/bg6.png','bg6 bg');
            bg6Flag = 0;
        }  

        if ( ($(window).scrollTop() <= $('.bg5PH').position().top) && bg7Flag == 1 && isBottomPage ==1){
           loadIMG('.bg7PH','img/14bgs/bg7.png','bg7 bg');
            bg7Flag = 0;
        }

        if ( ($(window).scrollTop() <= $('.bg6PH').position().top) && bg8Flag == 1 && isBottomPage ==1){
            loadIMG('.bg8PH','img/14bgs/bg8.png','bg8 bg');
            bg8Flag = 0;
        }

        if ( ($(window).scrollTop() <= $('.bg7PH').position().top) && bg9Flag == 1 && isBottomPage ==1){
            loadIMG('.bg9PH','img/14bgs/bg9.png','bg9 bg');
            bg9Flag = 0; 
        }


        if ( ($(window).scrollTop() <= $('.bg8PH').position().top) && bg10Flag == 1 && isBottomPage ==1){
            loadIMG('.bg10PH','img/14bgs/bg10.png','bg10 bg');
            bg10Flag = 0;
        }

        if ( ($(window).scrollTop() <= $('.bg9PH').position().top) && bg11Flag == 1 && isBottomPage ==1){
            loadIMG('.bg11PH','img/14bgs/bg11.png','bg11 bg');
            bg11Flag = 0;
        } 

        if ( ($(window).scrollTop() <= $('.bg10PH').position().top) && bg12Flag == 1 && isBottomPage ==1){
            loadIMG('.bg12PH','img/14bgs/bg12.png','bg12 bg');
            bg12Flag = 0;
        }

        if ( ($(window).scrollTop() <= $('.bg11PH').position().top) &&bg13Flag == 1 && isBottomPage ==1){
            loadIMG('.bg13PH','img/14bgs/bg13.png','bg13 bg');
            bg13Flag = 0;
        }

        if ( ($(window).scrollTop() <= $('.bg12PH').position().top) && bg14Flag == 1 && isBottomPage ==1){
            loadIMG('.bg14PH','img/14bgs/bg14.png','bg14 bg');
            bg14Flag = 0;
        }     
     
    }); // End of $("body").keydown
        //console.log("scroll top "+ $(window).scrollTop());

    if( welcomeFlag ==1){
        if($win.width()/$win.height() <= 0.8){
             $('#welcomeDiv').animate({
                width: $winWidth,
                height:($winHeight* 15)/100
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
    
    /* This takes user to the bottom of the page  */  
    $("body, html").animate({ scrollTop: 40000 }, 3000);         
/* End of Background images &&&&&&&&&&&&&&*/
    

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

    location.reload();
    
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
    
    /* Loading Backgrounds PlaceHolders */
    if( top <=  $('.bg3PH').position().top  && bg5Flag == 1 && isBottomPage ==1 ){
       loadIMG('.bg5PH','img/14bgs/bg5.png','bg5 bg4s7');
       bg5Flag = 0;        
    }
    
    if( top <=  $('.bg4PH').position().top  && bg6Flag == 1 && isBottomPage ==1 ){
       loadIMG('.bg6PH','img/14bgs/bg6.png','bg6 bg4s7');
       bg6Flag = 0;     
    }
     
    if( top <=  $('.bg5PH').position().top  && bg7Flag == 1 && isBottomPage ==1 ){
           loadIMG('.bg7PH','img/14bgs/bg7.png','bg7 bg4s7');
           bg7Flag = 0;    
    }    
 
    if( top <=  $('.bg6PH').position().top  && bg8Flag == 1 && isBottomPage ==1 ){
       loadIMG('.bg8PH','img/14bgs/bg8.png','bg8 bg');
       bg8Flag = 0;  
    }  

    if( top <=  $('.bg7PH').position().top  && bg9Flag == 1 && isBottomPage ==1 ){
       loadIMG('.bg9PH','img/14bgs/bg9.png','bg9 bg');
       bg9Flag = 0;
    }  
  
    if( top <=  $('.bg8PH').position().top  && bg10Flag == 1 && isBottomPage ==1 ){
       loadIMG('.bg10PH','img/14bgs/bg10.png','bg10 bg');
       bg10Flag = 0;
    }    
  
    if( top <=  $('.bg9PH').position().top  && bg11Flag == 1 && isBottomPage ==1 ){
       loadIMG('.bg11PH','img/14bgs/bg11.png','bg11 bg');
       bg11Flag = 0;
    }     
   
    if( top <=  $('.bg10PH').position().top  && bg12Flag == 1 && isBottomPage ==1 ){
       loadIMG('.bg12PH','img/14bgs/bg12.png','bg12 bg');
       bg12Flag = 0;
    }     
    if( top <=  $('.bg11PH').position().top  &&bg13Flag == 1 && isBottomPage ==1 ){
       loadIMG('.bg13PH','img/14bgs/bg13.png','bg13 bg');
       bg13Flag = 0;
    }
  
    if( top <=  $('.bg12PH').position().top  &&bg14Flag == 1 && isBottomPage ==1){
       loadIMG('.bg14PH','img/14bgs/bg14.png','bg14 bg');
       bg14Flag = 0;
    }
    /* End of Loading Backgrounds PlaceHolders */   
    
    
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


 
    /* This section sets the isBottomPage flag if 2 conditions are met - first: if we scrolled down 85 percent of the page- second: if we reach to welcomeDiv section */
    if ($(window).scrollTop()  >= 0.95 * winHeight() ){    
        if ( ($(window).scrollTop()+ $(window).height())>= $('#welcomeDiv').position().top){             
            isBottomPage = 1;
        }      
    } 


    //console.log("wel Pos: "+ $('#welcomeDiv').position().top);
    //console.log("scrollTop+win.height: "+ ($(window).scrollTop()+ $(window).height()));
    //console.log("bg2 top: "+ $('.bg2PH').position().top);
    //console.log("width/height: "+ $win.width()/$win.height());


    if(isBottomPage == 1 && aredotshidden == 0) {//$(window).scrollTop() == 13523) {
        $(".holder").hide();
        aredotshidden = 1;
        console.log ("isBottomPage = 1")
    }
 
});
