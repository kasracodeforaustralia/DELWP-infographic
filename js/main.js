$(document).ready(function() {
    
    /* Scrolls to the bottom of the page */
    $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
    
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
    
   //$("img.lazy").lazyload();
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
    
    /* tent */
   $('#tent').animate({
       width: ($WidthPerc * tentW)/100,
       height:($HeightPerc* tentH)/100,
       
        left: ($winWidth  * tentLeft)/100,
        top:  ($winHeight * tentTop)/100
    },0);

    /* firecamp */
    $('#firecamp').animate({
       width: ($WidthPerc * firecampW)/100,
       height:($HeightPerc* firecampH)/100,
       
        left: ($winWidth  * firecampLeft)/100,
        top:  ($winHeight * firecampTop)/100
    },0);


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

    /* sold-ign */
    $('#sold-sign').animate({
       width: ($WidthPerc * soldsignW)/100,
       height:($HeightPerc* soldsignH)/100,
       
        left: ($winWidth  * soldsignLeft)/100,
        top:  ($winHeight * soldsignTop)/100
    },0);

    /* building-two */
    $('#building-two').animate({
       width: ($WidthPerc * building2W)/100,
       height:($HeightPerc* building2H)/100,
       
        left: ($winWidth  * building2Left)/100,
        top:  ($winHeight * building2Top)/100
    },0);
    $('#building-two').css({'transform': 'rotate(-3deg)'});

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

//////////MESSAGES ////////////////////

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

   $('#dot-1').click(function(){
       
            $('#msg-1').toggle("slow");
        });

    /* dot-2 */
    $('#dot-2').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot2Left )/100,
        top:  ($winHeight * dot2Top )/100
    },0); 

    /* msg-2 */
    $('#msg-2').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg2Left )/100,
        top:  ($winHeight * msg2Top )/100
    },0); 

    $('#dot-2').click(function(){
        
            $('#msg-2').toggle("slow");
    });

    /* dot-3 */
    $('#dot-3').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot3Left )/100,
        top:  ($winHeight * dot3Top )/100
    },0); 

     /* msg-3 */
    $('#msg-3').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg3Left )/100,
        top:  ($winHeight * msg3Top )/100
    },0); 
    
    $('#dot-3').click(function(){
        
            $('#msg-3').toggle("slow");
    });

    /* dot-4 */
    $('#dot-4').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot4Left )/100,
        top:  ($winHeight * dot4Top )/100
    },0); 

    /* msg-4 */
    $('#msg-4').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg4Left )/100,
        top:  ($winHeight * msg4Top )/100
    },0); 

    $('#dot-4').click(function(){
        
            $('#msg-4').toggle("slow");
    });

    /* dot-5 */
    $('#dot-5').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot5Left )/100,
        top:  ($winHeight * dot5Top )/100
    },0); 

     /* msg-5 */
    $('#msg-5').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg5Left )/100,
        top:  ($winHeight * msg5Top )/100
    },0); 
    
    $('#dot-5').click(function(){
        
            $('#msg-5').toggle("slow");
    });

    /* dot-6 */
    $('#dot-6').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot6Left )/100,
        top:  ($winHeight * dot6Top )/100
    },0); 

     /* msg-6 */
    $('#msg-6').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg6Left )/100,
        top:  ($winHeight * msg6Top )/100
    },0); 
    
    $('#dot-6').click(function(){
        
            $('#msg-6').toggle("slow");
    });


    /* dot-7 */
    $('#dot-7').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot7Left )/100,
        top:  ($winHeight * dot7Top )/100
    },0); 

     /* msg-7 */
    $('#msg-7').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg7Left )/100,
        top:  ($winHeight * msg7Top )/100
    },0); 
    
    $('#dot-7').click(function(){
        
            $('#msg-7').toggle("slow");
    });


    /* dot-8 */
    $('#dot-8').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot8Left )/100,
        top:  ($winHeight * dot8Top )/100
    },0); 

     /* msg-8 */
    $('#msg-8').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg8Left )/100,
        top:  ($winHeight * msg8Top )/100
    },0); 
    
    $('#dot-8').click(function(){
        
            $('#msg-8').toggle("slow");
    });


    /* dot-9 */
    $('#dot-9').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot9Left )/100,
        top:  ($winHeight * dot9Top )/100
    },0); 

     /* msg-9 */
    $('#msg-9').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg9Left )/100,
        top:  ($winHeight * msg9Top )/100
    },0); 
    
    $('#dot-9').click(function(){
        
            $('#msg-9').toggle("slow");
    });


    /* dot-10 */
    $('#dot-10').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot10Left )/100,
        top:  ($winHeight * dot10Top )/100
    },0); 

     /* msg-10 */
    $('#msg-10').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg10Left )/100,
        top:  ($winHeight * msg10Top )/100
    },0); 
    
    $('#dot-10').click(function(){
        
            $('#msg-10').toggle("slow");
    });

