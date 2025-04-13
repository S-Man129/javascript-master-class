'use strict';
/*
console.log(document.querySelector('.message').textContent);
// Change the textContent of a DOM element
document.querySelector('.message').textContent = '🎉 Correct number';
// textContent is used to the content of an element
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;

console.log((document.querySelector('.guess').value = 12)); // NOTE: When targeting an input element , we use .value property to get the value of the input field.
*/

// let count = 0;
// const check = document
//   .querySelector('.check')
//   .addEventListener('click', function () {
//     count++;
//     if (count < 4) {
//       console.log('You clicked me bro!');
//     } else {
//       console.log('Bro stop clicking me, e don do!');
//     }
//   });

// Generate a random number between 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let number = document.querySelector('.number');

// let message = document.querySelector('.message');
// let us use a function for the message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

function disableCheck() {
  document.querySelector('.check').setAttribute('disabled', 'disabled');
}

let score = 20;
document.querySelector('.score').textContent = score;

let highscore = 0;

const check = document
  .querySelector('.check')
  .addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
      // message.textContent = '🚨 No number!';
      displayMessage('🚨 No number!');
    } else if (guess === secretNumber) {
      disableCheck();
      // message.textContent = '🎉 Correct guess';
      displayMessage('🎉 Correct guess');
      number.textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      number.style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      // message.textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too Low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
      score--;
      if (score > 0) {
        document.querySelector('.score').textContent = score;
      } else {
        // message.textContent = '💥 You lost the game';
        displayMessage('💥 You lost the game');
        document.querySelector('.score').textContent = 0;
        disableCheck();
      }
    }
  });

/////////////////////////
//Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK

const again = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.check').removeAttribute('disabled', 'disabled');
  });
