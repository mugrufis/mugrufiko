(function () {
	var result = 0;
	var strNum = "";
	var floatNum = 0;
	var deciPoint = true;
	var result = "";
	var operratorCheck = false;
	var equalCheck = false;
	var warn = "Please enter a number first.";
	var warnB = "Limited to three decimals.";
	var warnC = "You can also use the keyboard!"
	var onOff = false;


// On Off and GSAP

$('.keyboard button').prop('disabled', true);


TweenMax.from(".container",1, {
	x:-1500,
	scale: 0,
	ease: Bounce.easeInOut
})


$(".onOff").on("click",function(){
	if (!onOff) {
	onOff = true;
	$(".onOff").text("On").css("color","green")
	$('.keyboard button').prop('disabled', false);
	$(".output").text("Let's Calculate!")
	$(".activeOperator").text(warnC)
	TweenMax.fromTo(".output",1,{
		opacity: 0

	},{
		opacity: 1
	})
	TweenMax.fromTo(".activeOperator",1,{
		opacity: 0

	},{
		opacity: 1
	})
	

}else{

	onOff = false;
	$(".onOff").text("Off").css("color","red")
	$('.keyboard button').prop('disabled', true)
	$(".activeOperator").text("")
	$(".output").text("Bye Bye!")
	TweenMax.fromTo(".output",1,{
		opacity: 1
	},{
		opacity: 0
	})

		result = 0;
		strNum = "";
		floatNum = 0;
		deciPoint = true;
		result = "";
		operratorCheck = false;
		equalCheck = false;
}
})






// Connecting the keyboard

$("html").keypress(function(e){
   if(e.keyCode === 13){
       e.preventDefault();
   }
});


  $('html').keypress(function(e){
  	console.log(e.charCode)
    if (onOff = true) {
        if((e.key >= 0) && (e.key <=9) ){
        	numbers(e.key)
		}else if ((e.key === "+") || (e.key === "-") || (e.key === "*") || (e.key === "/")){
			if (operratorCheck) {
				operators(e.key)
			}else if (operratorCheck === false){
				$(".activeOperator").text(warn)
			}
		}else if (e.key === ".") {
			$( ".deciPoint" ).trigger( "click" );
		}else if (e.key === "Enter"){
			$( ".equals").trigger( "click" );
		}
     }
    })

//Number-Operator input


	$(".numbers button").on("click",numbers);
	$(".operators button").on("click",operators);




	function numbers(key){
		if (($(".activeOperator").text() === warn) || ($(".activeOperator").text() === warnB) || ($(".activeOperator").text() === warnC)) {
			$(".activeOperator").text("")
		}

		if(typeof result === "number"){result = "";}
		 strNum += $(this).attr("value") || key;
		equalCheck = true;
		operratorCheck = true;
		$(".output").text(strNum)

	}

	

	
	function operators(key){
		if (operratorCheck) {
			result += strNum;
			result += $(this).attr("value") || key;
			strNum = "";
			deciPoint = true;
			operratorCheck = false;
			equalCheck = false;
			var shit = $(this).attr("value") || key;
			$(".activeOperator").text(shit)

			console.log("Operators result: ", result ,typeof result)
		}else{
			$(".activeOperator").text(warn)
		
	}
	}


	$(".deciPoint").on("click",function(){
		if(deciPoint){
			strNum += $(this).attr("value");
			$(".output").text(strNum)
			deciPoint = false;
		}

	})

	$(".equals").on("click",function(){
		if (equalCheck) {
			result += strNum;
			strNum = "";
			result = eval(result);
			$(".activeOperator").text("")
			if (result > result.toFixed()){
				result = result.toFixed(3)
				$(".activeOperator").text(warnB)
			}
			
			$(".output").text(result)
		    console.log(result, typeof result);
		}
	})



// Clear button and the moving numbers :)


var outContent = "";

$(".clear").on("click",function(){numberShootout()
		result = 0;
		strNum = "";
		floatNum = 0;
		deciPoint = true;
		result = "";
		operratorCheck = false;
		equalCheck = false;
	})

function numberShootout(){
	var outputVal = $(".output").text()
	outputVal = outputVal.toString(10)

	for (var i in outputVal){
	outContent += "<div class='red' >" + outputVal[i] + "</div>"
	$(".output").html(outContent)	
}




	var col =function(){return "#" + Math.floor(Math.random()*16777215).toString(16);}

	var plusOrMinus = function(){
		if(Math.floor(Math.random() * 10) > 4){
			return "+";
		}else{
			return "-";
		}
	}

	var ran =function(){

		return plusOrMinus() + Math.floor(Math.random()*1000);}

	TweenMax.staggerTo(".red",2,{
		position:"absolute",
		x: ran,
		y: ran,
		opacity:0,
		color:col,
		scale:6,
		rotation: 45
	},0.2, allComplete)

}

function allComplete (){
	$(".output").html("");
	$(".activeOperator").text("")
	outContent = "";

}


})();

