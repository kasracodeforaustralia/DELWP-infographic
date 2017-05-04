
$(document).ready(function() {
    var $win = $(window);

    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();  
    var topPerc     = topPercfunc();

    $('.allBgs').animate({ 
        width:  $winWidth, 
        height: $winHeight     
    });
    
    /* ُCreating Place Holders (PH) for background (bg) images*/
    $('.bg5PH').animate({ width: $winWidth, height: ($bg5Height * $WidthPerc)/100    });
    $('.bg6PH').animate({width: $winWidth,height: ($bg6Height * $WidthPerc)/100}); 
    $('.bg7PH').animate({width: $winWidth,height: ($bg7Height * $WidthPerc)/100}); 
    $('.bg8PH').animate({width: $winWidth,height: ($bg8Height * $WidthPerc)/100}); 
    $('.bg9PH').animate({width: $winWidth,height: ($bg9Height * $WidthPerc)/100}); 
    $('.bg10PH').animate({width: $winWidth,height: ($bg10Height * $WidthPerc)/100}); 
    $('.bg11PH').animate({ width: $winWidth,height: ($bg11Height * $WidthPerc)/100}); 
    $('.bg12PH').animate({width: $winWidth,height: ($bg12Height * $WidthPerc)/100}); 
    $('.bg13PH').animate({width: $winWidth, height: ($bg13Height * $WidthPerc)/100}); 
    $('.bg14PH').animate({width: $winWidth,height: ($bg14Height * $WidthPerc)/100}); 
    
    
// ++++++++++++++++ dot and massages ++++++++++++++++++++
   $('#msg-1').animate({ 
        left: ( ($winWidth  * dot1Left )/100 + dotsW),
        top:  ( ($winHeight * dot1Top )/101 + dotsW)
    },0);
    
   /* msg-2 */
    $('#msg-2').animate({ 
        left: ( ($winWidth  * dot2Left )/100+ dotsW),
        top:  ( ($winHeight * dot2Top )/100 + dotsW)
    },0); 

    /* msg-3 */
    $('#msg-3').animate({ 
       left: ( ($winWidth  * dot3Left )/100 + dotsW),
        top:  ( ($winHeight * dot3Top )/100 + dotsW)
    },0); 

    /* msg-4 */
    $('#msg-4').animate({ 
        left: (($winWidth  * dot4Left )/100 + dotsW),
        top: ( ($winHeight * dot4Top )/100 + dotsW)
    },0); 
    
    /* msg-5 */
    $('#msg-5').animate({ 
        left: ( ($winWidth  * dot5Left )/100 + dotsW),
        top:  ( ($winHeight * dot5Top )/100 + dotsW)
    },0);

    /* msg-6 */
    $('#msg-6').animate({ 
        left: ( ($winWidth  * dot6Left )/100 -50),
        top: ( ($winHeight * dot6Top )/100 + dotsW)
    },0); 
    
     /* msg-7 */
    $('#msg-7').animate({ 
        left: ( ($winWidth  * dot7Left )/100 + dotsW),
        top:  ( ($winHeight * dot7Top )/100 + dotsW)
    },0); 
    

     /* msg-8 */
    $('#msg-8').animate({ 
        left: ( ($winWidth  * dot8Left )/100 + dotsW),
        top: ( ($winHeight * dot8Top )/100 + dotsW)
    },0); 

     /* msg-9 */
    $('#msg-9').animate({ 
       
        left: ( ($winWidth  * dot9Left )/100 + dotsW),
        top:  ( ($winHeight * dot9Top )/100 + dotsW)
    },0); 
    

     /* msg-10 */
    $('#msg-10').animate({ 
     
        left: (($winWidth  * dot10Left )/100 + dotsW),
        top:  (($winHeight * dot10Top )/100 + dotsW)
    },0);

    /* msg-11 */
    $('#msg-11').animate({ 
        left: ( ($winWidth  * dot11Left )/100 + dotsW),
        top:  ( ($winHeight * dot11Top )/100 + dotsW)
    },0); 

     /* msg-12 */
    $('#msg-12').animate({ 
        left: ( ($winWidth  * dot12Left )/100 + dotsW),
        top: ( ($winHeight * dot12Top )/100 + dotsW)
    },0); 
     

 	/* msg-13 */
    $('#msg-13').animate({ 
        left: ( ($winWidth  * dot13Left )/100 + dotsW),
        top:  ( ($winHeight * dot13Top )/100 + dotsW)
    },0);

    /* msg-14*/
    $('#msg-14').animate({ 
        left: (($winWidth  * dot14Left )/100 + dotsW),
        top: ( ($winHeight * dot14Top )/100 + dotsW)
    },0); 
    

     /* msg-15 */
    $('#msg-15').animate({ 
       left: ( ($winWidth  * dot15Left )/100 + dotsW),
        top: ( ($winHeight * dot15Top )/100 + dotsW)
    },0); 

    /* msg-16 */
    $('#msg-16').animate({ 
       left: ( ($winWidth  * dot16Left )/100 + dotsW),
        top: ( ($winHeight * dot16Top )/100 + dotsW)
    },0); 

   /* msg-17 */
    $('#msg-17').animate({ 
       left: ( ($winWidth  * dot17Left )/100 + dotsW),
        top: ( ($winHeight * dot17Top )/100 + dotsW)
    },0); 
    
     /* msg-18 */
    $('#msg-18').animate({ 
       left: (($winWidth  * dot18Left )/100 + dotsW),
        top: ( ($winHeight * dot18Top )/100 + dotsW)
    },0); 
    
     /* msg-19 */
    $('#msg-19').animate({ 
       left: ( ($winWidth  * dot19Left )/100 + dotsW),
        top: ( ($winHeight * dot19Top )/100 +dotsW)
    },0); 
    
  	/* msg-20 */
    $('#msg-20').animate({ 
       left: ( ($winWidth  * dot20Left )/100 + dotsW),
        top:  ( ($winHeight * dot20Top )/100+ dotsW)
    },0); 
    
     /* msg-21 */
    $('#msg-21').animate({ 
       	left: ( ($winWidth  * dot21Left )/100 + dotsW),
        top:  ( ($winHeight * dot21Top )/100+ dotsW)
    },0); 
    
     /* msg-22 */
    $('#msg-22').animate({ 
       	left: ( ($winWidth  * dot22Left )/100 + dotsW),
        top:  ( ($winHeight * dot22Top )/100+ dotsW)
    },0); 
    /* msg-23 */
    $('#msg-23').animate({ 
       	left: ( ($winWidth  * dot23Left )/100 + dotsW),
        top:  ( ($winHeight * dot23Top )/100 + dotsW)
    },0); 

    /* msg-24*/
    $('#msg-24').animate({ 
       	left: ( ($winWidth  * dot24Left )/100 + dotsW),
        top:  ( ($winHeight * dot24Top )/100 + dotsW)
    },0); 
    
    /*  msg-25 */
    $('#msg-25').animate({ 
       	left: ( ($winWidth  * dot25Left )/100 + dotsW),
        top:  ( ($winHeight * dot25Top )/100 + dotsW)
    },0); 


    /****** TOGGLING MESSAGES ******/

    $('#dot-1').click(function(){ 
        if ($('#msg-1').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-1').show("slow");   
        }
    });

    $('#dot-2').click(function(){
        if ($('#msg-2').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-2').show("slow");  
        }
        
    });

    $('#dot-3').click(function(){
        if ($('#msg-3').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-3').show("slow");  
        }
    });

    $('#dot-4').click(function(){
        if ($('#msg-4').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-4').show("slow");  
        }
    });

    $('#dot-5').click(function(){
        if ($('#msg-5').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-5').show("slow");  
        }
    });

    $('#dot-6').click(function(){
        if ($('#msg-6').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-6').show("slow");  
        }
    });

    $('#dot-7').click(function(){
        if ($('#msg-7').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-7').show("slow");  
        }
    });
    
    $('#dot-8').click(function(){
        if ($('#msg-8').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-8').show("slow");  
        }
    });

    $('#dot-9').click(function(){
        if ($('#msg-9').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-9').show("slow");  
        }
    });
    
    $('#dot-10').click(function(){
       if ($('#msg-10').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-10').show("slow");  
        }
    });

    $('#dot-11').click(function(){
       if ($('#msg-11').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-11').show("slow");  
        }
    });

    $('#dot-12').click(function(){
       if ($('#msg-12').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-12').show("slow");  
        }
    });

    $('#dot-13').click(function(){
       if ($('#msg-13').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-13').show("slow");  
        }
    });

    $('#dot-14').click(function(){
       if ($('#msg-14').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-14').show("slow");  
        }
    });

    $('#dot-15').click(function(){
       if ($('#msg-15').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-15').show("slow");  
        }
    });

    $('#dot-16').click(function(){
       if ($('#msg-16').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-16').show("slow");  
        }
    });

    $('#dot-17').click(function(){
       if ($('#msg-17').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-17').show("slow");  
        }
    });

    $('#dot-18').click(function(){
       if ($('#msg-18').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-18').show("slow");  
        }
    });

   $('#dot-19').click(function(){
       if ($('#msg-19').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-19').show("slow");  
        }
    });

    $('#dot-20').click(function(){
       if ($('#msg-20').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-20').show("slow");  
        }
    });
    $('#dot-21').click(function(){
       if ($('#msg-21').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-21').show("slow");  
        }
    });

    $('#dot-22').click(function(){
       if ($('#msg-22').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-22').show("slow");  
        }
    });

	$('#dot-23').click(function(){
       if ($('#msg-23').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-23').show("slow");  
        }
    });

	$('#dot-24').click(function(){
       if ($('#msg-24').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-24').show("slow");  
        }
    });

	$('#dot-25').click(function(){
       if ($('#msg-25').is(":visible")){
            $(".msg").hide("slow");
        }else{
            $(".msg").hide("slow");
            $('#msg-25').show("slow");  
        }
    });
 // ++++++++++++ Scroll bar ++++++++++++++ 
    if ($winWidth < 500){
        $('.NavScrollBar').hide();
        $('.slider').hide();
         
    }else{
        // set the current map width and height
        var mapWidth  = $winWidth  *2 /100;
        var mapheight = $winHeight *3 /100;

        // Finds the offset of the scroll bar to move the black box based on that
        var NavScrollBarOffset=$('.NavScrollBar').position();
        var NavScrollBarOffsetTop = NavScrollBarOffset.top;
        var NavScrollBarOffsetLeft= NavScrollBarOffset.left;    

        $('.NavScrollBar').show();
        $('.slider').show();
        
        /* Scroll Bar Navigation default settings  */
        $('.NavScrollBar').animate({
            opacity:0.7,
            width: mapWidth,
            height:mapheight,
        },0); 

        /* Box on the scroll bar default settings  */
        $('.slider').animate({
            opacity:0.6,
            width: ($winWidth  *4 /100),
            height:($winWidth  *2.3 /100),

            left: NavScrollBarOffsetLeft - (1/3*mapWidth),
            top:  NavScrollBarOffsetTop + ( mapheight * topPerc/100)
        },0);
           
    }
    
    $('.slider').draggable({ 
       containment: ".NavScrollBar",
       axis: "y"
    });
    
    $('.slider').mouseup(function() {
        /* This calclate the position of the 
        slider on scroll bar in terms of percentage */
        SliderPosPrec = ( ( $('.slider').position().top -NavScrollBarOffsetTop) * 100/ mapheight ) ;

        $(window).scrollTop(SliderPosPrec * $winHeight/100);
        //isDragging = false;
    });  
// +++++++++ end of scroll bar ++++++++++++++++    

    if( welcomeFlag ==1){
        
        if($win.width()/$win.height() <= 0.8){
            screenSize = "s";
             $('#welcomeDiv').animate({
                
                width: $winWidth,
                height:($winHeight* 19)/100
               
            },0); 
            
            // Main Progress bar settings
            $(".pBar").animate({
                width: ($winWidth* 50)/100,
                height:($winWidth* 4)/100,
                
                left: ($winWidth* 30)/100
            });
            
        }else if(0.8 < $win.width()/$win.height()  && $win.width()/$win.height() <= 1.1){
            screenSize = "m";
              $('#welcomeDiv').animate({
                
                width: $winWidth,
                height:($winHeight* 13)/100
                
            },0);   
            // Main Progress bar settings
            $(".pBar").animate({
                width: ($winWidth* 40)/100,
                height:($winWidth* 4)/100,
                
                left: ($winWidth* 30)/100
            }); 
                        
        }else if(1.1 < $win.width()/$win.height()){  
            screenSize = "l";
            $('#welcomeDiv').animate({
                width: $winWidth,
                height:($winHeight* 9)/100
            },0);  
            // Main Progress bar settings
            $(".pBar").animate({
                width: ($winWidth* 40)/100,
                height:($winWidth* 4)/100,
                
                left: ($winWidth* 30)/100
            });
                        
        }
   
        welcomeFlag = 0; 
    }    
      
    /* This takes user to the bottom of the page  */  
    $("body, html").animate({ scrollTop: 40000 }, 4000);       
    
    window.onload = function() {
     setTimeout (function () {
       $("body, html").animate({ scrollTop: 40000 }, 0);      
     });
    }      
    
 
}); // End of $(document).ready(function...

/*### Separatoring .ready and .resize funcs ###*/
/*##############-##-########-##-###############*/
/*#################---####---##################*/
/*####################----#####################*/
/*#####################--######################*/
/*#############################################*/


$( window ).resize(function() {
  
    var $win = $(window);
    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    
    $('.allBgs').animate({ 
        width:  $winWidth, 
        height: $winHeight     
    });
    
    /* ُCreating Place Holders (PH) for background (bg) images*/
    //$('.bg4PH').animate({ width: $winWidth, height: ($bg5Height * $WidthPerc)/100    });
    $('.bg5PH').animate({ width: $winWidth, height: ($bg5Height * $WidthPerc)/100    });
    $('.bg6PH').animate({width: $winWidth,height: ($bg6Height * $WidthPerc)/100}); 
    $('.bg7PH').animate({width: $winWidth,height: ($bg7Height * $WidthPerc)/100}); 
    $('.bg8PH').animate({width: $winWidth,height: ($bg8Height * $WidthPerc)/100}); 
    $('.bg9PH').animate({width: $winWidth,height: ($bg9Height * $WidthPerc)/100}); 
    $('.bg10PH').animate({width: $winWidth,height: ($bg10Height * $WidthPerc)/100}); 
    $('.bg11PH').animate({ width: $winWidth,height: ($bg11Height * $WidthPerc)/100}); 
    $('.bg12PH').animate({width: $winWidth,height: ($bg12Height * $WidthPerc)/100}); 
    $('.bg13PH').animate({width: $winWidth, height: ($bg13Height * $WidthPerc)/100}); 
    $('.bg14PH').animate({width: $winWidth,height: ($bg14Height * $WidthPerc)/100}); 
    
    welcomeFlag = 1;
    if( welcomeFlag ==1){

        if($win.width()/$win.height() <= 0.8){
            screenSize = "s";
             $('#welcomeDiv').animate({
                 width: $winWidth,
                 height:($winHeight* 20)/100
            },0); 
        }else if(0.8 < $win.width()/$win.height()  && $win.width()/$win.height() <= 1.1){
            screenSize = "m";
              $('#welcomeDiv').animate({
                width: $winWidth,
                height:($winHeight* 13)/100
            },0);          
        }else if(1.1 < $win.width()/$win.height()){  
            screenSize = "l";
            $('#welcomeDiv').animate({
                width: $winWidth,
                height:($winHeight* 9)/100
            },0);              
        }

        welcomeFlag = 0; 
    }  
  
    
});

    
/*## Separatoring .resize and onscroll funcs ##*/
/*##############-##-########-##-###############*/
/*#################---####---##################*/
/*####################----#####################*/
/*#####################--######################*/
/*#############################################*/ 


