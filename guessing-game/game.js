const guessField = document.querySelector("#guess");
const guessLeftField = document.querySelector("#left");
const resultField = document.querySelector("#Result");
let high, low, play, numGuess;

function start() {
    high = 100;
    low = 1;
    play = true;
    numGuess = 10;
    resultField.textContent = "";
    guessLeftField.textContent = numGuess; 
    makeGuess(); 
}

function makeGuess() {
    if (numGuess > 0 && play) {
        let myGuess = Math.floor(Math.random() * (high - low + 1)) + low;
        guessField.innerHTML = `${myGuess}`;
        guessLeftField.innerHTML = `${numGuess}`;
        numGuess--;
    } else if (numGuess === 0) {
        endGame("I couldn't guess it! You win!");
    }
}

function higher() {
    if (play) {
        low = parseInt(guessField.innerHTML) + 1;
        if (low > high) {
            endGame("Conflicting input! Please start a new game.");
            return;
        }
        makeGuess();
    }
}

function lower() {
    if (play) {
        high = parseInt(guessField.innerHTML) - 1;
        if (low > high) {
            endGame("Conflicting input! Please start a new game.");
            return;
        }
        makeGuess();
    }
}

function correct() {
    if (play) {
        endGame(`I guessed it! Your number is ${guessField.innerHTML}.`);
    }
}

function endGame(message) {
    play = false;
    resultField.textContent = message;
}

document.getElementById("hi").addEventListener("click", higher);
document.getElementById("lo").addEventListener("click", lower);
document.querySelector("#correct").addEventListener("click", correct);
document.querySelector("#new").addEventListener("click", start);

start();
