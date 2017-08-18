const playerOne = document.getElementById('p1');
const playerTwo = document.getElementById('p2');
const buttonOne = document.getElementById('p1++');
const buttonTwo = document.getElementById('p2++');
const Reset = document.getElementById('reset');
const setToLimit = document.getElementById('limit');
let input = document.querySelector('input');
let playerOneScore = 0;
let playerTwoScore = 0;
let gameOver = false;
let winner = 7;

buttonOne.addEventListener('click', function () {
    if (!gameOver) {
        playerOneScore++;
        if (playerOneScore == winner) {
            gameOver = !gameOver;
            p1.classList.toggle('winner');
        };
        playerOne.textContent = playerOneScore;
    }
});
buttonTwo.addEventListener('click', function () {
    if (!gameOver) {
        playerTwoScore++;
        if (playerTwoScore == winner) {
            gameOver = !gameOver;
            p2.classList.toggle('winner');
        };
        playerTwo.textContent = playerTwoScore;
    }
});
reset.addEventListener('click', function () {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOne.textContent = playerOneScore
    playerTwo.textContent = playerTwoScore;
    p1.classList.remove('winner');
    p2.classList.remove('winner');
    gameOver = false;

})
input.addEventListener('change', function () {
    limit.textContent = input.value //can use this instead of input
    winner = input.value; //not suppose to work

})
//reset makes everything zero and makes gameover false
//make class and toggle it to element that won in fix statmetn