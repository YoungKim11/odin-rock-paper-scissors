// user can choose between rock, paper, or scissors


let computerSelection = Math.floor(Math.random() * 3);
let playerScore = 0;
let computerScore = 0;
// we use a method to lower case the users choice
// a function stores and runs the Game.
function getComputerSelection() {
    const computerRock = 0;
    const computerPaper = 1;
    const computerScissors = 2;
    if (computerSelection === 0) {
        console.log('Computer chose Rock')
        return computerSelection;
    } else if (computerSelection === 1) {
        console.log('Computer chose Paper')
        return computerSelection;
    } else if (computerSelection === 2) {
        console.log('Computer chose Scissors')
        return computerSelection;
    }
}

function round() {
    let playerChoice = prompt(`This is a rock, paper, scissors game.
    You simply need to enter either rock, paper, or scissors`);
    let toLower = playerChoice.toLowerCase();
    let playerSelection = toLower.charAt(0).toUpperCase() + toLower.slice(1);
    getComputerSelection();
    //if statement for rocks
    if ((playerSelection === 'Rock' && computerSelection === 0) || (playerSelection === 'Paper' && computerSelection === 1) || (playerSelection === 'Scissors' && computerSelection === 2)) {
        console.log('Its a draw');
    } else if ((playerSelection === 'Scissors' && computerSelection === 0) || (playerSelection === 'Rock' && computerSelection === 1) || (playerSelection === 'Paper' && computerSelection === 2)) {
        computerScore++; 
        console.log(`Computer score: ${computerScore}`)
        console.log(`Computer chose ${getComputerSelection()}`);
        console.log('The computer wins');
    } else if ((playerSelection === 'Paper' && computerSelection === 0) || (playerSelection === 'Scissors' && computerSelection === 1) || (playerSelection === 'Rock' && computerSelection === 2)) {
        playerScore++;
        console.log(`Player Score: ${playerScore}`);
        console.log(`Player chose ${playerSelection}`);
        console.log('You Win! ');
    }
}

function game() {
    round();
    round();
    round();
    round();
    round();

    if (playerScore > computerScore) {
        console.log(`Congratulations! You win with ${playerScore}`);
    } else if(computerScore > playerScore) {
        console.log(`The Computer won with a score of: ${computerScore}`);
    } else if (playerScore === computerScore) {
        console.log(`It's a draw`);
    }
    console.log(`The scores were: 
    player:  ${playerScore}
    computer: ${computerScore}`);
}

game();

// const str = "HELLO WORLD";
// const lowerStr = str.toLowerCase();
// const newStr = lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1);
// console.log(newStr); // Output: Hello World
// create an if else if statement to run too determine what the user or the npc choose.
// a console.log displays the results. 