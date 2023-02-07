// variables and constants

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

let intervalID;
let ballSpeed;
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

// gameStart function
gameStart();

// functions

function gameStart() {
     createBall();
     nextTick();
};

function nextTick() {
     intervalID = setTimeout(() => {
          clearBoard();
          drawPaddles();
          moveBall();
          drawBall(ballX, ballY);
          checkCollision();
          nextTick();
     }, 10)
};

function clearBoard() {
     ctx.fillStyle = boardBackground;
     ctx.fillRect(0, 0, gameWidth, gameHeight);
};

function drawPaddles() {
     ctx.strokeStyle = paddleBorder;

     ctx.fillStyle = paddle1Color;

     ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

     ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

     ctx.fillStyle = paddle2Color;

     ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);

     ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
};

function creatBall() {
     ballSpeed = 1;

     if (Math.round(Math.random()) == 1) {
          ballXDirection = 1;
     }
     else {
          ballXDirection = -1;
     }
     if (Math.round(Math.random()) == 1) {
          ballYDirection = Math.random() * 1;
          // I want to change this later to make the Y movement less random
     }
     else {
          ballYDirection = Math.random() * -1;
          // I want to change this later to make the Y movement less random
     }

     ballX = gameWidth / 2;
     ballY = gameHeight / 2;

     drawBall(ballX, ballY);
};


