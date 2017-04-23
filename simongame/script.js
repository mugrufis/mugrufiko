(function(){
	'use stict'
	var movesToWin = 19;
	var strictMode = false;
	var clickPrevent = true;
	var goalCombo = [];
	var userCombo = [];
	var steps = 0;
	

	var sndGreen = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
	var sndRed = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
	var sndBlue = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
	var sndYellow = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");


	$(".strictMode").click(function(){
		if($(".strictMode").is(":checked")){
			$(".light").css("background-color","red");
			strictMode = true;
		}else{
			$(".light").css("background-color","green");
			strictMode = false;
		}
	})



	$( ".startBtn" ).click(function() {
		clickPrevent = true;
		$(".screen").text("Good Luck!")
		setTimeout(function(){
			$(".startBtn").prop("checked",false);
			setTimeout(function(){
				restartGame();
				
			},500);
		},500)
		
	});



	$(".quarter").click(function(){
		if (!clickPrevent) {
			playerMove(this)
		}else{
			$(".quarter").blur()
		}
	});



	function playerMove(div){
		var sound = $(div).attr("id");
		sound = parseInt(sound); 
		soundToPlay(sound);
		userCombo.push($(div).attr("id"));
		if (userCombo.length == goalCombo.length){
			if(patternMatch()){
				setTimeout(computerPattern, 1000);
			}else{
				if(strictMode){
					$(".screen").text("Play again!");
					restartGame();
				}else{
					$(".screen").text("Try once again!");
					var localSteps = 0;
					selfInvocingFunctionB();
					setTimeout(function(){
						$(".screen").text("");
					},1000)
					function selfInvocingFunctionB (){
						if (localSteps < steps){
							setTimeout(function(){
								computersMove(goalCombo[localSteps]);
								localSteps ++;
								selfInvocingFunctionB();
							},1000);
						}
					}

				}
			}
		}

		setTimeout(function(){
			$(".quarter").blur();
		},200);
	}


	function patternMatch (){
		var counter = 0;
		for (var i = 0; i < goalCombo.length; i++){
			if (userCombo[i] == goalCombo[i]){
				counter++
			}
		}
		userCombo= [];
		if (counter == goalCombo.length){
			return true;
		}else {
			return false;
		}
	}



	function computerPattern(){
		clickPrevent = true;

		if (steps > movesToWin){
			$(".screen").text("You Won!")
			goalCombo = [];
			userCombo = [];
			steps = 0;
			setTimeout(function(){
				playTheStepsTillNow();
				$(".screen").text("")
			},1000);
		}else {
			playTheStepsTillNow();
		}
	}



	function playTheStepsTillNow(){
		var localSteps = 0;
		selfInvocingFunction();
		function selfInvocingFunction (){
			if (localSteps < steps){
				setTimeout(function(){
					computersMove(goalCombo[localSteps]);
					localSteps ++;
					selfInvocingFunction();
				},1000);
			}else{
				setTimeout(function(){
					computersRandomMove();
				},1000);

			}	
		}
	}


	function computersMove(number){
		var div = numberToTargetDiv(number);
		$(div).trigger("focus");
		soundToPlay(number);

		setTimeout(function(){
			$(".quarter").blur();
		},500);
	}

	


	function computersRandomMove(){
		var number = randomNumber1to4();
		number = parseInt(number);
		var div = numberToTargetDiv(number);
		goalCombo.push(number);
		steps++;
		

		$(div).trigger("focus");
		soundToPlay(number);

		setTimeout(function(){
			$(".quarter").blur();
			clickPrevent = false;
		},500);
		console.log(goalCombo)
	}


	function numberToTargetDiv (randomNumber){
		switch (randomNumber){
			case 1:
			return ".green";
			break;
			case 2:
			return ".red";
			break;
			case 3:
			return ".blue";
			break;
			case 4:
			return ".yellow"
			break;
		}
	}



	function randomNumber1to4(){
		return Math.floor(Math.random() * 4 + 1);
	}

	function soundToPlay (divClicked){

		switch(divClicked){
			case 1:
			sndGreen.play();
			break;
			case 2:
			sndRed.play();
			break;
			case 3:
			sndBlue.play();
			break;
			case 4:
			sndYellow.play();
			break;
		}

	}

	function restartGame(){
		goalCombo=[];
		steps = 0;
		userCombo = [];
		setTimeout(computerPattern,1500);
		setTimeout(function(){
			$(".screen").text("")

		},1500)
	}

	console.log("Since I always liked game cheats I left this one for you! \n Green: 1 \n Red: 2 \n Blue: 3 \n Yellow: 4 \n This is the  winning combination :) ")

})();

