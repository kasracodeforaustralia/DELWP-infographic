$(document).ready(function() {   
    
    var $win = $(window);
    
    var $winWidth   = winWidth();
    //var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    

    /* This takes user to the bottom of the page  */  
    $("body, html").animate({ scrollTop: 20000 }, 4000);     
    
    /* ُCreating Place Holders (PH) for background (bg) images*/
    $('.bg5PH').animate({ width: $winWidth, height: ($bg5Height * $WidthPerc)/100    });
    $('.bg6PH').animate({width: $winWidth,height: ($bg6Height * $WidthPerc)/100}); 
    $('.bg7PH').animate({width: $winWidth,height: ($bg7Height * $WidthPerc)/100}); 
    $('.bg8PH').animate({width: $winWidth,height: ($bg8Height * $WidthPerc)/100}); 
    $('.bg9PH').animate({width: $winWidth,height: ($bg9Height * $WidthPerc)/100}); 
    $('.bg10PH').animate({width: $winWidth,height: ($bg10Height * $WidthPerc)/100}); 
    $('.bg11PH').animate({ width: $winWidth,height: ($bg11Height * $WidthPerc)/100}); 
    $('.bg12PH').animate({width: $winWidth,height: ($bg12Height * $WidthPerc)/100}); 
    $('.bg13PH').animate({width: $winWidth, height: ($bg13Height * $WidthPerc)/100}); 
    $('.bg14PH').animate({width: $winWidth,height: ($bg14Height * $WidthPerc)/100});     
    /* ُEnd of creating Place Holders (PH) */
    
    
    /* If user scrolls using keyboard, this event handler will fire up to load the bg images */
    $("body").keydown(function(){
        if(($(window).scrollTop() <=                    $('.bg3PH').position().top) && bg5Flag == 1 && isBottomPage ==1){
           loadIMG('.bg5PH','img/14bgs/bg5.png','bg5 bg');
           bg5Flag = 0; 
        } 
        if ( ($(window).scrollTop() <= $('.bg4PH').position().top) && bg6Flag == 1 && isBottomPage ==1){
           loadIMG('.bg6PH','img/14bgs/bg6.png','bg6 bg');
            bg6Flag = 0;
        }  

        if ( ($(window).scrollTop() <= $('.bg5PH').position().top) && bg7Flag == 1 && isBottomPage ==1){
           loadIMG('.bg7PH','img/14bgs/bg7.png','bg7 bg');
            bg7Flag = 0;
        }

        if ( ($(window).scrollTop() <= $('.bg6PH').position().top) && bg8Flag == 1 && isBottomPage ==1){
            loadIMG('.bg8PH','img/14bgs/bg8.png','bg8 bg');
            bg8Flag = 0;
        }

        if ( ($(window).scrollTop() <= $('.bg7PH').position().top) && bg9Flag == 1 && isBottomPage ==1){
            loadIMG('.bg9PH','img/14bgs/bg9.png','bg9 bg');
            bg9Flag = 0; 
        }


        if ( ($(window).scrollTop() <= $('.bg8PH').position().top) && bg10Flag == 1 && isBottomPage ==1){
            loadIMG('.bg10PH','img/14bgs/bg10.png','bg10 bg');
            bg10Flag = 0;
        }

        if ( ($(window).scrollTop() <= $('.bg9PH').position().top) && bg11Flag == 1 && isBottomPage ==1){
            loadIMG('.bg11PH','img/14bgs/bg11.png','bg11 bg');
            bg11Flag = 0;
        } 

        if ( ($(window).scrollTop() <= $('.bg10PH').position().top) && bg12Flag == 1 && isBottomPage ==1){
            loadIMG('.bg12PH','img/14bgs/bg12.png','bg12 bg');
            bg12Flag = 0;
        }

        if ( ($(window).scrollTop() <= $('.bg11PH').position().top) &&bg13Flag == 1 && isBottomPage ==1){
            loadIMG('.bg13PH','img/14bgs/bg13.png','bg13 bg');
            bg13Flag = 0;
        }

        if ( ($(window).scrollTop() <= $('.bg12PH').position().top) && bg14Flag == 1 && isBottomPage ==1){
            loadIMG('.bg14PH','img/14bgs/bg14.png','bg14 bg');
            bg14Flag = 0;
        }     


        
    }); // End of $("body").keydown
        //console.log("scroll top "+ $(window).scrollTop());
        
       
    
}); // End of $(document).ready(function...



