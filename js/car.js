$(document).ready(function() {             
     $("body").keydown(function(){
        if(($(window).scrollTop() <=                    $('.bg3').position().top) && car1Flag == 1 && isBottomPage ==1){
            loadIMG('.car1PH','img/section-4/car1.png','item car1 hiddenItem');
            car1Flag = 0;
        } 
    });
     
});

$(window).scroll(function(){

        // Responsive width and height of the bg images
        var $winWidth   = winWidth();
        var $winHeight  = winHeight();
        var $WidthPerc  = WidthPerc();
        var $HeightPerc = HeightPerc();
        var topPerc     = topPercfunc();

    if ( ($(window).scrollTop() <=$('.bg3PH').position().top) && car1Flag == 1 && isBottomPage ==1){
        loadIMG('.car1PH','img/section-4/car1.png','item car1 hiddenItem');
        car1Flag = 0;
    }
        
        /* car1   */ 
        if ( topPerc >= 77 ){
            $('.car1').show();
            $('.car1').css({'left': '($winWidth  *(car1Left) )/100', 'top':'($winHeight *(car1Top) )/100'});
        } else  if ( 76.8 <= topPerc &&  topPerc < 77 ){ 
            $('.car1').css({'display': 'block'});
            $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(car1Left) )/100, 
                top:  ($winHeight *(car1Top) )/100,
                
            },0); 
        }else  if ( 76.6 <= topPerc &&  topPerc < 76.8 ){ 
            $('.car1').show();
            $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(91) )/100, 
                top:  ($winHeight *(76.7) )/100,
                
            },0); 
        } else  if ( 76.4 <= topPerc &&  topPerc < 76.6 ){ 
            $('.car1').show();
            $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(87) )/100, 
                top:  ($winHeight *(76.45) )/100,
                
            },0); 
            
        }else if ( 76.2 <= topPerc &&  topPerc < 76.4 ){
           $('.car1').show();
            $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(83) )/100,
                top:  ($winHeight *(76.26) )/100,
                
            }, 0); 
            
        }else if ( 76.0 <= topPerc &&  topPerc < 76.2 ){
             $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(79))/100,
                top:  ($winHeight *(76.1) )/100,
                
            }, 0); 
            
        } else if ( 75.8 <= topPerc &&  topPerc < 76.0 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(75) )/100,
                top:  ($winHeight *(75.9) )/100,
                
            }, 0); 
           
        }else if ( 75.6 <= topPerc &&  topPerc < 75.8 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(71) )/100,
                top:  ($winHeight *(75.7) )/100,
                
            }, 0); 
        }else if ( 75.4 <= topPerc &&  topPerc < 75.6 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(67) )/100,
                top:  ($winHeight *(75.5) )/100,
                
            }, 0); 
        }else if ( 75.2 <= topPerc &&  topPerc < 75.4 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(63) )/100,
                top:  ($winHeight *(75.3) )/100,
                
            }, 0); 
        }else if ( 75.0 <= topPerc &&  topPerc < 75.2 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(59) )/100,
                top:  ($winHeight *(75.1) )/100,
                
            }, 0); 
        } else if ( 74.8 <= topPerc &&  topPerc < 75.0 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(55) )/100,
                top:  ($winHeight *(74.9) )/100,
                
            }, 0); 
        } else if ( 74.6 <= topPerc &&  topPerc < 74.8 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(51) )/100,
                top:  ($winHeight *(74.75) )/100,
                
            }, 0); 
        } else if ( 74.2 <= topPerc &&  topPerc < 74.4 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(47) )/100,
                top:  ($winHeight *(74.5) )/100,
                
            }, 0); 
        }else if ( 74.0 <= topPerc &&  topPerc < 74.2 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(43) )/100,
                top:  ($winHeight *(74.35) )/100,
                
            }, 0); 
        } else if ( 73.8 <= topPerc &&  topPerc < 74.0 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(39) )/100,
                top:  ($winHeight *(74.1) )/100,
                
            }, 0); 
        } else if ( 73.6 <= topPerc &&  topPerc < 73.8 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(35) )/100,
                top:  ($winHeight *(73.97) )/100,
                
            }, 0); 
        }else if ( 73.4 <= topPerc &&  topPerc < 73.6 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(31) )/100,
                top:  ($winHeight *(73.77) )/100,
                
            }, 0); 
        }else if ( 73.2 <= topPerc &&  topPerc < 73.4 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(27) )/100,
                top:  ($winHeight *(73.5) )/100,
                
            }, 0); 
        }else if ( 73.0 <= topPerc &&  topPerc < 73.2 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(23) )/100,
                top:  ($winHeight *(73.39) )/100,
                
            }, 0); 
        } else if ( 72.8 <= topPerc &&  topPerc < 73.0 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(19) )/100,
                top:  ($winHeight *(73.21) )/100,
                
            }, 0); 
        } else if ( 72.6 <= topPerc &&  topPerc < 72.8 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(15) )/100,
                top:  ($winHeight *(73.01) )/100,
                
            }, 0); 
        } else if ( 72.4 <= topPerc &&  topPerc < 72.6 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(11) )/100,
                top:  ($winHeight *(72.86) )/100,
                
            }, 0); 
        } else if ( 72.2 <= topPerc &&  topPerc < 72.4 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(7) )/100,
                top:  ($winHeight *(72.66) )/100,
                
            }, 0); 
        } else if ( 72.0 <= topPerc &&  topPerc < 72.2 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(3) )/100,
                top:  ($winHeight *(72.46) )/100,
                
            }, 0); 
        } else if ( 71.8 <= topPerc &&  topPerc < 72.0 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(-1) )/100,
                top:  ($winHeight *(72.26) )/100,
                
            }, 0); 
        } else if ( 71.6 <= topPerc &&  topPerc < 71.8 ){
            $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(-5) )/100,
                top:  ($winHeight *(72.06) )/100,
                
            }, 0); 
        } else if ( 71.4 <= topPerc &&  topPerc < 71.6 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(-9) )/100,
                top:  ($winHeight *(71.86) )/100,
                
            }, 0); 
        } else if ( 71.2 <= topPerc &&  topPerc < 71.4 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(-13) )/100,
                top:  ($winHeight *(71.66) )/100,
                
            }, 0); 
        } else if ( 71.0 <= topPerc &&  topPerc < 71.2 ){
           $('.car1').show();
             $('.car1').animate({
                width: ($WidthPerc * car1W)/100,
                height: ($WidthPerc * car1H)/100,
                left: ($winWidth  *(-17) )/100,
                top:  ($winHeight *(71.66) )/100,
                
            }, 0); 
        } else if (topPerc < 71.0) {
            $('.car1').show();
        }

        
    });