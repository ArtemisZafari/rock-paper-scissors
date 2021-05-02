// JavaScript for the Rock Paper Scissors project

function computerPlay() {
    // Randomly return either 'Rock', 'Paper', or 'Scissors'

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    // Play one round of rock paper scissors and declare a winner

    if (playerSelection == "ROCK") {
        switch (computerSelection) {
            case "ROCK":
                return "Rock vs. Rock, it's a tie!";
            case "PAPER":
                return "Rock vs. Paper, you lose!";
            case "SCISSORS":
                return "Rock vs. Scissors, you win!";
        }
    } else if (playerSelection == "PAPER") {
        switch (computerSelection) {
            case "ROCK":
                return "Paper vs. Rock, you win!";
            case "PAPER":
                return "Paper vs. Paper, it's a tie!";
            case "SCISSORS":
                return "Paper vs. Scissors, you lose!";
        }
    } else if (playerSelection == "SCISSORS") {
        switch (computerSelection) {
            case "ROCK":
                return "Scissors vs. Rock, you lose!";
            case "PAPER":
                return "Scissors vs. Paper, you win!";
            case "SCISSORS":
                return "Scissors vs. Scissors, it's a tie!";
        }
    }
}

function roundOutcomes() {
    // Uses playRound function to play a round and track points

    let playerSelection = window.prompt("Rock, paper, or scissors?").toUpperCase();
    while (playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS") {
        playerSelection = window.prompt("Please type either rock, paper, or scissors.").toUpperCase();
    }
    let computerSelection = computerPlay();
    let roundOutcome = playRound(playerSelection, computerSelection);
    let scoreArray = [0,0];

    if (roundOutcome.includes("win")) {
        scoreArray[0] = 1;
    } else if (roundOutcome.includes("lose")) {
        scoreArray[1] = 1;
    }
    console.log(roundOutcome);
    return scoreArray;
}

function game() {
    // Play a five round game of rock paper scissors vs. the computer
    
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        scoreCounter = roundOutcomes();
        playerScore = playerScore + scoreCounter[0];
        computerScore = computerScore + scoreCounter[1];
        console.log(`The score is now ${playerScore} (you) vs. ${computerScore} (computer).`);
    }
    if (playerScore == 5) {
        console.log("You've reached 5 points; you won the game!");
        return;
    }
    if (computerScore == 5) {
        console.log("The computer reached 5 points; you lost the game!");
        return;
    }
}