const options = ["rock", "paper", "scissors"];

const whoWinsAgainst = {
	rock: {
		paper: false,
		scissors: true
	},
	paper: {
		rock: false,
		scissors: true
	},
	scissors: {
		rock: false,
		paper: true
	}
};

let humanChoiceElement = document.querySelector("#humanChoice");
let computerChoiceElement = document.querySelector("#computerChoice");
let resultElement = document.querySelector("#result");
let victoryCounterElement = document.querySelector("#victoryCounter");

let victoryCounter = 0;

function getComputerChoice() {
	let randomChoiceIndex = Math.floor(Math.random() * options.length);
	let randomChoice = options[randomChoiceIndex];

	return randomChoice;
}

function getHumanChoice(e) {
	let humanChoice = e.target.dataset.option;
	return humanChoice;
}

function getResult(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		return "Draw!";
	}

	let shouldHumanWin = whoWinsAgainst[humanChoice][computerChoice];

	if (shouldHumanWin) {
		victoryCounter++;
		return "You won!";
	} else {
		return "You lost!";
	}
}

function playGame(e) {
	let humanChoice = getHumanChoice(e);
	let computerChoice = getComputerChoice();
	let result = getResult(humanChoice, computerChoice);

	humanChoiceElement.textContent = `You chose ${humanChoice}`;
	computerChoiceElement.textContent = `Computer chose ${computerChoice}`;
	resultElement.textContent = result;
	victoryCounterElement.textContent = `You won ${victoryCounter} time${
		victoryCounter > 1 ? "s" : ""
	}.`;
}

function clearResults() {
	victoryCounter = 0;
	victoryCounterElement.textContent = "";
}

const optionButtons = document.querySelectorAll("[data-option]");
const clearResultsButton = document.querySelector("#clearResults");

optionButtons.forEach((optionButton) =>
	optionButton.addEventListener("click", playGame)
);
clearResultsButton.addEventListener("click", clearResults);
