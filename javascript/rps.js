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

// function to modify ui text like npc, player, and 
function addText(playerChoices, npcChoices, gameResult) {
    let userHeading = document.querySelector(".player-choices-text"); //select text element of .player-choices-text
    let npcHeading = document.querySelector(".npc-choices-text"); //select text element of .npc-choices-text
    let result = document.querySelector(".game-result") // select text element of .game-result

    userHeading.textContent = `You Choose ${playerChoices}`; // modify text element on .player-choices-text
    npcHeading.textContent = `NPC Choose ${npcChoices}`; // modify text element on .npc-choices-text
    result.textContent = gameResult; // modify text element on .game-result
}

// function if player choose rock button
function chooseRock() {
    npcChoice = getComputerChoice(); // run getComputerChoice function to get npcChoice of rock paper scissor
    let result = playRound(npcChoice, "rock"); // get result from playing the playRound function

    const imgChoice = document.querySelector(".player-img");
    const imgNpc = document.querySelector(".npc-img");
    
    imgChoice.src = "img\\rock.jpg";
    imgNpc.src = `img\\${npcChoice}.jpg`;

    addText('rock', npcChoice, result);
};


// function if player choose paper button
function choosePaper() {
    npcChoice = getComputerChoice(); // run getComputerChoice function to get npcChoice of rock paper scissor
    let result = playRound(npcChoice, "paper"); // get result from playing the playRound function

    const imgChoice = document.querySelector(".player-img");
    const imgNpc = document.querySelector(".npc-img");

    imgChoice.src = "img\\paper.jpg";
    imgNpc.src = `img\\${npcChoice}.jpg`;

    addText('paper', npcChoice, result);
};

// function if player choose scissor button
function chooseScissor() {
    npcChoice = getComputerChoice(); // run getComputerChoice function to get npcChoice of rock paper scissor
    let result = playRound(npcChoice, "scissor"); // get result from playing the playRound function

    const imgChoice = document.querySelector(".player-img");
    const imgNpc = document.querySelector(".npc-img");

    imgChoice.src = "img\\scissor.jpg";
    imgNpc.src = `img\\${npcChoice}.jpg`;

    addText('scissor', npcChoice, result);
};


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
