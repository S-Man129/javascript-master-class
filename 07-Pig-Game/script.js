'use strict';

//////////////////////////
// START PAGE SCRIPT
document.addEventListener('DOMContentLoaded', function () {
  const gameLevelAudio = new Audio('audio/game-level.wav');

  // gameLevelAudio.play();
});
/////////////////////////
// MAIN GAME SCRIPT

let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
// score0El.textContent = 0;
// score1El.textContent = 0;

let player0EL = document.querySelector('.player--0');
let player1EL = document.querySelector('.player--1');

let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const btnHome = document.querySelector('.btn--home');

let diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');

let score, currentScore, currentPlayer, gamePlaying;

const resetGame = () => {
  score = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  gamePlaying = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  diceEl.classList.add('hidden');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
};
resetGame();

const switchPlayer = () => {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (gamePlaying) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (gamePlaying) {
    score[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      score[currentPlayer];

    if (score[currentPlayer] >= 100) {
      // Current player wins the game
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
      gamePlaying = false;
      // btnRoll.setAttribute('disabled', 'disabled');
      // btnHold.setAttribute('disabled', 'disabled');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', resetGame);
btnHome.addEventListener('click', function () {
  location.href = 'index.html';
});
