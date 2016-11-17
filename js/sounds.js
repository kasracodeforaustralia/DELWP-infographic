    $(window).scroll(function(){

        // Responsive width and height of the bg images
        var $winWidth   = winWidth();
        var $winHeight  = winHeight();
        var $WidthPerc  = WidthPerc();
        var $HeightPerc = HeightPerc();
        var topPerc     = topPercfunc();

        
        var audio = {};
        audio["birds-sound"] = new Audio();
        audio["birds-sound"].src = "sounds/birds-sound.mp3";
        
        audio["birds-sound-2"] = new Audio();
        audio["birds-sound-2"].src = "sounds/birds-sound-2.mp3";
        
        audio["cattleSheep-sound"] = new Audio();
        audio["cattleSheep-sound"].src = "sounds/cattleSheep-sound.mp3";
        
        audio["cattleCow-sound"] = new Audio();
        audio["cattleCow-sound"].src = "sounds/cattleCow-sound.mp3";
        
        audio["whale-sound"] = new Audio();
        audio["whale-sound"].src = "sounds/whale-sound.mp3";
        
        if (muteAll == 0){
            if (topPerc <= 1.42){
                if (birds_sound_flag == 0){
                    //audio["birds-sound"].play(); 
                    audio["birds-sound-2"].play();
                    //muteAll = 1;
                    birds_sound_flag = 1;
                }
            }else if (topPerc >22 && topPerc <= 25){
                if (cattle_sound_flag == 0){
                    audio["cattleSheep-sound"].play();
                    //audio["cattleCow-sound"].play();
                    //muteAll = 1;
                    cattle_sound_flag = 1;
                }
            }else if (topPerc >90){
                if (whale_sound_flag == 0){
                    audio["whale-sound"].play();
                    //muteAll = 1;
                    whale_sound_flag = 1;
                }
            }else{
                birds_sound_flag  = 0;
                cattle_sound_flag = 0;
                whale_sound_flag  = 0;
            }
        }

});

