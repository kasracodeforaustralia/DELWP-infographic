$(document).ready(function() {

    
    var $win = $(window);
    
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    
     /* msg-1 
    $('#msg-1').animate({ 
        left: ($winWidth  * msg1Left )/100,
        top:  ($winHeight * msg1Top )/100
    },0);*/
    
   /* msg-2 
    $('#msg-2').animate({ 
        left: ($winWidth  * msg2Left )/100,
        top:  ($winHeight * msg2Top )/100
    },0); */

    /* msg-3 
    $('#msg-3').animate({ 
       left: ($winWidth  * msg3Left )/100,
        top:  ($winHeight * msg3Top )/100
    },0); 

    /* msg-4 
    $('#msg-4').animate({ 
        left: ($winWidth  * msg4Left )/100,
        top:  ($winHeight * msg4Top )/100
    },0); */
    
    /* msg-5 
    $('#msg-5').animate({ 
       left: ($winWidth  * msg5Left )/100,
        top:  ($winHeight * msg5Top )/100
    },0);

    /* msg-6 
    $('#msg-6').animate({ 
       left: ($winWidth  * msg6Left )/100,
        top:  ($winHeight * msg6Top )/100
    },0); 
    
     /* msg-7 
    $('#msg-7').animate({ 
       left: ($winWidth  * msg7Left )/100,
        top:  ($winHeight * msg7Top )/100
    },0); 
    

     /* msg-8 
    $('#msg-8').animate({ 
       left: ($winWidth  * msg8Left )/100,
        top:  ($winHeight * msg8Top )/100
    },0); 

     /* msg-9 
    $('#msg-9').animate({ 
       
        left: ($winWidth  * msg9Left )/100,
        top:  ($winHeight * msg9Top )/100
    },0); 
    

     /* msg-10 
    $('#msg-10').animate({ 
     
        left: ($winWidth  * msg10Left )/100,
        top:  ($winHeight * msg10Top )/100
    },0);

    /* msg-11 
    $('#msg-11').animate({ 
       left: ($winWidth  * msg11Left )/100,
        top:  ($winHeight * msg11Top )/100
    },0); 

     /* msg-12 
    $('#msg-12').animate({ 
       left: ($winWidth  * msg12Left )/100,
        top:  ($winHeight * msg12Top )/100
    },0); 
     

 	/* msg-13 */
    $('#msg-13').animate({ 
       left: ($winWidth  * msg13Left )/100,
        top:  ($winHeight * msg13Top )/100
    },0);

    /* msg-14*/ 
    $('#msg-14').animate({ 
       left: ($winWidth  * msg14Left )/100,
        top:  ($winHeight * msg14Top )/100
    },0); 
    

     /* msg-15 */
    $('#msg-15').animate({ 
       left: ($winWidth  * msg15Left )/100,
        top:  ($winHeight * msg15Top )/100
    },0); 

    /* msg-16 */
    $('#msg-16').animate({ 
       left: ($winWidth  * msg16Left )/100,
        top:  ($winHeight * msg16Top )/100
    },0); 

   /* msg-17 */
    $('#msg-17').animate({ 
       left: ($winWidth  * msg17Left )/100,
        top:  ($winHeight * msg17Top )/100
    },0); 
    
     /* msg-18 */
    $('#msg-18').animate({ 
       left: ($winWidth  * msg18Left )/100,
        top:  ($winHeight * msg18Top )/100
    },0); 
    
     /* msg-19 */
    $('#msg-19').animate({ 
       left: ($winWidth  * msg19Left )/100,
        top:  ($winHeight * msg19Top )/100
    },0); 
    
  	/* msg-20 */
    $('#msg-20').animate({ 
       left: ($winWidth  * msg20Left )/100,
        top:  ($winHeight * msg20Top )/100
    },0); 
    
     /* msg-21 */
    $('#msg-21').animate({ 
       	left: ($winWidth  * msg21Left )/100,
        top:  ($winHeight * msg21Top )/100
    },0); 
    
     /* msg-22 */
    $('#msg-22').animate({ 
       	left: ($winWidth  * msg22Left )/100,
        top:  ($winHeight * msg22Top )/100
    },0); 

    /* msg-23 */
    $('#msg-23').animate({ 
       	left: ($winWidth  * msg23Left )/100,
        top:  ($winHeight * msg23Top )/100
    },0); 

    /* msg-24 */
    $('#msg-24').animate({ 
       	left: ($winWidth  * msg24Left )/100,
        top:  ($winHeight * msg24Top )/100
    },0); 
    
    /*  msg-25 */
    $('#msg-25').animate({ 
       	left: ($winWidth  * msg25Left )/100,
        top:  ($winHeight * msg25Top )/100
    },0); 


    /****** TOGGLING MESSAGES ******/

    $('#dot-1').click(function(){   
        $('#msg-1').toggle("slow");
    });

    $('#dot-2').click(function(){
        $('#msg-2').toggle("slow");
    });

    $('#dot-3').click(function(){
        $('#msg-3').toggle("slow");
    });

    $('#dot-4').click(function(){
        $('#msg-4').toggle("slow");
    });

    $('#dot-5').click(function(){
        $('#msg-5').toggle("slow");
    });

    $('#dot-6').click(function(){
        $('#msg-6').toggle("slow");
    });

    $('#dot-7').click(function(){
        $('#msg-7').toggle("slow");
    });
    
    $('#dot-8').click(function(){
        $('#msg-8').toggle("slow");
    });

    $('#dot-9').click(function(){
        $('#msg-9').toggle("slow");
    });
    
    $('#dot-10').click(function(){
        $('#msg-10').toggle("slow");
    });

    $('#dot-11').click(function(){
        $('#msg-11').toggle("slow");
    });

    $('#dot-12').click(function(){
        $('#msg-12').toggle("slow");
    });

    $('#dot-13').click(function(){
        $('#msg-13').toggle("slow");
    });

    $('#dot-14').click(function(){
        $('#msg-14').toggle("slow");
    });

    $('#dot-15').click(function(){
        $('#msg-15').toggle("slow");
    });

    $('#dot-16').click(function(){
        $('#msg-16').toggle("slow");
    });

    $('#dot-17').click(function(){
        $('#msg-17').toggle("slow");
    });

    $('#dot-18').click(function(){
        $('#msg-18').toggle("slow");
    });

   $('#dot-19').click(function(){
        $('#msg-19').toggle("slow");
    });

    $('#dot-20').click(function(){
        $('#msg-20').toggle("slow");
    });
    $('#dot-21').click(function(){
        $('#msg-21').toggle("slow");
    });

    $('#dot-22').click(function(){
       $('#msg-22').toggle("slow");
    });

	$('#dot-23').click(function(){
        $('#msg-23').toggle("slow");
    });

	$('#dot-24').click(function(){
        $('#msg-24').toggle("slow");
    });

	$('#dot-25').click(function(){
        $('#msg-25').toggle("slow");
    });

});




