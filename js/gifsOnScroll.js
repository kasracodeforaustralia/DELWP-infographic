
$(window).scroll(function(){

    var $winWidth   = winWidth();
    var $winHeight  = winHeight();
    var $WidthPerc  = WidthPerc();
    var $HeightPerc = HeightPerc();
    var topPerc     = topPercfunc();    
        
    //console.log("topPerc: " + topPerc);
    /* Birds */
    if ( (topPerc <= 1.5) && (eurekaFlag == 1) ){
        $('').attr('src',.src);
        birdsReplayFlag =0;
        }
    }else if (topPerc > 1.5 ){
       birdsReplayFlag =1; 
    }
    
    /* eureka-tower */
    if (topPerc <= 65){
        eurekaFlag =1;
        
    }else if (topPerc > 70 && topPerc <= 77 ){
        if (eurekaFlag == 1){
           $('#eureka-tower').attr('src',eurekaIMG.src);
          
           eurekaFlag =0;
        }
    }else if (topPerc > 77 ){
       eurekaFlag =1; 
    }
 
        /* glass-building and apartment-block */
    if (topPerc <= 63){
        glassBuildingFlag  =1;
        apartmentBlockFlag =1;
    }else if (topPerc > 71 && topPerc <= 73 ){
        if (glassBuildingFlag == 1){
           $('#glass-building').attr('src',glassBuildingIMG.src);
           $('#apartment-block').attr('src',apartmentBlockIMG.src);
            
           glassBuildingFlag  =0;
           apartmentBlockFlag =0;
        }
    }else if (topPerc > 73 ){
        glassBuildingFlag  =1;
        apartmentBlockFlag =1;
    }
    
    
    /* building and building-two 
    if (topPerc <= 56){
        buildingFlag  =1;
        building2Flag =1;
    }else if (topPerc > 65 && topPerc <= 68 ){
        if (buildingFlag == 1){
           $('#building').attr('src',buildingIMG.src);
           $('#building-two').attr('src',building2IMG.src);
            
           buildingFlag  =0;
           building2Flag =0;
        }
    }else if (topPerc > 71 ){
        buildingFlag  =1;
        building2Flag =1;
    }
     */
    
    
    
});
    

    