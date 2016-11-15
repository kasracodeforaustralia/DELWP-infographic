/* Variable initializations */
/****************************/


// Default width and height of the bg images
   var $bgWidth = 1920;
   var $bgHeight = 18326;  

   /* Cloud */
   var cloudW = 400;
   var cloudH = 250;
   /* Cloud 2 */
   var cloud2W = 400;
   var cloud2H = 250;
   var smallCloud = 60; // make the cloud X% smaller than the big cloud

   /* Windmill  */
   var windMillW = 350;
   var windMillH = 600;

   /* cow default settings */
   var cowW = 105;
   var cowH = 85;  

   /* fire default css */
   var firefightersW = 1129;
   var firefightersH = 320;

   /* fire default css */
   var fireW = 1200;
   var fireH = 1000;
    
   /* Garbage Truck */
   var garbagetruckW = 260;
   var garbagetruckH = 135;

   /* Bulldozer */
   var bulldozerW = 167;
   var bulldozerH = 129;

   /* Kangaroo */
   var kangarooW = 300;
   var kangarooH =270;

   /* initial size for turbines */
   var turbineW = 200;
   var turbineH = 400;

   /* Flooding Sign */
   var floodSingW = 225;
   var floodSingH = 245;

   /* bike */
   var bikeW = 52;
   var bikeH = 67;

   /* White car - the one is infront of the bicycle */
   var whiteCarW = 121;
   var whiteCarH = 68;


   // SECTION 5 OUTER SUBRUBS/ URBAN
   /* Train */
   var trainW = 796;
   var trainH = 528;
   var trainTop = 57.99;
   var trainLeft = -8;

   /* Truck 1 */
   var truck1W = 226;
   var truck1H = 172;
   var truck1Top = 67.55;
   var truck1Left = -2;

   /* mcg */
   var mcgW = 1618;
   var mcgH = 1296;
   var mcgTop = 61.75;
   var mcgLeft = 8;

   /* building */
   var buildingW = 400;
   var buildingH = 500;
   var buildingTop = 69.75;
   var buildingLeft = 11;

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


// SECTION 4 INNER CITY/ INDUSTRIAL
   /* Car 1 */
   var car1W = 186;
   var car1H = 93;
   var car1Top = 76.8;
   var car1Left = 95;

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
     
   /* arts-centre */
   var artcW = 809;
   var artcH = 1109;
   var artcTop = 74.2;
   var artcLeft = 37;
      
   /* eureka-tower */
   var eurekaW = 311;
   var eurekaH = 1087;
   var eurekaTop = 75;
   var eurekaLeft = 79;

   // SECTION 3 CITY
   /* Tram */
   var tramW = 366;
   var tramH = 328;
   var tramTop = 83.7;
   var tramLeft = 45;

   /* Church */
   var churchW = 921;
   var churchH = 755;
   var churchLeft = -15;
   var churchTop = 79.0;

   /* Car 2 */
   var car2W = 189;
   var car2H = 109;
   var car2Top = 78.9;
   var car2Left = 10;

   /* Bus */
   var busW = 577;
   var busH = 329;
   var busTop = 80.05;
   var busLeft = 44;

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
   var whaleTop = 98.4;
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

    /* msg-1 */
    var msg1Top = 96.4;
    var msg1Left = 42;

    /* dot-1 */
    var dot1Top = 96.8;
    var dot1Left = 40;

    /* msg-2 */
    var msg2Top = 93.2;
    var msg2Left = 14;

    /* dot-2 */
    var dot2Top = 92.8;
    var dot2Left = 18;

    /* msg-3 */
    var msg3Top = 94.0;
    var msg3Left = 44;

    /* dot-3 */
    var dot3Top = 93.4;
    var dot3Left = 44;



/* ------------------------------------- */

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
    var $winHeight  = $('.bg1').height() + $('.bg2').height() + $('.bg3').height() + $('.bg4').height() + 5; // This 5 pixel is added because I don't know why the height of the bg images are 5 pixel less!!
    
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
