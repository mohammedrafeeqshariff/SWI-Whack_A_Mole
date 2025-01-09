const squares = document.querySelectorAll('.square');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time');

let score = 0;
let timeLeft = 60;
let hitPosition;
let timerId = null;
let moleTimerId = null;

// Function to randomly place the mole
function randomMole() {
    squares.forEach((square) => {
        square.classList.remove('mole');
    });

    const randomSquare = squares[Math.floor(Math.random() * squares.length)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
}

// Function to handle square clicks
squares.forEach((square) => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            score++;
            scoreDisplay.textContent = score;
            hitPosition = null;
        }
    });
});

// Start moving the mole
function moveMole() {
    moleTimerId = setInterval(randomMole, 800);
}

// Countdown timer
function countdown() {
    timeLeft--;
    timeLeftDisplay.textContent = timeLeft;

    if (timeLeft === 0) {
        clearInterval(timerId);
        clearInterval(moleTimerId);
        alert(`Game over! Your final score is ${score}`);
    }
}

// Start the game
function startGame() {
    moveMole();
    timerId = setInterval(countdown, 1000);
}

startGame();