$(window).scroll(function(){
    var $win = $(window);
    
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
 
    var top = $(window).scrollTop();
    var topPerc     = topPercfunc();    
 

  
    if( top <=  $('.bg3PH').position().top  && bg5Flag == 1 && isBottomPage ==1 ){
       loadIMG('.bg5PH','img/spinner.gif','spinner');
       loadIMG('.bg5PH','img/14bgs/bg5.png','bg5 bg4s7');
       bg5Flag = 0;  
        
 
        $.ajax({
          xhr: function()
          {
            var xhr = new window.XMLHttpRequest();
            xhr.addEventListener("progress", function(evt){
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total * 100;
                  $("#pb5").show();
                  $("#pb5").val(percentComplete);
              }
            }, false);
            return xhr;
          },
          type: 'POST',
          url: "img/14bgs/bg5.png",
          data: {},
          success: function(data){
              $("#pb5").hide();  
          }
        });         
               
        
    }
    
    if( top <=  $('.bg4PH').position().top  && bg6Flag == 1 && isBottomPage ==1 ){
       loadIMG('.bg6PH','img/14bgs/bg6.png','bg6 bg4s7');
       bg6Flag = 0;  
        
        $.ajax({
          xhr: function()
          {
            var xhr = new window.XMLHttpRequest();
            xhr.addEventListener("progress", function(evt){
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total * 100;
                  $("#pb6").show();
                  $("#pb6").val(percentComplete);
              }
            }, false);
            return xhr;
          },
          type: 'POST',
          url: "img/14bgs/bg6.png",
          data: {},
          success: function(data){
              $("#pb6").hide();  
          }
        });             
        
    }
     
    if( top <=  $('.bg5PH').position().top  && bg7Flag == 1 && isBottomPage ==1 ){
           loadIMG('.bg7PH','img/14bgs/bg7.png','bg7 bg4s7');
           bg7Flag = 0;   
            
            $.ajax({
              xhr: function()
              {
                var xhr = new window.XMLHttpRequest();
                xhr.addEventListener("progress", function(evt){
                  if (evt.lengthComputable) {
                    var percentComplete = evt.loaded / evt.total * 100;
                      $("#pb7").show();
                      $("#pb7").val(percentComplete);
                  }
                }, false);
                return xhr;
              },
              type: 'POST',
              url: "img/14bgs/bg7.png",
              data: {},
              success: function(data){
                 $("#pb7").hide();  
              }
            });        
            
        
    }    
 
    if( top <=  $('.bg6PH').position().top  && bg8Flag == 1 && isBottomPage ==1 ){
       loadIMG('.bg8PH','img/14bgs/bg8.png','bg8 bg');
       bg8Flag = 0; 
        
        $.ajax({
          xhr: function()
          {
            var xhr = new window.XMLHttpRequest();
            xhr.addEventListener("progress", function(evt){
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total * 100;
                  $("#pb8").show();
                  $("#pb8").val(percentComplete);
              }
            }, false);
            return xhr;
          },
          type: 'POST',
          url: "img/14bgs/bg8.png",
          data: {},
          success: function(data){
              $("#pb8").hide();  
          }
        });        
        
    }  

    if( top <=  $('.bg7PH').position().top  && bg9Flag == 1 && isBottomPage ==1 ){
       loadIMG('.bg9PH','img/14bgs/bg9.png','bg9 bg');
       bg9Flag = 0;
        
        $.ajax({
          xhr: function()
          {
            var xhr = new window.XMLHttpRequest();
            xhr.addEventListener("progress", function(evt){
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total * 100;
                  $("#pb9").show();
                  $("#pb9").val(percentComplete);
              }
            }, false);
            return xhr;
          },
          type: 'POST',
          url: "img/14bgs/bg9.png",
          data: {},
          success: function(data){
              $("#pb9").hide();  
          }
        });        
        
    }  
  
    if( top <=  $('.bg8PH').position().top  && bg10Flag == 1 && isBottomPage ==1 ){
       loadIMG('.bg10PH','img/14bgs/bg10.png','bg10 bg');
       bg10Flag = 0;
        
        $.ajax({
          xhr: function()
          {
            var xhr = new window.XMLHttpRequest();
            xhr.addEventListener("progress", function(evt){
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total * 100;
                  $("#pb10").show();
                  $("#pb10").val(percentComplete);
              }
            }, false);
            return xhr;
          },
          type: 'POST',
          url: "img/14bgs/bg10.png",
          data: {},
          success: function(data){
             $("#pb10").hide();  
          }
        });        
        
    }    
  
    if( top <=  $('.bg9PH').position().top  && bg11Flag == 1 && isBottomPage ==1 ){
       loadIMG('.bg11PH','img/14bgs/bg11.png','bg11 bg');
       bg11Flag = 0;
        
        $.ajax({
          xhr: function()
          {
            var xhr = new window.XMLHttpRequest();
            xhr.addEventListener("progress", function(evt){
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total * 100;
                  $("#pb11").show();
                  $("#pb11").val(percentComplete);
              }
            }, false);
            return xhr;
          },
          type: 'POST',
          url: "img/14bgs/bg11.png",
          data: {},
          success: function(data){
              $("#pb11").hide();  
          }
        });         
        
    }     
   
    if( top <=  $('.bg10PH').position().top  && bg12Flag == 1 && isBottomPage ==1 ){
       loadIMG('.bg12PH','img/14bgs/bg12.png','bg12 bg');
       bg12Flag = 0;
        
        $.ajax({
          xhr: function()
          {
            var xhr = new window.XMLHttpRequest();
            xhr.addEventListener("progress", function(evt){
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total * 100;
                  $("#pb12").show();
                  $("#pb12").val(percentComplete);
              }
            }, false);
            return xhr;
          },
          type: 'POST',
          url: "img/14bgs/bg12.png",
          data: {},
          success: function(data){
              $("#pb12").hide();  
          }
        });         
        
    }     
    if( top <=  $('.bg11PH').position().top  &&bg13Flag == 1 && isBottomPage ==1 ){
       loadIMG('.bg13PH','img/14bgs/bg13.png','bg13 bg');
       bg13Flag = 0;
        
       $.ajax({
          xhr: function()
          {
            var xhr = new window.XMLHttpRequest();
            xhr.addEventListener("progress", function(evt){
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total * 100;
                  $("#pb13").show();
                  $("#pb13").val(percentComplete);
              }
            }, false);
            return xhr;
          },
          type: 'POST',
          url: "img/14bgs/bg13.png",
          data: {},
          success: function(data){
              $("#pb13").hide();
          }
        });         
        
    }
  
    if( top <=  $('.bg12PH').position().top  &&bg14Flag == 1 && isBottomPage ==1){
       loadIMG('.bg14PH','img/14bgs/bg14.png','bg14 bg');
       bg14Flag = 0;
        
        $.ajax({
          xhr: function()
          {
            var xhr = new window.XMLHttpRequest();
            xhr.addEventListener("progress", function(evt){
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total * 100;
                  $("#pb14").show();
                  $("#pb14").val(percentComplete);
              }
            }, false);
            return xhr;
          },
          type: 'POST',
          url: "img/14bgs/bg14.png",
          data: {},
          success: function(data){
              $("#pb14").hide();  
          }
        });         
        
     }
    
    
    
    
    /* Loads flood sing when reach bg 10*/ 
    if ( ($(window).scrollTop() <=$('.bg10PH').position().top) && floodSingFlag == 1 && isBottomPage ==1 ){
        loadIMG('.floodSignPH','img/section-789/gifs/floodSign.gif','floodSign item');
        floodSingFlag = 0;
    }    

    /* Flooding Sign default css  */
    $('.floodSign').animate({
        width: ($WidthPerc * floodSingW)/100,
        height:($HeightPerc* floodSingH)/100,
        
        left: ($winWidth  * (43)    )/100,
        top:  ($winHeight * (27.75) )/100
        
    },0);
   
    /* Loads wind mill when reach bg 10*/ 
    if ( ($(window).scrollTop() <=$('.bg10PH').position().top) && windMillFlag == 1 && isBottomPage ==1){
        loadIMG('.windMillPH','img/section-789/gifs/windMill.gif','windMill item');
        windMillFlag = 0;
    }    

    $('.windMill').animate({
        width: ($WidthPerc * windMillW)/100,
        height:($HeightPerc* windMillH)/100,
        
        left: ($winWidth  *(60) )/100,
        top:  ($winHeight *(24.5) )/100
    },0); 
 
    /* Loads fire when reach bg 9*/ 
    if ( ($(window).scrollTop() <=$('.bg9PH').position().top) && fireFlag == 1 && isBottomPage ==1){
        loadIMG('.firePH','img/section-789/gifs/fire.gif','fire item');
        fireFlag = 0;
        }    
    
    $('.fire').animate({
        width: ($WidthPerc * fireW)/100,
        height:($HeightPerc* fireH)/100,
        
        left: ($winWidth  * (18)    )/100,
        top:  ($winHeight * (17.45) )/100
    },0);
    
  
   /* Loads fireFighters when reach bg 9*/ 
    if ( ($(window).scrollTop() <=$('.bg9PH').position().top) && fireFightersFlag == 1 && isBottomPage ==1){
        loadIMG('.firefightersPH','img/section-789/Firefighters.png','firefighters item');
        fireFightersFlag = 0;
    }    
    
    $('.firefighters').animate({
        width: (($WidthPerc * firefightersW)/100)*130/100 ,
        height:(($HeightPerc* firefightersH)/100)*130/100,
        
        left: ($winWidth  * (9) )/100,
        top:  ($winHeight * (20.2) )/100
    },0);
    
 
    
    /* Loads footy Players when reach bg 8*/ 
    if ( ($(window).scrollTop() <=$('.bg8PH').position().top) && footyPlayersFlag == 1 && isBottomPage ==1){
        loadIMG('.footyPlayersPH','img/section-789/footyPlayers.png','footyPlayers item');
        footyPlayersFlag = 0;
        }      
    
    $('.footyPlayers').animate({
        width: (($WidthPerc * footyPlayersW)/100)*130/100 ,
        height:(($HeightPerc* footyPlayersH)/100)*130/100,
        
        left: ($winWidth  * (35) )/100,
        top:  ($winHeight * (34.2) )/100
    },0);      
 
    /* Loads cow when reach bg 8*/ 
    if ( ($(window).scrollTop() <=$('.bg8PH').position().top) && cowFlag == 1 && isBottomPage ==1){
        loadIMG('.cowPH','img/section-789/cow.png','cow item');
        cowFlag = 0;
    }    
    
    $('.cow').animate({
       width: ( ($WidthPerc * cowW)/100)*110/100,
       height:( ($HeightPerc* cowH)/100)*110/100,
       
       left: ($winWidth  *(64) )/100,
       top:  ($winHeight *(28.5) )/100
    },0);      
    
    /* Loads tractor when reach bg 8*/ 
    if ( ($(window).scrollTop() <=$('.bg8PH').position().top) && tractorFlag == 1 && isBottomPage ==1){
        loadIMG('.tractorPH','img/section-789/tractor.png','tractor item');
        tractorFlag = 0;
    }    
    
    $('.tractor').animate({
       width: ( ($WidthPerc * tractorW)/100)*110/100,
       height:( ($HeightPerc* tractorH)/100)*110/100,
       
       /*left: ($winWidth  *(18) )/100,
       top:  ($winHeight *(25) )/100 */
       left: ($winWidth  *(59) )/100,
       top:  ($winHeight *(31.3) )/100
    },0);  
    
   /* Loads buldozer when reach bg 7*/ 
    if ( ($(window).scrollTop() <=$('.bg7PH').position().top) && bulldozerFlag == 1 && isBottomPage ==1){
        loadIMG('.bulldozerPH','img/section-789/bulldozer.png','bulldozer item');
        bulldozerFlag = 0;
    }    
    
    $('.bulldozer').animate({
       width: ( ($WidthPerc * bulldozerW)/100)*150/100,
       height:( ($HeightPerc* bulldozerH)/100)*150/100,
       
       left: ($winWidth  *(75) )/100,
       top:  ($winHeight *(41.3) )/100
    },0);  
    

    /* tent */
    if ( ($(window).scrollTop() <=$('.bg10PH').position().top) && tentFlag == 1 && isBottomPage ==1){
        loadIMG('.tentPH','img/section-789/tent.png','tent item');
        tentFlag = 0;
    }   
   $('.tent').animate({
       width: ($WidthPerc * tentW)/100,
       height:($HeightPerc* tentH)/100,
       
        left: ($winWidth  * tentLeft)/100,
        top:  ($winHeight * tentTop)/100
    },0);

    /* firecamp */
    if ( ($(window).scrollTop() <=$('.bg10PH').position().top) && campfireFlag == 1 && isBottomPage ==1){
        loadIMG('.campfirePH','img/section-789/campfire.png','campfire item');
        firecampFlag = 0;
    }   
    $('.campfire').animate({
       width: ($WidthPerc * firecampW)/100,
       height:($HeightPerc* firecampH)/100,
       
        left: ($winWidth  * firecampLeft)/100,
        top:  ($winHeight * firecampTop)/100
    },0);
    
    // This if else statement makes usre the user is at the bottom of the pages and then starts loading images based on the user scrol (by setting isBottomFlag to 1)
    if(topPercfunc()>=94 && screenSize == "s"){
        counter++;
        if(counter >= 2){
            isBottomPage = 1;
        }
     }else if(topPercfunc()>=100 && screenSize == "m" ){
        counter++;
        if(counter >= 10){
            isBottomPage = 1;
        }
     }else if(topPercfunc()>=96 && screenSize == "l" ){
        counter++;
        if(counter >= 10){
            isBottomPage = 1;
        }
     }
  
    
    
// ------------- Items animation controls ----------------    
      
// +++++++++++++++ Birds ++++++++++++++++++++++++
    if( ($(window).scrollTop() <=  $('.bg10PH').position().top)  && birdsFlag == 1 && isBottomPage == 1){
        loadIMG('.birdsPH','img/section-789/gifs/birds.gif','birds item hiddenItem');
        birdsFlag = 0;  
    }     

     
    if (topPerc <= 1.42){
        $('.birds').show();
        $('.birds').animate({
            width: ($WidthPerc * birdsW)/100,
            height:($HeightPerc* birdsH)/100,

            left: ($winWidth  *(0) )/100,
            top:  ($winHeight *(-0.5) )/100
        },0);            
    }else if (topPerc >1.42){
         $('.birds').hide();
    }

