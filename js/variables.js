
//defaul width of the bg    
var $bgWidth = 1920; var $bgHeight = 18326;

//defaul heights for the 14 backgrounds/their placeholders
var $bg1Height = 426;
var $bg2Height = 1342;
var $bg3Height = 1342;
var $bg4Height = 1342;
var $bg5Height = 1342;
var $bg6Height = 1342;
var $bg7Height = 1342;
var $bg8Height = 1342;
var $bg9Height = 1342;
var $bg10Height = 1342;
var $bg11Height = 1342;
var $bg12Height = 1496;
var $bg13Height = 1496;
var $bg14Height = 1491;

// load flags for adding BGs to their placeholders

var allBgsFlag = 0;
var bg5Flag, bg6Flag, bg7Flag, bg8Flag, bg9Flag, bg10Flag, bg11Flag, bg12Flag, bg13Flag, bg14Flag; 
bg5Flag= bg6Flag= bg7Flag= bg8Flag= bg9Flag= bg10Flag= bg11Flag= bg12Flag= bg13Flag= bg14Flag =1;

/* ---------- Loading flags for items ------These flags are to prevent loading images for more that one time -----------------*/
var welcomeFlag, footyPlayersFlag, footyFlag, bulldozerFlag, tractorFlag, garbageTruckFlag, birdsFlag, turbineFlag, cloudFlag, cloud2Flag, floodSingFlag, windMillFlag, kangarooFlag, kangarookid1Flag, kangarookid2Flag, bikeFlag, whiteCarFlag, fireFlag, fireFightersFlag, car1Flag, tramFlag, buildingsFlag, buildings2Flag, busFlag, car2Flag, trainFlag, truck1Flag, tentFlag, campfireFlag, buildings3Flag;
welcomeFlag= footyPlayersFlag= footyFlag= bulldozerFlag= tractorFlag= garbageTruckFlag= birdsFlag= turbineFlag= cloudFlag= cloud2Flag= floodSingFlag= windMillFlag= kangarooFlag= kangarookid1Flag= kangarookid2Flag= bikeFlag= whiteCarFlag= fireFlag= fireFightersFlag= car1Flag= tramFlag= buildingsFlag= buildings2Flag= busFlag= car2Flag= trainFlag= truck1Flag= tentFlag= campfireFlag= buildings3Flag=1;


// This variable will turn to 1 when the scroll is at the bottom of the page
var isBottomPage   = 0;
var aredotshidden  = 0;

/* -------------- ITEMS --------------------- */

/* Birds */
var birdsW = 1920; var birdsH = 360;

/* initial size for turbines */
var turbineW = 200; var turbineH = 400;

/* Cloud */
var cloudW = 400; var cloudH = 250;
/* Cloud 2 */
var cloud2W = 400; var cloud2H = 250;
var smallCloud = 60; // make the cloud X% smaller than the big cloud

/* footy players and footy sizes*/
var footyPlayersW = 500; var footyPlayersH = 333;
var footyPlayersCounter = 0;
var footyW = 58; var footyH = 51;

/* Tractor */
var tractorW = 150; var tractorH = 150;

/* Bulldozer */
var bulldozerW = 167; var bulldozerH = 129;

/* Garbage Truck */
var garbagetruckW = 260; var garbagetruckH = 135;

/* Flooding Sign */
var floodSingW = 225; var floodSingH = 245;

/* Windmill  */
var windMillW = 350; var windMillH = 600;

/* fire default size */
var fireW = 1200; var fireH = 1000;

/* fire default size */
var firefightersW = 1129; var firefightersH = 320;

/* Kangaroos variables */
var kangarooW= 240; var kangarooH= 200;
var kangarookidScale = 50;  // the kid is 30% smaller

/* bike */
var bikeW = 52; var bikeH = 67;

/* White car - the one is infront of the bicycle */
var whiteCarW = 121; var whiteCarH = 68;

/* Tent */
   var tentW = 383; var tentH = 276; var tentTop = 8.6; var tentLeft = 62;

  /* campfire */
   var firecampW = 78; var firecampH = 90; var firecampTop = 10.1; var firecampLeft = 48;

/* Train */
   var trainW = 796; var trainH = 528; var trainTop = 57.39;  var trainLeft = -24;

/* Truck 1 */
var truck1W = 226; var truck1H = 172; var truck1Top = 67.55;
var truck1Left = -2;

 /* Car 1 */
 var car1W = 186; var car1H = 93; var car1Top = 76.8; var car1Left = 95; var car1Counter=0;

  /* building */
 var buildingW = 648; var buildingH = 735; var buildingTop = 68.75; var buildingLeft = 7;

