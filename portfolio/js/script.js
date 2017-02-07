$(document).ready(function(){

	var titleFadeIn = TweenMax.from('.title',1,{
		opacity:0,
		scale:0, 
		ease:Circ.easeOut,
		x:-200
	})
	

	var controller = new ScrollMagic.Controller();


		var navLetters = new ScrollMagic.Scene({
		triggerElement:'#block2',
		duration:'100%',
		triggerHook: 0.45
	})
	.setClassToggle('.navigation a', 'blackLetters')
	.addTo(controller);

		var navLetters2 = new ScrollMagic.Scene({
		triggerElement:'#block4',
		duration:'100%',
		triggerHook: 0.45
	})
	.setClassToggle('.navigation a', 'blackLetters')
	.addTo(controller);



	var navScene1 = new ScrollMagic.Scene({
		triggerElement:'#block1',
		duration:'100%',
		triggerHook: 0.4
	})
	.setClassToggle('#home', 'activeNav')
	.addTo(controller);

	var navScene2 = new ScrollMagic.Scene({
		triggerElement:'#block2',
		duration:'100%',
		triggerHook: 0.45
	})
	.setClassToggle('#about', 'activeNav')
	.addTo(controller);

	var navScene3 = new ScrollMagic.Scene({
		triggerElement:'#block3',
		duration:'100%',
		triggerHook: 0.45
	})
	.setClassToggle('#projects', 'activeNav')
	.addTo(controller);

		var navScene4 = new ScrollMagic.Scene({
		triggerElement:'#block4',
		duration:'100%',
		triggerHook: 0.45
	})
	.setClassToggle('#contact', 'activeNav')
	.addTo(controller);


	var myScene5 = new ScrollMagic.Scene({
		triggerElement:'#block3',
		triggerHook: 0.7,
		reverse: false
	})
	.setTween(TweenMax.staggerFrom('#block3 p', 1 , {
		opacity:0,
		scale:0
	}, 0.5 ))
	.addTo(controller);
	
	var myScene4 = new ScrollMagic.Scene({
		triggerElement:'#block3',
		triggerHook: 0.5,
		reverse: false
	})
	.setTween(TweenMax.staggerFrom('#block3 img', 1.5 , {
		opacity:0,
		scale:0
	}, 0.5 ))
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
        reverse:false

    })
	.setClassToggle('#block4','fade-in')
	.addTo(controller);

});