/* dot-11 */
    $('#dot-11').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot11Left )/100,
        top:  ($winHeight * dot11Top )/100
    },0); 


 /* msg-11 */
    $('#msg-11').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg11Left )/100,
        top:  ($winHeight * msg11Top )/100
    },0); 
    
    $('#dot-11').click(function(){
        
            $('#msg-11').toggle("slow");
    });


    /* dot-12 */
    $('#dot-12').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot12Left )/100,
        top:  ($winHeight * dot12Top )/100
    },0); 

     /* msg-12 */
    $('#msg-12').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg12Left )/100,
        top:  ($winHeight * msg12Top )/100
    },0); 
    
    $('#dot-12').click(function(){
        
            $('#msg-12').toggle("slow");
    });


 /* dot-13 */
    $('#dot-13').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot13Left )/100,
        top:  ($winHeight * dot13Top )/100
    },0); 

     /* msg-13 */
    $('#msg-13').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg13Left )/100,
        top:  ($winHeight * msg13Top )/100
    },0); 
    
    $('#dot-13').click(function(){
        
            $('#msg-13').toggle("slow");
    });


     /* dot-14 */
    $('#dot-14').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot14Left )/100,
        top:  ($winHeight * dot14Top )/100
    },0); 

     /* msg-14 */
    $('#msg-14').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg14Left )/100,
        top:  ($winHeight * msg14Top )/100
    },0); 
    
    $('#dot-14').click(function(){
        
            $('#msg-14').toggle("slow");
    });


 /* dot-15 */
    $('#dot-15').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot15Left )/100,
        top:  ($winHeight * dot15Top )/100
    },0); 

     /* msg-15 */
    $('#msg-15').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg15Left )/100,
        top:  ($winHeight * msg15Top )/100
    },0); 
    
    $('#dot-15').click(function(){
        
            $('#msg-15').toggle("slow");
    });


      /* dot-16 */
    $('#dot-16').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot16Left )/100,
        top:  ($winHeight * dot16Top )/100
    },0); 

     /* msg-16 */
    $('#msg-16').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg16Left )/100,
        top:  ($winHeight * msg16Top )/100
    },0); 
    
    $('#dot-16').click(function(){
        
            $('#msg-16').toggle("slow");
    });


 /* dot-17 */
    $('#dot-17').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot17Left )/100,
        top:  ($winHeight * dot17Top )/100
    },0); 

     /* msg-17 */
    $('#msg-17').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg17Left )/100,
        top:  ($winHeight * msg17Top )/100
    },0); 
    
    $('#dot-17').click(function(){
        
            $('#msg-17').toggle("slow");
    });


 /* dot-18 */
    $('#dot-18').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot18Left )/100,
        top:  ($winHeight * dot18Top )/100
    },0); 

     /* msg-18 */
    $('#msg-18').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg18Left )/100,
        top:  ($winHeight * msg18Top )/100
    },0); 
    
    $('#dot-18').click(function(){
        
            $('#msg-18').toggle("slow");
    });


    /* dot-19 */
    $('#dot-19').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot19Left )/100,
        top:  ($winHeight * dot19Top )/100
    },0); 

     /* msg-19 */
    $('#msg-19').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg19Left )/100,
        top:  ($winHeight * msg19Top )/100
    },0); 
    
    $('#dot-19').click(function(){
        
            $('#msg-19').toggle("slow");
    });


     /* dot-20 */
    $('#dot-20').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot20Left )/100,
        top:  ($winHeight * dot20Top )/100
    },0); 

     /* msg-20 */
    $('#msg-20').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg20Left )/100,
        top:  ($winHeight * msg20Top )/100
    },0); 
    
    $('#dot-20').click(function(){
        
            $('#msg-20').toggle("slow");
    });


 /* dot-21 */
    $('#dot-21').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot21Left )/100,
        top:  ($winHeight * dot21Top )/100
    },0); 

     /* msg-21 */
    $('#msg-21').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg21Left )/100,
        top:  ($winHeight * msg21Top )/100
    },0); 
    
    $('#dot-21').click(function(){
        
            $('#msg-21').toggle("slow");
    });


    /* dot-22 */
    $('#dot-22').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot22Left )/100,
        top:  ($winHeight * dot22Top )/100
    },0); 

     /* msg-22 */
    $('#msg-22').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg22Left )/100,
        top:  ($winHeight * msg22Top )/100
    },0); 
    
    $('#dot-22').click(function(){
        
            $('#msg-22').toggle("slow");
    });


    /* dot-23 */
    $('#dot-23').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot23Left )/100,
        top:  ($winHeight * dot23Top )/100
    },0); 

     /* msg-23 */
    $('#msg-23').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg23Left )/100,
        top:  ($winHeight * msg23Top )/100
    },0); 
    
    $('#dot-23').click(function(){
        
            $('#msg-23').toggle("slow");
    });


     /* dot-24 */
    $('#dot-24').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot24Left )/100,
        top:  ($winHeight * dot24Top )/100
    },0); 

     /* msg-24 */
    $('#msg-24').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg24Left )/100,
        top:  ($winHeight * msg24Top )/100
    },0); 
    
    $('#dot-24').click(function(){
        
            $('#msg-24').toggle("slow");
    });



      /* dot-25 */
    $('#dot-25').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot25Left )/100,
        top:  ($winHeight * dot25Top )/100
    },0); 

     /* msg-25 */
    $('#msg-25').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg25Left )/100,
        top:  ($winHeight * msg25Top )/100
    },0); 
    
    $('#dot-25').click(function(){
        
            $('#msg-25').toggle("slow");
    });

     /* Welcome Div */
    $('#welcomeDiv').animate({
        backgroundColor: '#006666',
        width: $winWidth,
        height:($winHeight* 7)/100,
        marginTop: '-5px'
    },0); 
