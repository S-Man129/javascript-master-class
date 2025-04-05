/*
// let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

// console.log(40 + 8 + 23 - 5);

let firstName = "Sulayman";

console.log(firstName);

let person = "Sulayman";
let age = 23;
let PI = 3.142;

console.log(person + " is " + age + " years old");

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob, myCurrentJob);


// Data types

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
// console.log(typeof true);
// console.log(typeof 129);
// console.log(typeof "Sulayman");

let year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(year);

console.log(typeof null);


// Variable Declaration

let age = 30;
age = 31;

const birthYear = 1997;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";
*/

//Operators

// Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter). 
Your tasks: 
1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMIs using the formula (you can even implement both 
versions) 
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John. 
Test data: 
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall. 
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall. 
GOOD LUCK 
�



// Coding Challenge #1 - Solution
const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
*/

// String and Template Literals
/*
const name = "Sulayman";
const job = "teacher";
const birthYear = 1997;
const year = 2037;

const jonas =
  "I'm " + name + ", a " + (year - birthYear) + " year old " + job + "!"; // String Concatenation
console.log(jonas);

const jonasNew = `I'm ${name}, a ${year - birthYear} year old ${job}!`; // Template Literals - uses backticks `{text}`
console.log(jonasNew);

console.log(`Just a regular string...`);
console.log("Just a regular string...");

console.log(
  "String with \n\
   multiple \n\
   lines"
); // Escape Sequences - \n for new line, \t for tab, \" for double quote, \\ for backslash

console.log(`String 
    multiple 
    lines`); // Multi-line strings with backticks
*/

// If/Else Statements
/*
const age = 17;

if (age >= 18) {
  console.log("Sulayman can start driving license 🚗");
} else {
  const yearLeft = 18 - age;
  console.log(`Sulayman is too young. Wait another ${yearLeft} years 😏`);
}

const birthYear = 1997;
let century;
if (birthYear <= 2000) {
  century = "20th";
} else {
  century = "21st";
}
console.log(`Sulayman is born in the ${century} century`);

*/

// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it. 
Your tasks: 
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's 
BMI (28.3) is higher than John's (23.9)!" 
Hint: Use an if/else statement 
�
�
 GOOD LUCK 
�
*/

// Coding Challenge #2 - Solution
/*
const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher that John's BMI (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher that Mark's BMI (${markBMI})`);
}
*/

// Type Conversion and Coercion
/*
//Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Sulayman")); //NaN - Not a Number
console.log(typeof NaN);

console.log(String(23), 23); //converting number to string

// type coercion
console.log("I am " + 23 + " years old"); //JS automatically converts number i.e 23 to string.
console.log("23" - "10" - 3); //JS automatically converts string i.e "23" to number. so "23" - "10" = 13 - 3 = 10
console.log("23" + "10" + 3); // this will give "23103"
console.log("23" * "2"); // this will give 46
console.log("23" / "2"); // this will give 11.5

// test
let n = "1" + 1; // "11
n = n - 1; // 10
console.log(n);
*/

// Type conversion to boolean
// 5 falsy values : 0, "", undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Sulayman"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  // Note that 0 is a falsy value, so the else block will run.
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  // height is undefined. So the else block will run
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

// Equality Operators === vs ==
/*
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)"); // strict equality operator
if (age == 18) console.log("You just became an adult :D (loose)"); // loose equality operator

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 69) {
  console.log("Cool! 69 is an amazing number!");
} else {
  console.log("Number is not 23 or 69");
}
//equality operators are not the same as assignment operatrors. === is strict equality operator and == is loose equality operator.
*/

//Logical Operators
/*
const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);

console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}

const isTired = false; // C
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}
*/

// Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy! 
Your tasks: 
1. Calculate the average score for each team, using the test data below 
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score) 
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks 
�
� 
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy 
Test data: 
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 
GOOD LUCK 
�
*/

//coding challenge #3 - solution

// const teamDolphins = (96 + 108 + 89) / 3;
// const teamKoalas = (88 + 91 + 110) / 3;
// console.log(teamDolphins, teamKoalas);

// if (teamDolphins > teamKoalas) {
//   console.log("Team Dolphins win the trophy");
// } else if (teamKoalas > teamDolphins) {
//   console.log("Team Koalas win the trophy");
// } else if (teamDolphins === teamKoalas) {
//   console.log("It's a draw");
// }

//Bonus 1 and 2
/*
const teamDolphins = (97 + 112 + 90) / 3;
const teamKoalas = (109 + 95 + 86) / 3;
console.log(`Bonus scores ${teamDolphins}, ${teamKoalas}`);

if (teamDolphins > teamKoalas && teamDolphins >= 100) {
  console.log("Team Dolphins win the trophy");
} else if (teamKoalas > teamDolphins && teamKoalas >= 100) {
  console.log("Team Koalas win the trophy");
} else if (
  teamDolphins === teamKoalas &&
  teamDolphins >= 100 &&
  teamKoalas >= 100
) {
  console.log("It's a draw");
} else {
  console.log("No team wins the trophy 😌");
}
  */

// Swithch Statement

// const day = "thursday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy your weekend :D");
// } else {
//   console.lof("Not a valid day!");
// }

// Conditional Ternary operator
/*
const age = 19;

// age >= 25 ? console.log("You are an adult") : console.log("You are a child");

const drink = age >= 18 ? "Wine 🍷" : "Water 💧";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "Wine 🍷" : "Water 💧"}`);
*/

// Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%. 
Your tasks: 
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement 
�
� (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!) 
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25” 
Test data: 
§ Data 1: Test for bill values 275, 40 and 430 
Hints: 
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
§ Value X is between 50 and 300, if it's >= 50 && <= 300 
GOOD LUCK 
�
*/

// Coding Challenge #4 Solution

const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const finalValue = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${finalValue}`
);
