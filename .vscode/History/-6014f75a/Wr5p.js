const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#resetButton");

const resetButton = document.querySelector("#resetButton");

const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;

const boardBackground = "forestgreen";

const paddle1Color = "lightblue";
const paddle2Color = "red";

const paddleBorder = "black";

const ballColor = "yellow";
const ballBorderColor = "black";
const ballRadius = 12.5;

const paddleSpeed = 50;

intervalID;
ballSpeed;
ballX = gameWidth / 2;
ballY = gameHeight / 2;

ballXDirection = 0;
ballYDirection = 0;

player1Score = 0;
player2Score = 0;

paddle1 = {
     width: 25,
     height: 100,
     x: 0,
     y: 0
};

paddle2 = {
     width: 25,
     height: 100,
     x: gameWidth - 25,
     y: gameHeight - 100
};

window.addEventListener("keydown", changeDirection);
resetButton.addEventListener("click", resetGame);

gameStart();

