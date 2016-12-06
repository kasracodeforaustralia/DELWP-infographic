

//defaul width of the bg    
var $bgWidth = 1920;
var $bgHeight = 18326;

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
var bg5Flag = 1; 
var bg6Flag = 1;  
var bg7Flag = 1; 
var bg8Flag = 1; 
var bg9Flag = 1;  
var bg10Flag = 1;
var bg11Flag = 1; 
var bg12Flag = 1; 
var bg13Flag = 1; 
var bg14Flag = 1; 

/* ---------- Loading flags for items ------These flags are to prevent loading images for more that one time -----------------*/
var welcomeFlag         = 1;
var footyPlayersFlag    = 1;
var footyFlag           = 1;
var bulldozerFlag       = 1;
var garbageTruckFlag    = 1;
var birdsFlag           = 1;
var turbineFlag         = 1;
var cloudFlag           = 1;
var cloud2Flag          = 1;
var floodSingFlag       = 1;
var windMillFlag        = 1;
var kangarooFlag        = 1;
var kangarookid1Flag    = 1;
var kangarookid2Flag    = 1;
var bikeFlag            = 1;
var whiteCarFlag        = 1;
var fireFlag            = 1;
var fireFightersFlag    = 1;
var car1Flag            = 1;
var tramFlag            = 1;
var buildingsFlag       = 1;
var buildings2Flag      = 1;
var busFlag             = 1;
var car2Flag            = 1;

var buildings3Flag = 1;
// ----------------
var isBottomPage        = 0;


/* --------------------------- ITEMS ----------------------------------------- */

/* Birds */
var birdsW = 1920;
var birdsH = 360;

/* initial size for turbines */
var turbineW = 200;
var turbineH = 400;

/* Cloud */
var cloudW = 400;
var cloudH = 250;
/* Cloud 2 */
var cloud2W = 400;
var cloud2H = 250;
var smallCloud = 60; // make the cloud X% smaller than the big cloud


/* footy players and footy sizes*/
var footyPlayersW = 500;
var footyPlayersH = 333;
var footyPlayersCounter = 0;
var footyW = 58;
var footyH = 51;

/* Bulldozer */
var bulldozerW = 167;
var bulldozerH = 129;

/* Garbage Truck */
var garbagetruckW = 260;
var garbagetruckH = 135;

/* Flooding Sign */
var floodSingW = 225;
var floodSingH = 245;

/* Windmill  */
var windMillW = 350;
var windMillH = 600;

/* fire default size */
var fireW = 1200;
var fireH = 1000;

/* fire default size */
var firefightersW = 1129;
var firefightersH = 320;

/* Kangaroos variables */
var kangarooW        = 240;
var kangarooH        = 200;
var kangarookidScale = 50;  // the kid is 30% smaller

/* bike */
var bikeW = 52;
var bikeH = 67;

/* White car - the one is infront of the bicycle */
var whiteCarW = 121;
var whiteCarH = 68;

 /* Car 1 */
 var car1W = 186;
 var car1H = 93;
 var car1Top = 76.8;
 var car1Left = 95;
 var car1Counter=0;

  /* building */
 var buildingW = 648;
 var buildingH = 735;
 var buildingTop = 68.75;
 var buildingLeft = 7;

/* sold-sign */
 var soldsignW = 274;
 var soldsignH = 255;
 var soldsignTop = 71.15;
 var soldsignLeft = 11;


 /* building-two */
 var building2W = 431;
 var building2H = 934;
 var building2Top = 66.75;
 var building2Left = 27;

 /* building-three */
 var building3W = 404;
 var building3H = 606;
 var building3Top = 67.70;
 var building3Left = 15;

 /* flags-building */
 var flgbuildingW = 818;
 var flgbuildingH = 742;
 var flgbuildingTop = 74.138;
 var flgbuildingLeft = -2.3;

 /* ab-flag */
 var abflagW = 81;
 var abflagH = 157;
 var abflagTop = 74.6;
 var abflagLeft = 12.3;

/* au-flag */
 var auflagW = 81;
 var auflagH = 157;
 var auflagTop = 75.0;
 var auflagLeft = 24.4;

 /* apartment-block */
 var apartblockW = 521;
 var apartblockH = 422;
 var apartblockTop = 73.0;
 var apartblockLeft = -5.3;

/* glass-building */
 var glassbldngW = 589;
 var glassbldngH = 586;
 var glassbldngTop = 73.5;
 var glassbldngLeft = 27.3;

 /* solar-building */
 var solarbldngW = 392;
 var solarbldngH = 540;
 var solarbldngTop = 74.9;
 var solarbldngLeft = 56.5;

/* eureka-tower */
 var eurekaW = 368;
 var eurekaH = 1287;
 var eurekaTop = 73.8;
 var eurekaLeft = 76;

/* Church */
var churchW = 921;
var churchH = 755;
var churchLeft = -15;
var churchTop = 79.0;
var buildingsCounter=0;

/* Car 2 */
var car2W = 189;
var car2H = 109;
var car2Top = 78.9;
var car2Left = 10;
var car2Counter=0;

/* Bus */
var busW = 577;
var busH = 329;
var busTop = 79.35;
var busLeft = 29;
var busCounter=0;

/* Tram */
var tramW = 366;
var tramH = 328;
var tramTop = 83.75;
var tramLeft = 45;
var tramCounter=0;

  //SECTION 2 FORESHORE

   /* Boat */
   var boatW = 133;
   var boatH = 218;
   var boatTop = 90.6;
   var boatLeft = 82.45;

   //SECTION 1 SEA/BAY
   /* Whale */
   var whaleW = 802;
   var whaleH = 409;
   var whaleTop = 97.8;
   var whaleLeft = 75;

   /* whaleNet */
   var whaleNetW = 499;
   var whaleNetH = 333;
   var whaleNetTop = 95.7;
   var whaleNetLeft = 80;

   /* Scuba */
   var scuba2W = 221;
   var scuba2H = 170;
   var scuba2Top = 98.5;
   var scuba2Left = 5;

   /* Seal */
   var sealW = 435;
   var sealH = 267;
   var sealTop = 96.6;
   var sealLeft = -10;

/* ----------------------------------------------------------------- */

/* functions for dynamic variables */

/* This func returns the scalled/dynamic width 
of the background image */
function winWidth(){
    var $winWidth  = $('.bg1').width();
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




/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */


function loadIMG(objName,IMGurl,className){
    var IMG = new Image();
    $(IMG).load(function(){
        $(objName).append(IMG);  
    }).attr('src', IMGurl).addClass(className);
       
    return false;    
}