// +++++++++++++++ Turbines ++++++++++++++++++++++++
    
    if ( ($(window).scrollTop() <= $('.bg10PH').position().top) && turbineFlag == 1 && isBottomPage ==1){

        loadIMG('.turbine1PH','img/section-789/gifs/turbine.gif','turbine turbine1 item');

        loadIMG('.turbine2PH','img/section-789/gifs/turbine.gif','turbine turbine2 item');

        loadIMG('.turbine3PH','img/section-789/gifs/turbine.gif','turbine turbine3 item');
        
        loadIMG('.turbine4PH','img/section-789/gifs/turbine.gif','turbine turbine4 item');
        
        loadIMG('.turbine5PH','img/section-789/gifs/turbine.gif','turbine turbine5 item');
        
        loadIMG('.turbine6PH','img/section-789/gifs/turbine.gif','turbine turbine6 item');
        turbineFlag = 0;        
        
    }
    
         /* -------  All turbines ------*/
    $('.turbine1').animate({
        width: (($WidthPerc * turbineW)/100) *60 /100,
        height:(($HeightPerc* turbineH)/100) *60 /100,

        left: ($winWidth  *(18) )/100,
        top:  ($winHeight *(2.2) )/100
    },0); 


    $('.turbine2').animate({
        width: (($WidthPerc * turbineW)/100) *100 /100,
        height:(($HeightPerc* turbineH)/100) *100 /100,

        left: ($winWidth  *(27) )/100,
        top:  ($winHeight *(2) )/100
    },0);

    $('.turbine3').animate({
        width: ( (($WidthPerc * turbineW)/100) ) *70 /100,
        height:( (($HeightPerc* turbineH)/100 ) *70 /100),

        left: ($winWidth  *(40) )/100,
        top:  ($winHeight *(1.95) )/100
    },0);

    $('.turbine4').animate({
        width: (($WidthPerc * turbineW)/100) *95 /100,
        height:(($HeightPerc* turbineH)/100) *95 /100,

        left: ($winWidth  *(50) )/100,
        top:  ($winHeight *(1.8) )/100
    },0);

    $('.turbine5').animate({
        width: (($WidthPerc * turbineW)/100) *75 /100,
        height:(($HeightPerc* turbineH)/100) *75 /100,

        left: ($winWidth  *(62) )/100,
        top:  ($winHeight *(2) )/100
    },0);

    $('.turbine6').animate({
        width: (($WidthPerc * turbineW)/100) *95 /100,
        height:(($HeightPerc* turbineH)/100) *95 /100,

        left: ($winWidth  *(73) )/100,
        top:  ($winHeight *(2.2) )/100
    },0);  
       
 // +++++++++++++++ cloud2 ++++++++++++++++++++++++

    var padTop = (0.85 * ($WidthPerc * cloud2W)/100) ; // This calculation says, the small cloud should always have padding to top like 1.4 times of it's dynamic width value


    if( ($(window).scrollTop() <=  $('.bg9PH').position().top)  && cloud2Flag == 1 && isBottomPage ==1){
        loadIMG('.cloud2PH','img/section-789/Cloud.png','cloud2 item hiddenItem');
        cloud2Flag = 0;
    } 
    
    if ( ($(window).scrollTop() <=$('.bg9PH').position().top) && cloud2Flag == 1 && isBottomPage ==1){
        loadIMG('.cloud2PH','img/section-789/Cloud.png','cloud2 item hiddenItem');
        cloud2Flag = 0;
    }

    /* cloud2 setting */    
    if (topPerc <= 0.5){
        $('.cloud2').show();
        $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(82) )/100,
            top:  (top + padTop)
        },0);
    }else if (topPerc >0.5 && topPerc <= 1){
         $('.cloud2').show();
         $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(72) )/100,
             top:  (top + padTop)
        },0); 
    }else if (topPerc >1 && topPerc <= 1.5){
         $('.cloud2').show();
         $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(62) )/100,
             top:  (top + padTop)
        },0); 
    }else if (topPerc >1.5 && topPerc <= 2){
         $('.cloud2').show();
         $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(52) )/100,
             top:  (top + padTop)
        },0); 
    }else if (topPerc >2 && topPerc <= 2.5){
        $('.cloud2').show();
        $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(42) )/100,
             top:  (top + padTop)
        },0); 
    }else if (topPerc > 2.5 && topPerc <=3 ){
         $('.cloud2').show();
         $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(32) )/100,
             top:  (top + padTop)
        },0); 
    }else if (topPerc >3 && topPerc <= 3.5 ){
         $('.cloud2').show();
         $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(22) )/100,
            top:  (top + padTop)
        },0); 
    }else if (topPerc > 3.5 && topPerc <= 4 ){
        $('.cloud2').show(); 
        $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(12) )/100,
            top:  (top + padTop)
        },0); 
    }else if (topPerc > 4 && topPerc <= 4.5 ){
        $('.cloud2').show();
        $('.cloud2').animate({
            width: (($WidthPerc * cloud2W)/100) *smallCloud/100,
            height:(($HeightPerc* cloud2H)/100) *smallCloud/100,

            left: ($winWidth  *(1) )/100,
            top:  (top + padTop)
        },0); 
    }else {
        $('.cloud2').hide();
    }
 // +++++++++++++++ cloud ++++++++++++++++++++++++    
 
    if( ($(window).scrollTop() <=  $('.bg9PH').position().top)  && cloudFlag == 1 && isBottomPage ==1){
        loadIMG('.cloudPH','img/section-789/Cloud.png','cloud item hiddenItem');
        cloudFlag = 0;
    }         
    if ( ($(window).scrollTop() <=$('.bg9PH').position().top) && cloudFlag == 1 && isBottomPage ==1){

        loadIMG('.cloudPH','img/section-789/Cloud.png','cloud item hiddenItem');
        cloudFlag = 0;
    }

    var padTop = (0.45 * ($WidthPerc * cloudW)/100) ; // This calculation says, the big cloud should always have padding to top like 1.4 times of it's dynamic width value
    //console.log("padTop is: " +padTop);
    //console.log("padTop1 is: " +padTop1);


    /* cloud setting */    
    if (topPerc <= 0.5){
        $('.cloud').show();
        $('.cloud').animate({
            width: ($WidthPerc * cloudW)/100,
            height:($WidthPerc * cloudH)/100,

            left: ($winWidth  *(78) )/100,
            top:  (top + padTop)
        },0);
    }else if (topPerc > 0.5 && topPerc <= 1 ){
        $('.cloud').show();
        $('.cloud').animate({
            width: ($WidthPerc * cloudW)/100,
            height:($WidthPerc * cloudH)/100,

            left: ($winWidth  *(72) )/100,
            top:  (top + padTop)
        },0); 
    }else if (topPerc >1 && topPerc <= 1.5 ){
        $('.cloud').show();
        $('.cloud').animate({
            width: ($WidthPerc * cloudW)/100,
            height:($WidthPerc * cloudH)/100,

            left: ($winWidth  *(65) )/100,
            top:  (top + padTop)
        },0); 
    }else if (topPerc >1.5 && topPerc <= 2){
         $('.cloud').show();
        $('.cloud').animate({
            width: ($WidthPerc * cloudW)/100,
            height:($WidthPerc * cloudH)/100,

            left: ($winWidth  *(58) )/100,
            top:  (top + padTop)
        },0); 
    }else if (topPerc >2 && topPerc <= 2.5){
        $('.cloud').show();
        $('.cloud').animate({
            width: ($WidthPerc * cloudW)/100,
            height:($HeightPerc* cloudH)/100,

            left: ($winWidth  *(50) )/100,
            top:  (top + padTop)
        },0); 
    }else if (topPerc > 2.5 && topPerc <=3 ){
         $('.cloud').show();
         $('.cloud').animate({
            width: ($WidthPerc * cloudW)/100,
            height:($HeightPerc* cloudH)/100,

            left: ($winWidth  *(42) )/100,
             top:  (top + padTop)
        },0); 
    }else if (topPerc >3 && topPerc <= 3.5 ){
         $('.cloud').show();
         $('.cloud').animate({
            width: ($WidthPerc * cloudW)/100,
            height:($HeightPerc* cloudH)/100,

            left: ($winWidth  *(36) )/100,
            top:  (top + padTop)
        },0); 
    }else if (topPerc > 3.5 && topPerc <= 4 ){
         $('.cloud').show();
         $('.cloud').animate({
            width: ($WidthPerc * cloudW)/100,
            height:($HeightPerc* cloudH)/100,

            left: ($winWidth  *(28) )/100,
             top:  (top + padTop)
        },0); 
    }else if (topPerc > 4 && topPerc <= 4.5 ){
         $('.cloud').show();
         $('.cloud').animate({
            width: ($WidthPerc * cloudW)/100,
            height:($HeightPerc* cloudH)/100,

            left: ($winWidth  *(20) )/100,
             top:  (top + padTop)
        },0); 
    }else if (topPerc > 4.5 && topPerc <= 5 ){
        $('.cloud').show();
        $('.cloud').animate({
            width: ($WidthPerc * cloudW)/100,
            height:($HeightPerc* cloudH)/100,

            left: ($winWidth  *(12) )/100,
             top:  (top + padTop)
        },0); 
    }else if (topPerc > 5 && topPerc <= 5.5 ){
        $('.cloud').show();
        $('.cloud').animate({
            width: ($WidthPerc * cloudW)/100,
            height:($HeightPerc* cloudH)/100,

            left: ($winWidth  *(0.5) )/100,
            top:  (top + padTop)
        },0); 
    }else {
        $('.cloud').hide();

    }
// ++++++++++++++KangarooKid2 +++++++++++++++++++++   
   
    if( ($(window).scrollTop() <=  $('.bg7PH').position().top)  && kangarookid2Flag == 1 && isBottomPage ==1){
        loadIMG('.kangarookid2PH','img/section-789/gifs/kangaroo2.gif','kangarookid2 item');
        kangarookid2Flag = 0;

        kang2IMG.src ='img/section-789/gifs/kangaroo2.gif';
        frameCha2 = 1;            
    } 

    if (topPerc <= 0.2){
        $('.kangarookid2').hide();
    }else if (topPerc > 4 && topPerc <= 5 ){
        $('.kangarookid2').show();
        $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:( ($WidthPerc * kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(75) )/100,
            top:  ($winHeight *(15.4) )/100
        },0); 
    }else if (topPerc >5 && topPerc <= 6 ){
        $('.kangarookid2').show();
        $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($WidthPerc * kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(68) )/100,
            top:  ($winHeight *(15.5) )/100
        },0); 
    }else if (topPerc >6 && topPerc <=7){
         $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($WidthPerc * kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(60) )/100,
            top:  ($winHeight *(15.3) )/100
        },0); 
    }else if (topPerc >7 && topPerc <=8){
        $('.kangarookid2').show();
        $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:( ($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(53) )/100,
            top:  ($winHeight *(15.2) )/100
        },0); 
    }else if (topPerc >8 && topPerc <=9 ){
         $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(45) )/100,
            top:  ($winHeight *(15.6) )/100
        },0); 
    }else if (topPerc >9 && topPerc <=10 ){
         $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(38) )/100,
            top:  ($winHeight *(15.4) )/100
        },0); 
    }else if (topPerc >10 && topPerc <=11 ){
         $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(30) )/100,
            top:  ($winHeight *(15.6) )/100
        },0); 
    }else if (topPerc >11 && topPerc <=12 ){
         $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(22) )/100,
            top:  ($winHeight *(15.7) )/100
        },0); 
    }else if (topPerc >12 && topPerc <=13 ){
        $('.kangarookid2').show();
        if (frameCha2 == 1){
           $('.kangarookid2').attr('src',kang2IMG.src);
            frameCha2=0;
        }
        $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(17) )/100,
            top:  ($winHeight *(15.5) )/100
        },0); 
    }else if (topPerc >13 && topPerc <= 14 ){
        $('.kangarookid2').show();
        /* This if statement changes the rhythm of the kangaroo kid animation  */ 
        if (frameCha2 == 1){
           $('.kangarookid2').attr('src',kang2IMG.src);
            frameCha2=0;
        }
        /* ----------------------------------- */
         $('.kangarookid2').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(11) )/100,
            top:  ($winHeight *(15.3) )/100
        },0); 
    }else if (topPerc >20){
        $('.kangarookid2').hide();
    }   
    
  // ++++++++++++++KangarooKid1 +++++++++++++++++++++   
        
      if( ($(window).scrollTop() <=  $('.bg7PH').position().top)  && kangarookid1Flag == 1 && isBottomPage ==1){
        loadIMG('.kangarookid1PH','img/section-789/gifs/kangaroo1.gif','kangarookid1 item');
        kangarookid1Flag = 0;
          
        kang1IMG.src ='img/section-789/gifs/kangaroo1.gif';
        frameCha1 = 1;            
    }

    if (topPerc <= 0.2){
        $('.kangarookid1').hide();
    }else if (topPerc > 4 && topPerc <= 5 ){
        $('.kangarookid1').show();
        $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:( ($WidthPerc * kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(82) )/100,
            top:  ($winHeight *(13.8) )/100
        },0); 
    }else if (topPerc >5 && topPerc <= 6 ){
        $('.kangarookid1').show();
        $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($WidthPerc * kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(80) )/100,
            top:  ($winHeight *(13.5) )/100
        },0); 
    }else if (topPerc >6 && topPerc <=7){
        $('.kangarookid1').show();
        $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($WidthPerc * kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(70) )/100,
            top:  ($winHeight *(13.6) )/100
        },0); 
    }else if (topPerc >7 && topPerc <=8){
         $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:( ($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(62) )/100,
            top:  ($winHeight *(13.7) )/100
        },0); 
    }else if (topPerc >8 && topPerc <=9 ){
         $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(53) )/100,
            top:  ($winHeight *(13.7) )/100
        },0); 
    }else if (topPerc >9 && topPerc <=10 ){
         $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(47) )/100,
            top:  ($winHeight *(14.2) )/100
        },0); 
    }else if (topPerc >10 && topPerc <=11 ){
        $('.kangarookid1').show();
        $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(42) )/100,
            top:  ($winHeight *(14.4) )/100
        },0); 
    }else if (topPerc >11 && topPerc <=12 ){
         if (frameCha1 == 1){
            $('.kangarookid1').attr('src',kang1IMG.src);
            frameCha1 =0;
         } 
         $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(35) )/100,
            top:  ($winHeight *(14.3) )/100
        },0); 
    }else if (topPerc >12 && topPerc <=13 ){
         $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(27) )/100,
            top:  ($winHeight *(14.2) )/100
        },0); 
    }else if (topPerc >13 && topPerc <= 14 ){
        $('.kangarookid1').show();
        $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(20) )/100,
            top:  ($winHeight *(14.4) )/100
        },0); 
    }else if (topPerc >14 && topPerc <= 15 ){
        $('.kangarookid1').show();
        /* This if statement changes the rhythm of the kangaroo kid animation  */ 
        if (frameCha1 == 1){
           $('.kangarookid1').attr('src',kang1IMG.src);
            frameCha1 =0;
        }    
    }else if (topPerc >20){        
       $('.kangarookid1').hide();
    }
