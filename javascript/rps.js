// function for computer ai
function getComputerChoice() {

    // Generate random conditions for string conversion
    compChoice = Math.round(Math.random() * 2);

    // Convert rand numbers to strings
    if (compChoice == 0) {
        return "rock";
    } else if (compChoice == 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

// function to represent a game round
function playRound(getComputerChoice, userChoicesInputs) {

    // lowercased input text
    userChoicesInputs = userChoicesInputs.toLowerCase();
    getComputerChoice = getComputerChoice.toLowerCase();

    // print user and computer choices
    console.log(`computer choose ${getComputerChoice}`);
    console.log("");

    // conditional result statements
    if (userChoicesInputs == getComputerChoice) {
        return "Draw";
    } else if (userChoicesInputs == "rock" && getComputerChoice == "paper") {
        return "You lose";
    } else if (userChoicesInputs == "paper" && getComputerChoice == "scissor") {
        return "You lose";
    } else if (userChoicesInputs == "scissor" && getComputerChoice == "rock") {
        return "You lose";
    } else {
        return "You win";
    }
}


// minimal ui on terminal
console.log("-----Rock Paper Scissor-----");
console.log("");
let npcChoice = ""

function chooseRock() {
    console.log("rock")
    npcChoice = getComputerChoice()
    console.log(playRound(npcChoice, "rock"))

    let imgChoice = document.querySelector(".player-img");
    let imgNpc = document.querySelector(".npc-img");
    
    imgChoice.src = "img\\rock.jpg"
    imgNpc.src = `img\\${npcChoice}.jpg`
}

function choosePaper() {
    console.log("paper")
    npcChoice = getComputerChoice()
    console.log(playRound(npcChoice, "paper"))

    let imgChoice = document.querySelector(".player-img");
    let imgNpc = document.querySelector(".npc-img");

    imgChoice.src = "img\\paper.jpg"
    imgNpc.src = `img\\${npcChoice}.jpg`
}

function chooseScissor() {
    console.log("scissor")
    npcChoice = getComputerChoice()
    console.log(playRound(npcChoice, "scissor"))

    let imgChoice = document.querySelector(".player-img");
    let imgNpc = document.querySelector(".npc-img");

    imgChoice.src = "img\\scissor.jpg";
    imgNpc.src = `img\\${npcChoice}.jpg`;
}























// // create variables for input
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// // run game
// rl.question("You choose: ", 
// (userInput) => {
//     console.log(playRound(getComputerChoice(), userInput));
//     rl.close();
// })
