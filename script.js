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
        return "draw";
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
    if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            return "computer";
        }
        return "human";
    }
}

const INITIAL_ROUNDS = 5;

let rounds = INITIAL_ROUNDS;
let humanScore = 0;
let computerScore = 0;

const humanScoreText = document.querySelector("#humanScore b");
const computerScoreText = document.querySelector("#computerScore b");

humanScoreText.textContent = humanScore;
computerScoreText.textContent = computerScore;

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
    const roundWinner = playRound("rock",getComputerChoice());

    if (roundWinner === "human") {
        humanScore++;
    } else if (roundWinner === "computer") {
        computerScore++;
    } else if (roundWinner === "draw") {
        computerScore++;
        humanScore++;
    }

    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
    rounds--;

    if (rounds <= 0) {
        if (humanScore === computerScore) {
            alert("It is a Draw!");
        } else if (humanScore < computerScore) {
            alert("You Lose!");
        } else if (humanScore > computerScore) {
            alert("You Win!");
        }
        rounds = INITIAL_ROUNDS;
        humanScore = 0;
        computerScore = 0;
    }
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
    const roundWinner = playRound("paper",getComputerChoice());

    if (roundWinner === "human") {
        humanScore++;
    } else if (roundWinner === "computer") {
        computerScore++;
    } else if (roundWinner === "draw") {
        computerScore++;
        humanScore++;
    }

    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
    rounds--;

    if (rounds <= 0) {
        if (humanScore === computerScore) {
            alert("It is a Draw!");
        } else if (humanScore < computerScore) {
            alert("You Lose!");
        } else if (humanScore > computerScore) {
            alert("You Win!");
        }
        rounds = INITIAL_ROUNDS;
        humanScore = 0;
        computerScore = 0;
    }
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
    const roundWinner = playRound("scissors",getComputerChoice());

    if (roundWinner === "human") {
        humanScore++;
    } else if (roundWinner === "computer") {
        computerScore++;
    } else if (roundWinner === "draw") {
        computerScore++;
        humanScore++;
    }

    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
    rounds--;

    if (rounds <= 0) {
        if (humanScore === computerScore) {
            alert("It is a Draw!");
        } else if (humanScore < computerScore) {
            alert("You Lose!");
        } else if (humanScore > computerScore) {
            alert("You Win!");
        }
        rounds = INITIAL_ROUNDS;
        humanScore = 0;
        computerScore = 0;
    }
});