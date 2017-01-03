$(document).ready(function() {

    
    var $win = $(window);
    
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    
     /* msg-1 */
    $('#msg-1').animate({ 
        left: ( ($winWidth  * dot1Left )/100 + dotsW),
        top:  ( ($winHeight * dot1Top )/100 + dotsW)
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
    


});

$(window).scroll(function(){
	//////////MESSAGES ////////////////////
	
	var $winWidth   = winWidth();
    var $winHeight  = winHeight();
	var topPerc     = topPercfunc(); 
	var $WidthPerc  = WidthPerc();
	
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
        } else if ( 72.4 <= topPerc &&  topPerc < 72.6 && isBottomPage == 1){
            $('#dot-7').show();
            $('#dot-7').animate({
                left: ( $winWidth  * dot7Left )/100,
                top:  ( $winHeight * dot7Top )/100
            },0);

        } else if ( 71.6 <= topPerc &&  topPerc < 71.8 && isBottomPage == 1) {
            $('#msg-5').hide();
            $('#msg-6').hide();
        } else if ( 68.4 <= topPerc &&  topPerc < 68.8 && isBottomPage == 1){
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
            
        } else if ( 33.4 <= topPerc &&  topPerc < 33.6 && isBottomPage == 1){
            
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
        } else if ( 22.6 <= topPerc &&  topPerc < 22.8 && isBottomPage == 1){
            
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
            
        } else if ( 15.6 <= topPerc &&  topPerc < 16.0 && isBottomPage == 1){
            
            $('#dot-20').show();
            $('#dot-20').animate({
                left: ( $winWidth  * dot20Left )/100,
                top:  ( $winHeight * dot20Top )/100
            },0);

        } else if ( 14.1 <= topPerc &&  topPerc < 14.5 && isBottomPage == 1) {
            $('#msg-19').hide();
            
        } else if ( 10.8 <= topPerc &&  topPerc < 11.4 && isBottomPage == 1) {
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

    

   

    

/* dot-1 
    $('#dot-1').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot1Left )/100,
        top:  ($winHeight * dot1Top )/100
    },0); 

    /* dot-2 
    $('#dot-2').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot2Left )/100,
        top:  ($winHeight * dot2Top )/100
    },0); 

    /* dot-3
    $('#dot-3').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot3Left )/100,
        top:  ($winHeight * dot3Top )/100
    },0); 

    /* dot-4 
    $('#dot-4').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot4Left )/100,
        top:  ($winHeight * dot4Top )/100
    },0); 

     /* dot-5 
    $('#dot-5').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot5Left )/100,
        top:  ($winHeight * dot5Top )/100
    },0); 

     /* dot-6 
    $('#dot-6').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot6Left )/100,
        top:  ($winHeight * dot6Top )/100
    },0); 

     /* dot-7 
    $('#dot-7').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot7Left )/100,
        top:  ($winHeight * dot7Top )/100
    },0); 


    /* dot-8 
    $('#dot-8').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot8Left )/100,
        top:  ($winHeight * dot8Top )/100
    },0); 

    /* dot-9 
    $('#dot-9').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot9Left )/100,
        top:  ($winHeight * dot9Top )/100
    },0); 

    /* dot-10 
    $('#dot-10').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot10Left )/100,
        top:  ($winHeight * dot10Top )/100
    },0); 

	/* dot-11 
    $('#dot-11').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot11Left )/100,
        top:  ($winHeight * dot11Top )/100
    },0); 

    /* dot-12 
    $('#dot-12').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot12Left )/100,
        top:  ($winHeight * dot12Top )/100
    },0); 

 	/* dot-13 
    $('#dot-13').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot13Left )/100,
        top:  ($winHeight * dot13Top )/100
    },0); 

    /* dot-14 
    $('#dot-14').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot14Left )/100,
        top:  ($winHeight * dot14Top )/100
    },0); 

 	/* dot-15 
    $('#dot-15').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot15Left )/100,
        top:  ($winHeight * dot15Top )/100
    },0); 

     /* dot-16 
    $('#dot-16').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot16Left )/100,
        top:  ($winHeight * dot16Top )/100
    },0); 

     

    

 /* dot-17 
    $('#dot-17').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot17Left )/100,
        top:  ($winHeight * dot17Top )/100
    },0); 

  

 /* dot-18 
    $('#dot-18').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot18Left )/100,
        top:  ($winHeight * dot18Top )/100
    },0); 




    /* dot-19 
    $('#dot-19').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot19Left )/100,
        top:  ($winHeight * dot19Top )/100
    },0); 

 
    

     /* dot-20 
    $('#dot-20').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot20Left )/100,
        top:  ($winHeight * dot20Top )/100
    },0); 

    /* dot-21 
    $('#dot-21').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot21Left )/100,
        top:  ($winHeight * dot21Top )/100
    },0); 

 

    /* dot-22 
    $('#dot-22').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot22Left )/100,
        top:  ($winHeight * dot22Top )/100
    },0); 

    /* dot-23 
    $('#dot-23').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot23Left )/100,
        top:  ($winHeight * dot23Top )/100
    },0); 

         /* dot-24 
    $('#dot-24').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot24Left )/100,
        top:  ($winHeight * dot24Top )/100
    },0); 

    /* dot-25 
    $('#dot-25').animate({ 
       // width: ($WidthPerc * sealW)/100, 
       // height: ($HeightPerc* sealH)/100,
        left: ($winWidth  * dot25Left )/100,
        top:  ($winHeight * dot25Top )/100
    },0); */


    
});

function hide(target) {
    document.getElementById(target).style.display = 'none';
}