const newGameBtn = document.getElementById( 'js-newGameButton' );
newGameBtn.addEventListener( 'click', newGame );

let pickRock = document.getElementById( 'js-playerPick_rock' ),
  pickPaper = document.getElementById( 'js-playerPick_paper' ),
  pickScissors = document.getElementById( 'js-playerPick_scissors' );

pickRock.addEventListener( 'click', () => {
  playerPick( 'rock' );
} );
pickPaper.addEventListener( 'click', () => {
  playerPick( 'paper' );
} );
pickScissors.addEventListener( 'click', () => {
  playerPick( 'scissors' );
} );

let gameState = 'notStarted',  // started // ended
  player = {
    name: '',
    score: 0
  },
  computer = {
    score: 0
  };

let newGameElem = document.getElementById( 'js-newGameElement' ),
  pickElem = document.getElementById( 'js-playerPickElement' ),
  resultsElem = document.getElementById( 'js-resultsTableElement' );

function setGameElements() {
  switch ( gameState ) {
  case 'started':
    newGameElem.style.display = 'none';
    pickElem.style.display = 'block';
    resultsElem.style.display = 'block';
    break;
  case 'ended':
    newGameBtn.innerText = 'Jeszcze raz';
  case 'notStarted':
  default:
    newGameElem.style.display = 'block';
    pickElem.style.display = 'none';
    resultsElem.style.display = 'none';
  }
}
setGameElements();

let playerPointsElem = document.getElementById( 'js-playerPoints' ),
  playerNameElem = document.getElementById( 'js-playerName' ),
  computerPointsElem = document.getElementById( 'js-computerPoints' );

function newGame() {
  player.name = prompt( 'Please enter your name', 'imię gracza' );
  if ( player.name ) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints();
  }

}

function getComputerPick() {
  const possiblePicks = [ 'rock', 'paper', 'scissors' ];
  return possiblePicks[ Math.floor( Math.random() * 3 ) ];
}

let playerPickElem = document.getElementById( 'js-playerPick' ),
  computerPickElem = document.getElementById( 'js-computerPick' ),
  playerResultElem = document.getElementById( 'js-playerResult' ),
  computerResultElem = document.getElementById( 'js-computerResult' );

function checkRoundWinner( playerPick, computerPick ) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  let winnerIs = 'player';

  if ( playerPick == computerPick ) {
    winnerIs = 'noone'; // remis
  } else if (
    ( computerPick == 'rock' &&  playerPick == 'scissors' ) ||
        ( computerPick == 'scissors' &&  playerPick == 'paper' ) ||
        ( computerPick == 'paper' &&  playerPick == 'rock' ) ) {

    winnerIs = 'computer';
  }

  if ( winnerIs == 'player' ) {
    playerResultElem.innerHTML = 'Win!';
    player.score++;
  } else if ( winnerIs == 'computer' ) {
    computerResultElem.innerHTML = 'Win!';
    computer.score++;
  }

}

function playerPick( playerPick ) {
  const computerPick = getComputerPick();

  playerPickElem.innerHTML = playerPick;
  computerPickElem.innerHTML = computerPick;

  checkRoundWinner( playerPick, computerPick );
}

function setGamePoints() {
  playerPointsElem.innerHTML = player.score;
  computerPointsElem.innerHTML = computer.score;
}


