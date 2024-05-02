const getComputerChoice = () => {
    const random = Math.random();
    if (random < 0.33) return "rock";
    if (random < 0.66) return "paper";
    if (random <= 1) return "scissors";
}

const getHumanChoice = () => {
    let humanChoice = prompt("Type in your Rock-Paper-Scissors play:\nRock\nPaper\nScissors", "rock");
    return humanChoice.toLocaleLowerCase();
}

let humanChoice = getHumanChoice();
let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice())
console.log(humanChoice)