// ++++++++++++++Kangaroo +++++++++++++++++++++  
    
    if( ($(window).scrollTop() <=  $('.bg7PH').position().top)  && kangarooFlag == 1 && isBottomPage ==1){
        loadIMG('.kangarooPH','img/section-789/gifs/kangaroo.gif','kangaroo item');
        kangarooFlag = 0;
    } 

    if (topPerc <= 0.2){
        $('.kangaroo').hide();
    }else if (topPerc > 1 && topPerc <= 2 ){
        $('.kangaroo').show();
        $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($WidthPerc * kangarooH)/100,

            left: ($winWidth  *(60) )/100,
            top:  ($winHeight *(13.9) )/100
        },0); 
    }else if (topPerc > 2 && topPerc <= 3 ){
        $('.kangaroo').show();
        $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($WidthPerc * kangarooH)/100,

            left: ($winWidth  *(56) )/100,
            top:  ($winHeight *(13.9) )/100
        },0); 
    }else if (topPerc > 3 && topPerc <= 4 ){
        $('.kangaroo').show();
        $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($WidthPerc * kangarooH)/100,

            left: ($winWidth  *(50) )/100,
            top:  ($winHeight *(13.9) )/100
        },0); 
    }else if (topPerc > 4 && topPerc <= 5 ){
        $('.kangaroo').show();
        $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($WidthPerc * kangarooH)/100,

            left: ($winWidth  *(46) )/100,
            top:  ($winHeight *(13.9) )/100
        },0); 
    }else if (topPerc > 5 && topPerc <= 6 ){
        $('.kangaroo').show();
        $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($WidthPerc * kangarooH)/100,

            left: ($winWidth  *(42) )/100,
            top:  ($winHeight *(13.9) )/100
        },0); 
    }else if (topPerc > 6 && topPerc <= 7 ){
        $('.kangaroo').show();
        $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($WidthPerc * kangarooH)/100,

            left: ($winWidth  *(38) )/100,
            top:  ($winHeight *(14) )/100
        },0); 
    }else if (topPerc > 7 && topPerc <= 8 ){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($WidthPerc * kangarooH)/100,

            left: ($winWidth  *(34) )/100,
            top:  ($winHeight *(14.1) )/100
        },0); 
    }else if (topPerc > 8 && topPerc <= 9 ){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(30) )/100,
            top:  ($winHeight *(14.3) )/100
        },0); 
    }else if (topPerc > 9 && topPerc <= 10 ){
         $('.kangaroo').show();
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(26) )/100,
            top:  ($winHeight *(14.2) )/100
        },0); 
    }else if (topPerc >10 && topPerc <=11 ){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(22) )/100,
            top:  ($winHeight *(14.3) )/100
        },0); 
    }else if (topPerc >11 && topPerc <=12 ){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(18) )/100,
            top:  ($winHeight *(14.5) )/100
        },0); 
    }else if (topPerc >12 && topPerc <=13 ){
         $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(14) )/100,
            top:  ($winHeight *(14.4) )/100
        },0); 
    }else if (topPerc >13 && topPerc <=14 ){
        $('.kangaroo').show();
        $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(10) )/100,
            top:  ($winHeight *(14.5) )/100
        },0); 
    }else if (topPerc >14 && topPerc <= 15 ){
        $('.kangaroo').show();
        $('.kangaroo').animate({
            width: ($WidthPerc * kangarooW)/100,
            height:($HeightPerc* kangarooH)/100,

            left: ($winWidth  *(6) )/100,
            top:  ($winHeight *(14.6) )/100
        },0); 
    }else if (topPerc >20){
        $('.kangaroo').hide();
    }
// ++++++++++++++ Footy +++++++++++++++++++++  
    if( ($(window).scrollTop() <=  $('.bg8PH').position().top)  && footyFlag == 1 && isBottomPage ==1){
       loadIMG('.footyPH','img/section-789/footy.png','footy item hiddenItem');
       footyFlag = 0;
    } 

    
    if (topPerc <= 24){
        //$('.footy').css("opacity", 0);
    }else if (topPerc >24 && topPerc <=25){
        $('.footy').show();
         $('.footy').animate({
            width: ( ($WidthPerc * footyW)/100)*40/100,
            height:( ($HeightPerc* footyH)/100)*40/100,

            left: ($winWidth  *(32) )/100,
            top:  ($winHeight *(35.8) )/100
        },0); 
    }else if (topPerc >25 && topPerc <=26 ){
        $('.footy').show();
         $('.footy').animate({
            width: ( ($WidthPerc * footyW)/100)*39/100,
            height:( ($HeightPerc* footyH)/100)*39/100,

            left: ($winWidth  *(35) )/100,
            top:  ($winHeight *(35.5) )/100
        },0); 
    }else if (topPerc >26 && topPerc <=27 ){
         $('.footy').animate({
            width: ( ($WidthPerc * footyW)/100)*38/100,
            height:( ($HeightPerc* footyH)/100)*38/100,

            left: ($winWidth  *(38) )/100,
            top:  ($winHeight *(35.2) )/100
        },0); 
    }else if (topPerc >27 && topPerc <=28 ){
         $('.footy').animate({
            width: ( ($WidthPerc * footyW)/100)*37/100,
            height:( ($HeightPerc* footyH)/100)*37/100,

            left: ($winWidth  *(42) )/100,
            top:  ($winHeight *(35) )/100
        },0); 
    }else if (topPerc >28 && topPerc <=29 ){
         $('.footy').animate({
            width: ( ($WidthPerc * footyW)/100)*36/100,
            height:( ($HeightPerc* footyH)/100)*36/100,

            left: ($winWidth  *(45) )/100,
            top:  ($winHeight *(34.8) )/100
        },0); 
    }else if (topPerc >29 && topPerc <=30 ){
         $('.footy').animate({
            width: ( ($WidthPerc * footyW)/100)*35/100,
            height:( ($HeightPerc* footyH)/100)*35/100,

            left: ($winWidth  *(48) )/100,
            top:  ($winHeight *(34.7) )/100
        },0); 
    }else if (topPerc >30 && topPerc <= 31 ){
        $('.footy').show();
         $('.footy').animate({
            width: ( ($WidthPerc * footyW)/100)*34/100,
            height:( ($HeightPerc* footyH)/100)*34/100,

            left: ($winWidth  *(52) )/100,
            top:  ($winHeight *(34.6) )/100
        },0); 
    }else if (topPerc >31 && topPerc <= 32 ){
        $('.footy').show();
         $('.footy').animate({
            width: ( ($WidthPerc * footyW)/100)*33/100,
            height:( ($HeightPerc* footyH)/100)*33/100,

            left: ($winWidth  *(55) )/100,
            top:  ($winHeight *(34.6) )/100
        },0); 
    }else if (topPerc >32 && topPerc <= 33 ){
        $('.footy').show();
         $('.footy').animate({
            width: ( ($WidthPerc * footyW)/100)*32/100,
            height:( ($HeightPerc* footyH)/100)*32/100,

            left: ($winWidth  *(56) )/100,
            top:  ($winHeight *(34.6) )/100
        },0); 
    }else if (topPerc >33 && topPerc <= 34 ){
         $('.footy').animate({
            width: ( ($WidthPerc * footyW)/100)*32/100,
            height:( ($HeightPerc* footyH)/100)*32/100,

            left: ($winWidth  *(58) )/100,
            top:  ($winHeight *(34.65) )/100
        },0); 
    }else if (topPerc >34 && topPerc <= 35 ){
        $('.footy').show();
         $('.footy').animate({
            width: ( ($WidthPerc * footyW)/100)*32/100,
            height:( ($HeightPerc* footyH)/100)*32/100,

            left: ($winWidth  *(58.8) )/100,
            top:  ($winHeight *(34.7) )/100
        },0); 
    }else if (topPerc >35){
        $('.footy').hide();
    }
// ++++++++++++++ Garbage Truck +++++++++++++++++++++ 
    if( ($(window).scrollTop() <=  $('.bg7PH').position().top)  && garbageTruckFlag == 1 && isBottomPage ==1){
        loadIMG('.garbageTruckPH','img/section-789/garbagetruck.png','garbageTruck item');
        garbageTruckFlag = 0;
    } 

    /* garbage truck */    
    if (topPerc <= 31){
        $('.garbageTruck').css("opacity", 1);
    }else if (topPerc > 31 && topPerc <= 32 ){
        $('.garbageTruck').animate({
            width: ($WidthPerc * garbagetruckW)/100,
            height:($HeightPerc* garbagetruckH)/100,

            left: ($winWidth  *(85.9) )/100,
            top:  ($winHeight *(40.88) )/100,
            opacity:1
        },0); 
    }else if (topPerc >32 && topPerc <= 33 ){ 
        $('.garbageTruck').animate({
            width: ($WidthPerc * garbagetruckW)/100,
            height:($HeightPerc* garbagetruckH)/100,

            left: ($winWidth  *(80) )/100,
            top:  ($winHeight *(40.60) )/100,
            opacity:1
        },0); 
    }else if (topPerc >33 && topPerc <=34){
         $('.garbageTruck').animate({
            width: ($WidthPerc * garbagetruckW)/100,
            height:($HeightPerc* garbagetruckH)/100,

            left: ($winWidth  *(65) )/100,
            top:  ($winHeight *(39.88) )/100,
            opacity:1
        },0); 
    }else if (topPerc >34 && topPerc <=35){
         $('.garbageTruck').animate({
            width: ($WidthPerc * garbagetruckW)/100,
            height:($HeightPerc* garbagetruckH)/100,

            left: ($winWidth  *(50) )/100,
            top:  ($winHeight *(39.15) )/100,
            opacity:1
        },0); 
    }else if (topPerc >35 && topPerc <=36 ){
         $('.garbageTruck').animate({
            width: ($WidthPerc * garbagetruckW)/100,
            height:($HeightPerc* garbagetruckH)/100,

            left: ($winWidth  *(38) )/100,
            top:  ($winHeight *(38.58) )/100,
            opacity:1
        },0); 
    }else if (topPerc >36 && topPerc <=37 ){
         $('.garbageTruck').animate({
            width: ($WidthPerc * garbagetruckW)/100,
            height:($HeightPerc* garbagetruckH)/100,

            left: ($winWidth  *(27) )/100,
            top:  ($winHeight *(38.05) )/100,
            opacity:1
        },0); 
    }else if (topPerc >37 && topPerc <=38 ){
         $('.garbageTruck').animate({
            width: ($WidthPerc * garbagetruckW)/100,
            height:($HeightPerc* garbagetruckH)/100,

            left: ($winWidth  *(16) )/100,
            top:  ($winHeight *(37.52) )/100,
            opacity:1
        },0); 
    }else if (topPerc >38 && topPerc <=39 ){
         $('.garbageTruck').animate({
            width: ($WidthPerc * garbagetruckW)/100,
            height:($WidthPerc * garbagetruckH)/100,

            left: ($winWidth  *(10) )/100,
            top:  ($winHeight *(37.24) )/100,
            opacity:1
        },0); 
    }else if (topPerc >39 && topPerc <=40 ){
         $('.garbageTruck').animate({
            width: ($WidthPerc * garbagetruckW)/100,
            height:($WidthPerc * garbagetruckH)/100,

            left: ($winWidth  *(4) )/100,
            top:  ($winHeight *(36.95) )/100,
            opacity:1
        },0); 
    }else if (topPerc >40 && topPerc <= 41 ){
         $('.garbageTruck').animate({
            width: ($WidthPerc * garbagetruckW)/100,
            height:($WidthPerc * garbagetruckH)/100,

            left: ($winWidth  *(1) )/100,
            top:  ($winHeight *(36.80) )/100,
            opacity:1
        },0); 
    }else if (topPerc >41 ){
        $('.garbageTruck').css("opacity", 0);
    }
// ++++++++++++++ Bike +++++++++++++++++++++ 
    
    if( ($(window).scrollTop() <=  $('.bg5PH').position().top)  && bikeFlag == 1 && isBottomPage == 1){
        loadIMG('.bikePH','img/section-789/bike.png','bike item hiddenItem');
        bikeFlag = 0;    
    }  
   /*  End of loading the bike */
    
    if (topPerc <= 37){
        $('.bike').hide();
    }else if (topPerc > 37 && topPerc <= 38 ){
        $('.bike').show();
        $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(27) )/100,
            top:  ($winHeight *(49.46) )/100
        },0); 
    }else if (topPerc >38 && topPerc <= 39 ){ 
        $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(25) )/100,
            top:  ($winHeight *(49.38) )/100
        },0); 
    }else if (topPerc >39 && topPerc <=40){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(23) )/100,
            top:  ($winHeight *(49.23) )/100
        },0); 
    }else if (topPerc >40 && topPerc <=41){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(21) )/100,
            top:  ($winHeight *(49.15) )/100
        },0); 
    }else if (topPerc >41 && topPerc <=42 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(19) )/100,
            top:  ($winHeight *(49.06) )/100
        },0); 
    }else if (topPerc >42 && topPerc <=43 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(17) )/100,
            top:  ($winHeight *(48.97) )/100
        },0); 
    }else if (topPerc >43 && topPerc <=44 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(15) )/100,
            top:  ($winHeight *(48.88) )/100
        },0); 
    }else if (topPerc >44 && topPerc <=45 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(13) )/100,
            top:  ($winHeight *(48.79) )/100
        },0); 
    }else if (topPerc >45 && topPerc <=46 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(11) )/100,
            top:  ($winHeight *(48.71) )/100
        },0); 
    }else if (topPerc >46 && topPerc <= 47 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(9) )/100,
            top:  ($winHeight *(48.61) )/100
        },0); 
    }else if (topPerc >47 && topPerc <= 48 ){
         $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(7) )/100,
            top:  ($winHeight *(48.51) )/100,
            opacity:1
        },0); 
    }else if (topPerc >48 && topPerc <= 49 ){
        $('.bike').show(); 
        $('.bike').animate({
            width: ( ($WidthPerc * bikeW)/100)*120/100,
            height:( ($HeightPerc* bikeH)/100)*120/100,

            left: ($winWidth  *(5) )/100,
            top:  ($winHeight *(48.43) )/100
        },0); 
    }else if (topPerc >49){
        $('.bike').hide();
    }