//////////////////////////////////////////////////////

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
    
    /* tent */
   $('#tent').animate({
       width: ($WidthPerc * tentW)/100,
       height:($HeightPerc* tentH)/100,
       
        left: ($winWidth  * tentLeft)/100,
        top:  ($winHeight * tentTop)/100
    },0);

    /* firecamp */
    $('#firecamp').animate({
       width: ($WidthPerc * firecampW)/100,
       height:($HeightPerc* firecampH)/100,
       
        left: ($winWidth  * firecampLeft)/100,
        top:  ($winHeight * firecampTop)/100
    },0);


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

       /* sold-ign */
    $('#sold-sign').animate({
       width: ($WidthPerc * soldsignW)/100,
       height:($HeightPerc* soldsignH)/100,
       
        left: ($winWidth  * soldsignLeft)/100,
        top:  ($winHeight * soldsignTop)/100
    },0);

    /* building-two */
    $('#building-two').animate({
       width: ($WidthPerc * building2W)/100,
       height:($HeightPerc* building2H)/100,
       
        left: ($winWidth  * building2Left)/100,
        top:  ($winHeight * building2Top)/100
    },0);
    //$('#building-two').css({'transform': 'rotate(-2.5deg)'});

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

    
    /* dot-2 */
    $('#dot-2').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot2Left )/100,
        top:  ($winHeight * dot2Top )/100
    },0); 

     /* msg-2 */
    $('#msg-2').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg2Left )/100,
        top:  ($winHeight * msg2Top )/100
    },0); 

     /* dot-3 */
    $('#dot-3').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot3Left )/100,
        top:  ($winHeight * dot3Top )/100
    },0); 

     /* msg-3 */
    $('#msg-3').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg3Left )/100,
        top:  ($winHeight * msg3Top )/100
    },0); 

    /* dot-4 */
    $('#dot-4').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot4Left )/100,
        top:  ($winHeight * dot4Top )/100
    },0); 

    /* msg-4 */
    $('#msg-4').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg4Left )/100,
        top:  ($winHeight * msg4Top )/100
    },0); 

    $('#dot-4').click(function(){
        
            $('#msg-4').toggle("slow");
    });

    /* dot-5 */
    $('#dot-5').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot5Left )/100,
        top:  ($winHeight * dot5Top )/100
    },0); 

     /* msg-5 */
    $('#msg-5').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg5Left )/100,
        top:  ($winHeight * msg5Top )/100
    },0); 
    
    $('#dot-5').click(function(){
        
            $('#msg-5').toggle("slow");
    });

    /* dot-6 */
    $('#dot-6').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot6Left )/100,
        top:  ($winHeight * dot6Top )/100
    },0); 

     /* msg-6 */
    $('#msg-6').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg6Left )/100,
        top:  ($winHeight * msg6Top )/100
    },0); 
    
    $('#dot-6').click(function(){
        
            $('#msg-6').toggle("slow");
    });


    /* dot-7 */
    $('#dot-7').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot7Left )/100,
        top:  ($winHeight * dot7Top )/100
    },0); 

     /* msg-7 */
    $('#msg-7').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg7Left )/100,
        top:  ($winHeight * msg7Top )/100
    },0); 
    
    $('#dot-7').click(function(){
        
            $('#msg-7').toggle("slow");
    });


    /* dot-8 */
    $('#dot-8').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot8Left )/100,
        top:  ($winHeight * dot8Top )/100
    },0); 

     /* msg-8 */
    $('#msg-8').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg8Left )/100,
        top:  ($winHeight * msg8Top )/100
    },0); 
    
    $('#dot-8').click(function(){
        
            $('#msg-8').toggle("slow");
    });

     /* dot-9 */
    $('#dot-9').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot9Left )/100,
        top:  ($winHeight * dot9Top )/100
    },0); 

     /* msg-9 */
    $('#msg-9').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg9Left )/100,
        top:  ($winHeight * msg9Top )/100
    },0); 
    
    $('#dot-9').click(function(){
        
            $('#msg-9').toggle("slow");
    });


    /* dot-10 */
    $('#dot-10').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot10Left )/100,
        top:  ($winHeight * dot10Top )/100
    },0); 

     /* msg-10 */
    $('#msg-10').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg10Left )/100,
        top:  ($winHeight * msg10Top )/100
    },0); 
    
    $('#dot-10').click(function(){
        
            $('#msg-10').toggle("slow");
    });


