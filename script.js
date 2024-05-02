const getComputerChoice = () => {
    const random = Math.random();
    if (random < 0.33) return "rock";
    if (random < 0.66) return "paper";
    if (random <= 1) return "scissors";
}

console.log(getComputerChoice())