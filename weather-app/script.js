(function () {
	var weatherUrl = "api.openweathermap.org/data/2.5/weather";
	var apiKey = "&appid=fdf5361ac3a6c3b8c4290ee2c11295b2"
	var usersCity = "?q="
	var hackFoundOnline = "https://cors-anywhere.herokuapp.com/";
	var weatherReport = {};
	var tempC, tempF, unit;

	$.getJSON("http://ipinfo.io", function(response) {
  		console.log( response.city, response.country);
  		usersCity += response.city ; 
		$.getJSON(hackFoundOnline + weatherUrl + usersCity + apiKey , function(weather){
			console.log(weather);
			weatherReport = weather;
				//Sunset time set

		var date = new Date(weatherReport.sys.sunset*1000);
		var hours = date.getHours();
		var minutes = "0" + date.getMinutes();
		var formattedTime = hours + ':' + minutes.substr(-2) 
		$(".sunset").text(formattedTime)
	
	// City Set
	
		$(".city").text(weatherReport.name)
	
	// Temperature defining
		 tempC = weatherReport.main.temp - 273.15;
		 tempF = Math.floor(tempC * 9/5 + 32);
		 unit = "C";
		$("tempSys").text("C")
		$(".temperature").text(tempC)

		})

		})

	


	
		
		$(".tempSys").on("click",function(){
			if (unit === "C") {
				$(".tempSys").html("F")
				$(".temperature").text(tempF)
				unit = "F";

			}else{
				$(".tempSys").text("C")
				$(".temperature").text(tempC)
				unit = "C";
			}
		})
	


// Background image chooser
 	var snowPic = "https://images.pexels.com/photos/70234/pexels-photo-70234.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb";
 	var sunPic = "https://images.pexels.com/photos/107904/pexels-photo-107904.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" 
 	var normalPic = "http://wallpapertvs.com/wp-content/uploads/2014/10/clear-sky-on-a-sunny-day-1255-1920x1200.jpg"
 	var picChooser = "";
 	function picSetter(){
 		if (tempC > 5 && tempC < 20) {
 			picChooser = normalPic
 		}else if(tempC >= 20) {
 			picChooser = sunPic
 		}else{
 			picChooser = snowPic
 		}
		$(".pic").attr("src", picChooser)
	}
	

	picSetter();


//Button functionallity
	$(".plus").on("click",function(){
		tempC += 3 ;
		tempF = Math.floor(tempC * 9/5 + 32);
		if (unit === "C") {
				$(".temperature").text(tempC)
			}else{
				$(".temperature").text(tempF)
			}
		picSetter();
	})

	$(".minus").on("click",function(){
		tempC -= 3 ;
		tempF = Math.floor(tempC * 9/5 + 32);
		$(".temperature").text(tempC)
		picSetter();
	})

	$(".reset").on("click",function(){
		tempC = weatherReport.main.temp - 273.15;
	    tempF = Math.floor(tempC * 9/5 + 32);
	    if (unit === "C") {
				$(".temperature").text(tempC)
			}else{
				$(".temperature").text(tempF)
			}
	    picSetter();
	})




})();
