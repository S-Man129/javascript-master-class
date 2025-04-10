'use strict';

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. keep in mind that sometimes there might be a sensor error."

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is a temperature amplitude? ANSWER: It is simply the difference between the highest and lowest temperatures in the array.
// - How to compute max and min temperatrure?
// - What is a sensor error? And What do do when one occur?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temperature array
// - Find min value in temperature array
// - Subtract min from max (amplitude) and return it
/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    let temp = temps[i];
    if (typeof temp !== 'number') continue;
    if (temp > max) max = temp;
    if (temp < min) min = temp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([5, 7, 8, 3, 10, 1]);
// calcTempAmplitude(temperature);

// Problem #2
// joining 2 arrays
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2); //concat 2 arrays
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    let temp = temps[i];
    if (typeof temp !== 'number') continue;
    if (temp > max) max = temp;
    if (temp < min) min = temp;
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTempAmplitudeNew([9, 5, 7, 3, 10], [8, 2, 4, 6, 1]));
*/

// Debugging
// A code to convert degree celcius to degree kelvin

const objectkelvin = {
  type: 'temperature',
  unit: 'celcius',
  // 3) FIX THE BUG
  // By using type conversion. converting prompt value into Number
  //   value: prompt('Degree in Celcius:'),
  value: Number(prompt('Degree in Celcius:')),
};

// 2) FIND THE BUG
console.table(objectkelvin);
// NOTE: That prompt will always return a string as a value

// debugger;
const convertKelvin = function (value) {
  const kelvin = value + 273;
  console.log(kelvin);
};

// 1) IDENTIFY THE BUG
convertKelvin(objectkelvin.value);

/////////////////////////////////
// Challenge #1
