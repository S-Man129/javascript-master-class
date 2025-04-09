"use strict";
/**
 * JavaScript Fundamental 1
 */
// Challenge #1
/*
const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

//check which BMI is higher
console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI ? true : false;

console.log(markHigherBMI);

// Challenge #2

if (markBMI < johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}
*/

//Coding Challenge #3
/*
const scoreDolphin = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

console.log(`Dolphin = ${scoreDolphin}, Koalas = ${scoreKoalas}`);

// if (scoreDolphin > scoreKoalas) {
//   console.log("Team Dolphin Wins");
// } else if (scoreKoalas > scoreDolphin) {
//   console.log("Team Koalas Wins");
// } else if (scoreDolphin === scoreKoalas) {
//   console.log("It's a draw");
// }

// Bonus #1
/*
if (scoreDolphin >= 100 && scoreDolphin > scoreKoalas) {
  console.log("Team Dolphin Wins");
} else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphin) {
  console.log("Team Koalas Wins");
} else if (scoreDolphin === scoreKoalas) {
  console.log("It's a draw");
} else {
  console.log("No team wins the trophy");
}
*/

// Bonus #2
/*
if (scoreDolphin >= 100 && scoreDolphin > scoreKoalas) {
  console.log("Team Dolphin Wins");
} else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphin) {
  console.log("Team Koalas Wins");
} else if (
  scoreDolphin === scoreKoalas &&
  scoreDolphin >= 100 &&
  scoreKoalas >= 100
) {
  console.log("It's a draw");
} else {
  console.log("No team wins the trophy");
}
*/

// Coding Challenge #4
/*
let bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);
*/

/**
 * JavaScript Fundamental Part 2
 */
// Coding Challenge #1
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

let avgDolphins = calcAverage(85, 54, 41);
let avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolpins wins (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Dolpins wins (${avgKoalas} vs. ${avgDolphins})`);
  }
};

checkWinner(avgDolphins, avgKoalas);
*/

// Coding Challenge #2
/*
const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/

//Coding Challenge #3
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
      john.fullName
    }'s (${john.calcBMI()})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI})`
  );
}
*/

// Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);

// Challenge 4 - Bonus
const calcAverage = function (arr) {
  let sum = 0;
  let count = 0;
  while (count < arr.length) {
    sum += arr[count];
    count++;
    //   for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    //   }
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