// +++++++++++++ White car near the bike +++++++++++++++++ 
  
     if( ($(window).scrollTop() <=  $('.bg5PH').position().top)  && whiteCarFlag == 1 && isBottomPage ==1){
        loadIMG('.whiteCarPH','img/section-789/whiteCar.png','whiteCar item hiddenItem');
        whiteCarFlag = 0;         
    }  
    

    if (topPerc <= 37){
        $('.whiteCar').show();
    }else if (topPerc >39 && topPerc <=40){
        $('.whiteCar').show();
        $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*120/100,
            height:( ($HeightPerc* whiteCarH)/100)*120/100,

            left: ($winWidth  *(65) )/100,
            top:  ($winHeight *(51.48) )/100
        },0); 
    }else if (topPerc >40 && topPerc <=41){
         $('.whiteCar').show();
         $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*120/100,
            height:( ($HeightPerc* whiteCarH)/100)*120/100,

            left: ($winWidth  *(60) )/100,
            top:  ($winHeight *(51.21) )/100
        },0); 
    }else if (topPerc >41 && topPerc <=42 ){
         $('.whiteCar').show();
         $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*120/100,
            height:( ($HeightPerc* whiteCarH)/100)*120/100,

            left: ($winWidth  *(55) )/100,
            top:  ($winHeight *(50.99) )/100
        },0); 
    }else if (topPerc >42 && topPerc <=43 ){
         $('.whiteCar').show();
         $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*140/100,
            height:( ($HeightPerc* whiteCarH)/100)*140/100,

            left: ($winWidth  *(50) )/100,
            top:  ($winHeight *(50.71) )/100
        },0); 
    }else if (topPerc >43 && topPerc <=44 ){
         $('.whiteCar').show();
         $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*140/100,
            height:( ($HeightPerc* whiteCarH)/100)*140/100,

            left: ($winWidth  *(45) )/100,
            top:  ($winHeight *(50.49) )/100
        },0); 
    }else if (topPerc >44 && topPerc <=45 ){
         $('.whiteCar').show();
         $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*140/100,
            height:( ($HeightPerc* whiteCarH)/100)*140/100,

            left: ($winWidth  *(40) )/100,
            top:  ($winHeight *(50.27) )/100
        },0); 
    }else if (topPerc >45 && topPerc <=46 ){
         $('.whiteCar').show();
         $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*140/100,
            height:( ($HeightPerc* whiteCarH)/100)*140/100,

            left: ($winWidth  *(35) )/100,
            top:  ($winHeight *(50.04) )/100
        },0); 
    }else if (topPerc >46 && topPerc <= 47 ){
         $('.whiteCar').show();
         $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*140/100,
            height:( ($HeightPerc* whiteCarH)/100)*140/100,

            left: ($winWidth  *(30) )/100,
            top:  ($winHeight *(49.82) )/100
        },0); 
    }else if (topPerc >47 && topPerc <= 48 ){
         $('.whiteCar').show();
         $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*140/100,
            height:( ($HeightPerc* whiteCarH)/100)*140/100,

            left: ($winWidth  *(25) )/100,
            top:  ($winHeight *(49.59) )/100
        },0); 
    }else if (topPerc >48 && topPerc <= 49 ){
        $('.whiteCar').show();
        $('.whiteCar').animate({
            width: ( ($WidthPerc * whiteCarW)/100)*140/100,
            height:( ($HeightPerc* whiteCarH)/100)*140/100,

            left: ($winWidth  *(20) )/100,
            top:  ($winHeight *(49.39) )/100
        },0); 
    }else if (topPerc >49){
        $('.whiteCar').hide();
    }
// +++++++++++++ train +++++++++++++++++   

    if( ($(window).scrollTop() <=  $('.bg5PH').position().top)  && trainFlag == 1 && isBottomPage ==1){
       loadIMG('.trainPH','img/section-5/train.png','item train hiddenItem');
       trainFlag = 0;          
    } 

    /* train   */ 
    if (60.2 <= topPerc && topPerc <60.4 && isBottomPage==1){
        $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)', 'left': '($winWidth  *(trainLeft) )/100', 'top':'($winHeight *(trainTop) )/100'});
    } else  if ( 59.8 <= topPerc &&  topPerc < 60.0 && isBottomPage==1){ 
        $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
        $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(trainLeft) )/100, 
            top:  ($winHeight *(trainTop) )/100,

        },0); 
    } else  if ( 59.6 <= topPerc &&  topPerc < 59.8 && isBottomPage==1){ 
        $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
        $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(-14) )/100, 
            top:  ($winHeight *(57.79) )/100,

        },0); 
    } else  if ( 59.4 <= topPerc &&  topPerc < 59.6 && isBottomPage==1){ 
        $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
        $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(-4) )/100, 
            top:  ($winHeight *(58.18) )/100,

        },0); 
    } else  if ( 59.2 <= topPerc &&  topPerc < 59.4 && isBottomPage==1){ 
        $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
        $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(0) )/100, 
            top:  ($winHeight *(58.38) )/100,

        },0); 

    }else if ( 59.0 <= topPerc &&  topPerc < 59.2 && isBottomPage==1){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
        $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(4) )/100,
            top:  ($winHeight *(58.56) )/100,

        }, 0); 

    }else if ( 58.8 <= topPerc &&  topPerc < 59.0 && isBottomPage==1){
         $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(8))/100,
            top:  ($winHeight *(58.76) )/100,

        }, 0); 

    } else if ( 58.6 <= topPerc &&  topPerc < 58.8 && isBottomPage==1){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(12) )/100,
            top:  ($winHeight *(58.94) )/100,

        }, 0); 

    }else if ( 58.4 <= topPerc &&  topPerc < 58.6 && isBottomPage==1){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(16) )/100,
            top:  ($winHeight *(59.14) )/100,

        }, 0); 
    }else if ( 58.2 <= topPerc &&  topPerc < 58.4 && isBottomPage==1){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(20) )/100,
            top:  ($winHeight *(59.32) )/100,

        }, 0); 
    }else if ( 58.0 <= topPerc &&  topPerc < 58.2 && isBottomPage==1){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(24) )/100,
            top:  ($winHeight *(59.54) )/100,

        }, 0); 
    }else if ( 57.8 <= topPerc &&  topPerc < 58.0 && isBottomPage==1){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(28) )/100,
            top:  ($winHeight *(59.71) )/100,

        }, 0); 
    } else if ( 57.6 <= topPerc &&  topPerc < 57.8 && isBottomPage==1){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(32) )/100,
            top:  ($winHeight *(59.90) )/100,

        }, 0); 
    } else if ( 57.4 <= topPerc &&  topPerc < 57.6 && isBottomPage==1){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(36) )/100,
            top:  ($winHeight *(60.08) )/100,

        }, 0); 
    } else if ( 57.2 <= topPerc &&  topPerc < 57.4 && isBottomPage==1){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(40) )/100,
            top:  ($winHeight *(60.26) )/100,

        }, 0); 
    } else if ( 57.0 <= topPerc &&  topPerc < 57.2 && isBottomPage==1){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(44) )/100,
            top:  ($winHeight *(60.46) )/100,

        }, 0); 
    } else if ( 56.8 <= topPerc &&  topPerc < 57.0 && isBottomPage==1){
       $('.train').show();
        $('.train').css({'transform': 'rotate(-1deg)'});
         $('.train').animate({
            width: ($WidthPerc * trainW)/100,
            height: ($WidthPerc * trainH)/100,
            left: ($winWidth  *(48) )/100,
            top:  ($winHeight *(60.66) )/100,

        }, 0); 
    } else if (56.6<= topPerc && topPerc < 56.8 && isBottomPage==1) {
        $('.train').show();
        //$('.train').css({'opacity':'1', 'transform': 'rotate(-1deg)' });
    }
// +++++++++++++ truck +++++++++++++++++  
     if( ($(window).scrollTop() <=  $('.bg4PH').position().top)  && truck1Flag == 1 && isBottomPage ==1){
       loadIMG('.truck1PH','img/section-5/truck1.png','item truck1');
       truck1Flag = 0;         
    } 

    /* truck1    
    if ( topPerc >= 67.8 ){
        $('.truck1').css({'display':'block', 'left': '($winWidth  *(truck1Left) )/100', 'top':'($winHeight *(truck1Top) )/100'});
    } else */ if ( 67.6 <= topPerc &&  topPerc < 67.8 ){ 
        $('.truck1').css({'display': 'block'});
        $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(truck1Left) )/100, 
            top:  ($winHeight *(truck1Top) )/100,

        },0); 
    }else  if ( 67.4 <= topPerc &&  topPerc < 67.6 ){ 
        $('.truck1').css({'display': 'block'});
        $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(2) )/100, 
            top:  ($winHeight *(67.75) )/100,

        },0); 
    } else  if ( 67.2 <= topPerc &&  topPerc < 67.4 ){ 
        $('.truck1').css({'display': 'block'});
        $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(6) )/100, 
            top:  ($winHeight *(67.95) )/100,

        },0); 

    }else if ( 67.0 <= topPerc &&  topPerc < 67.2 ){
       $('.truck1').css({'display': 'block'});
        $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(10) )/100,
            top:  ($winHeight *(68.13) )/100,

        }, 0); 

    }else if ( 66.8 <= topPerc &&  topPerc < 67.0 ){
         $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(14))/100,
            top:  ($winHeight *(68.35) )/100,

        }, 0); 

    } else if ( 66.6 <= topPerc &&  topPerc < 66.8 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(18) )/100,
            top:  ($winHeight *(68.5) )/100,

        }, 0); 

    }else if ( 66.4 <= topPerc &&  topPerc < 66.6 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(22) )/100,
            top:  ($winHeight *(68.68) )/100,

        }, 0); 
    }else if ( 66.2 <= topPerc &&  topPerc < 66.4 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(26) )/100,
            top:  ($winHeight *(68.95) )/100,

        }, 0); 
    }else if ( 66.0 <= topPerc &&  topPerc < 66.2 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(30) )/100,
            top:  ($winHeight *(69.05) )/100,

        }, 0); 
    }else if ( 65.8 <= topPerc &&  topPerc < 66.0 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(34) )/100,
            top:  ($winHeight *(69.24) )/100,

        }, 0); 
    } else if ( 65.6 <= topPerc &&  topPerc < 65.8 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(38) )/100,
            top:  ($winHeight *(69.45) )/100,

        }, 0); 
    } else if ( 65.4 <= topPerc &&  topPerc < 65.6 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(42) )/100,
            top:  ($winHeight *(69.6) )/100,

        }, 0); 
    } else if ( 65.2 <= topPerc &&  topPerc < 65.4 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(46) )/100,
            top:  ($winHeight *(69.8) )/100,

        }, 0); 
    } else if ( 65.2 <= topPerc &&  topPerc < 65.2 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(50) )/100,
            top:  ($winHeight *(69.92) )/100,

        }, 0); 
    } else if ( 65.0 <= topPerc &&  topPerc < 65.2 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(54) )/100,
            top:  ($winHeight *(70.08) )/100,

        }, 0); 
    } else if ( 64.8 <= topPerc &&  topPerc < 65.0 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(58) )/100,
            top:  ($winHeight *(70.3) )/100,

        }, 0); 
    } else if ( 64.6 <= topPerc &&  topPerc < 64.6 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(62) )/100,
            top:  ($winHeight *(70.5) )/100,

        }, 0); 
    } else if ( 64.4 <= topPerc &&  topPerc < 64.6 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(66) )/100,
            top:  ($winHeight *(70.7) )/100,

        }, 0); 
    } else if ( 64.2 <= topPerc &&  topPerc < 64.4 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(70) )/100,
            top:  ($winHeight *(70.9) )/100,

        }, 0); 
    } else if ( 64.0 <= topPerc &&  topPerc < 64.2 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(74) )/100,
            top:  ($winHeight *(71.0) )/100,

        }, 0); 
    } else if ( 63.8 <= topPerc &&  topPerc < 64.0 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(78) )/100,
            top:  ($winHeight *(71.2) )/100,

        }, 0); 
    } else if ( 63.6 <= topPerc &&  topPerc < 63.8 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(82) )/100,
            top:  ($winHeight *(71.4) )/100,

        }, 0); 
    } else if ( 63.4 <= topPerc &&  topPerc < 63.6 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  * 86 )/100,
            top:  ($winHeight * 71.6)/100,

        }, 0); 
    } else if ( 63.2<= topPerc &&  topPerc < 63.4 ){
       $('.truck1').css({'display': 'block'});
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  *(90) )/100,
            top:  ($winHeight *(71.8) )/100,

        }, 0); 
    } else if ( 63.0 <= topPerc &&  topPerc < 63.2 ){
       $('.truck1').show();
         $('.truck1').animate({
            width: ($WidthPerc * truck1W)/100,
            height: ($WidthPerc * truck1H)/100,
            left: ($winWidth  * 94 )/100,
            top:  ($winHeight * 72.0)/100,

        }, 0); 
    } else if (topPerc < 63.0) {
        $('.truck1').hide();
    }
