"use strict";

/*
function logger() {
  console.log("My name is Sulayman");
}

logger();

function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 1));
console.log(fruitProcessor(2, 5));
*/

/*
//Function declaration

const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2025 - birthYear;
}

//function expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

const age2 = calcAge2(1990);

console.log(age1, age2);

// Arrow function
const calcAge3 = (birthYear) => 2025 - birthYear;
const age3 = calcAge3(1940);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearUntilRetirement(1991, "Sulayman"));
console.log(yearUntilRetirement(1995, "Adenike"));

*/

//Function Calling other Function
/*
const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitPrecessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitPrecessor(2, 3));
*/

// Function Review
/*
const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const myName = function (firstName) {
  return firstName;
};

const yearUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  const retired = age - 65;

  if (retirement > 0) {
    return `${myName(firstName)} retires in ${retirement} years.`;
  } else if (retirement === 0) {
    return `${myName(firstName)} retires this year ☹️`;
  } else {
    return `${myName(firstName)} retired ${retired} year ago 🥳`;
  }
};

console.log(yearUntilRetirement(1980, "Sulayman"));
*/

// Coding Chalenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently. 
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team). 
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins! 
Your tasks: 
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores 
2. Use the function to calculate the average for both teams 
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)" 
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2 
5. Ignore draws this time 
Test data: 
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 
Hints: 
§ To calculate average of 3 values, add them all together and divide by 3 
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores 
GOOD LUCK 
�
�
 😉
*/

// Coding Chalenge #1 Solution
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
    return;
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
    return;
  } else {
    console.log(`No team wins...`);
    return;
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// Test 2 Solution
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

//Array
/*
const fruits = ["Apple", "Banana", "Pineapple", "Mango", "Orange"];

const year = new Array(1990, 1995, 2000, 2005);

console.log(fruits[2], year[0]);
console.log(fruits.length, year.length);

fruits[3] = "Watermelon";
console.log(fruits);

// array can be stored inside another array
const firstName = "Sulayman";
const myDetails = [
  firstName,
  "Adebayo",
  2025 - 1995,
  "Developer",
  fruits,
  year,
];

console.log(myDetails);
console.log(myDetails.length);

//Exercise
const calcAge = (birthYear) => {
  return 2025 - birthYear;
};

const years = [1990, 1995, 2000, 2005];

const newAge1 = calcAge(year[0]);
const newAge2 = calcAge(year[2]);
const newAge3 = calcAge(year[3]);
console.log(newAge1, newAge2, newAge3);

const ages = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[years.length - 1]),
];
console.log(ages);
*/

/*
const fruits = ["Apple", "Banana", "Pineapple", "Mango", "Orange"];
//Add element to the end of the array
const newLength = fruits.push("Watermelon");
console.log(fruits);
console.log(newLength);

//Add element to the beginning of the array
fruits.unshift("Guava");
console.log(fruits);

//Remove the last element of the array
fruits.pop();
console.log(fruits);

//Remove the first element of the array
fruits.shift();
console.log(fruits);

//
console.log(fruits.indexOf("Pineapple"));
console.log(fruits.indexOf("Watermelon"));

//
console.log(fruits.includes("Pineapple"));
console.log(fruits.includes("Watermelon"));

const fruitToCheck = "Guava";

if (fruits.includes(fruitToCheck)) {
  console.log(`You have ${fruitToCheck} in your fruit basket`);
} else {
  console.log(`You don't have ${fruitToCheck} in your fruit basket`);
}
  */

//Coding Challenge #2
/* 
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%. 
Your tasks: 
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100 
2. And now let's use arrays! So create an array 'bills' containing the test data 
below 
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before 
4. Bonus: Create an array 'total' containing the total values, so the bill + tip 
Test data: 125, 555 and 44 
�
� 
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) 
GOOD LUCK 
�
*/

//Coding Challenge #2 Solution
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
console.log(calcTip());
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

//bonus
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);
*/

