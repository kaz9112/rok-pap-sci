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

function addText(playerChoices, npcChoices, gameResult) {
    let userHeading = document.querySelector(".player-choices-text");
    let npcHeading = document.querySelector(".npc-choices-text");
    let result = document.querySelector(".game-result")

    userHeading.textContent = `You Choose ${playerChoices}`;
    npcHeading.textContent = `NPC Choose ${npcChoices}`;
    result.textContent = gameResult;
}

function chooseRock() {
    console.log("rock")
    npcChoice = getComputerChoice()
    let result = playRound(npcChoice, "rock")

    const imgChoice = document.querySelector(".player-img");
    const imgNpc = document.querySelector(".npc-img");
    
    imgChoice.src = "img\\rock.jpg"
    imgNpc.src = `img\\${npcChoice}.jpg`

    addText('rock', npcChoice, result)
}

function choosePaper() {
    console.log("paper")
    npcChoice = getComputerChoice()
    let result = playRound(npcChoice, "paper")

    const imgChoice = document.querySelector(".player-img");
    const imgNpc = document.querySelector(".npc-img");

    imgChoice.src = "img\\paper.jpg"
    imgNpc.src = `img\\${npcChoice}.jpg`

    addText('paper', npcChoice, result)
}

function chooseScissor() {
    console.log("scissor")
    npcChoice = getComputerChoice()
    let result = playRound(npcChoice, "scissor")

    const imgChoice = document.querySelector(".player-img");
    const imgNpc = document.querySelector(".npc-img");

    imgChoice.src = "img\\scissor.jpg";
    imgNpc.src = `img\\${npcChoice}.jpg`;

    addText('scissor', npcChoice, result)
}


// minimal ui on terminal
console.log("-----Rock Paper Scissor-----");
console.log("");
let npcChoice = ""
























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
