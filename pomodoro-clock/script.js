(function(){
	'use strict'

	var workMinutes = 25; 
	var breakMinutes = 5;
	var seconds = 59;
	var counterWork, counterBreak, workMinBackup, breakMinBackup
	var btnFun = true;
	$(".contwrap").hide();
	$(".contwrap2").hide();
	workMinBackup = workMinutes;
	breakMinBackup = breakMinutes;

    // Creating the input knobs


    $(".knobWork").knob({
    	"min":1,
    	"max":90,
    	"fgColor":"#123456",
    	"thickness":0.1,
    	'change' : function (v) { 
    		workMinutes = Math.round(v);
    		workMinBackup = workMinutes;
    	}
    });


    $(".knobBreak").knob({
    	"min":1,
    	"max":15,
    	"fgColor":"#123456",
    	"thickness":0.1,
    	'change' : function (v) { 
    		breakMinutes = Math.round(v);
    		breakMinBackup = breakMinutes;
    	}
    });


    function countDownWork(){

		// When the work timer goes 0
		
		if ((workMinutes === 0) && (seconds < 0)) {
			clearInterval(counterWork);
			
			$(".contwrap").hide();
			$(".contwrap2").fadeIn();
			countDownBreak();
			seconds = 59;
			counterBreak = setInterval(countDownBreak, 1000);

			// When there is still some time left

		} else {
			if (seconds >= 10) {
				$('.countDownWorkWrap')
				.text(workMinutes + "." + seconds)
				seconds -= 1;
			}else if ((seconds < 10) &&(seconds >= 0)){
				$('.countDownWorkWrap')
				.text(workMinutes + ".0" + seconds)
				seconds -= 1;
			}
			// When seconds are 0
			else {
				workMinutes -=1;
				seconds = 59;
			}
		}
	}

	function countDownBreak(){
		
		// When the work timer goes 0
		
		if ((breakMinutes === 0) && (seconds < 0)) {
			$('.countDownBreakWrap')
			.text(breakMinutes + ".0" + seconds)
			
			clearInterval(counterBreak);
			btnFun = true;
			$(".btn").text("Start");
			$(".workKnobWrap").fadeIn();
			$(".breakKnobWrap").fadeIn();
			$(".contwrap2").hide();
			breakMinutes = breakMinBackup
			workMinutes = workMinBackup
			seconds = 59;

		// When there is still some time left
		
	} else {
		if (seconds >= 10) {
			$('.countDownBreakWrap')
			.text(breakMinutes + "." + seconds)
			
			seconds -= 1;

		}else if ((seconds < 10) &&(seconds >= 0)){
			$('.countDownBreakWrap')
			.text(breakMinutes + ".0" + seconds)
			
			seconds -= 1;
		}

			// When seconds are 0
			else {
				breakMinutes -=1;
				seconds = 59;
			}
		}
	}


	//Button functionality

	$(".btn").on("click",function(){
		if (btnFun){
			btnFun = false;
			$(".btn").text("Reset");
			$(".workKnobWrap").hide();
			$(".breakKnobWrap").hide();
			$(".contwrap").fadeIn();
			workMinutes -= 1
			counterWork = setInterval(countDownWork, 1000, true);	
		}else if (!btnFun){
			clearInterval(counterWork);
			clearInterval(counterBreak);
			btnFun = true;
			$(".btn").text("Start");
			$(".workKnobWrap").fadeIn();
			$(".breakKnobWrap").fadeIn();
			$(".contwrap").hide();
			$(".contwrap2").hide();
		}
	})

	
})();