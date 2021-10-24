// Returns the random Word
function computerPlay() {
    var items = ['rock', 'paper', 'scissors'];
    // Takes a random Word out of the "items" Array
    return items[~~(Math.random() * items.length)];
}

// Gets the input from both Players 
const playerSelection = "";
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {

    // Stores the Player Input
    var playerInput = prompt("Rock, Paper or Scissors?").toLowerCase();

    computerSelection = computerPlay().toLowerCase();
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
    for (let r = 1; r < 6; r++) {
        console.log(r);
        playRound(playerSelection, computerSelection);
    }
}