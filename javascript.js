
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

function playRound(playerSelection){
    if(typeof(playerSelection) != "string"){
        return;
    }
    let cleanedInput = playerSelection.toUpperCase();

    let computerChoice = getComputerChoice();

    switch(cleanedInput){
        case "ROCK":
            if(computerChoice == "Paper"){
                return "You lose! Paper beats Rock.";
                break;
            } else if(computerChoice == "Scissors"){
                return "You win! Rock beats Scissors.";
                break;
            } else if(computerChoice == "Rock"){
                return "A tie! You both drew Rock.";
                break;
            }
        case "PAPER":
            if(computerChoice == "Paper"){
                return "A tie! You both drew paper.";
                break;
            } else if(computerChoice == "Scissors"){
                return "You Lose! Scissors beats Paper.";
                break;
            } else if(computerChoice == "Rock"){
                return "You win! Paper covers rock.";
                break;
            }
        case "SCISSORS":
            if(computerChoice == "Paper"){
                return "You win! Scissors beats Paper.";
                break;
            } else if(computerChoice == "Scissors"){
                return "A tie! You both drew Scissors.";
                break;
            } else if(computerChoice == "Rock"){
                return "You lose! Rock beats scissors.";
                break;
            }
    }
}

let playerSelection = "scissors";

console.log(playRound(playerSelection));