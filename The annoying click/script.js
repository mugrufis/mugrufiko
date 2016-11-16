

// to function pou emfanizei to click

function printClick () {
	//with color
	
	(function(){
		var randomNum = Math.floor((Math.random() * 10) + 1); 
switch(randomNum){
	case 1:
	document.getElementById("clicktest").className = "a";
	break;
	case 2:
	document.getElementById("clicktest").className = "b";
	break;
	case 3:
	document.getElementById("clicktest").className = "c";
	break;
	case 4:
	document.getElementById("clicktest").className = "d";
	break;
	case 5:
	document.getElementById("clicktest").className = "e";
	break;
	case 6:
	document.getElementById("clicktest").className = "f";
	break;
	case 7:
	document.getElementById("clicktest").className = "g";
	break;
	case 8:
	document.getElementById("clicktest").className = "h";
	break;
	case 9:
	document.getElementById("clicktest").className = "i";
	break;
	case 10:
	document.getElementById("clicktest").className = "j";
	break;
 }
}());


	document.getElementById("clicktest").textContent = "Click!";
	console.log("Click");
	}


//edopismos mouse kai topothetisi tou div
document.querySelector("body").addEventListener("mousemove",function(event){
	var d = document.getElementById('clicktest');
	d.style.position = "absolute";
	d.style.left = event.clientX + 20 +'px';
	d.style.top = event.clientY+'px';
});

// to fadeout

$("body").click(function() {
  $("#clicktest").show();
  $( "#clicktest" ).fadeOut( "medium" );
});


//  to trigger
document.querySelector("body").addEventListener("click",printClick)




