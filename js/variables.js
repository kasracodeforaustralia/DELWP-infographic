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

    /* cow default settings */
    var cowW = 105;
    var cowH = 85;  
    
    /* fire default css */
    var fireW = 1200;
    var fireH = 1000;
    
    /* Garbage Truck */
    var garbagetruckW = 260;
    var garbagetruckH = 135;

    /* Kangaroo */
    var kangarooW = 300;
    var kangarooH =270;

    /* initial size for turbines */
    var turbineW = 200;
    var turbineH = 400;

    /* Flooding Sign */
    var floodSingW = 225;
    var floodSingH = 245;


// SECTION 3 CITY
    /* Tram */
    var tramW = 206;
    var tramH = 170;

    /* Church */
    var churchTop = -15;
    var churchLeft = 79.0;

    /* Car 2 */
    var car2W = 149;
    var car2H = 86;
    var car2Top = 78.4;
    var car2Left = -2;

    /* Bus */
    var busW = 587;
    var busH = 335;
    var busTop = 88.4;
    var busLeft = 42;


//SECTION 1 SEA/BAY
            /* Whale */
    var whaleW = 802;
    var whaleH = 409;

    /* whaleNet */
    var whaleNetW = 499;
    var whaleNetH = 333;

    /* Scuba */
    var scuba2W = 221;
    var scuba2H = 170;

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












