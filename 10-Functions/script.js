'use strict';

//////////////////////////
// Default Parameters
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 3,
  price = 150 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
console.log(bookings);

createBooking('NI234');
createBooking('EA234', 6);
createBooking('FR234', 18);
createBooking('BY234', undefined, 250);
*/

/*
const flight = 'AIR290';
const segun = {
  name: 'Sulayman Adebayo',
  passport: 84647637392,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'NMA360';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 84647637392) {
    alert('checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, segun);

// console.log(flight);
// console.log(segun);

function newPassport(person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
  console.log(person.passport);
}

newPassport(segun);
checkIn(flight, segun);
*/

////////////////////////////
// Function calling another function

const oneWord = function (str) {
  return str.replace(/ /g, '-').toLowerCase();
};

const upperWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Highe-order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

transformer('JavaScript is the best', upperWord);

transformer('JavaScript is the best', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('🎮 Gaming time 🎮');
};

document.body.addEventListener('click', high5);
['sulayman', 'talent', 'chibuike'].forEach(high5);
