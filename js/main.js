$(document).ready(function() {
    
    /* Scrolls to the bottom of the page */
    //$('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
    
    /* Get width and height of the 2 bg images */
    // Responsive width and height of the bg images
    var $win = $(window);
    
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    
    /* Calculate the difference between the defualt size of the gb images and the current size of them. then, scale the items based on that */
    
    //console.log($WidthPerc);
    //console.log($HeightPerc);
    
   
   /*$('.lazy').Lazy(//); 
   {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        threshold: 100,
        appendScroll: $(window),
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }, 
        beforeLoad: function(element){
              console.log('image "' + stripTime(element.data('src')) + '" is about to be loaded');
          },
          afterLoad: function(element) {
              console.log('image "' + stripTime(element.data('src')) + '" was loaded successfully');
          }
    });*/
   
    
    /* Initial styles for items */
    
    /* Flooding Sign default css  */
    $('.floodSign').animate({
        width: ($WidthPerc * floodSingW)/100,
        height:($HeightPerc* floodSingH)/100,
        
        left: ($winWidth  * (43)    )/100,
        top:  ($winHeight * (27.75) )/100
    },0);
   

    /* Windmill default settings */
    var windMillW = 350;
    var windMillH = 600;
    
    $('.windMill').animate({
        width: ($WidthPerc * windMillW)/100,
        height:($HeightPerc* windMillH)/100,
        
        left: ($winWidth  *(60) )/100,
        top:  ($winHeight *(24.5) )/100,
        opacity: 1
    },0); 

    
    /* Tractor default settings */
    
    /* Bulldozer default settings */
    $('.bulldozer').animate({
       width: ( ($WidthPerc * bulldozerW)/100)*150/100,
       height:( ($HeightPerc* bulldozerH)/100)*150/100,
       
       left: ($winWidth  *(75) )/100,
       top:  ($winHeight *(41.3) )/100
    },0);
    
    /* Birds default settings */
    
    //SECTION-5 
     /* train */
    $('#train').css({'transform': 'rotate(-1deg)'});
    $('#train').animate({
       width: ($WidthPerc * trainW)/100,
       height:($HeightPerc* trainH)/100,
       
        left: ($winWidth  * trainLeft)/100,
        top:  ($winHeight * trainTop)/100
    },0);

    /* truck1 */
    $('#truck1').animate({
       width: ($WidthPerc * truck1W)/100,
       height:($HeightPerc* truck1H)/100,
       
        left: ($winWidth  * truck1Left)/100,
        top:  ($winHeight * truck1Top)/100
    },0);

    /* mcg */
    $('#mcg').animate({
       width: ($WidthPerc * mcgW)/100,
       height:($HeightPerc* mcgH)/100,
       
        left: ($winWidth  * mcgLeft)/100,
        top:  ($winHeight * mcgTop)/100
    },0);

    /* building */
    $('#building').animate({
       width: ($WidthPerc * buildingW)/100,
       height:($HeightPerc* buildingH)/100,
       
        left: ($winWidth  * buildingLeft)/100,
        top:  ($winHeight * buildingTop)/100
    },0);

    /* building-two */
    $('#building-two').animate({
       width: ($WidthPerc * building2W)/100,
       height:($HeightPerc* building2H)/100,
       
        left: ($winWidth  * building2Left)/100,
        top:  ($winHeight * building2Top)/100
    },0);

    /* building-three */
    $('#building-three').animate({
       width: ($WidthPerc * building3W)/100,
       height:($HeightPerc* building3H)/100,
       
        left: ($winWidth  * building3Left)/100,
        top:  ($winHeight * building3Top)/100
    },0);

    /* Car1 */
    $('#car1').animate({
       width: ($WidthPerc * car1W)/100,
       height:($HeightPerc* car1H)/100,
       
        left: ($winWidth  *(car1Left) )/100,
        top:  ($winHeight *(car1Top) )/100
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

   /* arts-centre */
    $('#arts-centre').animate({
       width: ($WidthPerc * artcW)/100,
       height:($HeightPerc* artcH)/100,
       
        left: ($winWidth  *(artcLeft) )/100,
        top:  ($winHeight *(artcTop) )/100
    },0);

    //SECTION-3 CITY
    /* Tram */
    $('#tram').animate({

        width: ($WidthPerc * tramW)/100,
        height:($HeightPerc* tramH)/100,
    
        left: ($winWidth  *(tramLeft) )/100,
        top:  ($winHeight *(tramTop) )/100,

    },0); 
    
    /* Car2 */
    $('#car2').animate({
        width: ($WidthPerc * car2W)/100,
        height:($HeightPerc* car2H)/100,
       
        left: ($winWidth  *(car2Left) )/100,
        top:  ($winHeight *(car2Top) )/100
    },0); 
    
     /* bus */
    $('#bus').animate({
        width: ($WidthPerc * busW)/100,
        height:($HeightPerc* busH)/100,
       
        left: ($winWidth  *(busLeft) )/100,
        top:  ($winHeight *(busTop) )/100
    },0); 

    /* Church */
    $('#church').animate({
       width: ($WidthPerc * churchW)/100,
       height:($HeightPerc* churchH)/100,

        left: ($winWidth  *(churchLeft) )/100,
        top:  ($winHeight *(churchTop) )/100
    },0);

    //SECTION-2 FORESHORE
    /* Boat */
    $('#boat').animate({

       width: ($WidthPerc * boatW )/100,
       height:($HeightPerc* boatH )/100,

        left: ($winWidth  * boatLeft )/100,
        top:  ($winHeight * boatTop )/100
    },0); 

    //SECTION-1 SEA/BAY
    /* Whale */
    $('#whale').animate({
        width: ($WidthPerc * whaleW)/100,
        height:($HeightPerc* whaleH)/100,

        left: ($winWidth  * whaleLeft )/100,
        top:  ($winHeight * whaleTop )/100
    },0); 


    /* whaleNet */
    $('#whaleNet').animate({ 
        width: ($WidthPerc * whaleNetW)/100, 
        height:($HeightPerc* whaleNetH)/100,
        left: ($winWidth  * whaleNetTop )/100,
        top:  ($winHeight * whaleNetLeft )/100
    },0); 

    
    /* Scuba-2 */
    $('#scuba-2').animate({ 
        width: ($WidthPerc * scuba2W)/100, 
        height: ($HeightPerc* scuba2H)/100,
        left: ($winWidth  * scuba2Left )/100,
        top:  ($winHeight * scuba2Top )/100
    },0); 

    /* Seal */
    $('#seal').animate({ 
        width: ($WidthPerc * sealW)/100, 
        height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * sealLeft )/100,
        top:  ($winHeight * sealTop )/100
    },0); 

    /* dot-1 */
    $('#dot-1').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot1Left )/100,
        top:  ($winHeight * dot1Top )/100
    },0); 

     /* msg-1 */
    $('#msg-1').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,

        left: ($winWidth  * msg1Left )/100,
        top:  ($winHeight * msg1Top )/100
    },0); 

   /*$('#dot-1').click(function(){
        console.log("spmeone is here...");
            $('#msg-1').toggle("slow");
        });

    /* dot-2 
    $('#dot-2').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot2Left )/100,
        top:  ($winHeight * dot2Top )/100
    },0); 

     /* msg-2 
    $('#msg-2').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg2Left )/100,
        top:  ($winHeight * msg2Top )/100
    },0); */



    /* Default setting for Small devices */
    if($win < 578){
        
    }
    

});