$(window).scroll(function(){
	//////////MESSAGES ////////////////////
	
	var $winWidth   = winWidth();
    var $winHeight  = winHeight();
	var topPerc     = topPercfunc(); 


	/*if (winWidth() <= 768) {
		if ( 93.0 <= topPerc &&  topPerc < 93.8 ){
            $('#msg-1').show();
		}
		if ( 91.0 <= topPerc &&  topPerc < 91.8 ){
				$('#msg-1').hide();
			 $('#msg-2').show();
			 $('#msg-3').show();
		}
	} */

	
      if ( 93.0 <= topPerc &&  topPerc < 93.8 ){
            $('#dot-1').show();
       } 

        if ( 91.0 <= topPerc &&  topPerc < 91.8 ){
            
            $('#msg-1').hide();
            $('#dot-2').show();
            /*$('#dot-2').animate({
                left: ( $winWidth  * dot2Left )/100,
                top:  ( $winHeight * dot2Top )/100
            },0); */
            $('#dot-3').show();
            /*$('#dot-3').animate({
                left: ( $winWidth  * dot3Left )/100,
                top:  ( $winHeight * dot3Top )/100
            },0); */
        } else if (88.7 <= topPerc &&  topPerc < 88.9) {
            $('#msg-2').hide();
            $('#msg-3').hide(); 
        } else if ( 78.4 <= topPerc &&  topPerc < 79.0 ){
            $('#dot-4').show();
            /*$('#dot-4').animate({
                left: ( $winWidth  * dot4Left )/100,
                top:  ( $winHeight * dot4Top )/100
            },0); */

        }  else if (74.4 <= topPerc &&  topPerc < 74.8) {
            $('#msg-4').hide();
            
        } else if ( 73.8 <= topPerc &&  topPerc < 74.4 ){
            $('#dot-5').show();
            /*$('#dot-5').animate({
                left: ( $winWidth  * dot5Left )/100,
                top:  ( $winHeight * dot5Top )/100
            },0);*/

            $('#dot-6').show();
            /*$('#dot-6').animate({
                left: ( $winWidth  * dot6Left )/100,
                top:  ( $winHeight * dot6Top )/100
            },0);*/
        } else if ( 72.4 <= topPerc &&  topPerc < 72.6 ){
            $('#dot-7').show();
            /*$('#dot-7').animate({
                left: ( $winWidth  * dot7Left )/100,
                top:  ( $winHeight * dot7Top )/100
            },0);*/

        } else if ( 71.6 <= topPerc &&  topPerc < 71.8 ) {
            $('#msg-5').hide();
            $('#msg-6').hide();
        } else if ( 68.4 <= topPerc &&  topPerc < 68.8 ){
            $('#dot-8').show();
            /*$('#dot-8').animate({
                left: ( $winWidth  * dot8Left )/100,
                top:  ( $winHeight * dot8Top )/100
            },0);*/
        } else if ( 67.5 <= topPerc &&  topPerc < 67.9 ){
            $('#msg-7').hide();

        } else if ( 66.2 <= topPerc &&  topPerc < 66.4 ) {
            $('#msg-8').hide();
            
        } else if ( 62.8 <= topPerc &&  topPerc < 63.2 ){
            $('#dot-9').show();
            /*$('#dot-9').animate({
                left: ( $winWidth  * dot9Left )/100,
                top:  ( $winHeight * dot9Top )/100
            },0);*/

        } else if ( 58.4 <= topPerc &&  topPerc < 58.8 ) {
            $('#msg-9').hide();
            
        } else if ( 58.0 <= topPerc &&  topPerc < 58.6 ){
            $('#dot-10').show();
            /*$('#dot-10').animate({
                left: ( $winWidth  * dot10Left )/100,
                top:  ( $winHeight * dot10Top )/100
            },0);*/

        } else if ( 55.4 <= topPerc &&  topPerc < 55.6 ) {
            $('#msg-10').hide();
            
        } else if ( 54.2 <= topPerc &&  topPerc < 54.6 ){
            $('#dot-11').show();
            /*$('#dot-11').animate({
                left: ( $winWidth  * dot11Left )/100,
                top:  ( $winHeight * dot11Top )/100
            },0);*/

        } else if ( 51.0 <= topPerc &&  topPerc < 51.4 ){
            
            $('#dot-12').show();
            /*$('#dot-12').animate({
                left: ( $winWidth  * dot12Left )/100,
                top:  ( $winHeight * dot12Top )/100
            },0);*/

        } else if ( 49.8 <= topPerc &&  topPerc < 50.4 ) {
            $('#msg-11').hide();
            
        } else if ( 46.6 <= topPerc &&  topPerc < 46.8 ) {
            $('#msg-12').hide();
            
        } else if ( 44.4 <= topPerc &&  topPerc < 44.6 ){
            
            $('#dot-13').show();
            $('#dot-13').animate({
                left: ( $winWidth  * dot13Left )/100,
                top:  ( $winHeight * dot13Top )/100
            },0);

        } else if ( 41.4 <= topPerc &&  topPerc < 41.6 ) {
            $('#msg-13').hide();
            
        } else if ( 38.8 <= topPerc &&  topPerc < 39.2 ){
            
            $('#dot-14').show();
            $('#dot-14').animate({
                left: ( $winWidth  * dot14Left )/100,
                top:  ( $winHeight * dot14Top )/100
            },0);

        } else if ( 36.0 <= topPerc &&  topPerc < 36.2 ) {
            $('#msg-14').hide();
            
        } else if ( 33.4 <= topPerc &&  topPerc < 33.6 ){
            
            $('#dot-15').show();
            $('#dot-15').animate({
                left: ( $winWidth  * dot15Left )/100,
                top:  ( $winHeight * dot15Top )/100
            },0);

        } else if ( 30.4 <= topPerc &&  topPerc < 30.8 ) {
            $('#msg-15').hide();
            
        } else if ( 26.0 <= topPerc &&  topPerc < 26.8 ){
            
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

        } else if ( 23.4 <= topPerc &&  topPerc < 23.8 ) {
            $('#msg-16').hide();
            $('#msg-17').hide();
        } else if ( 22.6 <= topPerc &&  topPerc < 22.8 ){
            
            $('#dot-18').show();
            $('#dot-18').animate({
                left: ( $winWidth  * dot18Left )/100,
                top:  ( $winHeight * dot18Top )/100
            },0);

        } else if ( 19.0 <= topPerc &&  topPerc < 20.0 ){
            
            $('#dot-19').show();
            $('#dot-19').animate({
                left: ( $winWidth  * dot19Left )/100,
                top:  ( $winHeight * dot19Top )/100
            },0);

        } else if ( 18.6 <= topPerc &&  topPerc < 18.8 ) {
            $('#msg-18').hide();
            
        } else if ( 15.6 <= topPerc &&  topPerc < 16.0 ){
            
            $('#dot-20').show();
            $('#dot-20').animate({
                left: ( $winWidth  * dot20Left )/100,
                top:  ( $winHeight * dot20Top )/100
            },0);

        } else if ( 14.1 <= topPerc &&  topPerc < 14.5 ) {
            $('#msg-19').hide();
            
        } else if ( 10.8 <= topPerc &&  topPerc < 11.4 ) {
            $('#msg-20').hide();
            $('#dot-21').show();
            $('#dot-21').animate({
                left: ( $winWidth  * dot21Left )/100,
                top:  ( $winHeight * dot21Top )/100
            },0);
        } else if ( 8.6 <= topPerc &&  topPerc < 9.0 ){
            $('#msg-21').hide();
            $('#dot-22').show();
            $('#dot-22').animate({
                left: ( $winWidth  * dot22Left )/100,
                top:  ( $winHeight * dot22Top )/100
            },0);

        } else if ( 4.8 <= topPerc &&  topPerc < 5.0 ){
            $('#msg-22').hide();
            $('#dot-23').show();
            $('#dot-23').animate({
                left: ( $winWidth  * dot23Left )/100,
                top:  ( $winHeight * dot23Top )/100
            },0);

        } else if ( 1.0 <= topPerc &&  topPerc < 2.0 ){
            $('#msg-23').hide();
            $('#dot-24').show();
            $('#dot-24').animate({
                left: ( $winWidth  * dot24Left )/100,
                top:  ( $winHeight * dot24Top )/100
            },0);
			
        } else if ( 0 <= topPerc &&  topPerc < 0.8 ){
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