function playRound(playerSelection, computerSelection) {

    if (computerSelection === "Paper") {
        return "You Lose! Paper beats Rock"
    } else if (computerSelection === "Scissors") {
        return "Player Wins!"
    } else {
        return "Play Again"
    }
}

function computerPlay() {
    let options = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    return options[Math.floor(Math.random() * options.length)];

}
console.log(computerPlay());
const computerSelection = computerPlay();
const playerSelection = "Rock";
console.log(playRound(playerSelection, computerSelection));