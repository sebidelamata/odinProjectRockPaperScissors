
// some global vars well reference later
let outputMessage;
let playerSelection;
let winCount;
let loseCount;

// function to randomly return either rock paper or scissors
function getComputerChoice(){
    let decider =Math.random() * 3;

    if(decider <= 1){
        return "Rock";
    } else if (decider <= 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// play a single round takes a string outputs a string, increments wincount losecount, or neither (tie)
function playRound(playerSelection){
    if(typeof(playerSelection) != "string"){
        return;
    }
    let cleanedInput = playerSelection.toUpperCase();

    let computerChoice = getComputerChoice();

    switch(cleanedInput){
        case "ROCK":
            if(computerChoice == "Paper"){
                loseCount++;
                return "You lose! Paper beats Rock.";
            } else if(computerChoice == "Scissors"){
                winCount++;
                return "You win! Rock beats Scissors.";
            } else if(computerChoice == "Rock"){
                return "A tie! You both drew Rock.";
            }
        case "PAPER":
            if(computerChoice == "Paper"){
                return "A tie! You both drew paper.";
            } else if(computerChoice == "Scissors"){
                loseCount++;
                return "You Lose! Scissors beats Paper.";
            } else if(computerChoice == "Rock"){
                winCount++;
                return "You win! Paper covers rock.";
            }
        case "SCISSORS":
            if(computerChoice == "Paper"){
                winCount++;
                return "You win! Scissors beats Paper.";
            } else if(computerChoice == "Scissors"){
                return "A tie! You both drew Scissors.";
            } else if(computerChoice == "Rock"){
                loseCount++;
                return "You lose! Rock beats scissors.";
            }
    }
}

// play a game
function playGame(){
    
    // set the number of rounds played as well as reset wins and losess
    let roundCount = 0;
    winCount = 0;
    loseCount = 0;

    // five rounds
    while(roundCount < 5){
    
        playerSelection = prompt("Rock, Paper, or Scissors", "Rock");
    
        // play a round
        outputMessage = playRound(playerSelection);

        // output for user
        alert(outputMessage +" You've won " + winCount + " rounds and lost " + loseCount + " rounds.");
        roundCount++;

    }

    // final wincount
    alert("Game over, you won " + winCount + " out of 5 rounds!");


}

// play game on page start
playGame();