/*### Separatoring .ready and .resize funcs ###*/
/*##############-##-########-##-###############*/
/*#################---####---##################*/
/*####################----#####################*/
/*#####################--######################*/
/*#############################################*/


/* Dynamic css for all items after resizing */
$( window ).resize(function() {
  

   /*$('.lazy').Lazy(//); 
   {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        threshold: 100,
        appendScroll: $(window),
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }, 
        beforeLoad: function(element){
              console.log('image "' + stripTime(element.data('src')) + '" is about to be loaded');
          },
          afterLoad: function(element) {
              console.log('image "' + stripTime(element.data('src')) + '" was loaded successfully');
          }
    });*/
   
    /*  ---------------------------------- */
    /* Get width and height of the 2 bg images */
    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc(); 
    
    /*  ---------------------------------- */
    /* Items dynamic settings */  
      
    /* Flooding Sign default css  */
    $('.floodSign').animate({
        width: ($WidthPerc * floodSingW)/100,
        height:($HeightPerc* floodSingH)/100,
        
        left: ($winWidth  * (43)    )/100,
        top:  ($winHeight * (27.75) )/100
    },0); 


    /* Wind Mill default css */
    var windMillW = 350;
    var windMillH = 600;
    
    $('.windMill').animate({
        width: ($WidthPerc * windMillW)/100,
        height:($HeightPerc* windMillH)/100,
        
        left: ($winWidth  *(60) )/100,
        top:  ($winHeight *(24.5) )/100,
        opacity: 1
    },0);   
    

    /* Bulldozer default settings */
    $('.bulldozer').animate({
       width: ( ($WidthPerc * bulldozerW)/100)*150/100,
       height:( ($HeightPerc* bulldozerH)/100)*150/100,
       
       left: ($winWidth  *(75) )/100,
       top:  ($winHeight *(41.3) )/100
    },0);
    
    /* Birds */
    
    //SECTION-5
    /* train */
    $('#train').css({'transform': 'rotate(-1deg)'});
    $('#train').animate({
       width: ($WidthPerc * trainW)/100,
       height:($HeightPerc* trainH)/100,
       
        left: ($winWidth  * trainLeft)/100,
        top:  ($winHeight * trainTop)/100
    },0);

    /* truck1 */
    $('#truck1').animate({
       width: ($WidthPerc * truck1W)/100,
       height:($HeightPerc* truck1H)/100,
       
        left: ($winWidth  * truck1Left)/100,
        top:  ($winHeight * truck1Top)/100
    },0);

     /* mcg */
    $('#mcg').animate({
       width: ($WidthPerc * mcgW)/100,
       height:($HeightPerc* mcgH)/100,
       
        left: ($winWidth  * mcgLeft)/100,
        top:  ($winHeight * mcgTop)/100
    },0);

    /* building */
    $('#building').animate({
       width: ($WidthPerc * buildingW)/100,
       height:($HeightPerc* buildingH)/100,
       
        left: ($winWidth  * buildingLeft)/100,
        top:  ($winHeight * buildingTop)/100
    },0);

    /* building-two */
    $('#building-two').animate({
       width: ($WidthPerc * building2W)/100,
       height:($HeightPerc* building2H)/100,
       
        left: ($winWidth  * building2Left)/100,
        top:  ($winHeight * building2Top)/100
    },0);

    /* building-three */
    $('#building-three').animate({
       width: ($WidthPerc * building3W)/100,
       height:($HeightPerc* building3H)/100,
       
        left: ($winWidth  * building3Left)/100,
        top:  ($winHeight * building3Top)/100
    },0);

    //SECTION-4 
    /* Car1 */
    $('#car1').animate({
       width: ($WidthPerc * car1W)/100,
       height:($HeightPerc* car1H)/100,
       
        left: ($winWidth  *(car1Left) )/100,
        top:  ($winHeight *(car1Top) )/100
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
       
        left: ($winWidth  * apartblockLeft )/100,
        top:  ($winHeight * apartblockTop )/100
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

   /* arts-centre */
    $('#arts-centre').animate({
       width: ($WidthPerc * artcW)/100,
       height:($HeightPerc* artcH)/100,
       
        left: ($winWidth  *(artcLeft) )/100,
        top:  ($winHeight *(artcTop) )/100
    },0);
   

    //SECTION-3 CITY
    /* Tram */
    $('#tram').animate({
       width: ($WidthPerc * tramW)/100,
       height:($HeightPerc* tramH)/100,
       
        left: ($winWidth  *(tramLeft) )/100,
        top:  ($winHeight *(tramTop) )/100
    },0); 

    /* Car2 */
    $('#car2').animate({
       width: ($WidthPerc * car2W)/100,
       height:($HeightPerc* car2H)/100,
       
        left: ($winWidth  *(car2Left) )/100,
        top:  ($winHeight *(car2Top) )/100
    },0); 

    /* bus */
    $('#bus').animate({
       width: ($WidthPerc * busW)/100,
       height:($HeightPerc* busH)/100,
       
        left: ($winWidth  *(busLeft) )/100,
        top:  ($winHeight *(busTop) )/100
    },0); 
    
    /* Church */
    $('#church').animate({
       width: ($WidthPerc * churchW)/100,
       height:($HeightPerc* churchH)/100,
       
        left: ($winWidth  *(churchLeft) )/100,
        top:  ($winHeight *(churchTop) )/100
    },0);

    //SECTION-2 FORESHORE
    /* Boat */
    $('#boat').animate({
       width: ($WidthPerc * boatW )/100,
       height:($HeightPerc* boatH )/100,
       
        left: ($winWidth  * boatLeft )/100,
        top:  ($winHeight * boatTop )/100
    },0); 

    //SECTION-1 SEA-BAY
    /* Whale */
    $('#whale').animate({
        width: ($WidthPerc * whaleW)/100,
        height:($HeightPerc* whaleH)/100,
        left: ($winWidth  * whaleLeft )/100,
        top:  ($winHeight * whaleTop )/100
    },0); 

    /* whaleNet */
    $('#whaleNet').animate({ 
        width: ($WidthPerc * whaleNetW)/100, 
        height:($HeightPerc* whaleNetH)/100,
        left: ($winWidth  * whaleNetTop )/100,
        top:  ($winHeight * whaleNetLeft )/100
    },0); 

    
    /* Scuba-2 */
    $('#scuba-2').animate({ 
        width: ($WidthPerc * scuba2W)/100, 
        height: ($HeightPerc* scuba2H)/100,
        left: ($winWidth  * scuba2Left )/100,
        top:  ($winHeight * scuba2Top )/100
    },0); 
    
    /* Seal */
    $('#seal').animate({ 
        width: ($WidthPerc * sealW)/100, 
        height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * sealLeft )/100,
        top:  ($winHeight * sealTop )/100
    },0); 

    /* dot-1 */
    $('#dot-1').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot1Left )/100,
        top:  ($winHeight * dot1Top )/100
    },0); 

     /* msg-1 */
    $('#msg-1').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg1Left )/100,
        top:  ($winHeight * msg1Top )/100
    },0); 

/*$('#dot-1').click(function(){
        console.log("spmeone is here...");
            $('#msg-1').toggle("slow");
        });

    /* dot-2 
    $('#dot-2').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot2Left )/100,
        top:  ($winHeight * dot2Top )/100
    },0); 

     /* msg-2 
    $('#msg-2').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg2Left )/100,
        top:  ($winHeight * msg2Top )/100
    },0); */
    
});








