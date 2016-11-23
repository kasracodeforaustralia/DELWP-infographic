$(window).scroll(function(){   

        // Responsive width and height of the bg images
        var $winWidth   = winWidth();
        var $winHeight  = winHeight();
        var $WidthPerc  = WidthPerc();
        var $HeightPerc = HeightPerc();
        var topPerc     = topPercfunc();

       

        /* dot 1 */ 
        if (topPerc >= 93.6){
            $('.bg1').css({'opacity':'1', 'filter': 'grayscale(0)'});
            $('#dot-1').css({'display': 'none', 'left': '($winWidth * dot1Left)/100', 'top':'($winHeight *(dot1Top) )/100'});
            $('#dot-2').css({'display': 'none', 'left': '($winWidth * dot2Left)/100', 'top':'($winHeight *(dot2Top) )/100'});
            $('#dot-3').css({'display': 'none', 'left': '($winWidth * dot3Left)/100', 'top':'($winHeight *(dot3Top) )/100'});
            $('#dot-4').css({'display': 'none', 'left': '($winWidth * dot4Left)/100', 'top':'($winHeight *(dot4Top) )/100'});
            $('#dot-5').css({'display': 'none', 'left': '($winWidth * dot5Left)/100', 'top':'($winHeight *(dot5Top) )/100'});
            $('#dot-6').css({'display': 'none', 'left': '($winWidth * dot6Left)/100', 'top':'($winHeight *(dot6Top) )/100'});
            $('#dot-7').css({'display': 'none', 'left': '($winWidth * dot7Left)/100', 'top':'($winHeight *(dot7Top) )/100'});
            $('#dot-8').css({'display': 'none', 'left': '($winWidth * dot8Left)/100', 'top':'($winHeight *(dot8Top) )/100'});
            $('#dot-9').css({'display': 'none', 'left': '($winWidth * dot9Left)/100', 'top':'($winHeight *(dot9Top) )/100'});
            $('#dot-10').css({'display': 'none', 'left': '($winWidth * dot10Left)/100', 'top':'($winHeight *(dot10Top) )/100'});
            $('#dot-11').css({'display': 'none', 'left': '($winWidth * dot11Left)/100', 'top':'($winHeight *(dot11Top) )/100'});
            $('#dot-12').css({'display': 'none', 'left': '($winWidth * dot12Left)/100', 'top':'($winHeight *(dot12Top) )/100'});
            $('#dot-13').css({'display': 'none', 'left': '($winWidth * dot13Left)/100', 'top':'($winHeight *(dot13Top) )/100'});
            $('#dot-14').css({'display': 'none', 'left': '($winWidth * dot14Left)/100', 'top':'($winHeight *(dot14Top) )/100'});
            $('#dot-15').css({'display': 'none', 'left': '($winWidth * dot15Left)/100', 'top':'($winHeight *(dot15Top) )/100'});
            $('#dot-16').css({'display': 'none', 'left': '($winWidth * dot16Left)/100', 'top':'($winHeight *(dot16Top) )/100'});
            $('#dot-17').css({'display': 'none', 'left': '($winWidth * dot17Left)/100', 'top':'($winHeight *(dot17Top) )/100'});
            $('#dot-18').css({'display': 'none', 'left': '($winWidth * dot18Left)/100', 'top':'($winHeight *(dot18Top) )/100'});
            $('#dot-19').css({'display': 'none', 'left': '($winWidth * dot19Left)/100', 'top':'($winHeight *(dot19Top) )/100'});
            $('#dot-20').css({'display': 'none', 'left': '($winWidth * dot20Left)/100', 'top':'($winHeight *(dot20Top) )/100'});
            $('#dot-21').css({'display': 'none', 'left': '($winWidth * dot21Left)/100', 'top':'($winHeight *(dot21Top) )/100'});
        } else  if ( 93.4 <= topPerc &&  topPerc < 93.6 ){
            $('#dot-1').css({'display': 'block'});
            $('.bg1').css({'opacity':'0.6', 'filter': 'grayscale(1)'});
            $('#dot-1').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot1Left )/100,
                top:  ( $winHeight * dot1Top )/100
            },0); 
        } else if ( 91.6 <= topPerc &&  topPerc < 93.4 ){
            $('.bg1').css({'opacity':'1', 'filter': 'grayscale(0)'});

        } else if ( 91.4 <= topPerc &&  topPerc < 91.6 ){
            $('#dot-1').css("display", 'block');
            $('#msg-1').css("display", 'none');
            $('#dot-2').css({'display': 'block'});
            $('#dot-2').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot2Left )/100,
                top:  ( $winHeight * dot2Top )/100
            },0); 
            $('#dot-3').css({'display': 'block'});
            $('#dot-3').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot3Left )/100,
                top:  ( $winHeight * dot3Top )/100
            },0); 
        } else if (88.7 <= topPerc &&  topPerc < 88.9) {
            $('#msg-2').css("display", 'none');
            $('#msg-3').css("display", 'none'); 
        } else if ( 78.6 <= topPerc &&  topPerc < 78.8 ){
            $('#dot-4').css({'display': 'block'});
            $('#dot-4').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot4Left )/100,
                top:  ( $winHeight * dot4Top )/100
            },0); 

        }  else if (74.4 <= topPerc &&  topPerc < 74.8) {
            $('#msg-4').css("display", 'none');
            
        } else if ( 74.0 <= topPerc &&  topPerc < 74.2 ){
            $('#dot-5').css({'display': 'block'});
            $('#dot-5').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot5Left )/100,
                top:  ( $winHeight * dot5Top )/100
            },0);

            $('#dot-6').css({'display': 'block'});
            $('#dot-6').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot6Left )/100,
                top:  ( $winHeight * dot6Top )/100
            },0);
        } else if ( 72.4 <= topPerc &&  topPerc < 72.6 ){
            $('#dot-7').css({'display': 'block'});
            $('#dot-7').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot7Left )/100,
                top:  ( $winHeight * dot7Top )/100
            },0);

        } else if ( 71.6 <= topPerc &&  topPerc < 71.8 ) {
            $('#msg-5').css("display", 'none');
            $('#msg-6').css("display", 'none'); 
        } else if ( 68.4 <= topPerc &&  topPerc < 68.6 ){
            $('#msg-7').css("display", 'none'); 
            $('#dot-8').css({'display': 'block'});
            $('#dot-8').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot8Left )/100,
                top:  ( $winHeight * dot8Top )/100
            },0);

        } else if ( 66.2 <= topPerc &&  topPerc < 66.4 ) {
            $('#msg-8').css("display", 'none');
            
        } else if ( 62.4 <= topPerc &&  topPerc < 62.6 ){
            $('#dot-9').css({'display': 'block'});
            $('#dot-9').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot9Left )/100,
                top:  ( $winHeight * dot9Top )/100
            },0);

        } else if ( 60.6 <= topPerc &&  topPerc < 60.8 ) {
            $('#msg-9').css("display", 'none');
            
        } else if ( 58.6 <= topPerc &&  topPerc < 58.8 ){
            $('#dot-10').css({'display': 'block'});
            $('#dot-10').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot10Left )/100,
                top:  ( $winHeight * dot10Top )/100
            },0);

        } else if ( 55.4 <= topPerc &&  topPerc < 55.6 ) {
            $('#msg-10').css("display", 'none');
            
        } else if ( 54.2 <= topPerc &&  topPerc < 54.4 ){
            $('#dot-11').css({'display': 'block'});
            $('#dot-11').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot11Left )/100,
                top:  ( $winHeight * dot11Top )/100
            },0);

        } else if ( 51.0 <= topPerc &&  topPerc < 51.2 ){
            $('#msg-11').css("display", 'none');
            $('#dot-12').css({'display': 'block'});
            $('#dot-12').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot12Left )/100,
                top:  ( $winHeight * dot12Top )/100
            },0);

        } else if ( 46.6 <= topPerc &&  topPerc < 46.8 ) {
            $('#msg-12').css("display", 'none');
            
        } else if ( 44.4 <= topPerc &&  topPerc < 44.6 ){
            
            $('#dot-13').css({'display': 'block'});
            $('#dot-13').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot13Left )/100,
                top:  ( $winHeight * dot13Top )/100
            },0);

        } else if ( 41.4 <= topPerc &&  topPerc < 41.6 ) {
            $('#msg-13').css("display", 'none');
            
        } else if ( 39.0 <= topPerc &&  topPerc < 39.2 ){
            
            $('#dot-14').css({'display': 'block'});
            $('#dot-14').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot14Left )/100,
                top:  ( $winHeight * dot14Top )/100
            },0);

        } else if ( 36.0 <= topPerc &&  topPerc < 36.2 ) {
            $('#msg-14').css("display", 'none');
            
        } else if ( 33.4 <= topPerc &&  topPerc < 33.6 ){
            
            $('#dot-15').css({'display': 'block'});
            $('#dot-15').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot15Left )/100,
                top:  ( $winHeight * dot15Top )/100
            },0);

        } else if ( 32.0 <= topPerc &&  topPerc < 32.2 ) {
            $('#msg-15').css("display", 'none');
            
        } else if ( 26.6 <= topPerc &&  topPerc < 26.8 ){
            
            $('#dot-16').css({'display': 'block'});
            $('#dot-16').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot16Left )/100,
                top:  ( $winHeight * dot16Top )/100
            },0);

            $('#dot-17').css({'display': 'block'});
            $('#dot-17').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot17Left )/100,
                top:  ( $winHeight * dot17Top )/100
            },0);

        } else if ( 23.6 <= topPerc &&  topPerc < 23.8 ) {
            $('#msg-16').css("display", 'none');
            $('#msg-17').css("display", 'none');
        } else if ( 22.6 <= topPerc &&  topPerc < 22.8 ){
            
            $('#dot-18').css({'display': 'block'});
            $('#dot-18').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot18Left )/100,
                top:  ( $winHeight * dot18Top )/100
            },0);

        } else if ( 19.8 <= topPerc &&  topPerc < 20.0 ){
            
            $('#dot-19').css({'display': 'block'});
            $('#dot-19').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot19Left )/100,
                top:  ( $winHeight * dot19Top )/100
            },0);

        } else if ( 18.6 <= topPerc &&  topPerc < 18.8 ) {
            $('#msg-18').css("display", 'none');
            
        } else if ( 15.8 <= topPerc &&  topPerc < 16.0 ){
            
            $('#dot-20').css({'display': 'block'});
            $('#dot-20').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot20Left )/100,
                top:  ( $winHeight * dot20Top )/100
            },0);

        } else if ( 14.3 <= topPerc &&  topPerc < 14.5 ) {
            $('#msg-19').css("display", 'none');
            
        } else if ( 11.2 <= topPerc &&  topPerc < 11.4 ) {
            $('#msg-20').css("display", 'none');
            $('#dot-21').css({'display': 'block'});
            $('#dot-21').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot21Left )/100,
                top:  ( $winHeight * dot21Top )/100
            },0);
        } else if ( 8.8 <= topPerc &&  topPerc < 9.0 ){
            $('#msg-21').css("display", 'none');
            $('#dot-22').css({'display': 'block'});
            $('#dot-22').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot22Left )/100,
                top:  ( $winHeight * dot22Top )/100
            },0);

        } else if ( 4.8 <= topPerc &&  topPerc < 5.0 ){
            $('#msg-22').css("display", 'none');
            $('#dot-23').css({'display': 'block'});
            $('#dot-23').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot23Left )/100,
                top:  ( $winHeight * dot23Top )/100
            },0);

        } else if ( 1.8 <= topPerc &&  topPerc < 2.0 ){
            $('#msg-23').css("display", 'none');
            $('#dot-24').css({'display': 'block'});
            $('#dot-24').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot24Left )/100,
                top:  ( $winHeight * dot24Top )/100
            },0);

        } else if (topPerc < 93.6) {
            $('#dot-1').css("display", 'block');
            //$('#dot-1').css("display", 'block');
        }

       
});

