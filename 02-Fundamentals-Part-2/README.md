# JavaScript Practice Code

## 1. Logger and Basic Function

```js
"use strict";

function logger() {
  console.log("My name is Sulayman");
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 1));
console.log(fruitProcessor(2, 5));
```

---

## 2. Function Declarations, Expressions & Arrow Functions

```js
// Function Declaration
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
  return 2025 - birthYear;
}

// Function Expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};
const age2 = calcAge2(1990);

console.log(age1, age2);

// Arrow Function
const calcAge3 = (birthYear) => 2025 - birthYear;
const age3 = calcAge3(1940);
console.log(age3);

// Arrow Function with Multiple Parameters
const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearUntilRetirement(1991, "Sulayman"));
console.log(yearUntilRetirement(1995, "Adenike"));
```

---

## 3. Function Calling Another Function

```js
const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitPrecessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
};

console.log(fruitPrecessor(2, 3));
```

---

## 4. Function Review with Conditions

```js
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
```

---

## 5. Coding Challenge #1: Gymnastics Score

```js
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
```

---

## 6. Arrays and Array Methods

```js
const fruits = ["Apple", "Banana", "Pineapple", "Mango", "Orange"];
const year = new Array(1990, 1995, 2000, 2005);

console.log(fruits[2], year[0]);
console.log(fruits.length, year.length);

fruits[3] = "Watermelon";
console.log(fruits);

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

// Exercise
const calcAge = (birthYear) => 2025 - birthYear;
const newAge1 = calcAge(year[0]);
const newAge2 = calcAge(year[2]);
const newAge3 = calcAge(year[3]);
console.log(newAge1, newAge2, newAge3);

const ages = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[year.length - 1]),
];
console.log(ages);
```

---

## 7. Array Methods Continued

```js
fruits.push("Watermelon");
fruits.unshift("Guava");
fruits.pop();
fruits.shift();

console.log(fruits.indexOf("Pineapple"));
console.log(fruits.includes("Pineapple"));

const fruitToCheck = "Guava";
if (fruits.includes(fruitToCheck)) {
  console.log(`You have ${fruitToCheck} in your fruit basket`);
} else {
  console.log(`You don't have ${fruitToCheck} in your fruit basket`);
}
```

---

## 8. Coding Challenge #2: Tip Calculator

```js
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(total);
```

---

## 9. Object Basics

```js
const person = {
  firstname: "Sulayman",
  lastname: "Adebayo",
  age: 2025 - 1993,
  job: "Developer",
  colleagues: ["Talent", "Chibuike", "Victory"],
};

console.log(person["job"]);

const namekey = "name";
console.log(person["first" + namekey]);

const interestedIn = prompt("What do you want to know about this person?");
if (person[interestedIn]) {
  console.log(`${interestedIn} = ${person[interestedIn]}`);
} else {
  console.log("Wrong request!");
}

person.location = "Nigeria";
person["github"] = "S-Man129";

console.log(
  `${person.firstname} has ${person.colleagues.length} colleagues, and his best colleague is ${person.colleagues[0]}`
);
```

---

## 10. Object Methods

```js
const person = {
  firstname: "Sulayman",
  lastname: "Adebayo",
  birthYear: 1993,
  job: "Developer",
  colleagues: ["Talent", "Chibuike", "Victory"],
  hasDriversLicense: false,

  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstname} is a ${this.age} year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(person.calcAge());
console.log(person.getSummary());
```

---
