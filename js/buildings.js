$(document).ready(function() {             
     $("body").keydown(function(){
        if(($(window).scrollTop() <=                    $('.bg2').position().top) && buildingsFlag == 1 && isBottomPage ==1){
            loadIMG('.churchPH','img/section-3/church.png','item church hiddenItem');
            buildingsFlag = 0;
        } 
         
        if(($(window).scrollTop() <=                    $('.bg3').position().top) && buildings2Flag == 1 && isBottomPage ==1){
            loadIMG('.solarbPH','img/section-4/solar-building.png','item solar-building');

            loadIMG('.apartblockPH','img/section-4/apartment-block.gif','item apartment-block');
            loadIMG('.auflagPH','img/section-4/au-flag.gif','item au-flag');
            loadIMG('.abflagPH','img/section-4/ab-flag.gif','item ab-flag');
            loadIMG('.flagbldgPH','img/section-4/building-w-flags.png','item flags-building');
            loadIMG('.buildingPH','img/section-5/building.gif','item building');
            loadIMG('.soldsignPH','img/section-5/sold.png','item sold-sign');
            loadIMG('.building2PH','img/section-5/building-two.gif','item building-two');
            loadIMG('.building3PH','img/section-5/building-three.png','item building-three');
            loadIMG('.glassbPH','img/section-4/glass-building.gif','item glass-building');
            loadIMG('.eurekaPH','img/section-3/eureka.gif','item eureka-tower');
        }          
         
    });
     
});

$(window).scroll(function(){ 
        /*  ---------------------------------- */
    /* Get width and height of the 2 bg images */
    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc(); 
    
    
$( ".bg2" ).mouseover(function() {

  if (buildingsFlag == 1 && isBottomPage ==1 ){

    loadIMG('.churchPH','img/section-3/church.png','item church hiddenItem');
    buildingsFlag = 0; 
  }    
}); 

$( ".bg3" ).mouseover(function() {
      
    if (buildings2Flag == 1 && isBottomPage ==1 ){
        
        loadIMG('.solarbPH','img/section-4/solar-building.png','item solar-building');
        
        loadIMG('.apartblockPH','img/section-4/apartment-block.gif','item apartment-block');
        loadIMG('.auflagPH','img/section-4/au-flag.gif','item au-flag');
        loadIMG('.abflagPH','img/section-4/ab-flag.gif','item ab-flag');
        loadIMG('.flagbldgPH','img/section-4/building-w-flags.png','item flags-building');
        loadIMG('.buildingPH','img/section-5/building.gif','item building');
        loadIMG('.soldsignPH','img/section-5/sold.png','item sold-sign');
        loadIMG('.building2PH','img/section-5/building-two.gif','item building-two');
        loadIMG('.building3PH','img/section-5/building-three.png','item building-three');
        loadIMG('.glassbPH','img/section-4/glass-building.gif','item glass-building');
        loadIMG('.eurekaPH','img/section-3/eureka.gif','item eureka-tower');  
        buildings2Flag = 0;
    }
});
    
/*$( ".bg4" ).mouseover(function() {
      
    if (buildings3Flag == 1 && isBottomPage ==1 ){
        
    }

});*/

    /* ---------------- BUILDINGS ---------------- */

    /***** building ******/
    $('.building').animate({
       width: ($WidthPerc * buildingW)/100,
       height:($HeightPerc* buildingH)/100,
       
        left: ($winWidth  * buildingLeft)/100,
        top:  ($winHeight * buildingTop)/100
    },0);

    /********** sold-ign **********/
    $('.sold-sign').animate({
       width: ($WidthPerc * soldsignW)/100,
       height:($HeightPerc* soldsignH)/100,
       
        left: ($winWidth  * soldsignLeft)/100,
        top:  ($winHeight * soldsignTop)/100
    },0);

    /*********** building-two ************/
    if ( topPerc >= 68.0 ) {
        $('.building-two').css({'display':'none', 'left': '($winWidth  *(building2Left) )/100', 'top':'($winHeight *(building2Top) )/100'});
    } else {
        $('.building-two').css({'display':'block' });
        $('.building-two').animate({
           width: ($WidthPerc * building2W)/100,
           height:($HeightPerc* building2H)/100,
           
            left: ($winWidth  * building2Left)/100,
            top:  ($winHeight * building2Top)/100
        },0);
        $('.building-two').css({'transform': 'rotate(-3deg)'});
    }

    /********* building-three ************/
    $('.building-three').animate({
       width: ($WidthPerc * building3W)/100,
       height:($HeightPerc* building3H)/100,
       
        left: ($winWidth  * building3Left)/100,
        top:  ($winHeight * building3Top)/100
    },0);

 /* flags-building */
    $('.flags-building').animate({
       width: ($WidthPerc * flgbuildingW)/100,
       height:($HeightPerc* flgbuildingH)/100,
       
        left: ($winWidth  *(flgbuildingLeft) )/100,
        top:  ($winHeight *(flgbuildingTop) )/100        
            
        
    },0);
    $('#flags-building').css({'transform': 'rotate(-2deg)'}); 
   
    /* ab-flag */
    $('.ab-flag').animate({
       width: ($WidthPerc * abflagW)/100,
       height:($HeightPerc* abflagH)/100,
       
        left: ($winWidth  * abflagLeft )/100,
        top:  ($winHeight * abflagTop )/100        
    },0);

   /* au-flag */
    $('.au-flag').animate({
       width: ($WidthPerc * auflagW)/100,
       height:($HeightPerc* auflagH)/100,
       
        left: ($winWidth  * auflagLeft)/100,
        top:  ($winHeight * auflagTop )/100        
    },0);

   /* apartment-block */
    $('.apartment-block').animate({
       width: ($WidthPerc * apartblockW)/100,
       height:($HeightPerc* apartblockH)/100,
       
        left: ($winWidth  * apartblockLeft)/100,
        top:  ($winHeight * apartblockTop)/100
    },0); 
   

    /* solar-building */
    $('.solar-building').animate({
       width: ($WidthPerc * solarbldngW)/100,
       height:($HeightPerc* solarbldngH)/100,
       
        left: ($winWidth  * solarbldngLeft )/100,
        top:  ($winHeight * solarbldngTop )/100
    },0); 
    
    /* glass-building  
    if ( topPerc >= 73.0 ) {
        $('.glass-building').css({'display':'none', 'left': '($winWidth  *(glassbldngLeft) )/100', 'top':'($winHeight *(glassbldngTop) )/100'});
    } else {*/
      $('.glass-building').css({'display':'block' });
        $('.glass-building').animate({
           width: ($WidthPerc * glassbldngW)/100,
           height:($HeightPerc* glassbldngH)/100,
           
            left: ($winWidth  * glassbldngLeft )/100,
            top:  ($winHeight * glassbldngTop )/100
        },0);
  //  } 

  /* eureka-tower */
    if ( topPerc >= 76.1 ){
        $('.eureka-tower').css({'display':'none', 'left': '($winWidth  *(eurekaLeft) )/100', 'top':'($winHeight *(eurekaTop) )/100'});
    } else {
      $('.eureka-tower').css({'display':'block' });
        $('.eureka-tower').animate({
           width: ($WidthPerc * eurekaW)/100,
           height:($HeightPerc* eurekaH)/100,
           
            left: ($winWidth  * eurekaLeft)/100,
            top:  ($winHeight * eurekaTop)/100
        },0);
    } 

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

        left: ($winWidth  * churchLeft)/100,
        top:  ($winHeight * churchTop)/100
    },0); 

  });