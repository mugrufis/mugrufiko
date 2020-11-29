(function () {
	'use strict'
	var VF = Vex.Flow;
	var width,height;

	

	// Create an SVG renderer and attach it to the DIV element named "boo".
	var score =  document.getElementById("score")
	var renderer = new VF.Renderer(score, VF.Renderer.Backends.SVG);

	// Configure the rendering context.
	renderer.resize(window.innerWidth, window.innerHeight / 2);
	var context = renderer.getContext();
	context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

	// Create a stave of width 400 at position 10, 40 on the canvas.

	var stave = new VF.Stave( 30  ,  window.innerHeight / 4, 400);
	stave.addClef("percussion").addTimeSignature("4/4");
	stave.setContext(context).draw();


	var notes =  [];
	var notes2 = []; 
	var notes3 = []; 
	var notes4 = [];


	var generateBtn = document.getElementById("generate");
	var grouping = document.getElementById("grouping")


	generateBtn.onclick = function(){
		resetScore();

		var pattern = patternGeneration();
		genarateNotes(pattern);

		var beams = [
		new VF.Beam(notes),
		new VF.Beam(notes2),
		new VF.Beam(notes3),
		new VF.Beam(notes4)
		]
		var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
		notes = notes.concat(notes2).concat(notes3).concat(notes4);
		voice.addTickables(notes);
		var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);


		Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
		beams.forEach(function(b) {b.setContext(context).draw()})
	//voice.draw(context, stave);
}







// ********************************************THEOS CODE*********************************************

function clearNotes(){
	notes = [];
	notes2 = [];
	notes3 = [];
	notes4 = [];
}


function resetScore(){
		clearNotes();
		$("#score").remove();
		$("<div id='score'class='col-xs-12'> </div>").prependTo("body");
		score =  document.getElementById("score")
		renderer = new VF.Renderer(score, VF.Renderer.Backends.SVG);
		renderer.resize(window.innerWidth, window.innerHeight / 2);
		context = renderer.getContext();
		context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
		stave = new VF.Stave( 30  ,  window.innerHeight / 4, 400);
		stave.addClef("percussion").addTimeSignature("4/4");
		stave.setContext(context).draw();
	}



// Pattern generation.

function patternGeneration(){
	var pattern = "";
	console.log(grouping.value);
	for (var i = 0;i < grouping.value.length; i++){

		switch (grouping.value[i]){
			case "2":
			pattern += get2()[0];

			break;
			case "3":
			pattern += get3()[0];

			break;
			case "4":
			pattern += get4()[0];

			break;
			case "5":
			pattern += get5()[0];

			break;
		}
	}
	return pattern;
}








function genarateNotes(pattern){
	for (var i = 0; i < 16; i++){

	if (i < 4) { //first beat
		
		beatBlock(notes, i, pattern);
		

	}else if (i >= 4 && i < 8){ // second beat

		beatBlock(notes2, i, pattern);

	}else if (i >= 8 && i < 12){ //third beat

		beatBlock(notes3, i, pattern);

	}else { // fourth beat

		beatBlock(notes4, i, pattern);

	}

}
}

function beatBlock(arrToChange, i, pattern){
	switch (pattern[i]){
		case "r":
		arrToChange.push(newHiHat("16"));
		break;
		case "l":
		arrToChange.push(newSnare("16"));
		break;
		case "f":
		arrToChange.push(newBase("16"));
		break;
		case "F":
		arrToChange.push(newBase("16",true));
		break;
		case "R":
		arrToChange.push(newHiHat("16",true));
		break;
		case "L":
		arrToChange.push(newSnare("16",true));
		break;
	}
}





function newSnare(value, accent){
	if (accent == true){
		return  new VF.StaveNote({clef: "treble", keys: ["c/5"], duration: value }).addArticulation(0, new VF.Articulation("a>"))
	}

	return new VF.StaveNote({clef: "treble", keys: ["c/5"], duration: value })
}

function newBase(value, accent){
	if (accent == true){
		return  new VF.StaveNote({clef: "treble", keys: ["f/4"], duration: value }).addArticulation(0, new VF.Articulation("a>"))
	}

	return new VF.StaveNote({clef: "treble", keys: ["f/4"], duration: value })
}

function newHiHat(value, accent){
	
	if (accent == true){
		return  new VF.StaveNote({clef: "treble", keys: ["g/5/x2"], duration: value }).addArticulation(0, new VF.Articulation("a>"))
	}

	return new VF.StaveNote({clef: "treble", keys: ["g/5/x2"], duration: value })
}






})();