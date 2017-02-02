// $(document).ready(function() {
//   function setHeight() {
//     windowHeight = $(window).innerHeight();
//     $('.ipsos').css('min-height', windowHeight);
//   };
//   setHeight();
  
//   $(window).resize(function() {
//     setHeight();
//   });
// });

$(document).ready(function(){
	var controller = new ScrollMagic.Controller();

	// var titleScene = new ScrollMagic.Scene({
	// 	triggerElement:'#block2'

	// })
	// .setPin('.title')
	// .addTo(controller);

	var myScene = new ScrollMagic.Scene({
        triggerElement: '#block4',
        triggerHook: 1,
        reverse:false,

    })
	.setClassToggle('#block4','fade-in')
	.addIndicators()
	.addTo(controller);

});




