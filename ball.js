const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const ballRadius = 20;

const LPaddel = document.createElement('div');
document.body.appendChild(LPaddel);
let LPaddelWidth = 10;
let LPaddelHeight = 100;
let LPaddelSpeed = 5;
let LPaddelYPosition = windowHeight / 2 - LPaddelHeight / 2;
let LPaddelXPosition = 30;

const ball = document.createElement('div');
document.body.appendChild(ball);
let ballXPosition = windowWidth / 2 - ballRadius;
let ballXDirection = 1;
let ballYPosition = windowHeight / 2 - ballRadius;
let ballYDirection = 1;
let ballSpeed = 5;

const scoreElement = document.createElement('div');
document.body.appendChild(scoreElement);
let score = 0;

const levelElement = document.createElement('div');
document.body.appendChild(levelElement);
let level = 0;

const gameOverElement = document.createElement('div');
document.body.appendChild(gameOverElement);
gameOverElement.style.position = 'absolute';
gameOverElement.style.top = '50%';
gameOverElement.style.left = '50%';
gameOverElement.style.transform = 'translate(-50%, -50%)';
gameOverElement.style.fontSize = '70px';
gameOverElement.style.color = 'black';
gameOverElement.style.display = 'none';
gameOverElement.innerHTML = 'Game Over';

let animationFrame;

function moveBall() {
    ballXPosition = ballXPosition + (ballSpeed * ballXDirection);
    ballYPosition = ballYPosition + (ballSpeed * ballYDirection);

    ball.style.left = ballXPosition + "px";
    ball.style.top = ballYPosition + "px";

    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection = ballYDirection * -1;
    }

    // Game Over if ball goes off the left
    if (ballXPosition < 0) {
        cancelAnimationFrame(animationFrame);
        gameOverElement.style.display = 'block';
        return;
    }

    if (ballXPosition > windowWidth - 2 * ballRadius) {
        ballXDirection = ballXDirection * -1;
    }

    let ballTop = ballYPosition;
    let ballBottom = ballYPosition + 2 * ballRadius;
    let ballLeft = ballXPosition;
    let LPaddelTop = LPaddelYPosition;
    let LPaddelBottom = LPaddelYPosition + LPaddelHeight;
    let LPaddelRight = LPaddelXPosition + LPaddelWidth;

    if (
        ballBottom >= LPaddelTop &&
        ballTop <= LPaddelBottom &&
        ballLeft <= LPaddelRight &&
        ballXDirection == -1
    ) {
        ballXDirection = ballXDirection * -1;
    }

    if (
        ballBottom >= LPaddelTop &&
        ballTop <= LPaddelBottom &&
        ballLeft <= LPaddelRight
    ) {
        score = score + 1;
    }

    if (score >= 5) {
        level = level + 1;
        LPaddelHeight = LPaddelHeight - 10;
        score = 0;
        ballSpeed = ballSpeed + 1;
    }

    scoreElement.innerHTML = "Score: " + score;
    levelElement.innerHTML = "Level: " + level;
}

function createBall() {
    ball.style.height = (2 * ballRadius) + "px";
    ball.style.width = (2 * ballRadius) + "px";
    ball.style.borderRadius = "50%";
    ball.style.backgroundColor = "red";
    ball.style.position = "absolute";
    ball.style.top = ballYPosition + "px";
    ball.style.left = ballXPosition + "px";
}

function createLPaddel() {
    LPaddel.style.height = LPaddelHeight + "px";
    LPaddel.style.width = LPaddelWidth + "px";
    LPaddel.style.backgroundColor = 'blue';
    LPaddel.style.position = 'absolute';
    LPaddel.style.left = LPaddelXPosition + "px";
    LPaddel.style.top = LPaddelYPosition + "px";
}

function createScoreElement() {
    scoreElement.style.position = 'absolute';
    scoreElement.style.top = '10px';
    scoreElement.style.left = '10px';
    scoreElement.style.fontSize = '20px';
    scoreElement.style.font = "Sans";
    scoreElement.style.color = 'black';
    scoreElement.innerHTML = "Score: " + score;
}

function createLevelElement() {
    levelElement.style.position = 'absolute';
    levelElement.style.top = '40px';
    levelElement.style.left = '10px';
    levelElement.style.fontSize = '20px';
    levelElement.style.font = "Sans";
    levelElement.style.color = 'black';
    levelElement.innerHTML = "Level: " + level;
}

let wKey = false;
let sKey = false;

document.addEventListener('keydown', function(event) {
    if (event.key === 'w') {
        wKey = true;
    }
    if (event.key === 's') {
        sKey = true;
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'w') {
        wKey = false;
    }
    if (event.key === 's') {
        sKey = false;
    }
});

function updateScoreDisplay() {
    scoreElement.style.color = "black";
    scoreElement.style.fontSize = "20px";
}

function moveLPaddel() {
    if (wKey && LPaddelYPosition > 0) {
        LPaddelYPosition = LPaddelYPosition - LPaddelSpeed;
    }
    if (sKey && LPaddelYPosition < windowHeight - LPaddelHeight) {
        LPaddelYPosition = LPaddelYPosition + LPaddelSpeed;
    }
    LPaddel.style.top = LPaddelYPosition + "px";
}

function animate() {
    moveBall();
    moveLPaddel();
    updateScoreDisplay();
    animationFrame = requestAnimationFrame(animate);
}

createBall();
createLPaddel();
createScoreElement();
createLevelElement();
animate();
