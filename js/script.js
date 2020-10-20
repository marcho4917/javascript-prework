{

let playerScore = 0;
let computerScore = 0;

const playGame = function (playerInput) {
	clearMessages ();
	const getMoveName = function (argMoveId) {
		if (argMoveId == '1') {
			return 'rock';
		} else if (argMoveId =='2') {
			return 'paper';
		} else if (argMoveId =='3') {
		  	return 'scissors';
		} else {
		  	printMessage('Unknown move with ID' + argMoveId +'.');
			return 'unknown move';
		}
	}

	const randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Random number is: ' + randomNumber);

	const argComputerMove = getMoveName(randomNumber);

	printMessage('My move is: ' + argComputerMove);

	console.log('Player type: ' + playerInput);

	const argPlayerMove = getMoveName(playerInput);

	const displayResult = function (argComputerMove, argPlayerMove) {
		console.log('moves: ', argComputerMove, argPlayerMove);

		if (argComputerMove =='rock' && argPlayerMove =='paper') {
		playerScore ++;
		return('You won !');
		} else if (argComputerMove =='paper' && argPlayerMove =='scissors') {
			playerScore ++;
			return('You won!');
		} else if (argComputerMove =='scissors' && argPlayerMove =='rock') {
			playerScore ++;
			return ('You won!');
		} else if (argPlayerMove =='unknown move') {
			return('choose number from 1 to 3');
		} else if (argComputerMove == argPlayerMove) {
			return('DRAW!');
		} else {
			computerScore ++;
			return ('Computer won!');
		}

}
	printMessage('result: ' + displayResult(argComputerMove, argPlayerMove));
	getResult();

	function getResult() {
		document.getElementById('result').innerHTML = 'Player:' + playerScore + '<br>' + 'Computer:' + computerScore;
	}
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
}