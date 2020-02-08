//set variables
const playerClicks = document.querySelectorAll('.btn')
const resetbtn = document.querySelectorAll('#resetbtn')
const result = document.querySelector('#result')
const outcomeDisplay = document.querySelector('#outcome')

let playerChoice = ''
let playerScore = 0
let computerScore = 0

//create elements and append
let playerScoreBoard = document.createElement('p');
playerScoreBoard.classList.add('playerScore');
result.appendChild(playerScoreBoard);

let compScoreBoard = document.createElement('p');
compScoreBoard.classList.add('computerScore');
result.appendChild(compScoreBoard);

// button click event  
playerClicks.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerChoice = button.id;
    
    if(playerChoice != 'reset'){
      playRound(playerChoice,computerPlay());
      score();
      winner();
    
    } else {
      reset();
    }
  });
});

// reset game
function reset(){
  
  playerScore = 0;
  computerScore = 0;
  outcomeDisplay.textContent = '';

  playerScoreBoard.textContent = "Player: " + playerScore;
  compScoreBoard.textContent = "Computer: " + computerScore;

  document.getElementById('reset').style.visibility = "hidden";
  document.getElementById('outcome').style.visibility = "hidden";
  document.getElementById('rock').style.visibility = "visible";
  document.getElementById('paper').style.visibility = "visible";
  document.getElementById('scissors').style.visibility = "visible";
};

// random selection for computer
function computerPlay() {
  const turn = ['rock', 'paper', 'scissors', 'rock'];
  return turn[(Math.random() * turn.length) | 0]
}      
    
// play round and give outcome
function playRound(playerSelection, computerSelection){  
  
  document.getElementById('outcome').style.visibility = "visible";
  
  if (playerSelection === computerSelection ){
    outcome = [`Tie!!`] 
  
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock' ) ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ){
    outcome =[`You win! ${playerSelection} beats ${computerSelection}`]
  
  } else {
    outcome = [`You lose! ${computerSelection} beats ${playerSelection}`]
  }
  
  return ( outcome);  
}

//score outcome
function score(){
  if (outcome == 'You win! rock beats scissors' ||
      outcome == 'You win! paper beats rock' ||
      outcome == 'You win! scissors beats paper'){
    playerScore ++;
    
  } else if (outcome == 'Tie!!'){
    computerScore +=0;
    playerScore +=0;
    
  } else {
    computerScore ++;
  }
  
  playerScoreBoard.textContent = "Player: " + playerScore;
  compScoreBoard.textContent = "Computer: " + computerScore;
  
}  

//declare winner to 5
function winner(){
  if (playerScore > 4 || computerScore > 4) {
    document.getElementById('reset').style.visibility = "visible";
    document.getElementById('rock').style.visibility = "hidden";
    document.getElementById('paper').style.visibility = "hidden";
    document.getElementById('scissors').style.visibility = "hidden";
    
    if (playerScore > 4) {
      outcome = 'You won the game!';
    
    } else if (computerScore > 4) {
      outcome = 'You lost the game!';
    }
  }
    outcomeDisplay.textContent = outcome;
}