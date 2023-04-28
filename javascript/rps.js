function getComputerChoice() {
    compChoice = Math.round(Math.random() * 2)
    if (compChoice == 0) {
        return "Rock";
    } else if (compChoice == 1) {
        return "Paper";
    } else {
        return "Scissor"
    }
}

console.log("-----Rock Paper Scissor-----")
console.log("")
console.log("")

