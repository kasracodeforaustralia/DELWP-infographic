$(window).scroll(function(){

    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();


    if ( ($(window).scrollTop() <=$('.bg2PH').position().top) && tramFlag == 1 && tramCounter == 2){
        loadIMG('.tramPH','img/section-3/tram.png','tram');
        tramFlag = 0;
    }    
    if ($(window).scrollTop() <=$('.bg2PH').position().top){
        tramCounter++;
        //alert(tramCounter);
    }
    
        /* tram   */ 
    if ( topPerc >= 84.4 ){
        $('.tram').css({'display':'block', 'opacity':'1', 'left': '($winWidth  *(48) )/100', 'top':'($winHeight *(tramTop) )/100'});

    } else  if ( 84.2 <= topPerc &&  topPerc < 84.4 ){ 
        $('.tram').css({'display': 'block'});
        $('.tram').animate({
            width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(tramLeft) )/100, 
            top:  ($winHeight *(tramTop) )/100,

        },0); 

    }else if ( 84.0 <= topPerc &&  topPerc < 84.2 ){
       $('.tram').css({'display': 'block'});
        $('.tram').animate({
  width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(48.1) )/100,
            top:  ($winHeight *(83.55) )/100,

        }, 0); 

    }else if ( 83.8 <= topPerc &&  topPerc < 84.0 ){
         $('.tram').css({'display': 'block'});
         $('.tram').animate({
 width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(52.6))/100,
            top:  ($winHeight *(83.3) )/100,

        }, 0); 

    } else if ( 83.6 <= topPerc &&  topPerc < 83.8 ){
       $('.tram').css({'display': 'block'});
         $('.tram').animate({
width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(55.1) )/100,
            top:  ($winHeight *(83.15) )/100,

        }, 0); 

    }else if ( 83.4 <= topPerc &&  topPerc < 83.6 ){
       $('.tram').css({'display': 'block'});
         $('.tram').animate({
width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(58.2) )/100,
            top:  ($winHeight *(82.95) )/100,

        }, 0); 
    }else if ( 83.2 <= topPerc &&  topPerc < 83.4 ){
       $('.tram').css({'display': 'block'});
         $('.tram').animate({
width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(61.8) )/100,
            top:  ($winHeight *(82.75) )/100,

        }, 0); 
    }/*else if ( 83.0 <= topPerc &&  topPerc < 83.2 ){
       $('.tram').css({'display': 'block'});
         $('.tram').animate({
width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(68) )/100,
            top:  ($winHeight *(82.5) )/100,

        }, 0); 
    }/*else if ( 82.8 <= topPerc &&  topPerc < 83.0 ){
       $('.tram').css({'display': 'block'});
         $('.tram').animate({
width: ($WidthPerc * tramW)/100,
            height: ($WidthPerc * tramH)/100,
            left: ($winWidth  *(69.5) )/100,
            top:  ($winHeight *(82.3) )/100,

        }, 0); 
    } */else if (topPerc < 83.2) {
        $('.tram').css({ 'display':'block', 'opacity':'1' });
    }

        
    });