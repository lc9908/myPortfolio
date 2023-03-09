const playerSelection = document.querySelector(".playerSelection");
const computerSelection = document.querySelector(".computerSelection");
const buttons = document.querySelectorAll(".btns button");
const result = document.querySelector(".result");
let playerScore =document.querySelector(".playerScore");
let computerScore =document.querySelector(".computerScore");
const reset = document.querySelector(".reset");
const finalResult = document.querySelector(".finalResult");


const getComputerChoice = () => {
    const choices = ["👊","✌","✋"];
    return choices[Math.floor(Math.random() * 3)];

}

const getResult = (playerChoice, computerChoice) => {
    if(playerChoice == computerChoice){
        return "It's a tied game";
    }
    if(playerChoice == "👊"){
        if(computerChoice == "✌"){
            playerScore.textContent++;
            return `You win! ${playerChoice} beats ${computerChoice}`;
        } else {
            computerScore.textContent++;
            return `You lose! ${computerChoice} beats ${playerChoice}`;    
        }
    }
    if(playerChoice == "✌") {
        if(computerChoice == "✋"){
            playerScore.textContent++;
            return `You win! ${playerChoice} beats ${computerChoice}`;
        } else {
            computerScore.textContent++;
            return `You lose! ${computerChoice} beats ${playerChoice}`;    
        }
    }
    if(playerChoice == "✋"){
        if(computerChoice == "👊"){
            playerScore.textContent++;
            return `You win! ${playerChoice} beats ${computerChoice}`;
        } else {
            computerScore.textContent++;
            return `You lose! ${computerChoice} beats ${playerChoice}`;    
        }
    }


}

const playRound = (e) => {
    let playerChoice = e.target.textContent;
    let computerChoice = getComputerChoice();
    playerSelection.textContent = playerChoice;
    computerSelection.textContent = computerChoice;
    result.textContent = getResult(playerChoice, computerChoice);

    if(playerScore.textContent  == 5 || computerScore.textContent  == 5){
        if(playerScore.textContent  == 5) {
            finalResult.textContent ="You've Won";
        } else if(computerScore.textContent  == 5) {
            finalResult.textContent ="You've Lost";
        }
        reset.style.visibility = "visible";
    }
}

const resetGame = () => {
    reset.style.visibility = "hidden";    
    playerScore.textContent  = 0;
    computerScore.textContent  = 0;
}


buttons.forEach(btn => {
    btn.addEventListener("click", playRound);
    
});