$(window).scroll(function(){

    
 /* bg images will be loading based on the user mouse movement (mouse over something */ 
    
    $( ".bg3" ).mouseover(function() {
            if(bg5Flag == 1 && isBottomPage ==1){
               loadIMG('.bg5PH','img/14bgs/bg5.png','bg5 bg4s7');
               bg5Flag = 0;
            }
    });
    $( ".tram" ).mouseover(function() {
            if(bg5Flag == 1 && isBottomPage ==1){
               loadIMG('.bg5PH','img/14bgs/bg5.png','bg5 bg4s7');
               bg5Flag = 0;
            }
    });    

    $( ".bg4" ).mouseover(function() {
        if(bg6Flag == 1 && isBottomPage ==1){
           loadIMG('.bg6PH','img/14bgs/bg6.png','bg6 bg4s7');
           bg6Flag = 0;
        }
    }); 
        $( ".flags-building" ).mouseover(function() {
            if(bg6Flag == 1 && isBottomPage ==1){
               loadIMG('.bg6PH','img/14bgs/bg6.png','bg6 bg4s7');
               bg6Flag = 0;
            }
        }); 
        $( ".eureka-tower" ).mouseover(function() {
            if(bg6Flag == 1 && isBottomPage ==1){
               loadIMG('.bg6PH','img/14bgs/bg6.png','bg6 bg4s7');
               bg6Flag = 0;
            }
        });
        $( ".solar-building" ).mouseover(function() {
            if(bg6Flag == 1 && isBottomPage ==1){
               loadIMG('.bg6PH','img/14bgs/bg6.png','bg6 bg4s7');
               bg6Flag = 0;
            }
        });
        $( ".artCenter" ).mouseover(function() {
            if(bg6Flag == 1 && isBottomPage ==1){
               loadIMG('.bg6PH','img/14bgs/bg6.png','bg6 bg4s7');
               bg6Flag = 0;
            }
        });    

    $( ".bg5" ).mouseover(function() {
        if(bg7Flag == 1 && isBottomPage ==1){
           loadIMG('.bg7PH','img/14bgs/bg7.png','bg7 bg4s7');
           bg7Flag = 0;
        }
    }); 
        $( ".glass-building" ).mouseover(function() {
            if(bg7Flag == 1 && isBottomPage ==1){
               loadIMG('.bg7PH','img/14bgs/bg7.png','bg7 bg4s7');
               bg7Flag = 0;
            }
        });
        $( ".apartment-block" ).mouseover(function() {
            if(bg7Flag == 1 && isBottomPage ==1){
               loadIMG('.bg7PH','img/14bgs/bg7.png','bg7 bg4s7');
               bg7Flag = 0;
            }
        });  
        $( ".building" ).mouseover(function() {
            if(bg7Flag == 1 && isBottomPage ==1){
               loadIMG('.bg7PH','img/14bgs/bg7.png','bg7 bg4s7');
               bg7Flag = 0;
            }
        }); 
        $( ".buiding-two" ).mouseover(function() {
            if(bg7Flag == 1 && isBottomPage ==1){
               loadIMG('.bg7PH','img/14bgs/bg7.png','bg7 bg4s7');
               bg7Flag = 0;
            }
        });
        $( ".buiding-three" ).mouseover(function() {
            if(bg7Flag == 1 && isBottomPage ==1){
               loadIMG('.bg7PH','img/14bgs/bg7.png','bg7 bg4s7');
               bg7Flag = 0;
            }
        }); 
        $( ".sold-sign" ).mouseover(function() {
            if(bg7Flag == 1 && isBottomPage ==1){
               loadIMG('.bg7PH','img/14bgs/bg7.png','bg7 bg4s7');
               bg7Flag = 0;
            }
        });     


    $( ".bg6" ).mouseover(function() {
        if(bg8Flag == 1 && isBottomPage ==1){
           loadIMG('.bg8PH','img/14bgs/bg8.png','bg8 bg');
           bg8Flag = 0;
        }
    }); 
        $( ".mcg" ).mouseover(function() {
            if(bg8Flag == 1 && isBottomPage ==1){
               loadIMG('.bg8PH','img/14bgs/bg8.png','bg8 bg');
               bg8Flag = 0;
            }
        }); 
    
    $( ".bg7" ).mouseover(function() {
        if(bg9Flag == 1 && isBottomPage ==1){
           loadIMG('.bg9PH','img/14bgs/bg9.png','bg9 bg');
           bg9Flag = 0;
        }
    });     

    $( ".bg8" ).mouseover(function() {
        if(bg10Flag == 1 && isBottomPage ==1){
           loadIMG('.bg10PH','img/14bgs/bg10.png','bg10 bg');
           bg10Flag = 0;
        }
    });      

    $( ".whiteCar" ).mouseover(function() {
        if(bg10Flag == 1 && isBottomPage ==1){
           loadIMG('.bg10PH','img/14bgs/bg10.png','bg10 bg');
           bg10Flag = 0;
        }
    });
    $( ".bike" ).mouseover(function() {
        if(bg10Flag == 1 && isBottomPage ==1){
           loadIMG('.bg10PH','img/14bgs/bg10.png','bg10 bg');
           bg10Flag = 0;
        }
    });
    
    $( ".bg9" ).mouseover(function() {
        if(bg11Flag == 1 && isBottomPage ==1){
           loadIMG('.bg11PH','img/14bgs/bg11.png','bg11 bg');
           bg11Flag = 0;
        }
    }); 

    $( ".bg10" ).mouseover(function() {
        if(bg12Flag == 1 && isBottomPage ==1){
           loadIMG('.bg12PH','img/14bgs/bg12.png','bg12 bg');
           bg12Flag = 0;
        }
    });
    $( ".footyPlayers" ).mouseover(function() {
        if(bg12Flag == 1 && isBottomPage ==1){
           loadIMG('.bg12PH','img/14bgs/bg12.png','bg12 bg');
           bg12Flag = 0;
        }
    });    

    $( ".bg11" ).mouseover(function() {
        if(bg13Flag == 1 && isBottomPage ==1){
           loadIMG('.bg13PH','img/14bgs/bg13.png','bg13 bg');
           bg13Flag = 0;
        }
    });

    $( ".bg12" ).mouseover(function() {
        if(bg14Flag == 1 && isBottomPage ==1){
           loadIMG('.bg14PH','img/14bgs/bg14.png','bg14 bg');
           bg14Flag = 0;
        }
    });   
    
        $( ".fire" ).mouseover(function() {
            if(bg14Flag == 1 && isBottomPage ==1){
               loadIMG('.bg14PH','img/14bgs/bg14.png','bg14 bg');
               bg14Flag = 0;
            }
        });    
        $( ".firefighters" ).mouseover(function() {
            if(bg14Flag == 1 && isBottomPage ==1){
               loadIMG('.bg14PH','img/14bgs/bg14.png','bg14 bg');
               bg14Flag = 0;
            }
        }); 
    
   
    
});