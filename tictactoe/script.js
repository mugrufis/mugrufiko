(function () {
	'use strict'
	var gameStopper = false;
	var playerChoice = true;
	var xOrO = true;
	var cells = [[$("#cell00"),$("#cell01"),$("#cell02")],
	[$("#cell10"),$("#cell11"),$("#cell12")],
	[$("#cell20"),$("#cell21"),$("#cell22")]
	]

	// Choosing X or O

	$(".pickX").on("click",function(){
		xOrO = true;
		playerChoice = true;
		gameStopper = false;
		clearCells();
		$( "#cbox0" ).prop( "checked", true );
		$(".output").text("X to play.");
	});


	$(".pickO").on("click",function(){
		xOrO = false;
		playerChoice = false;
		gameStopper = false;
		clearCells();
		$( "#cbox0" ).prop( "checked", true );
		$(".output").text("O to play.");

		
	});


	// Putting X or O on the Board



	function placeMove (selectedCell){
		if(!gameStopper){
			if (xOrO) {
				selectedCell.text("X");
				$(".output").text("O to play.")
			}else {
				selectedCell.text("O");
				$(".output").text("X to play.")
			}
			xOrO = !xOrO;
			coordinateFinder(selectedCell);
		}
	}



	$("td").on("click", function(e){
		if (!gameStopper){
			var selectedCell = $(e.currentTarget)
			//console.log(selectedCell)
			if (selectedCell.text() === "") {
				placeMove(selectedCell)	
				if (($('#cbox1').is(':checked')) && (!gameStopper) ){
					computerEasy()		
				}
				else if (($('#cbox2').is(':checked')) && (!gameStopper)){
					computerMedium()
				}
			}

		}
		
	});



	// Checking for a Winner
	

	function gameEndCheck(coX, coY){
		
			//console.log(cells[coX][coY])
			if(
				(cells[0][coY].text() == cells[1][coY].text()) && (cells[1][coY].text() == cells[2][coY].text()) ||
				(cells[coX][0].text() == cells[coX][1].text()) && (cells[coX][1].text() == cells[coX][2].text()) ||
				(cells[1][1].text() !== "") && (cells[0][0].text() == cells[1][1].text()) && (cells[1][1].text() == cells[2][2].text()) ||
				(cells[1][1].text() !== "") && (cells[0][2].text() == cells[1][1].text()) && (cells[1][1].text() == cells[2][0].text())
				){
				gameStopper = true;
			if(!xOrO){	
				$(".output").html("<h1> X has won this round!");
				restartGame();
			}
			else{
				$(".output").html("<h1> O has won this round!");
				restartGame();
			}
		}else {
			tieChecker();
		}


	}

	function tieChecker(){
		var tieCheck = 0;
		for (var i = 0; i < 3; i++) {
			for(var j = 0; j < 3; j++){
				if (cells[i][j].text() == ""){
					return;
				}else{
					tieCheck +=1
				}

			}
		}

		if (tieCheck == 9) {
			gameStopper = true;
			$(".output").html("<h1> You have tied!");
			restartGame()
		}
	}


	function gameStartCheck(){
		var empty = 0;
		for (var i = 0; i < 3; i++) {
			for(var j = 0; j < 3; j++){
				if (cells[i][j].text() == ""){
					empty +=1;
				}else{	
					return;
				}

			}
		}
		// Which computer to play at the beggining of the round
		if ((empty == 9) && ($('#cbox1').is(':checked'))) {
			computerEasy();
		}else if((empty == 9) && ($('#cbox2').is(':checked'))){
			computerMedium();
		}
	}


	function coordinateFinder(tdClicked){
		var coordinates = tdClicked[0].id;
		coordinates = coordinates.substr(coordinates.length - 2);
		var coordinatesX = coordinates[0];
		var coordinatesY = coordinates[1];
		console.log(coordinates);
		gameEndCheck(coordinatesX, coordinatesY)

	}


	// Clearing the board
	function clearCells(){
		gameStopper = false;
		$("td").each(function(){
			$(this).text("")
			$(".output").html("");
		})
	}


	function restartGame(){
		
		
		setTimeout(clearCells, 1500)
		setTimeout(function(){
			if (xOrO) {
				$(".output").text("X to play.");
			}else{
				$(".output").text("O to play.")
			}
			if( ($('#cbox1').is(':checked')) && (xOrO !== playerChoice) ){
				gameStartCheck()}
				else if ( ($('#cbox2').is(':checked')) && (xOrO !== playerChoice)){
					gameStartCheck()
				}
			},1500)
	}


	

	function randomNumber() {
		return Math.floor(Math.random() * (3 - 0) + 0);

	}	


	function computerEasy(){
		var x = randomNumber();
		var y = randomNumber();
		if(cells[x][y].text() === ""){
			placeMove(cells[x][y]);
		}else{
			computerEasy();
		}
		
	}


	function computerMedium(){
		if (twoOfaKind()){
			return true;
		}else{
			computerEasy();
		}


	}


	function twoOfaKind(){
		// Row two of a kind
		for (var i = 0; i < 3; i++){
			//  If the first two boxes of a row hold two same values place a move on the third
			if(
				((cells[i][0].text() == cells[i][1].text()) && (cells[i][0].text() !== "")) && (cells[i][2].text() == ""))
			{	
				placeMove(cells[i][2]);
				return true;
			}

			//  If the second and third boxes of a row hold two same values place a move on the first
			else if (
				((cells[i][1].text() == cells[i][2].text()) && (cells[i][1].text() !== "")) && (cells[i][0].text() == ""))
			{
				placeMove(cells[i][0]);
				return true;	
			}
			//  If the first and third boxes of a row hold two same values place a move on the middle
			else if (				
				((cells[i][0].text() == cells[i][2].text()) && (cells[i][0].text() !== "")) && (cells[i][1].text() == "")
				) 
			{
				placeMove(cells[i][1])
				return true;
			}

			// Column two of a kind

			// If the first two boxes of a column hold the same value place a move on the third
			else if(
				((cells[0][i].text() == cells[1][i].text()) && (cells[0][i].text() !== "")) && (cells[2][i].text() == ""))
			{
				placeMove(cells[2][i]);
				return true;
			}

			// If second and third box of column hold the same value place a move on the first
			else if(
				((cells[1][i].text() == cells[2][i].text()) && (cells[1][i].text() !== "")) && (cells[0][i].text() == ""))
			{
				placeMove(cells[0][i]);
				return true;	
			}

			// If the first and third boxes of a column hold the same value place a move in the middle.
			else if(
				((cells[0][i].text() == cells[2][i].text()) && (cells[0][i].text() !== "")) && (cells[1][i].text() == ""))
			{
				placeMove(cells[1][i]);
				return true;
			}
			//Diagonal two of a kind (00 11 22)
			else if(
				((cells[0][0].text() == cells[1][1].text()) && (cells[1][1].text() !== "") ) && (cells[2][2].text() == "" )
				)
			{
				placeMove(cells[2][2]);
				return true;
			}
			else if(
				((cells[0][0].text() == cells[2][2].text()) && (cells[0][0].text() !== ""))  && (cells[1][1].text() == "" )
				)
			{
				placeMove(cells[1][1]);
				return true;
			}
			else if(
				((cells[1][1].text() == cells[2][2].text()) && (cells[1][1].text() !== ""))  && (cells[0][0].text() == "" ) 
				)
			{
				placeMove(cells[0][0]);
				return true;
			}
			//Diagonal two of a kind (02 11 20)
			else if(
				((cells[0][2].text() == cells[1][1].text()) && (cells[1][1].text() !== "") ) && (cells[2][0].text() == "" )
				)
			{
				placeMove(cells[2][0]);
				return true;
			}
			else if(
				((cells[0][2].text() == cells[2][0].text()) && (cells[0][2].text() !== ""))  && (cells[1][1].text() == "" )
				)
			{
				placeMove(cells[1][1]);
				return true;
			}
			else if(
				((cells[1][1].text() == cells[2][0].text()) && (cells[1][1].text() !== ""))  && (cells[0][2].text() == "" ) 
				)
			{
				placeMove(cells[0][2]);
				return true;
			}

		} // For loop ends
		return false;
	} // twoOfaKind ends





	$(".test").on("click",function(){
		twoOfaKind()

	})








})();


