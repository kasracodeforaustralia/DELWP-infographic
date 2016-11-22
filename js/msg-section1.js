$(window).scroll(function(){   

        // Responsive width and height of the bg images
        var $winWidth   = winWidth();
        var $winHeight  = winHeight();
        var $WidthPerc  = WidthPerc();
        var $HeightPerc = HeightPerc();
        var topPerc     = topPercfunc();

       

        /* dot 1 */ 
        if (topPerc >= 93.6){
            $('#dot-1').css({'display': 'none', 'left': '($winWidth * dot1Left)/100', 'top':'($winHeight *(dot1Top) )/100'});
            $('#dot-2').css({'display': 'none', 'left': '($winWidth * dot2Left)/100', 'top':'($winHeight *(dot2Top) )/100'});
            $('#dot-3').css({'display': 'none', 'left': '($winWidth * dot3Left)/100', 'top':'($winHeight *(dot3Top) )/100'});
        } else  if ( 93.4 <= topPerc &&  topPerc < 93.6 ){
            $('#dot-1').css({'display': 'block'});
            $('#dot-1').animate({
                //width: ($WidthPerc * sealW)/100,
                //height:($WidthPerc * sealH)/100,
                
                left: ( $winWidth  * dot1Left )/100,
                top:  ( $winHeight * dot1Top )/100
            },0); 
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
        } 

        else if (topPerc < 93.6) {
            $('#dot-1').css("display", 'block');
            //$('#dot-1').css("display", 'block');
        }

       
});