/* dot-11 */
    $('#dot-11').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot11Left )/100,
        top:  ($winHeight * dot11Top )/100
    },0);

 /* msg-11 */
    $('#msg-11').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg11Left )/100,
        top:  ($winHeight * msg11Top )/100
    },0); 
    
    $('#dot-11').click(function(){
        
            $('#msg-11').toggle("slow");
    });


    /* dot-12 */
    $('#dot-12').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot12Left )/100,
        top:  ($winHeight * dot12Top )/100
    },0); 

     /* msg-12 */
    $('#msg-12').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg12Left )/100,
        top:  ($winHeight * msg12Top )/100
    },0); 
    
    $('#dot-12').click(function(){
        
            $('#msg-12').toggle("slow");
    });
    

    /* dot-13 */
    $('#dot-13').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot13Left )/100,
        top:  ($winHeight * dot13Top )/100
    },0); 

     /* msg-13 */
    $('#msg-13').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg13Left )/100,
        top:  ($winHeight * msg13Top )/100
    },0); 
    
    $('#dot-13').click(function(){
        
            $('#msg-13').toggle("slow");
    });


         /* dot-14 */
    $('#dot-14').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot14Left )/100,
        top:  ($winHeight * dot14Top )/100
    },0); 

     /* msg-14 */
    $('#msg-14').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg14Left )/100,
        top:  ($winHeight * msg14Top )/100
    },0); 
    
    $('#dot-14').click(function(){
        
            $('#msg-14').toggle("slow");
    });


 /* dot-15 */
    $('#dot-15').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot15Left )/100,
        top:  ($winHeight * dot15Top )/100
    },0); 

     /* msg-15 */
    $('#msg-15').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg15Left )/100,
        top:  ($winHeight * msg15Top )/100
    },0); 
    
    $('#dot-15').click(function(){
        
            $('#msg-15').toggle("slow");
    });


      /* dot-16 */
    $('#dot-16').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot16Left )/100,
        top:  ($winHeight * dot16Top )/100
    },0); 

     /* msg-16 */
    $('#msg-16').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg16Left )/100,
        top:  ($winHeight * msg16Top )/100
    },0); 
    
    $('#dot-16').click(function(){
        
            $('#msg-16').toggle("slow");
    });


 /* dot-17 */
    $('#dot-17').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot17Left )/100,
        top:  ($winHeight * dot17Top )/100
    },0); 

     /* msg-17 */
    $('#msg-17').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg17Left )/100,
        top:  ($winHeight * msg17Top )/100
    },0); 
    
    $('#dot-17').click(function(){
        
            $('#msg-17').toggle("slow");
    });


 /* dot-18 */
    $('#dot-18').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot18Left )/100,
        top:  ($winHeight * dot18Top )/100
    },0); 

     /* msg-18 */
    $('#msg-18').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg18Left )/100,
        top:  ($winHeight * msg18Top )/100
    },0); 
    
    $('#dot-18').click(function(){
        
            $('#msg-18').toggle("slow");
    });


    /* dot-19 */
    $('#dot-19').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot19Left )/100,
        top:  ($winHeight * dot19Top )/100
    },0); 

     /* msg-19 */
    $('#msg-19').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg19Left )/100,
        top:  ($winHeight * msg19Top )/100
    },0); 
    
    $('#dot-19').click(function(){
        
            $('#msg-19').toggle("slow");
    });


     /* dot-20 */
    $('#dot-20').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot20Left )/100,
        top:  ($winHeight * dot20Top )/100
    },0); 

     /* msg-20 */
    $('#msg-20').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg20Left )/100,
        top:  ($winHeight * msg20Top )/100
    },0); 
    
    $('#dot-20').click(function(){
        
            $('#msg-20').toggle("slow");
    });


 /* dot-21 */
    $('#dot-21').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot21Left )/100,
        top:  ($winHeight * dot21Top )/100
    },0); 

     /* msg-21 */
    $('#msg-21').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg21Left )/100,
        top:  ($winHeight * msg21Top )/100
    },0); 
    
    $('#dot-21').click(function(){
        
            $('#msg-21').toggle("slow");
    });


    /* dot-22 */
    $('#dot-22').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot22Left )/100,
        top:  ($winHeight * dot22Top )/100
    },0); 

     /* msg-22 */
    $('#msg-22').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg22Left )/100,
        top:  ($winHeight * msg22Top )/100
    },0); 
    
    $('#dot-22').click(function(){
        
            $('#msg-22').toggle("slow");
    });


    /* dot-23 */
    $('#dot-23').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot23Left )/100,
        top:  ($winHeight * dot23Top )/100
    },0); 

     /* msg-23 */
    $('#msg-23').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg23Left )/100,
        top:  ($winHeight * msg23Top )/100
    },0); 
    
    $('#dot-23').click(function(){
        
            $('#msg-23').toggle("slow");
    });


     /* dot-24 */
    $('#dot-24').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot24Left )/100,
        top:  ($winHeight * dot24Top )/100
    },0); 

     /* msg-24 */
    $('#msg-24').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg24Left )/100,
        top:  ($winHeight * msg24Top )/100
    },0); 
    
    $('#dot-24').click(function(){
        
            $('#msg-24').toggle("slow");
    });



      /* dot-25 */
    $('#dot-25').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot25Left )/100,
        top:  ($winHeight * dot25Top )/100
    },0); 

     /* msg-25 */
    $('#msg-25').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * msg25Left )/100,
        top:  ($winHeight * msg25Top )/100
    },0); 
    
    $('#dot-25').click(function(){
        
            $('#msg-25').toggle("slow");
    });

     /* Welcome Div */
    $('#welcomeDiv').animate({
        backgroundColor: '#006666',
        width: $winWidth,
        height:($winHeight* 7)/100,
        marginTop: '-5px'
    },0);     
    
});