// +++++++++++++++ car1 +++++++++++++++++++++++++
    
    if( ($(window).scrollTop() <=  $('.bg3PH').position().top)  && car1Flag == 1 && isBottomPage ==1){
        loadIMG('.car1PH','img/section-4/car1.png','item car1 hiddenItem');
        car1Flag = 0;
    }     
        
        /* car1   
        if ( topPerc >= 77 ){
            $('.car1').show();
            $('.car1').css({'left': '($winWidth  *(car1Left) )/100', 'top':'($winHeight *(car1Top) )/100'});
        }else */ if ( 76.8 <= topPerc &&  topPerc < 77 && isBottomPage==1){ 
            $('.car1').css({'display': 'block'});
            $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(car1Left) )/100, 
                top:  ($winHeight *(car1Top) )/100,
                
            },0); 
        }else  if ( 76.6 <= topPerc &&  topPerc < 76.8 && isBottomPage==1){ 
            $('.car1').show();
            $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(91) )/100, 
                top:  ($winHeight *(76.7) )/100,
                
            },0); 
        } else  if ( 76.4 <= topPerc &&  topPerc < 76.6 && isBottomPage==1){ 
            $('.car1').show();
            $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(87) )/100, 
                top:  ($winHeight *(76.45) )/100,
                
            },0); 
            
        }else if ( 76.2 <= topPerc &&  topPerc < 76.4 && isBottomPage==1){
           $('.car1').show();
            $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(83) )/100,
                top:  ($winHeight *(76.26) )/100,
                
            }, 0); 
            
        }else if ( 76.0 <= topPerc &&  topPerc < 76.2 && isBottomPage==1){
             $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(79))/100,
                top:  ($winHeight *(76.1) )/100,
                
            }, 0); 
            
        } else if ( 75.8 <= topPerc &&  topPerc < 76.0 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(75) )/100,
                top:  ($winHeight *(75.9) )/100,
                
            }, 0); 
           
        }else if ( 75.6 <= topPerc &&  topPerc < 75.8 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(71) )/100,
                top:  ($winHeight *(75.7) )/100,
                
            }, 0); 
        }else if ( 75.4 <= topPerc &&  topPerc < 75.6 && isBottomPage==1 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(67) )/100,
                top:  ($winHeight *(75.5) )/100,
                
            }, 0); 
        }else if ( 75.2 <= topPerc &&  topPerc < 75.4 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(63) )/100,
                top:  ($winHeight *(75.3) )/100,
                
            }, 0); 
        }else if ( 75.0 <= topPerc &&  topPerc < 75.2 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(59) )/100,
                top:  ($winHeight *(75.1) )/100,
                
            }, 0); 
        } else if ( 74.8 <= topPerc &&  topPerc < 75.0 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(55) )/100,
                top:  ($winHeight *(74.9) )/100,
                
            }, 0); 
        } else if ( 74.6 <= topPerc &&  topPerc < 74.8 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(51) )/100,
                top:  ($winHeight *(74.75) )/100,
                
            }, 0); 
        } else if ( 74.2 <= topPerc &&  topPerc < 74.4 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(47) )/100,
                top:  ($winHeight *(74.5) )/100,
                
            }, 0); 
        }else if ( 74.0 <= topPerc &&  topPerc < 74.2 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(43) )/100,
                top:  ($winHeight *(74.35) )/100,
                
            }, 0); 
        } else if ( 73.8 <= topPerc &&  topPerc < 74.0 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(39) )/100,
                top:  ($winHeight *(74.1) )/100,
                
            }, 0); 
        } else if ( 73.6 <= topPerc &&  topPerc < 73.8 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(35) )/100,
                top:  ($winHeight *(73.97) )/100,
                
            }, 0); 
        }else if ( 73.4 <= topPerc &&  topPerc < 73.6 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(31) )/100,
                top:  ($winHeight *(73.77) )/100,
                
            }, 0); 
        }else if ( 73.2 <= topPerc &&  topPerc < 73.4 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(27) )/100,
                top:  ($winHeight *(73.5) )/100,
                
            }, 0); 
        }else if ( 73.0 <= topPerc &&  topPerc < 73.2 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(23) )/100,
                top:  ($winHeight *(73.39) )/100,
                
            }, 0); 
        } else if ( 72.8 <= topPerc &&  topPerc < 73.0 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(19) )/100,
                top:  ($winHeight *(73.21) )/100,
                
            }, 0); 
        } else if ( 72.6 <= topPerc &&  topPerc < 72.8 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(15) )/100,
                top:  ($winHeight *(73.01) )/100,
                
            }, 0); 
        } else if ( 72.4 <= topPerc &&  topPerc < 72.6 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(11) )/100,
                top:  ($winHeight *(72.86) )/100,
                
            }, 0); 
        } else if ( 72.2 <= topPerc &&  topPerc < 72.4 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(7) )/100,
                top:  ($winHeight *(72.66) )/100,
                
            }, 0); 
        } else if ( 72.0 <= topPerc &&  topPerc < 72.2 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(3) )/100,
                top:  ($winHeight *(72.46) )/100,
                
            }, 0); 
        } else if ( 71.8 <= topPerc &&  topPerc < 72.0 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(-1) )/100,
                top:  ($winHeight *(72.26) )/100,
                
            }, 0); 
        } else if ( 71.6 <= topPerc &&  topPerc < 71.8 && isBottomPage==1){
            $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(-5) )/100,
                top:  ($winHeight *(72.06) )/100,
                
            }, 0); 
        } else if ( 71.4 <= topPerc &&  topPerc < 71.6 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(-9) )/100,
                top:  ($winHeight *(71.86) )/100,
                
            }, 0); 
        } else if ( 71.2 <= topPerc &&  topPerc < 71.4 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(-13) )/100,
                top:  ($winHeight *(71.66) )/100,
                
            }, 0); 
        } else if ( 71.0 <= topPerc &&  topPerc < 71.2 && isBottomPage==1){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(-17) )/100,
                top:  ($winHeight *(71.66) )/100,
                
            }, 0); 
        } else if (topPerc < 71.0 && isBottomPage==1) {
            $('.car1').show();
    
        }

//+++++++++++++++++++ buildings ++++++++++++++++++++++++
    
    if( ($(window).scrollTop() <=  $('.bg2PH').position().top)  && buildingsFlag == 1 && isBottomPage ==1){
        //alert("church should be loaded now!");
        loadIMG('.churchPH','img/section-3/church.png','item church hiddenItem');
        buildingsFlag = 0;   
    } 


    if( ($(window).scrollTop() <=  $('.bg3PH').position().top)  && buildings2Flag == 1 && isBottomPage ==1){    
        
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
        loadIMG('.artscentrePH','img/section-3/artsCentre.png','item arts-centre'); 
        buildings2Flag = 0;
    }
    

    /* ---------------- BUILDINGS ---------------- */

    /***** building ******/
    if ( topPerc <= 69.2 ) {
        $('.building').css({'display':'block' });
        $('.building').animate({
           width: ($WidthPerc * buildingW)/100,
           height:($HeightPerc* buildingH)/100,
           
            left: ($winWidth  * buildingLeft)/100,
            top:  ($winHeight * buildingTop)/100
        },0);
    }

    /********** sold-ign **********/
    if ( topPerc <= 69.0 ) {
      $('.sold-sign').animate({
         width: ($WidthPerc * soldsignW)/100,
         height:($HeightPerc* soldsignH)/100,
         
          left: ($winWidth  * soldsignLeft)/100,
          top:  ($winHeight * soldsignTop)/100
      },0);
    }
    /*********** building-two ************/
    if ( topPerc <= 68.4 ) {
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
    
    /* glass-building  */
    if ( topPerc <= 73.0) {
        
      $('.glass-building').css({'display':'block' });
        $('.glass-building').animate({
           width: ($WidthPerc * glassbldngW)/100,
           height:($HeightPerc* glassbldngH)/100,
           
            left: ($winWidth  * glassbldngLeft )/100,
            top:  ($winHeight * glassbldngTop )/100
        },0);
  } 

  /* eureka-tower */
   if (topPerc <= 76.1) {
    
      $('.eureka-tower').css({'display':'block' });
        $('.eureka-tower').animate({
           width: ($WidthPerc * eurekaW)/100,
           height:($HeightPerc* eurekaH)/100,
           
            left: ($winWidth  * eurekaLeft)/100,
            top:  ($winHeight * eurekaTop)/100
        },0);
        //eurekadisplayed = 1;
    } 

    /* arts-centre */
    $('.arts-centre').animate({
       width: ($WidthPerc * artcW)/100,
       height:($HeightPerc* artcH)/100,
       
        left: ($winWidth  *(artcLeft) )/100,
        top:  ($winHeight *(artcTop) )/100
    },0); 
    $('.circle').css({'left': '($winWidth  *(circleL) )/100', 'top': '($winHeight *(circleT) )/100'});

  /******** CHURCH **************/
    $(".church").animate({
       width: ($WidthPerc * churchW)/100,
       height:($HeightPerc* churchH)/100,

        left: ($winWidth  * churchLeft)/100,
        top:  ($winHeight * churchTop)/100
    },0); 
    
   //+++++++++++++++++++ car 2 ++++++++++++++++++++

    if( ($(window).scrollTop() <=  $('.bg2PH').position().top)  && car2Flag == 1 && isBottomPage ==1){
       loadIMG('.car2PH','img/section-3/car2.png','item car2 hiddenItem');
       car2Flag = 0;
    } 


    /* car2 animation  */ 
    if ( topPerc >= 79.6 ){
        $('.car2').hide();
        //$('.car2').css({'display':'block', 'left': '($winWidth  *(car2Left) )/100', 'top':'($winHeight *(car2Top) )/100'});
    } else  if ( 79.4 <= topPerc &&  topPerc < 79.6 ){ 
        $('.car2').show();  
        $('.car2').animate({
            width: ($WidthPerc * car2W)/100,
            height: ($WidthPerc * car2H)/100,
            left: ($winWidth  *(car2Left) )/100, 
            top:  ($winHeight *(car2Top) )/100,

        },0); 
    }else  if ( 79.2 <= topPerc &&  topPerc < 79.4 ){ 
       $('.car2').show();  
        $('.car2').animate({
            width: ($WidthPerc * car2W)/100,
            height: ($WidthPerc * car2H)/100,
            left: ($winWidth  *(14) )/100, 
            top:  ($winHeight *(79.1) )/100,

        },0); 
    } else  if ( 79.0 <= topPerc &&  topPerc < 79.2 ){ 
        $('.car2').show();  
        $('.car2').animate({
            width: ($WidthPerc * car2W)/100,
            height: ($WidthPerc * car2H)/100,
            left: ($winWidth  *(18) )/100, 
            top:  ($winHeight *(79.25) )/100,

        },0); 

    }else if ( 78.8 <= topPerc &&  topPerc < 79.0 ){
       $('.car2').show();  
        $('.car2').animate({
            width: ($WidthPerc * car2W)/100,
            height: ($WidthPerc * car2H)/100,
            left: ($winWidth  *(22) )/100,
            top:  ($winHeight *(79.44) )/100,

        }, 0); 

    }else if ( 78.6 <= topPerc &&  topPerc < 78.8 ){
         $('.car2').show();  
         $('.car2').animate({
            width: ($WidthPerc * car2W)/100,
            height: ($WidthPerc * car2H)/100,
            left: ($winWidth  *(26))/100,
            top:  ($winHeight *(79.62) )/100,

        }, 0); 

    } else if ( 78.4 <= topPerc &&  topPerc < 78.6 ){
      $('.car2').show();  
         $('.car2').animate({
            width: ($WidthPerc * car2W)/100,
            height: ($WidthPerc * car2H)/100,
            left: ($winWidth  *(30) )/100,
            top:  ($winHeight *(79.8) )/100,

        }, 0); 

    }else if ( 78.2 <= topPerc &&  topPerc < 78.4 ){
       $('.car2').show();  
         $('.car2').animate({
            width: ($WidthPerc * car2W)/100,
            height: ($WidthPerc * car2H)/100,
            left: ($winWidth  *(34) )/100,
            top:  ($winHeight *(79.99) )/100,

        }, 0); 
    }else if ( 78.0 <= topPerc &&  topPerc < 78.2 ){
       $('.car2').show();  
         $('.car2').animate({
            width: ($WidthPerc * car2W)/100,
            height: ($WidthPerc * car2H)/100,
            left: ($winWidth  *(38) )/100,
            top:  ($winHeight *(80.17) )/100,

        }, 0); 
    }else if ( 77.8 <= topPerc &&  topPerc < 78.0 ){
       $('.car2').show();  
         $('.car2').animate({
            width: ($WidthPerc * car2W)/100,
            height: ($WidthPerc * car2H)/100,
            left: ($winWidth  *(42) )/100,
            top:  ($winHeight *(80.3) )/100,

        }, 0); 
    }else if ( 77.6 <= topPerc &&  topPerc < 77.8 ){
        $('.car2').show();  
         $('.car2').animate({
            width: ($WidthPerc * car2W)/100,
            height: ($WidthPerc * car2H)/100,
            left: ($winWidth  *(46) )/100,
            top:  ($winHeight *(80.54) )/100,

        }, 0); 
    } else if ( 77.4 <= topPerc &&  topPerc < 77.6 ){
        $('.car2').show();  
         $('.car2').animate({
            width: ($WidthPerc * car2W)/100,
            height: ($WidthPerc * car2H)/100,
            left: ($winWidth  *(50) )/100,
            top:  ($winHeight *(80.72) )/100,

        }, 0); 
    } else if ( topPerc < 77.4 ) {
        $('.car2').show();    
        
    }
// ++++++++++++++++++ bus +++++++++++++++++++++  

    if( ($(window).scrollTop() <=  $('.bg2PH').position().top)  && busFlag == 1 && isBottomPage ==1){
       loadIMG('.busPH','img/section-3/bus.png','item bus hiddenItem');
       busFlag = 0;
    } 

        /* bus   */ 

    if ( topPerc >= 81.4 ){
        $('.bus').hide();
        $('.bus').css({'left': '($winWidth * busLeft )/100', 'top':'($winHeight * busTop )/100'});

    } else  if ( 81.2 <= topPerc &&  topPerc < 81.4 ){ 
        $('.bus').show();
        $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(busLeft) )/100, 
            top:  ($winHeight *(busTop) )/100,

        },0); 


    } else  if ( 80.8 <= topPerc &&  topPerc < 81.2 ){ 
        $('.bus').show();
        $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(32) )/100, 
            top:  ($winHeight *(79.55) )/100,

        },0); 


    } else  if ( 80.6 <= topPerc &&  topPerc < 80.8 ){ 
        $('.bus').show();
        $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(38) )/100, 
            top:  ($winHeight *(79.85) )/100,

        },0); 


    } else if ( 80.4 <= topPerc &&  topPerc < 80.6 ){
       $('.bus').show();
       $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(47) )/100,
            top:  ($winHeight *(80.3) )/100,

        }, 0); 


    } else if ( 80.2 <= topPerc &&  topPerc < 80.4 ){
         //$('.bus').css({'display': 'block'});
         $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(52))/100,
            top:  ($winHeight *(80.5) )/100,

        }, 0); 


    } else if ( 80.0 <= topPerc &&  topPerc < 80.2 ){
       //$('.bus').css({'display': 'block'});
       $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(56) )/100,
            top:  ($winHeight *(80.7) )/100,

        }, 0); 

    }else if ( 79.8 <= topPerc &&  topPerc < 80.0 ){
       //$('.bus').css({'display': 'block'});
       $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(60) )/100,
            top:  ($winHeight *(80.8) )/100,

        }, 0); 

    }else if ( 79.6 <= topPerc &&  topPerc < 79.8 ){
      // $('.bus').css({'display': 'block'});
       $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(64) )/100,
            top:  ($winHeight *(81.0) )/100,

        }, 0); 

    }else if ( 79.4 <= topPerc &&  topPerc < 79.6 ){
       $('.bus').show();
       $('.bus').animate({
            width: ($WidthPerc * busW)/100,
            height: ($WidthPerc * busH)/100,
            left: ($winWidth  *(68) )/100,
            top:  ($winHeight *(81.2) )/100,

        }, 0); 
    } else if (topPerc < 79.4) {
        $('.bus').show();
        //$('.bus').css({ 'display':'block', 'opacity':'1' });

    }
// ++++++++++++++++++ tram +++++++++++++++++++++++++    

    if( ($(window).scrollTop() <=  $('.bg2PH').position().top)  && tramFlag == 1 && isBottomPage ==1){
       loadIMG('.tramPH','img/section-3/tram.png','item tram hiddenItem');
       tramFlag = 0;          
    } 
        /* tram */  
     if ( 82.0 <= topPerc &&  topPerc < 86.0){ 
        $('.tram').show();
        $('.tram').animate({
            width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(tramLeft) )/100, 
            top:  ($winHeight *(tramTop) )/100,

        },0); 

    } else if ( 81.8 <= topPerc &&  topPerc < 82.0 ){
       $('.tram').show();
        $('.tram').animate({
  width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(48.1) )/100,
            top:  ($winHeight *(83.55) )/100,

        }, 0); 

    }else if ( 81.6 <= topPerc &&  topPerc < 81.8 ){
         //$('.tram').css({'display': 'block'});
         $('.tram').animate({
 width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(52.6))/100,
            top:  ($winHeight *(83.3) )/100,

        }, 0); 

    } else if ( 81.4 <= topPerc &&  topPerc < 81.6 ){
       //$('.tram').css({'display': 'block'});
         $('.tram').animate({
width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(55.1) )/100,
            top:  ($winHeight *(83.15) )/100,

        }, 0); 

    }else if ( 81.2 <= topPerc &&  topPerc < 81.4 ){
       //$('.tram').css({'display': 'block'});
         $('.tram').animate({
width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(58.2) )/100,
            top:  ($winHeight *(82.95) )/100,

        }, 0); 
    }else if ( 81.0 <= topPerc &&  topPerc < 81.2 ){
       $('.tram').show();
         $('.tram').animate({
width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(61.8) )/100,
            top:  ($winHeight *(82.75) )/100,

        }, 0); 
    } else if (topPerc < 81.0) {
        //$('.tram').show();
    }
