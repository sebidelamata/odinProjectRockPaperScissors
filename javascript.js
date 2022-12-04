
// some global vars well reference later
let outputMessage;
let playerSelection;
let roundCount = 0;
let winCount = 0;
let loseCount = 0;

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

// play a single round takes a string, outputs a string, increments wincount losecount, or neither (tie)
function playRound(playerSelection){
    if(typeof(playerSelection) != "string"){
        console.log("input not a string");
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


    // these assign our inputs by id
    const rock = document.querySelector(
        "#rock"
    );
    const paper = document.querySelector(
        "#paper"
    );
    const scissors = document.querySelector(
        "#scissors"
    );

    // results div
    // these assign our inputs by id
    const results = document.querySelector(
        ".results"
    );

    // assign our options above as a group by their class
    const selectors = this.document.querySelectorAll(".selectors");

    // trigger round
    function triggerRound() {

                if(roundCount < 6){
                    playerSelection = this.id;
                    outcome = playRound(playerSelection);
                    roundCount++;
                    results.textContent = outcome +" You've won " + winCount + " rounds and lost " + loseCount + " rounds.";
                } else {
                    results.textContent = "Game over, you won " + winCount + " out of 5 rounds!";
                }
                
            }

    // listen for a selection, play a round, update score
    selectors.forEach(function (selector) {
        selector.addEventListener(
            "click",
            triggerRound
            )
    });

}

// play game on page start
playGame();