var kang1IMG = new Image();
var frameCha1 = 0;

$(window).scroll(function(){

    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();    
        
    
    if ( ($(window).scrollTop() <=$('.bg7PH').position().top) && kangarookid1Flag == 1 ){
        loadIMG('.kangarookid1PH','img/section-789/gifs/kangaroo1.gif','kangarookid1');
        kangarookid1Flag = 0;
        
        // this is kind of changing keyframe starting poiny for kangaroo kids to look diff together and their parent
        kang1IMG.src ='img/section-789/gifs/kangaroo1.gif';
        frameCha1 = 1;   
            
    }


    if (topPerc <= 0.2){
        $('.kangarookid1').hide();
    }else if (topPerc > 4 && topPerc <= 5 ){
        $('.kangarookid1').shpw();
        $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:( ($WidthPerc * kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(82) )/100,
            top:  ($winHeight *(13.8) )/100
        },0); 
    }else if (topPerc >5 && topPerc <= 6 ){
        $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($WidthPerc * kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(80) )/100,
            top:  ($winHeight *(13.5) )/100
        },0); 
    }else if (topPerc >6 && topPerc <=7){
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
         $('.kangarookid1').animate({
            width: (($WidthPerc * kangarooW)/100)*kangarookidScale/100,
            height:(($HeightPerc* kangarooH)/100)*kangarookidScale/100,

            left: ($winWidth  *(42) )/100,
            top:  ($winHeight *(14.4) )/100
        },0); 
    }else if (topPerc >11 && topPerc <=12 ){
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

        
});
    

    