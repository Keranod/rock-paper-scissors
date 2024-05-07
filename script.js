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

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        return null;
    }
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            return "computer";
        }
        return "human";
    }
    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            return "computer";
        }
        return "human";
    }
}

const playGame = () => {
    const rounds = 5;

    let humanScore = 0;
    let computerScore = 0;

    for(i = 0; i < rounds; i++) {
        let roundResult = playRound(getHumanChoice(), getComputerChoice());
        if (roundResult === "human") {
            humanScore++;
        } else if (roundResult === "computer") {
            computerScore++;
        }
    }
    
    if (humanScore === computerScore) {
        console.log("It is a Draw!");
    } else if (humanScore < computerScore) {
        console.log("You Lose!");
    } else if (humanScore > computerScore) {
        console.log("You Win!");
    }
}


playGame();