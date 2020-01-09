function playGame(playerInput){
	clearMessages ();
	function getMoveName (argMoveId){
		if(argMoveId == '1'){
			return 'kamień';
		} else if(argMoveId =='2'){
			return 'papier';
		} else if(argMoveId =='3'){
		  	return 'nożyce';
		}
		  else{
		  	printMessage('Nie znam ruchu o id' + argMoveId +'.');
			return 'nieznany ruch';
		  }
	}
	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	let argComputerMove = getMoveName(randomNumber);

	let playerScore = 0;
	let computerScore = 0;

	/*if(randomNumber == 1){
	  computerMove = 'kamień';
	}

	else if(randomNumber == 2){
		computerMove = 'papier';
	}

	else if(randomNumber == 3){
		computerMove = 'nożyce';
	}*/

	printMessage('Mój ruch to: ' + argComputerMove);

	/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

	console.log('Gracz wpisał: ' + playerInput);

	let argPlayerMove = getMoveName(playerInput);

	/*if(playerInput == '1'){
	  playerMove = 'kamień';
	}

	else if(playerInput =='2'){
		playerMove = 'papier';
	}

	else if(playerInput =='3'){
		playerMove ='nożyce';
	}*/

	function displayResult(argComputerMove, argPlayerMove){
		console.log('moves:', argComputerMove, argPlayerMove);

	if(argComputerMove =='kamień' && argPlayerMove =='papier'){
		playerScore ++;
		return('Ty wygrywasz!');
	}

	else if(argComputerMove =='papier' && argPlayerMove =='nożyce'){
		playerScore ++;
		return('Ty wygrywasz!');
	}

	else if(argComputerMove =='nożyce' && argPlayerMove =='kamień'){
		playerScore ++;
		return('Ty wygrywasz!');
	}

	else if(argPlayerMove =='nieznany ruch'){
		return('podaj liczbe od 1 do 3');
	}

	else if(argComputerMove == argPlayerMove){
		return('REMIS!');
	}

	else {
		computerScore ++;
		return('Wygrywa komputer!');
	}
	}

	printMessage('wynik:' + displayResult(argComputerMove, argPlayerMove));
	getResult();

	function getResult(){
		document.getElementById('result').innerHTML = 'Gracz:' + playerScore + '<br>' + 'Komputer:' + computerScore;}
}

	document.getElementById('play-rock').addEventListener('click', function() {
		playGame(1);
	});

	document.getElementById('play-paper').addEventListener('click', function() {
		playGame(2);
	});

	document.getElementById('play-scissors').addEventListener('click', function() {
		playGame(3);

	});