/* sold-sign */
 var soldsignW = 274; var soldsignH = 255; var soldsignTop = 71.15; var soldsignLeft = 11;


 /* building-two */
 var building2W = 431; var building2H = 934; var building2Top = 66.75; var building2Left = 27;

 /* building-three */
 var building3W = 404; var building3H = 606; var building3Top = 67.70; var building3Left = 15;

 /* flags-building */
 var flgbuildingW = 818; var flgbuildingH = 742; var flgbuildingTop = 74.138; var flgbuildingLeft = -2.3;

 /* ab-flag */
 var abflagW = 81; var abflagH = 157; var abflagTop = 74.6; var abflagLeft = 12.3;

/* au-flag */
 var auflagW = 81; var auflagH = 157; var auflagTop = 75.0; var auflagLeft = 24.4;

 /* apartment-block */
 var apartblockW = 521; var apartblockH = 422; var apartblockTop = 73.0; var apartblockLeft = -5.3;

/* glass-building */
 var glassbldngW = 589; var glassbldngH = 586; var glassbldngTop = 73.5; var glassbldngLeft = 27.3;

 /* solar-building */
 var solarbldngW = 392; var solarbldngH = 540; var solarbldngTop = 74.9; var solarbldngLeft = 56.5;

/* eureka-tower */
 var eurekaW = 368; var eurekaH = 1287; var eurekaTop = 73.8; var eurekaLeft = 76; var eurekadisplayed = 0;

 /* arts-centre */
 var artcW = 736; var artcH = 1009; var artcTop = 74.7; var artcLeft = 38;

/* Church */
var churchW = 921; var churchH = 755; var churchLeft = -15;
var churchTop = 79.0; var buildingsCounter=0;

/* Car 2 */
var car2W = 189; var car2H = 109; var car2Top = 78.9; var car2Left = 10; var car2Counter=0;

/* Bus */
var busW = 577; var busH = 329; var busTop = 79.35; var busLeft = 29; var busCounter=0;

/* Tram */
var tramW = 366; var tramH = 328; var tramTop = 83.75; var tramLeft = 45; var tramCounter=0;

//SECTION 2 FORESHORE
/* Boat */
var boatW = 133; var boatH = 218; var boatTop = 90.6; var boatLeft = 82.45;

//SECTION 1 SEA/BAY
/* Whale */
var whaleW = 802; var whaleH = 409; var whaleTop = 97.8; var whaleLeft = 75;

/* whaleNet */
var whaleNetW = 499; var whaleNetH = 333; var whaleNetTop = 95.7; var whaleNetLeft = 80;

/* Scuba */
var scuba2W = 221; var scuba2H = 170; var scuba2Top = 98.5; var scuba2Left = 5;

/* Seal */
var sealW = 435; var sealH = 267; var sealTop = 96.6; var sealLeft = -10;

