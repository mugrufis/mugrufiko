$(document).ready(function(){
	var controller = new ScrollMagic.Controller();

	var myScene5 = new ScrollMagic.Scene({
		triggerElement:'#block3',
		triggerHook: 0.7
	})
	.setTween(TweenMax.staggerFrom('#block3 p', 1 , {
		opacity:0,
		scale:0,
	}, 0.5 ))
	.addIndicators()
	.addTo(controller);
	
	var myScene4 = new ScrollMagic.Scene({
		triggerElement:'#block3',
		triggerHook: 0.5
	})
	.setTween(TweenMax.staggerFrom('#block3 img', 1 , {
		opacity:0,
		scale:0,
		rotation:180
	}, 0.5 ))
	.addIndicators()
	.addTo(controller);


	var myScene3 = new ScrollMagic.Scene({
    	triggerElement:'.aWord',
    	reverse: false,
    	triggerHook:0.8
    })
    .setClassToggle('.aWord','fade-in')
	.addTo(controller);


    var myScene2 = new ScrollMagic.Scene({
    	triggerElement:'#block2 p',
    	reverse: false,
    	triggerHook:0.7
    })
    .setClassToggle('#block2 p','fade-in')
	.addTo(controller);


	var myScene1 = new ScrollMagic.Scene({
        triggerElement: '#block4',
        triggerHook: 1,
        reverse:false,

    })
	.setClassToggle('#block4','fade-in')
	.addTo(controller);

});



