/* Variable initializations */
/****************************/


// Default width and height of the bg images
   var $bgWidth = 1920;
   var $bgHeight = 18326; 

   //var $bgHeight = 16103;

   /* Birds */
   var birdsW = 1920;
   var birdsH = 360;

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

   /* Kangaroos variables */
   var kangarooW        = 240;
   var kangarooH        = 200;
   var kangarookidScale = 50;  // the kid is 30% smaller

   // this is kind of changing keyframe starting poiny for kangaroo kids to look diff together and their parent
   var image = new Image();
   image.src ='img/section-789/gifs/kangaroo1.gif';
   var frameCha1 = 1;

   var image2 = new Image();
   image2.src ='img/section-789/gifs/kangaroo2.gif';
   var frameCha2 = 1;


   /* initial size for turbines */
   var turbineW = 200;
   var turbineH = 400;

   /* Flooding Sign */
   var floodSingW = 225;
   var floodSingH = 245;

  /* footy players and footy sizes*/
   var footyPlayersW = 500;
   var footyPlayersH = 333;
   var footyW = 58;
   var footyH = 51;


   /* bike */
   var bikeW = 52;
   var bikeH = 67;

   /* White car - the one is infront of the bicycle */
   var whiteCarW = 121;
   var whiteCarH = 68;


  

    /* ////////////////////////////////////////////// */
    // flag to mute all sound effects - default = 1 = mute
    var muteAll = 1; 
    // Setting flags to prevent replaying the sound
    var whale_sound_flag   = 0;
    var cattle_sound_flag  = 0; 
    var birds_sound_flag   = 0;
    /* ////////////////////////////////////////////// */




    /*feadback and speaker/mute buttons size*/ 
    var feadbackW = 250;
    var feadbackH = 100;
    var speakerW  = 80;
    var speakerH  = 80;
    var muteW     = 80;
    var muteH     = 80;
    
    

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
    var $winHeight  = $('.bg1').height() 
    + $('.bg2').height() 
    + $('.bg3').height() 
    + $('.bg4').height() 
    + $('.bg5').height()
    + $('.bg6').height()
    + $('.bg7').height()
    + $('.bg8').height()
    + $('.bg9').height()
    + $('.bg10').height()
    + $('.bg11').height()
    + $('.bg12').height()
    + $('.bg13').height()
    + $('.bg14').height(); // This 5 pixel is added because I don't know why the height of the bg images are 5 pixel less!!
    
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
