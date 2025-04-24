'use strict';

const gameLevelAudio = new Audio('audio/game-level.wav');
document.addEventListener('DOMContentLoaded', function () {
  gameLevelAudio.play();
});

let sound = gameLevelAudio.play();

const btnStart = document.querySelector('.btn--start');
const btnGuide = document.querySelector('.btn--guide');
const btnSound = document.querySelector('.btn--sound');

btnStart.addEventListener('click', function () {
  location.href = 'default.html';
});

btnSound.addEventListener('click', function () {
  if (sound) {
    sound = gameLevelAudio.pause();
  } else {
    sound = gameLevelAudio.play();
  }
});

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const times = document.querySelector('.times');

btnGuide.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

times.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});
