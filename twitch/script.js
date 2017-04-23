(function(){
	'use strict'

	var users = [ "freecodecamp", "ESL_SC2", "OgamingSC2", "cretetion", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin "]
	var x = "freecodecamp";
	var storageUnit = {};
	var i = 0 ;

	function getChannel(){
		if(i < users.length){
			$.when(
				$(".loader").fadeIn(),

				$.getJSON(' https://wind-bow.gomix.me/twitch-api/channels/' + users[i] + '?callback=?', function(data) {
					storageUnit.info = data;
				}),
				$.getJSON(' https://wind-bow.gomix.me/twitch-api/streams/' + users[i] + '?callback=?', function(data) {
					storageUnit.stream = data;
				})
				).then(addChannelToList);
			}else {
				i = 0;
				return false;
			}
		}
		getChannel();

		function addChannelToList(){
					var data = storageUnit.info;
					var response = storageUnit.stream;
					console.log(data, response)
					var displayMsg = "<tr>";
					if (data.error){
						displayMsg ="<div class='error'><span class='placeholder'></span><p>" + data.message + "</p></div>";
						$(".contentWrapper").append(displayMsg);
					}else{
						displayMsg += "<td><img src='" + data.logo + "'></td>";
						displayMsg += "<td>"+ data.display_name +"</td>";

						if (response.stream == null){
							displayMsg += "<td><a class='offlineLink red' href='"+ data.url +"' <em> Offline </em></a></td>";
						}else{
							displayMsg += "<td><a class='offlineLink green' href='"+ data.url +"' <em> Online </em></a></td>";
							displayMsg += "<td>Streaming: "+ data.game +"</td>";
							

						}
					displayMsg += "</tr>";
					$("table").append(displayMsg);
					}
					
					$(".loader").hide();
					
					i++;
					getChannel();
				}

})();
