$(window).scroll(function(){
        /*  ---------------------------------- */
    /* Get width and height of the 2 bg images */
    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();    
    
    if ( ($(window).scrollTop() <= $('.bg2PH').position().top) && buildingsFlag == 1 ){

        loadIMG('.churchPH','img/section-3/church.png','church');

        /*loadIMG('.turbine2PH','img/section-789/gifs/turbine.gif','turbine turbine2');

        loadIMG('.turbine3PH','img/section-789/gifs/turbine.gif','turbine turbine3');
        
        loadIMG('.turbine4PH','img/section-789/gifs/turbine.gif','turbine turbine4');
        
        loadIMG('.turbine5PH','img/section-789/gifs/turbine.gif','turbine turbine5');
        
        loadIMG('.turbine6PH','img/section-789/gifs/turbine.gif','turbine turbine6');*/
        buildingsFlag = 0;        
        
    }

    /* ---------------- BUILDINGS ---------------- */

    /***** building ******/
    $('#building').animate({
       width: ($WidthPerc * buildingW)/100,
       height:($HeightPerc* buildingH)/100,
       
        left: ($winWidth  * buildingLeft)/100,
        top:  ($winHeight * buildingTop)/100
    },0);

    /********** sold-ign **********/
    $('#sold-sign').animate({
       width: ($WidthPerc * soldsignW)/100,
       height:($HeightPerc* soldsignH)/100,
       
        left: ($winWidth  * soldsignLeft)/100,
        top:  ($winHeight * soldsignTop)/100
    },0);

    /*********** building-two ************/
    $('#building-two').animate({
       width: ($WidthPerc * building2W)/100,
       height:($HeightPerc* building2H)/100,
       
        left: ($winWidth  * building2Left)/100,
        top:  ($winHeight * building2Top)/100
    },0);
    $('#building-two').css({'transform': 'rotate(-3deg)'});

    /********* building-three ************/
    $('#building-three').animate({
       width: ($WidthPerc * building3W)/100,
       height:($HeightPerc* building3H)/100,
       
        left: ($winWidth  * building3Left)/100,
        top:  ($winHeight * building3Top)/100
    },0);

 /* flags-building */
    $('#flags-building').animate({
       width: ($WidthPerc * flgbuildingW)/100,
       height:($HeightPerc* flgbuildingH)/100,
       
        left: ($winWidth  *(flgbuildingLeft) )/100,
        top:  ($winHeight *(flgbuildingTop) )/100        
            
        
    },0);
    $('#flags-building').css({'transform': 'rotate(-2deg)'});
   
    /* ab-flag */
    $('#ab-flag').animate({
       width: ($WidthPerc * abflagW)/100,
       height:($HeightPerc* abflagH)/100,
       
        left: ($winWidth  * abflagLeft )/100,
        top:  ($winHeight * abflagTop )/100        
    },0);

   /* au-flag */
    $('#au-flag').animate({
       width: ($WidthPerc * auflagW)/100,
       height:($HeightPerc* auflagH)/100,
       
        left: ($winWidth  * auflagLeft)/100,
        top:  ($winHeight * auflagTop )/100        
    },0);

   /* apartment-block */
    $('#apartment-block').animate({
       width: ($WidthPerc * apartblockW)/100,
       height:($HeightPerc* apartblockH)/100,
       
        left: ($winWidth  *(apartblockLeft) )/100,
        top:  ($winHeight *(apartblockTop) )/100
    },0);

    /* glass-building */
    $('#glass-building').animate({
       width: ($WidthPerc * glassbldngW)/100,
       height:($HeightPerc* glassbldngH)/100,
       
        left: ($winWidth  * glassbldngLeft )/100,
        top:  ($winHeight * glassbldngTop )/100
    },0);

    /* solar-building */
    $('#solar-building').animate({
       width: ($WidthPerc * solarbldngW)/100,
       height:($HeightPerc* solarbldngH)/100,
       
        left: ($winWidth  * solarbldngLeft )/100,
        top:  ($winHeight * solarbldngTop )/100
    },0);

    /* eureka-tower */
    $('#eureka-tower').animate({
       width: ($WidthPerc * eurekaW)/100,
       height:($HeightPerc* eurekaH)/100,
       
        left: ($winWidth  *(eurekaLeft) )/100,
        top:  ($winHeight *(eurekaTop) )/100
    },0);

   /* arts-centre 
    $('#arts-centre').animate({
       width: ($WidthPerc * artcW)/100,
       height:($HeightPerc* artcH)/100,
       
        left: ($winWidth  *(artcLeft) )/100,
        top:  ($winHeight *(artcTop) )/100
    },0); */

    /******** CHURCH **************/
    
    $(".church").animate({
       width: ($WidthPerc * churchW)/100,
       height:($HeightPerc* churchH)/100,

        left: ($winWidth  *(churchLeft) )/100,
        top:  ($winHeight *(churchTop) )/100
    },0);

});    