//Object
/*
const person = {
  firstname: "Sulayman",
  lastname: "Adebayo",
  age: 2025 - 1993,
  job: "Developer",
  colleagues: ["Talent", "Chibuike", "Victory"],
};

console.log(person);
// console.log(person.lastname); //The dot notation is simpler
console.log(person["job"]);
//the bracket notation can take expression, for example
const namekey = "name";
console.log(person["first" + namekey]);
console.log(person["last" + namekey]);

const interestedIn = prompt(
  "What do you want to know about this person? Choose between firstname, lastname, age,job, and colleagues"
);

// console.log(person[interestedIn]);

if (person[interestedIn]) {
  console.log(`${interestedIn} = ${person[interestedIn]}`);
} else {
  console.log(
    "Wrong request! Choose between firstname, lastname, age, job, and colleagues"
  );
}

person.location = "Nigeria";
person["github"] = "S-Man129";
console.log(person);

//Challenge
console.log(
  `${person.firstname} has ${person.colleagues.length} colleagues, and his best colleague is ${person.colleagues[0]}`
);
*/

/*
const person = {
  firstname: "Sulayman",
  lastname: "Adebayo",
  birthYear: 1993,
  job: "Developer",
  colleagues: ["Talent", "Chibuike", "Victory"],
  hasDriversLicense: false,

  //   calcAge: function (birthYear) {
  //     return 2025 - this.birthYear;
  //   },

  calcAge: function () {
    // console.log(this);
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstname} is a ${this.age} year old ${
      this.job
    }, and he has a ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

person.calcAge();
person.getSummary();
// console.log(person);
console.log(person.age);
console.log(person.getSummary());
*/

// Coding Challenge #3
/** 
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter) 
Your tasks: 
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith) 
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method 
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!" 
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall. 
GOOD LUCK 
�
*/

// Coding Challenge #3 Solution
/*
const mark = {
  firstname: "Mark",
  lastname: "Miller",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  firstname: "John",
  lastname: "Smith",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

console.log(
  markBMI > johnBMI
    ? `${mark.firstname}'s BMI (${markBMI}) is higher than ${john.firstname}'s (${johnBMI})`
    : `${john.firstname}'s BMI (${johnBMI}) is higher than ${mark.firstname}'s (${markBMI})`
);
*/

///////////////////////////////////////
// For Loop: for loop keeps running while coindition is TRUE
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep}`);
}
*/

/*
const person2 = [
  "Sulayman",
  "Adebayo",
  2025 - 1997,
  "developer",
  ["talent", "Chibuike", "victory"],
  true,
];

const types = [];

for (let i = 0; i < person2.length; i++) {
  // Reading from person2 Array
  //   console.log(person2[i], typeof person2[i]);

  //Filling types array
  //   types[i] = typeof person2[i];
  types.push(typeof person2[i]);
}

console.log(types);

const year = [1997, 2000, 2010, 2020, 2025];
const ages = [];

for (let i = 0; i < year.length; i++) {
  ages.push(2025 - year[i]);
}

console.log(ages);
*/

// Continue and break
/*
console.log("===ONLY STRINGS===");
for (let i = 0; i < person2.length; i++) {
  if (typeof person2[i] !== "string") continue;

  console.log(person2[i], typeof person2[i]);
}

console.log("===BREAK WITH NUMBERS===");
for (let i = 0; i < person2.length; i++) {
  if (typeof person2[i] === "number") break;

  console.log(person2[i], typeof person2[i]);
}

*/

const person3 = [
  "Sulayman",
  "Adebayo",
  2025 - 1997,
  "developer",
  ["talent", "Chibuike", "victory"],
  true,
];

for (let i = person3.length - 1; i >= 0; i--) {
  //   console.log(i, person3[i]);
}

//Loops in loop

for (let exercise = 1; exercise < 4; exercise++) {
  //   console.log(`=== Starting Exercise ${exercise} ===`);

  for (let rep = 1; rep < 6; rep++) {
    // console.log(`Lifting weight repetition ${rep + 0} of 5 🏋️`);
  }
}

// for (let i = 1; i <= 12; i++) {
//   for (let j = 1; j <= 12; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }
/*

// the WHILE loop

let rep = 1;

while (rep <= 10) {
  //   console.log(`Lifting weight repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

// Note: math.random function
// Always returns a number between 0 (inclusive) and 1 (exclusive).

// This means it can be 0, 0.5, 0.9999..., etc.

// But never exactly 1.

// Math.random() * 6
// This gives a number from 0 (inclusive) to 5.999... (exclusive).

// So the result will never reach 6.
*/

///////////////////////////////
//Coding Challenge #4
/*




*/

//Coding Challenge #4 Solution

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
