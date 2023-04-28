// function for computer ai
function getComputerChoice() {
    compChoice = Math.round(Math.random() * 2)
    if (compChoice == 0) {
        return "Rock";
    } else if (compChoice == 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function playRound(getComputerChoice, userChoicesInputs) {
    // lowercased input text
    userChoicesInputs = userChoicesInputs.toLowerCase()
    getComputerChoice = getComputerChoice.toLowerCase()

    // print user and computer choices
    console.log(`computer choose ${getComputerChoice}`)
    console.log(`You choose ${userChoicesInputs}`)
    console.log("")

    // conditional result statements
    if (userChoicesInputs == getComputerChoice) {
        return "Draw"
    } else if (userChoicesInputs == "rock" && getComputerChoice == "paper") {
        return "You lose"
    } else if (userChoicesInputs == "paper" && getComputerChoice == "scissor") {
        return "You lose"
    } else if (userChoicesInputs == "scissor" && getComputerChoice == "rock") {
        return "You lose"
    } else {
        return "You win"
    }
}


// minimal ui on terminal
console.log("-----Rock Paper Scissor-----");
console.log("");

// create variables for input
let userChoicesInputs = "rock";
console.log(playRound(getComputerChoice(), userChoicesInputs))
