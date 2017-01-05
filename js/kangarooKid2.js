//var kang2IMG = new Image();
//var frameCha2 = 0 ;

$(window).scroll(function(){

    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();    
    
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
    
        
});
    

    