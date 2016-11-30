

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

/* ----------------------------------- Load flags for items ----------------------------------*/
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

var tramFlag            = 1;
var buildingsFlag       = 1;
var busFlag             = 1;
var car2Flag            = 1;
var buildingsFlag       = 1;


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

/* Garbage Truck */
var garbagetruckW = 260;
var garbagetruckH = 135;

/* Flooding Sign */
var floodSingW = 225;
var floodSingH = 245;

/* Windmill  */
var windMillW = 350;
var windMillH = 600;

/* fire default css */
var fireW = 1200;
var fireH = 1000;

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
var busTop = 80.05;
var busLeft = 44;
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
   var boatLeft = 80.05;

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
      $('.bg1PH').height() 
    + $('.bg2PH').height() 
    + $('.bg3PH').height() 
    + $('.bg4PH').height() 
    + $('.bg5PH').height()
    + $('.bg6PH').height()
    + $('.bg7PH').height()
    + $('.bg8PH').height()
    + $('.bg9PH').height()
    + $('.bg10PH').height()
    + $('.bg11PH').height()
    + $('.bg12PH').height()
    + $('.bg13PH').height()
    + $('.bg14PH').height();
    
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