$( document ).ready(function() {
    $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
    $(window).scrollLeft($(document).innerWidth()*30/100);      

});

$(window).load(function(){

});
$(document).mousemove(function(event){
   console.log(event.pageX + ", " + event.pageY);
});

var $win = $(window);
var $winWidth  = $win.innerWidth();
var $winHeight = $win.innerHeight();
var _topConst = 400;
var _durConst = 10;

$win.on('scroll', function(){
   var top = $win.scrollTop();
    //console.log(top);
    
    if ( top <= 1000){
        $('.cloud').css("visibility", "hidden");
    }else if (top < 1100 && top >= 1000){
        $('.cloud').css("visibility", "visible");
        $('.cloud').animate({
            left: $winWidth *80/100,
            top: top + _topConst
            },_durConst);
    }else if (top < 1200 && top >= 1100){
         $('.cloud').animate({
            left: $winWidth *60/100,
            top: top + _topConst
            },_durConst);
    }else  if (top < 1300 && top >= 1200){
         $('.cloud').animate({
            left: $winWidth *45/100,
            top: top + _topConst
            },_durConst);
    }else if (top < 1400 && top >= 1300){
         $('.cloud').animate({
            left: $winWidth *25/100,
            top: top + _topConst
            },_durConst);
    }else if ( top < 1500 && top >= 1400){
         $('.cloud').css("visibility", "visible");
         $('.cloud').animate({
            left: $winWidth *2/100,
            top: top + _topConst
            },_durConst);
    }else if ( top >= 1500){
         $('.cloud').css("visibility", "hidden");
    }
    
    /* garbage truck  */   
    if (top <= 3150){
        $('.garbageTruck').css("visibility", "hidden");
    }else if (top > 3150 && top <= 3200 ){
        $('.garbageTruck').css("visibility", "visible");
        $('.garbageTruck').animate({
            left: ($winWidth *(72) )/100,
            top: 4380
            },0);
    }else if (top > 3200 && top <= 3250 ){
        $('.garbageTruck').animate({
            left: ($winWidth *(60) )/100,
            top: 4280
            },0);
    }else if (top > 3250 && top <= 3300 ){
        $('.garbageTruck').animate({
            left: ($winWidth *(48) )/100,
            top: 4175
            },0);
    } else if (top > 3300 && top <= 3350 ){
        $('.garbageTruck').animate({
            left: ($winWidth *(35) )/100,
            top: 4060
            },0);
    }else  if (top > 3350 && top <= 3400 ){
        $('.garbageTruck').animate({
            left: ($winWidth *(25) )/100,
            top: 3970
            },0);
    }else if (top > 3400 && top <= 3450 ){
        $('.garbageTruck').animate({
            left: ($winWidth *(17) )/100,
            top: 3900
            },0);
    }else if (top > 3450 && top <= 3500 ){
        $('.garbageTruck').animate({
            left: ($winWidth *(8) )/100,
            top: 3820
            },0);
    }else if (top > 3500 && top <= 3550 ){
        $('.garbageTruck').animate({
            left: ($winWidth *(3) )/100,
            top: 3775
            },0);
    }else if (top > 3550 && top <= 3600 ){
        $('.garbageTruck').css("visibility", "visible");
        $('.garbageTruck').animate({
            left: ($winWidth *(-3) )/100,
            top: 3720
            },0);
    }else {
        $('.garbageTruck').css("visibility", "hidden");
    }
    
    
});