/* ------------------------------------------------------------------------------- */

  //////    MESSAGES     ////////////////
  
    /* msg-1 
    var msg1Top = 96.2;
    var msg1Left = 38;*/

    /* dot-1 
    var dot1Top = 96.8;
    var dot1Left = 40;*/

   
    /* msg-2 
    var msg2Top = 92.4;
    var msg2Left = 14;*/

    /* dot-2 
    var dot2Top = 92.8;
    var dot2Left = 18;*/

   
    /* msg-3 
    var msg3Top = 92.8;
    var msg3Left = 44;

    /* dot-3 
    var dot3Top = 93.4;
    var dot3Left = 44;
    

    /* msg-4 
    var msg4Top = 79.8;
    var msg4Left = 19;

    /* dot-4 
    var dot4Top = 79.8;
    var dot4Left = 15;

    
    /* msg-5 
    var msg5Top = 75.8;
    var msg5Left = 14;

    /* dot-5 
    var dot5Top = 75.4;
    var dot5Left = 16;


     /* msg-6
    var msg6Top = 75.9;
    var msg6Left = 54;

    /* dot-6 
    var dot6Top = 75.5;
    var dot6Left = 68;


     /* msg-7 
    var msg7Top = 73.1;
    var msg7Left = 12;

    /* dot-7 
    var dot7Top = 73.3;
    var dot7Left = 8;


     /* msg-8 
    var msg8Top = 71.2;
    var msg8Left = 27;

    /* dot-8 */
    var dot8Top = 71.4;
    var dot8Left = 23.2;


     /* msg-9 */
    var msg9Top = 63.2;
    var msg9Left = 34;

    /* dot-9 */
    var dot9Top = 63.4;
    var dot9Left = 30;


     /* msg-10 */
    var msg10Top = 59.5;
    var msg10Left = 48;

    /* dot-10 */
    var dot10Top = 59.1;
    var dot10Left = 50;


     /* msg-11 */
    var msg11Top = 54.6;
    var msg11Left = 58;

    /* dot-11 */
    var dot11Top = 54.9;
    var dot11Left = 54;


     /* msg-12 */
    var msg12Top = 51.6;
    var msg12Left = 54;

    /* dot-12 */
    var dot12Top = 51.8;
    var dot12Left = 50;


     /* msg-13 */
    var msg13Top = 46.3;
    var msg13Left = 56;

    /* dot-13 */
    var dot13Top = 46.4;
    var dot13Left = 52;


     /* msg-14 */
    var msg14Top = 40.3;
    var msg14Left = 52;

    /* dot-14 */
    var dot14Top = 40.4;
    var dot14Left = 48;


    /* msg-15 */
    var msg15Top = 36.0;
    var msg15Left = 62;

    /* dot-15 */
    var dot15Top = 35.6;
    var dot15Left = 78;


   /* msg-16 */
    var msg16Top = 30.0;
    var msg16Left = 62;

    /* dot-16 */
    var dot16Top = 29.6;
    var dot16Left = 62;


    /* msg-17 */
    var msg17Top = 28.8;
    var msg17Left = 20;

    /* dot-17 */
    var dot17Top = 28.8;
    var dot17Left = 48;


    /* msg-18 */
    var msg18Top = 23.8;
    var msg18Left = 30;

    /* dot-18 */
    var dot18Top = 24.0;
    var dot18Left = 66;


     /* msg-19 */
    var msg19Top = 19.0;
    var msg19Left = 38;

    /* dot-19 */
    var dot19Top = 19.2;
    var dot19Left = 34;


      /* msg-20 */
    var msg20Top = 16.2;
    var msg20Left = 54;

    /* dot-20 */
    var dot20Top = 16.9;
    var dot20Left = 58;


    /* msg-21 */
    var msg21Top = 13.6;
    var msg21Left = 20;

    /* dot-21 */
    var dot21Top = 13.2;
    var dot21Left = 44;


    /* msg-22 */
    var msg22Top = 10.4;
    var msg22Left = 62;

    /* dot-22 */
    var dot22Top = 10.0;
    var dot22Left = 64;


     /* msg-23 */
    var msg23Top = 6.6;
    var msg23Left = 56;

    /* dot-23 */
    var dot23Top = 6.8;
    var dot23Left = 52;


     /* msg-24 */
    var msg24Top = 3.8;
    var msg24Left = 38;

    /* dot-24 */
    var dot24Top = 3.4;
    var dot24Left = 42;


      /* msg-25 */
    var msg25Top = 0.2;
    var msg25Left = 58;

    /* dot-25 */
    var dot25Top = 0;
    var dot25Left = 54;

    /* feedback button */
    var feedbackW = 250;
    var feedbackH = 90;


/* ----------------------------------------------------------------- */

/* functions for dynamic variables */

/* This func returns the scalled/dynamic width 
of the background image */
function winWidth(){
    var $winWidth  = $(window).width();
    return $winWidth;
}
/* This func returns the scalled/dynamic height 
of the background image */
function winHeight(){
    var $winHeight  = 
        winWidth() * $bgHeight / $bgWidth;

    //+ $('#welcomeDiv').height(); 
    
    return $winHeight;
}

/* This func gets window's scrolltop and based on the background images hieght, converts it to percentage */
function topPercfunc(){
    var $win = $(window);
    var top = $win.scrollTop();
    var topPerc = (top * 100)/(winHeight());
    return topPerc;
}

/* this func, gets the dynamic width of the page
and also the default width of the background
images and then calculate the scale percentage of 
the width */
function WidthPerc(){
    var $WidthPerc  = ( (winWidth()) * 100) /$bgWidth ;
    return $WidthPerc;
}

/* this func, gets the dynamic height of the page
and also the default height of the background
images and then calculate the scale percentage of 
the height */
function HeightPerc(){
    var $HeightPerc  = ( (winHeight()) * 100) /$bgHeight ;
    return $HeightPerc;
}

/* Gets the name of the image's placeholder, it's url and the name of the class should be added to it, then create the image and put it on it's placeholder */
function loadIMG(objName,IMGurl,className){
    var IMG = new Image();
    $(IMG).load(function(){
        $(objName).append(IMG);  
    }).attr('src', IMGurl).addClass(className);  
    return false;    
}










