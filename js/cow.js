$( document ).ready(function() {
    
    /* Detecting CSS animation support */
    var supportedFlag = $.keyframe.isSupported();
    /* Enable debugging to the console   */
    $.keyframe.debug = true;    

    
    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();

    
    /*  defining keyframes for cow */
    
    $.keyframe.define([{
        name: 'cowMove',
        '0%':   {
            width:  ($WidthPerc * cowW)/100 + "px",
            height:($HeightPerc* cowH)/100 + "px",
            
            top: ($winHeight *(26.5) )/100 + "px",
            left:($winWidth  *(60) )/100 + "px"      
        },
        '20%': {
            width:($WidthPerc * cowW)/100 + "px",
            height:($HeightPerc* cowH)/100+ "px",
            
            top:($winHeight *(27) )/100+ "px",
            left:($winWidth  *(75) )/100+ "px"
        },
        '40%': {
            width:($WidthPerc * cowW)/100 + "px",
            height:($HeightPerc* cowH)/100+ "px",
            
            top:($winHeight *(28) )/100+ "px",
            left:($winWidth  *(75) )/100+ "px"
        },
        '60%': {
            width:($WidthPerc * cowW)/100 + "px",
            height:($HeightPerc* cowH)/100+ "px",
            
            top:($winHeight *(29) )/100+ "px",
            left:($winWidth  *(69) )/100+ "px"
        },
        '80%': {
            width:($WidthPerc * cowW)/100 + "px",
            height:($HeightPerc* cowH)/100+ "px",
            
            top:($winHeight *(28) )/100+ "px",
            left:($winWidth  *(60) )/100+ "px"
        },
        '100%': {
            width:  ($WidthPerc * cowW)/100 + "px",
            height:($HeightPerc* cowH)/100 + "px",
            
            top: ($winHeight *(26.5) )/100 + "px",
            left:($winWidth  *(60) )/100 + "px"
        }
    }]);  
    
    $('.cow').playKeyframe({
        name: 'cowMove',
        duration: '30s',
        iterationCount: 'infinite'
    });
    
   
$.keyframe.define([{
        name: 'waterColor',
        '0%':   {
            'top':  ($winHeight *(28) )/100 + "px",
            'left': ($winWidth  *(35) )/100+ "px",  
            'background-color': "#069dd8"
        },
        '100%': {
            'top':  ($winHeight *(28) )/100+ "px",
            'left': ($winWidth  *(35) )/100+ "px",  
            'background-color': "#91CEE7"
        }
    
    }]);
    /*
    $('.water').playKeyframe({
        name: 'waterColor',
        duration: '0.3s',
        iterationCount: 'infinite'
    });    
    */
    
    
});


/*### Separatoring .ready and .resize funcs ###*/
/*##############-##-########-##-###############*/
/*#################---####---##################*/
/*####################----#####################*/
/*#####################--######################*/
/*#############################################*/


/* Dynamic css for all items after resizing */
$( window ).resize(function() {
    /* Detecting CSS animation support */
    var supportedFlag = $.keyframe.isSupported();
    /* Enable debugging to the console */  
    $.keyframe.debug = true;    

    
    // Responsive width and height of the bg images
    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc(); 

    
    /*  defining keyframes for cow */
    
    $.keyframe.define([{
        name: 'cowMove',
        '0%':   {
            width:  ($WidthPerc * cowW)/100 + "px",
            height:($HeightPerc* cowH)/100 + "px",
            
            top: ($winHeight *(26.5) )/100 + "px",
            left:($winWidth  *(60) )/100 + "px"      
        },
        '20%': {
            width:($WidthPerc * cowW)/100 + "px",
            height:($HeightPerc* cowH)/100+ "px",
            
            top:($winHeight *(27) )/100+ "px",
            left:($winWidth  *(75) )/100+ "px"
        },
        '40%': {
            width:($WidthPerc * cowW)/100 + "px",
            height:($HeightPerc* cowH)/100+ "px",
            
            top:($winHeight *(28) )/100+ "px",
            left:($winWidth  *(75) )/100+ "px"
        },
        '60%': {
            width:($WidthPerc * cowW)/100 + "px",
            height:($HeightPerc* cowH)/100+ "px",
            
            top:($winHeight *(29) )/100+ "px",
            left:($winWidth  *(69) )/100+ "px"
        },
        '80%': {
            width:($WidthPerc * cowW)/100 + "px",
            height:($HeightPerc* cowH)/100+ "px",
            
            top:($winHeight *(28) )/100+ "px",
            left:($winWidth  *(60) )/100+ "px"
        },
        '100%': {
            width:  ($WidthPerc * cowW)/100 + "px",
            height:($HeightPerc* cowH)/100 + "px",
            
            top: ($winHeight *(26.5) )/100 + "px",
            left:($winWidth  *(60) )/100 + "px"
        }
    }]);  
    
    $('.cow').playKeyframe({
        name: 'cowMove',
        duration: '30s',
        iterationCount: 'infinite'
    });
    
    
    
});    
    
    