// ++++++++++++++++++++ boat +++++++++++++++++++++++   
        if ( topPerc >= 91.8 ){
            $('#boat').css({'display':'none', 'opacity':'1'});
        } else  if ( topPerc >= 91.6  &&  topPerc < 91.8 ){
            $('#boat').css({'display': 'block', 'transform':'scale(0.5)'});
            $('#boat').animate({
                width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  * boatLeft )/100,
                top:  ($winHeight * boatTop )/100
                
            },0); 
            
        }else if ( 91.4 <= topPerc &&  topPerc < 91.6 ){
            $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(78.5) )/100,
                top:  ($winHeight *(90.2) )/100,
                
                start: function(){
                    $( this ).css({'transform':'scale(0.6) skewX(15deg)'});
                }
            }, 0); 
            
        }else if ( 91.2 <= topPerc &&  topPerc < 91.4 ){
             $('#boat').css({'transform':'scale(0.7) skewX(5deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(68.5))/100,
                top:  ($winHeight *(90.4) )/100,
                
            }, 0); 
            
        } else if ( 91.0 <= topPerc &&  topPerc < 91.2){
              $('#boat').css({'transform':'scale(0.8) skewX(-10deg)'});
             $('#boat').animate({
                  width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(53.5) )/100,
                top:  ($winHeight *(91.0) )/100,
                
            }, 0); 
           
        }else if ( 90.8 <= topPerc &&  topPerc < 91.0 ){
            $('#boat').css({'transform':'scale(0.9) skewX(5deg)'});
             $('#boat').animate({
               width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(47) )/100,
                top:  ($winHeight *(91.5) )/100,
              
            }, 0); 
        }else if ( 90.6 <= topPerc &&  topPerc < 90.8 ){
            $('#boat').css({'transform':'scale(0.95) skewX(5deg)'});
             $('#boat').animate({
                width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(42) )/100,
                top:  ($winHeight *(91.8) )/100,
              
            }, 0); 
        }else if ( 90.4 <= topPerc &&  topPerc < 90.6 ){
            $('#boat').css({'transform':'scale(1) skewX(-5deg)'});
             $('#boat').animate({
                width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(38.5) )/100,
                top:  ($winHeight *(91.5) )/100,
              
            }, 0); 
        }else if ( 90.2 <= topPerc &&  topPerc < 90.4 ){
            $('#boat').css({'transform':'scale(1) skewX(5deg)'});
             $('#boat').animate({
             width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(34.8) )/100,
                top:  ($winHeight *(91.1) )/100,
              
            }, 0); 
        }else if ( 90.0 <= topPerc &&  topPerc < 90.2 ){
            $('#boat').css({'transform':'scale(1) skewX(2deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(30.4) )/100,
                top:  ($winHeight *(91.4) )/100,
              
            }, 0); 
        }else if ( 89.8 <= topPerc &&  topPerc < 90.0 ){
            $('#boat').css({'transform':'scale(1) skewX(2deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(27.0) )/100,
                top:  ($winHeight *(92.4) )/100,
              
            }, 0);
        }else if ( 89.6 <= topPerc &&  topPerc < 89.8 ){
            $('#boat').css({'transform':'scale(1) skewX(2deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(25.0) )/100,
                top:  ($winHeight *(93.4) )/100,
              
            }, 0);
        } else if ( 89.4 <= topPerc &&  topPerc < 89.6 ){
            $('#boat').css({'transform':'scale(1) skewX(-2deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(15.0) )/100,
                top:  ($winHeight *(93.4) )/100,
              
            }, 0);
        } else if ( 89.2 <= topPerc &&  topPerc < 89.4 ){
            $('#boat').css({'transform':'scale(1) skewX(-2deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(5.0) )/100,
                top:  ($winHeight *(93.4) )/100,
              
            }, 0);
        } else if ( 89.0 <= topPerc &&  topPerc < 89.2 ){
            $('#boat').css({'transform':'scale(1) skewX(-2deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(0) )/100,
                top:  ($winHeight *(93.4) )/100,
              
            }, 0);
        } else if ( 88.8 <= topPerc &&  topPerc < 89.0 ){
            $('#boat').css({'transform':'scale(1) skewX(-2deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(-5) )/100,
                top:  ($winHeight *(93.4) )/100,
              
            }, 0);
        } else if ( 88.6 <= topPerc &&  topPerc < 88.8 ){
            $('#boat').css({'transform':'scale(1) skewX(-2deg)'});
             $('#boat').animate({
                 width: ($WidthPerc * boatW)/100,
                height:($WidthPerc * boatH)/100,
                left: ($winWidth  *(-15) )/100,
                top:  ($winHeight *(93.4) )/100,
              
            }, 0);
        } else if (topPerc < 91.8) {
            $('#boat').css({ 'display':'block', 'opacity':'1' });
        }
// ++++++++++++++++++++ scuba +++++++++++++++++++++++
        if (topPerc >= 95.4){
            $('#scuba-2').css({'display': 'none', 'transform':'scale(1)', 'left': '($winWidth * scuba2Left )/100', 'top':  '($winHeight * scuba2Top )/100'});
        } else  if ( topPerc < 95.2  && topPerc >= 95.4 ){
            $('#scuba-2').css({'display': 'block', 'transform':'scale(1)'});
            $('#scuba-2').animate({
                width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  * scuba2Left )/100,
                top:  ($winHeight * scuba2Top )/100,
                opacity: 1
 
            },0); 
            
        }else if (  95.0 <= topPerc &&  topPerc < 95.2){
            $('#scuba-2').animate({
                width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(10) )/100,
                top:  ($winHeight *(98.3) )/100,
                opacity: 1,
                start: function(){
                    $( this ).css({'transform':'scale(0.8)'});
                }
            }, 0); 
            
        }else if (  94.8 <= topPerc &&  topPerc < 95.0 ){
             $('#scuba-2').css({'transform':'scale(0.6)'});
             $('#scuba-2').animate({
                width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(15) )/100,
                top:  ($winHeight *(97.9) )/100,
                opacity:0.8
            }, 0); 
            
        } else if ( 94.6 <= topPerc &&  topPerc < 94.8 ){
              $('#scuba-2').css({'transform':'scale(0.6) rotate(-10deg)'});
             $('#scuba-2').animate({
                width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(18) )/100,
                top:  ($winHeight *(97.7) )/100,
                opacity:0.6
            }, 0); 
           
        }else if ( 94.4 <= topPerc &&  topPerc < 94.6 ){
            $('#scuba-2').css({'transform':'scale(0.8) rotate(5deg)'});
             $('#scuba-2').animate({
                width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(22) )/100,
                top:  ($winHeight *(97.5) )/100,
                opacity: 0.7
            }, 0); 
        }else if ( 94.2 <= topPerc &&  topPerc < 94.4 ){
            $('#scuba-2').css({'transform':'scale(1) rotate(2deg)'});
             $('#scuba-2').animate({
                width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(24.5) )/100,
                top:  ($winHeight *(97.2) )/100,
                opacity: 0.8
            }, 0); 
        }else if ( 94.0 <= topPerc &&  topPerc < 94.2 ){
            $('#scuba-2').css({'transform':'rotate(-5deg)'});
             $('#scuba-2').animate({
                width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(26.5) )/100,
                top:  ($winHeight *(97.0) )/100,
                opacity: 0.9
            }, 0); 
        }else if ( 93.8 <= topPerc &&  topPerc < 94.0 ){
            $('#scuba-2').css({'transform':'rotate(5deg)'});
             $('#scuba-2').animate({
                width: ($WidthPerc * scuba2W)/100,
                height:($WidthPerc * scuba2H)/100,
                left: ($winWidth  *(28.5) )/100,
                top:  ($winHeight *(96.8) )/100,
                opacity: 1
            }, 0); 
        } else if (topPerc < 95.4) {
            $('#scuba-2').css("display", 'block');
        }
//+++++++++++++++++++++++ seal +++++++++++++++++++
        if (topPerc >= 95.6){
            $('#seal').css({'display': 'none', 'transform':'scale(0.3)', 'left': '($winWidth * sealLeft)/100', 'top':'($winHeight *(sealTop) )/100'});
        } else   if ( topPerc < 95.4  && topPerc >= 95.6 ){
            
            $('#seal').show();
            $('#seal').css({'transform':'scale(0.3)'});
            $('#seal').animate({
                width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(sealLeft))/100,
                top:  ($winHeight *(sealTop))/100,
                opacity: 1
 
            },0); 
            
        }else if (  95.2 <= topPerc &&  topPerc < 95.4){
            $('#seal').show();
            $('#seal').animate({
                width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(-6) )/100,
                top:  ($winHeight *(96.8) )/100,
                opacity: 0.8,
                start: function(){
                    $( this ).css({'transform':'scale(0.4) rotate(15deg)'});
                }
            }, 0); 
            
        }else if (  95.0 <= topPerc &&  topPerc < 95.2 ){
             $('#seal').show();
            $('#seal').css({'transform':'scale(0.5) rotate(5deg)'});
             $('#seal').animate({
      width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(-2) )/100,
                top:  ($winHeight *(96.4) )/100,
                opacity:0.7
            }, 0); 
            
        } else if ( 94.8 <= topPerc &&  topPerc < 95.0 ){
              $('#seal').show();
            $('#seal').css({'transform':'scale(0.6) rotate(-10deg)'});
             $('#seal').animate({
     width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(2) )/100,
                top:  ($winHeight *(96.6) )/100,
                opacity:0.6
            }, 0); 
           
        }else if ( 94.6 <= topPerc &&  topPerc < 94.8 ){
            $('#seal').show();
            $('#seal').css({'transform':'scale(0.75) rotate(5deg)'});
             $('#seal').animate({
         width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(6) )/100,
                top:  ($winHeight *(97) )/100,
                opacity: 0.8
            }, 0); 
        }else if ( 94.4 <= topPerc &&  topPerc < 94.6 ){
            $('#seal').show();
            $('#seal').css({'transform':'scale(0.6) rotate(2deg)'});
             $('#seal').animate({
         width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(10) )/100,
                top:  ($winHeight *(96.8) )/100,
                opacity: 1
            }, 0); 
        }else if ( 94.2<= topPerc &&  topPerc < 94.4 ){
            $('#seal').show();
            $('#seal').css({'transform':'scale(0.5) rotate(-5deg)'});
             $('#seal').animate({
         width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(14) )/100,
                top:  ($winHeight *(97) )/100,
                opacity: 1
            }, 0); 
        }else if ( 94.0 <= topPerc &&  topPerc < 94.2 ){
            $('#seal').show();
            $('#seal').css({'transform':'scale(0.4) rotate(5deg)'});
             $('#seal').animate({
         width: ($WidthPerc * sealW)/100,
                height:($WidthPerc * sealH)/100,
                left: ($winWidth  *(18) )/100,
                top:  ($winHeight *(97.2) )/100,
                opacity: 1
            }, 0); 
        } else if (topPerc < 95.6) {
            $('#seal').show();
        }
//++++++++++++++++++++++ whaleNet +++++++++++++++++
        if (topPerc >= 95.9){
            $('#whaleNet').css({'display': 'none', 'transform':'scale(0.4)', 'left': '($winWidth * whaleNetLeft )/100', 'top':'($winHeight * whaleNetTop )/100'});
        } else  if ( topPerc < 95.7  && topPerc >= 95.9 ){
            $('#whaleNet').css({'display': 'block', 'transform':'scale(0.4)'});
            $('#whaleNet').animate({
                width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  * whaleNetTop )/100,
                top:  ($winHeight * whaleNetLeft )/100,
                opacity: 0.2
 
            },0); 
            
        }else if (  95.5 <= topPerc &&  topPerc < 95.7){
            $('#whaleNet').animate({
                width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(76.5) )/100,
                top:  ($winHeight *(95.9) )/100,
                opacity: 0.4,
                start: function(){
                    $( this ).css({'transform':'scale(0.5) rotate(15deg)'});
                }
            }, 0); 
            
        }else if (  95.3 <= topPerc &&  topPerc < 95.5 ){
             $('#whaleNet').css({'transform':'scale(0.6) rotate(5deg)'});
             $('#whaleNet').animate({
      width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(72) )/100,
                top:  ($winHeight *(96.2) )/100,
                opacity:0.7
            }, 0); 
            
        } else if ( 95.1 <= topPerc &&  topPerc < 95.3 ){
              $('#whaleNet').css({'transform':'scale(0.8) rotate(-10deg)'});
             $('#whaleNet').animate({
     width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(68.5) )/100,
                top:  ($winHeight *(96.4) )/100,
                opacity:0.8
            }, 0); 
           
        }else if ( 94.9 <= topPerc &&  topPerc < 95.1 ){
            $('#whaleNet').css({'transform':'scale(0.9) rotate(5deg)'});
             $('#whaleNet').animate({
         width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(63) )/100,
                top:  ($winHeight *(96.6) )/100,
                opacity: 0.9
            }, 0); 
        }else if ( 94.7 <= topPerc &&  topPerc < 94.9 ){
            $('#whaleNet').css({'transform':'scale(1) rotate(2deg)'});
             $('#whaleNet').animate({
         width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(60.5) )/100,
                top:  ($winHeight *(96.8) )/100,
                opacity: 1
            }, 0); 
        }else if ( 94.5 <= topPerc &&  topPerc < 94.7 ){
            $('#whaleNet').css({'transform':'rotate(-5deg)'});
             $('#whaleNet').animate({
         width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(56.5) )/100,
                top:  ($winHeight *(97) )/100,
                opacity: 1
            }, 0); 
        }else if ( 94.3 <= topPerc &&  topPerc < 94.5 ){
            $('#whaleNet').css({'transform':'rotate(5deg)'});
             $('#whaleNet').animate({
         width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(52.5) )/100,
                top:  ($winHeight *(96.8) )/100,
                opacity: 1
            }, 0); 
        }else if ( 94.1 <= topPerc &&  topPerc < 94.3 ){
            $('#whaleNet').css({'transform':'rotate(-8deg)'});
             $('#whaleNet').animate({
         width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(44.5) )/100,
                top:  ($winHeight *(97) )/100,
                opacity: 1
            }, 0);
        }else if ( 93.9 <= topPerc &&  topPerc < 94.1 ){
            $('#whaleNet').css({'transform':'rotate(5deg)'});
             $('#whaleNet').animate({
         width: ($WidthPerc * whaleNetW)/100,
                height:($WidthPerc * whaleNetH)/100,
                left: ($winWidth  *(40.5) )/100,
                top:  ($winHeight *(97) )/100,
                opacity: 1
            }, 0);
        }else if (topPerc < 95.9) {
            $('#whaleNet').css("display", 'block');
        }
