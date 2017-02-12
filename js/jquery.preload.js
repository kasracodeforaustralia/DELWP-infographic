$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

$.preloadImages( 'img/section-4/apartment-block.gif',
    'img/section-5/building.gif',
    'img/section-3/eureka.gif',
    'img/section-4/glass-building.gif',
    'img/section-789/gifs/birds.gif',
    'img/section-789/gifs/fire.gif',
  	'img/section-789/gifs/turbine.gif',
  	'img/section-5/building.gif',
  	'img/section-5/building-two.gif'
);