function computerSelection() {
    let randomNumber = Math.floor(Math.random() * Math.floor(3));
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }

  function playerSelection() {
    return window.prompt("Enter your choice:").toLowerCase();
  }

  function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a draw!";
    } else if (
      (playerChoice == "rock" && computerChoice == "paper") ||
      (playerChoice == "paper" && computerChoice == "scissors") ||
      (playerChoice == "scissors" && computerChoice == "rock")
    ) {
      return `You Lose! ${computerChoice} beats ${playerChoice}`;
    } else {
      return `You Win! ${playerChoice} beats ${computerChoice}`;
    }
  }

  function playRound() {
    let playerChoice = playerSelection();
    let computerChoice = computerSelection();
    console.log(getResult(playerChoice, computerChoice));
    return getResult(playerChoice, computerChoice);
  }

  function game() {
    let playerCounter = 0;
    let computerCounter = 0;
    let gameResult;
    while ((playerCounter !== 3) || (computerCounter !== 3)) {
      gameResult = playRound();
      if (gameResult.includes("Win")) {
        playerCounter++;
      } else if (gameResult.includes("Lose")) {
        computerCounter++;
      }
      console.log(`${playerCounter} - ${computerCounter}`);
    }


    if (playerCounter === 3) {
      console.log("Player wins!");
    } else {
      console.log("Computer wins!");
    }
  }