//+++++++++++++++++++++ whale +++++++++++++++++++++++
    if (topPerc >= 95.6){
        $('#whale').css({'display': 'none', 'transform':'scale(0.3)', 'left': '($winWidth * whaleLeft)/100', 'top':'($winHeight *(whaleTop) )/100'});
    } else  if ( topPerc < 95.4  && topPerc >= 95.6 ){
        $('#whale').css({'display': 'block', 'transform':'scale(0.3)'});
        $('#whale').animate({
            width: ($WidthPerc * whaleW)/100,
            height:($WidthPerc * whaleH)/100,
            left: ($winWidth  *(whaleLeft))/100,
            top:  ($winHeight *(whaleTop))/100,
            opacity: 0.4

        },0); 

    }else if (  95.2 <= topPerc &&  topPerc < 95.4){
        $('#whale').css({'display': 'block', 'transform':'scale(0.4) rotate(15deg)'});
        $('#whale').animate({
            width: ($WidthPerc * whaleW)/100,
            height:($WidthPerc * whaleH)/100,
            left: ($winWidth  *(70) )/100,
            top:  ($winHeight *(98.2) )/100,
            opacity: 0.5
        }, 0); 

    }else if (  95.2 <= topPerc &&  topPerc < 95.2 ){
         $('#whale').css({'display': 'block', 'transform':'scale(0.5) rotate(5deg)'});
         $('#whale').animate({
  width: ($WidthPerc * whaleW)/100,
            height:($WidthPerc * whaleH)/100,
            left: ($winWidth  *(68) )/100,
            top:  ($winHeight *(97.6) )/100,
            opacity:0.7
        }, 0); 

    } else if ( 95.0 <= topPerc &&  topPerc < 95.2 ){
          $('#whale').css({'display': 'block', 'transform':'scale(0.6) rotate(-10deg)'});
         $('#whale').animate({
 width: ($WidthPerc * whaleW)/100,
            height:($WidthPerc * whaleH)/100,
            left: ($winWidth  *(64.5) )/100,
            top:  ($winHeight *(97.4) )/100,
            opacity:0.8
        }, 0); 

    }else if ( 94.8 <= topPerc &&  topPerc < 95.0 ){
        $('#whale').css({'display': 'block', 'transform':'scale(0.75) rotate(5deg)'});
         $('#whale').animate({
     width: ($WidthPerc * whaleW)/100,
            height:($WidthPerc * whaleH)/100,
            left: ($winWidth  *(60) )/100,
            top:  ($winHeight *(97.2) )/100,
            opacity: 0.9
        }, 0); 
    }else if ( 94.6 <= topPerc &&  topPerc < 94.8 ){
        $('#whale').css({'display': 'block', 'transform':'scale(0.6) rotate(2deg)'});
         $('#whale').animate({
     width: ($WidthPerc * whaleW)/100,
            height:($WidthPerc * whaleH)/100,
            left: ($winWidth  *(56.5) )/100,
            top:  ($winHeight *(97) )/100,
            opacity: 1
        }, 0); 
    }else if ( 94.4 <= topPerc &&  topPerc < 94.6 ){
        $('#whale').css({'display': 'block', 'transform':'scale(0.5) rotate(-5deg)'});
         $('#whale').animate({
     width: ($WidthPerc * whaleW)/100,
            height:($WidthPerc * whaleH)/100,
            left: ($winWidth  *(52.5) )/100,
            top:  ($winHeight *(97) )/100,
            opacity: 1
        }, 0); 
    }else if ( 94.2 <= topPerc &&  topPerc < 94.4 ){
        $('#whale').css({'display': 'block', 'transform':'scale(0.4) rotate(5deg)'});
         $('#whale').animate({
     width: ($WidthPerc * whaleW)/100,
            height:($WidthPerc * whaleH)/100,
            left: ($winWidth  *(48.5) )/100,
            top:  ($winHeight *(96.8) )/100,
            opacity: 1
        }, 0); 
    } else if (topPerc < 94.2) {
        $('#whale').css({'display': 'block'});
    }
// ++++++++++++++++++++++ massages ++++++++++++++++++++
    if ( 93.0 <= topPerc &&  topPerc < 93.8 && isBottomPage == 1){

            $('#dot-1').show();
            $('#dot-1').animate({
                left: ( $winWidth  * dot1Left )/100,
                top:  ( $winHeight * dot1Top )/100
            },0); 
       } 

        if ( 91.0 <= topPerc &&  topPerc < 91.8 && isBottomPage == 1){
            
            $('#msg-1').hide();
            $('#dot-2').show();
            $('#dot-2').animate({
                left: ( $winWidth  * dot2Left )/100,
                top:  ( $winHeight * dot2Top )/100
            },0); 
            $('#dot-3').show();
            $('#dot-3').animate({
                left: ( $winWidth  * dot3Left )/100,
                top:  ( $winHeight * dot3Top )/100
            },0); 
        } else if (88.7 <= topPerc &&  topPerc < 88.9 && isBottomPage == 1) {
            $('#msg-2').hide();
            $('#msg-3').hide(); 
        } else if ( 78.4 <= topPerc &&  topPerc < 79.0 && isBottomPage == 1){
            $('#dot-4').show();
            $('#dot-4').animate({
                left: ( $winWidth  * dot4Left )/100,
                top:  ( $winHeight * dot4Top )/100
            },0); 

        }  else if (74.4 <= topPerc &&  topPerc < 74.8 && isBottomPage == 1) {
            $('#msg-4').hide();
            
        } else if ( 73.8 <= topPerc &&  topPerc < 74.4 && isBottomPage == 1){
            $('#dot-5').show();
            $('#dot-5').animate({
                left: ( $winWidth  * dot5Left )/100,
                top:  ( $winHeight * dot5Top )/100
            },0);

            $('#dot-6').show();
            $('#dot-6').animate({
                left: ( $winWidth  * dot6Left )/100,
                top:  ( $winHeight * dot6Top )/100
            },0);
        } else if ( 72.0 <= topPerc &&  topPerc < 72.6 && isBottomPage == 1){
            $('#dot-7').show();
            $('#dot-7').animate({
                left: ( $winWidth  * dot7Left )/100,
                top:  ( $winHeight * dot7Top )/100
            },0);

        } else if ( 71.6 <= topPerc &&  topPerc < 71.8 && isBottomPage == 1) {
            $('#msg-5').hide();
            $('#msg-6').hide();
        } else if ( 68.4 <= topPerc &&  topPerc < 69.0 && isBottomPage == 1){
            $('#dot-8').show();
            $('#dot-8').animate({
                left: ( $winWidth  * dot8Left )/100,
                top:  ( $winHeight * dot8Top )/100
            },0);
        } else if ( 67.5 <= topPerc &&  topPerc < 67.9 && isBottomPage == 1){
            $('#msg-7').hide();

        } else if ( 66.2 <= topPerc &&  topPerc < 66.4 && isBottomPage == 1) {
            $('#msg-8').hide();
            
        } else if ( 62.8 <= topPerc &&  topPerc < 63.2 && isBottomPage == 1){
            $('#dot-9').show();
            $('#dot-9').animate({
                left: ( $winWidth  * dot9Left )/100,
                top:  ( $winHeight * dot9Top )/100
            },0);

        } else if ( 58.4 <= topPerc &&  topPerc < 58.8 && isBottomPage == 1) {
            $('#msg-9').hide();
            
        } else if ( 58.0 <= topPerc &&  topPerc < 58.6 && isBottomPage == 1){
            $('#dot-10').show();
            $('#dot-10').animate({
                left: ( $winWidth  * dot10Left )/100,
                top:  ( $winHeight * dot10Top )/100
            },0);

        } else if ( 55.4 <= topPerc &&  topPerc < 55.6 && isBottomPage == 1) {
            $('#msg-10').hide();
            
        } else if ( 54.2 <= topPerc &&  topPerc < 54.6 && isBottomPage == 1){
            $('#dot-11').show();
            $('#dot-11').animate({
                left: ( $winWidth  * dot11Left )/100,
                top:  ( $winHeight * dot11Top )/100
            },0);

        } else if ( 51.0 <= topPerc &&  topPerc < 51.4 && isBottomPage == 1){
            
            $('#dot-12').show();
            $('#dot-12').animate({
                left: ( $winWidth  * dot12Left )/100,
                top:  ( $winHeight * dot12Top )/100
            },0);

        } else if ( 49.8 <= topPerc &&  topPerc < 50.4 && isBottomPage == 1) {
            $('#msg-11').hide();
            
        } else if ( 46.6 <= topPerc &&  topPerc < 46.8 && isBottomPage == 1) {
            $('#msg-12').hide();
            
        } else if ( 44.4 <= topPerc &&  topPerc < 44.6 && isBottomPage == 1){
            
            $('#dot-13').show();
            $('#dot-13').animate({
                left: ( $winWidth  * dot13Left )/100,
                top:  ( $winHeight * dot13Top )/100
            },0);

        } else if ( 41.4 <= topPerc &&  topPerc < 41.6 && isBottomPage == 1) {
            $('#msg-13').hide();
            
        } else if ( 38.8 <= topPerc &&  topPerc < 39.2 && isBottomPage == 1){
            
            $('#dot-14').show();
           $('#dot-14').animate({
                left: ( $winWidth  * dot14Left )/100,
                top:  ( $winHeight * dot14Top )/100
            },0);

        } else if ( 36.0 <= topPerc &&  topPerc < 36.2 && isBottomPage == 1) {
            $('#msg-14').hide();
            
        } else if ( 33.2 <= topPerc &&  topPerc < 33.8 && isBottomPage == 1){
            
            $('#dot-15').show();
            $('#dot-15').animate({
                left: ( $winWidth  * dot15Left )/100,
                top:  ( $winHeight * dot15Top )/100
            },0);

        } else if ( 30.4 <= topPerc &&  topPerc < 30.8 && isBottomPage == 1) {
            $('#msg-15').hide();
            
        } else if ( 26.0 <= topPerc &&  topPerc < 26.8 && isBottomPage == 1){
            
            $('#dot-16').show();
            $('#dot-16').animate({
                left: ( $winWidth  * dot16Left )/100,
                top:  ( $winHeight * dot16Top )/100
            },0);

            $('#dot-17').show();
            $('#dot-17').animate({
                left: ( $winWidth  * dot17Left )/100,
                top:  ( $winHeight * dot17Top )/100
            },0);

        } else if ( 23.4 <= topPerc &&  topPerc < 23.8 && isBottomPage == 1) {
            $('#msg-16').hide();
            $('#msg-17').hide();
        } else if ( 22.2 <= topPerc &&  topPerc < 22.8 && isBottomPage == 1){
            
            $('#dot-18').show();
            $('#dot-18').animate({
                left: ( $winWidth  * dot18Left )/100,
                top:  ( $winHeight * dot18Top )/100
            },0);

        } else if ( 19.0 <= topPerc &&  topPerc < 20.0 && isBottomPage == 1){
            
            $('#dot-19').show();
            $('#dot-19').animate({
                left: ( $winWidth  * dot19Left )/100,
                top:  ( $winHeight * dot19Top )/100
            },0);

        } else if ( 18.6 <= topPerc &&  topPerc < 18.8 && isBottomPage == 1) {
            $('#msg-18').hide();
            
        } else if ( 15.4 <= topPerc &&  topPerc < 16.0 && isBottomPage == 1){
            
            $('#dot-20').show();
            $('#dot-20').animate({
                left: ( $winWidth  * dot20Left )/100,
                top:  ( $winHeight * dot20Top )/100
            },0);

        } else if ( 14.1 <= topPerc &&  topPerc < 14.5 && isBottomPage == 1) {
            $('#msg-19').hide();
            
        } else if ( 10.6 <= topPerc &&  topPerc < 11.4 && isBottomPage == 1) {
            $('#msg-20').hide();
            $('#dot-21').show();
            $('#dot-21').animate({
                left: ( $winWidth  * dot21Left )/100,
                top:  ( $winHeight * dot21Top )/100
            },0);
        } else if ( 8.6 <= topPerc &&  topPerc < 9.0 && isBottomPage == 1){
            $('#msg-21').hide();
            $('#dot-22').show();
            $('#dot-22').animate({
                left: ( $winWidth  * dot22Left )/100,
                top:  ( $winHeight * dot22Top )/100
            },0);

        } else if ( 4.4 <= topPerc &&  topPerc < 5.0 && isBottomPage == 1){
            $('#msg-22').hide();
            $('#dot-23').show();
            $('#dot-23').animate({
                left: ( $winWidth  * dot23Left )/100,
                top:  ( $winHeight * dot23Top )/100
            },0);

        } else if ( 1.0 <= topPerc &&  topPerc < 2.0 && isBottomPage == 1){
            $('#msg-23').hide();
            $('#dot-24').show();
           $('#dot-24').animate({
                left: ( $winWidth  * dot24Left )/100,
                top:  ( $winHeight * dot24Top )/100
            },0);
			
        } else if ( 0 <= topPerc &&  topPerc < 0.8 && isBottomPage == 1){
        		$('#msg-24').hide();
        		$('#dot-25').show();
				$('#dot-25').animate({
                	left: ( $winWidth  * dot25Left )/100,
                	top:  ( $winHeight * dot25Top )/100
            	},0);
        }
// +++++++++++++++++ scroll bar ++++++++++++++++++++++

    var welcomeDivHeight = $('#welcomeDiv').height();
    var wholePgHeightPerc = (top * 100)/($winHeight + welcomeDivHeight);
    
    // set the current map width and height
    var mapWidth  = $winWidth  *2 /100;
    //var mapheight = $winHeight *3 /100;
    var mapheight = ($winHeight + welcomeDivHeight)*3 /100;

    // Finds the offset of the scroll bar to move the black box based on that
    var NavScrollBarOffset = $('.NavScrollBar').position();
    var NavScrollBarOffsetTop = NavScrollBarOffset.top;
    var NavScrollBarOffsetLeft= NavScrollBarOffset.left;    


    /* Scroll Bar Navigation default settings  */
    //$('.NavScrollBar').show();
    //$('.slider').show();

    $('.NavScrollBar').animate({
        opacity:0.7,

        width: mapWidth,
        height:mapheight
    },0); 


    /* slider dynamic changes  */
    $('.slider').animate({
        opacity:0.6,
        width: ($winWidth  *4 /100),
        height:($winWidth  *2.3 /100),

        left: NavScrollBarOffsetLeft - (1/3*mapWidth),
        top:  NavScrollBarOffsetTop + ( mapheight * wholePgHeightPerc/100)
    },0);   

    
    
    // console.log("counter: "+ counter);
    // console.log("++isBottomPage: "+ isBottomPage);
    // console.log ("@@@@ screen size: " + screenSize );
    //console.log ("kkkk: "+ (0.0095 * ( WidthPerc() * ($bg1Height+$bg2Height +$bg3Height +$bg4Height ) ) ) );
     console.log ("-----TopPrec: "+ topPercfunc());


});

