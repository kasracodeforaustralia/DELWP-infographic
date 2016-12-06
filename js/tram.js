$(document).ready(function() {             
     $("body").keydown(function(){
        if(($(window).scrollTop() <=                    $('.bg2').position().top) && tramFlag == 1 && isBottomPage ==1){
            loadIMG('.tramPH','img/section-3/tram.png','item tram hiddenItem');
            tramFlag = 0;
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


    $( ".bg2" ).mouseover(function() {
        if(tramFlag == 1 && isBottomPage ==1){
           loadIMG('.tramPH','img/section-3/tram.png','item tram hiddenItem');
           tramFlag = 0;
        }
    });    
    
        /* tram   
    if ( topPerc >= 86.0 ){
        $('.tram').hide();
        $('.tram','.tramPH').css({'left': '($winWidth  *(48) )/100', 'top':'($winHeight *(tramTop) )/100'});

    }  else */ if ( 84.0 <= topPerc &&  topPerc < 86.0){ 
        $('.tram').show();
        $('.tram').animate({
            width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(tramLeft) )/100, 
            top:  ($winHeight *(tramTop) )/100,

        },0); 

    } else if ( 83.8 <= topPerc &&  topPerc < 84.0 ){
       $('.tram').show();
        $('.tram').animate({
  width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(48.1) )/100,
            top:  ($winHeight *(83.55) )/100,

        }, 0); 

    }else if ( 83.6 <= topPerc &&  topPerc < 83.8 ){
         //$('.tram').css({'display': 'block'});
         $('.tram').animate({
 width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(52.6))/100,
            top:  ($winHeight *(83.3) )/100,

        }, 0); 

    } else if ( 83.4 <= topPerc &&  topPerc < 83.6 ){
       //$('.tram').css({'display': 'block'});
         $('.tram').animate({
width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(55.1) )/100,
            top:  ($winHeight *(83.15) )/100,

        }, 0); 

    }else if ( 83.2 <= topPerc &&  topPerc < 83.4 ){
       //$('.tram').css({'display': 'block'});
         $('.tram').animate({
width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(58.2) )/100,
            top:  ($winHeight *(82.95) )/100,

        }, 0); 
    }else if ( 83.0 <= topPerc &&  topPerc < 83.2 ){
       $('.tram').show();
         $('.tram').animate({
width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(61.8) )/100,
            top:  ($winHeight *(82.75) )/100,

        }, 0); 
    } else if (topPerc < 83.0) {
        //$('.tram').show();
    }

        
    });