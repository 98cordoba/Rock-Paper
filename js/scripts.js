/* Valores iniciales */
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoredBoard = document.getElementById("score-board");
const result = document.getElementById("result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
/* Funcion Computer */
function getComputerChoise() {
    const choises = [ 'rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choises[randomNumber]
}
/* Funcion User */
function convertCase(anythingIwant ) {
    if(anythingIwant === 'paper') return 'Paper';
    if(anythingIwant === 'scissors') return 'Scissors';
    return 'Rock';
}