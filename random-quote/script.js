(function () {
	
	var w = window.innerWidth;
	var h = window.innerHeight;
	console.log(w , h);
	document.getElementById("myImg").src = "https://source.unsplash.com/category/technology/"+w +"x" + h

	function load() {
	 $('.load').html('')
	}

	setTimeout(load,2000);
//---------------------------------------------------------



	$.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(a) {
  			$(".quoteDis").html("").append(a.author + "<p>— " + a.quote + "</p>")
  		});
	$(".btn").on("click", newRandomQuote)
	 
	
	 function newRandomQuote(e) {
	 	var $userText = $("textarea").val();
	 	var $userName = "Unknown"
	 	if  (!($("input").val() === "")){
	 		$userName = $("input").val();
	 	}

	    
	 	console.log($userText)
	 	if($userText === ""){		
	 		
	 		$.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(a) {
  			$(".quoteDis").html("").append('<span>' + a.quote + "<p>— " + a.author + "</p> </span>")
		});
	 	}else{
	 		$(".quoteDis").html("").append( $userName + "<p>— " + $userText + "</p>")
	 		$("textarea").val("");
	 		$("input").val("");
	 	}
	}



})();

 