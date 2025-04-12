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
/*
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
*/
/////////////////////////////////
// Coding Challenge #1 -  Developer Skills & Editor Setup
/**
 Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..." 
Your tasks: 
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets. 
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems! 
Test data: 
§ Data 1: [17, 21, 23] 
§ Data 2: [12, 5, -5, 0, 4]
 */

// Coding challenge #1 - Solution
/*
// declare a function printForecast with parameter arr
const printForecast = function (arr) {
  // Loop through the array and print each value of the array
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

printForecast([12, 5, -5, 0, 4]);
*/
// Test 2
/*
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

printForecast([12, 5, -5, 0, 4]);
*/
///////////////////////////////////
// Coding Challenge #2
/*
    A TIME TRACKING APPLICATION FOR FREELANCERS

    Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
    1. Total hours worked
    2. Average daily hours
    3. The day with the most hours worked
    4. Number of days worked
    5. Whether the week was full-time (worked 35 hours or more)

    TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/
/*
let totalHoursWorked = 0;
let aveDailyHours;

const dailyWorkHours = function (week) {
  let max = week[0];
  for (let i = 0; i < week.length; i++) {
    totalHoursWorked += week[i];
    // console.log(week[i]);
    if (week[i] > max) max = week[i];
    if (week[i] !== 0) {
      let workedDays = week.length;
      console.log(workedDays);
    }
  }

  aveDailyHours = totalHoursWorked / week.length;
  console.log(totalHoursWorked, aveDailyHours, max);
};

dailyWorkHours([7.5, 8, 6.5, 0, 8.5, 4, 0]);
*/
function analyzeWorkWeek(dailyHours) {
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    throw new Error(
      'Input must be an array of exactly 7 numbers (one for each day of the week).'
    );
  }

  const dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const averageHours = +(totalHours / 7).toFixed(1);

  let maxHours = 0;
  let maxDayIndex = 0;
  let daysWorked = 0;

  dailyHours.forEach((hours, index) => {
    if (hours > maxHours) {
      maxHours = hours;
      maxDayIndex = index;
    }
    if (hours > 0) {
      daysWorked++;
    }
  });

  return {
    totalHours,
    averageHours,
    mostWorkedDay: dayNames[maxDayIndex],
    daysWorked,
    fullTime: totalHours >= 35,
  };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 5, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log(analysis);

const weeklyHours2 = [7.5, 8, 6.5, 0, 8.5];
const analysis2 = analyzeWorkWeek(weeklyHours2);
console.log(analysis2);
