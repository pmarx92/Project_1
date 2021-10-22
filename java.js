// Returns the random Word
function computerPlay() {
    // Takes a random Word out of the "items" Array
    const items = ['rock', 'paper', 'scissors'];
    const item = items[Math.floor(Math.random() * items.length)];
    return item;
}

// Gets the input from both Players 
const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
const computerSelection = computerPlay();

// Stores the Player Input
var playerInput = playerSelection;


console.log(playRound(playerSelection, computerSelection));


function playRound(playerInput, computerSelection) {
    alert("The computer chose: " + computerSelection);

    if (playerInput === computerSelection) {
        alert("TIE!");
    } else if (playerInput === "rock" && computerSelection === "scissors") {
        alert("You Win! Rock beats Scissors.");
    } else if (playerInput === "paper" && computerSelection === "rock") {
        alert("You Win! Paper beats Rock.");
    } else if (playerInput === "scissors" && computerSelection === "paper") {
        alert("You Win! Scissors beat Paper.");
    } else {
        alert("You Lose!");
    }
}

game();

function game() {
  for (let r = 0; r < 5; r++) {
      console.log(r);
      computerPlay(item);
      playRound();
  }
}