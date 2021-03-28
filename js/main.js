// JavaScript for the Rock Paper Scissors project

function computerPlay() {
    // Randomly return either 'Rock', 'Paper', or 'Scissors'
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // Play one round of rock paper scissors and declare a winner
    let playerUpper = playerSelection.toUpperCase();
    let computerUpper = computerSelection.toUpperCase();

    if (playerUpper == "ROCK") {
        switch (computerUpper) {
            case "ROCK":
                return "Rock vs. Rock, it's a tie!";
            case "PAPER":
                return "Rock vs. Paper, you lose!";
            case "SCISSORS":
                return "Rock vs. Scissors, you win!";
        }
    } else if (playerUpper == "PAPER") {
        switch (computerUpper) {
            case "ROCK":
                return "Paper vs. Rock, you win!";
            case "PAPER":
                return "Paper vs. Paper, it's a tie!";
            case "SCISSORS":
                return "Paper vs. Scissors, you lose!";
        }
    } else if (playerUpper == "SCISSORS") {
        switch (computerUpper) {
            case "ROCK":
                return "Scissors vs. Rock, you lose!";
            case "PAPER":
                return "Scissors vs. Paper, you win!";
            case "SCISSORS":
                return "Scissors vs. Scissors, it's a tie!";
        }
    }
}

function game() {
    // Play a game of rock paper scissors vs. the computer
}