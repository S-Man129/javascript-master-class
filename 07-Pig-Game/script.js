'use strict';

let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score0 = document.getElementById('score--0');
score0.textContent = 0;

let score1 = document.getElementById('score--1');
score1.textContent = 0;

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');
let diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');

let score = [0, 0];
let currentScore = 0;
let currentPlayer = 0;

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Roll dice function
btnRoll.addEventListener('click', function () {
  diceEl.classList.remove('hidden');
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${dice}.png`;

  // Add dice to current score

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  } else {
    //switch player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  score[currentPlayer] += currentScore;
  document.getElementById(`score--${currentPlayer}`).textContent =
    score[currentPlayer];
  //   switchPlayer();

  if (score[currentPlayer] >= 20) {
    // currentPlayer is the winner
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.remove('player--active');
  } else {
    switchPlayer();
  }
});
