'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

///////////////////////////
// My Raw data

// ES6 Enhanced Object Literals
// 3)

const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open for 24 hours
    close: 24,
  },
  [`day-${5 + 2}`]: {
    open: 0, // Open for 24 hours
    close: 24,
  },
};

// console.log(openingHours);

const restaurant = {
  name: 'Sulayman Adebayo',
  location: 'Abuja, Lagos, Port-Harcourt, Osun, Oyo, Benue',
  categories: ['Local', 'Continental', 'Vegetarian', 'Foreign'],
  starterMenu: ['Gizdodo', 'Bruschetta', 'Garlic Bread', 'Salad'],
  mainMenu: ['Pizza', 'Fried-Rice', 'Jollof'],

  // ES6 enhanced object literals
  // 1)
  openingHours,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // 2)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '18:40',
    address,
  }) {
    console.log(
      `Order received! Your Order ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} would be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Your pasta with ingredient ${ing1}, ${ing2} and ${ing3} is ready`
    );
  },
  pizzaIngredient: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

/////////////////////////////////
// Coding Challenge #3
/*
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time). 
Your tasks: 
1. Create an array 'events' of the different game events that happened (no 
duplicates) 
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log. 
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes) 
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this: 
[FIRST HALF] 17: GOAL
⚽
 GOOD LUCK 
*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow Card'],
  [69, '🔴 Red Card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow Card'],
]);

// console.log(gameEvents);

// Coding Challenge #3 - Solution
// 1)
const events = [...new Set(gameEvents.values())];
console.log(events);

//2)
gameEvents.delete(64);
console.log(gameEvents);

// 3)
let sum = 0;
const gameKeys = gameEvents.keys();
for (const add of gameKeys) sum += add;
// console.log(sum);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
// console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4)
for (const [min, event] of gameEvents) {
  // console.log(game.values);
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

////////////////////////////////
// MAP Data Structure

/*
const map = new Map();
map.set('name', 'Sulayman Adebayo');
map.set(1, 'Maryam');

console.log(map.get('name'));
map
  .set('food', ['rice', 'beans', 'salad'])
  .set(true, 'We are open')
  .set(false, 'We are closed')
  .set('open', 11)
  .set('close', 22);

const time = 23;
console.log(map.get(time > map.get('open') && time < map.get('close')));
// map.clear();
map.set(document.querySelector('h1'), 'Main heading');
console.log(map);

console.log(map.has('food'));

// Map Iteration
const question = new Map([
  ['question', 'What is the best programming language in 2025?'],
  [1, 'Java'],
  [2, 'C'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question);

console.log(Object.entries(openingHours));

const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);

// Looping through a Map
console.log(question.get('question1'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your Answer'));
const answer = 3;
// const result =
//   question.get('correct') === answer ? question.get(true) : question.get(false);
// console.log(result);
console.log(question.get(question.get('correct') === answer));

// Converting map to array
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

///////////////////////////
// SET - Set is collection of unique values and does not have duplicate
/*
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Risotto',
  'Pizza',
  'Pasta',
  'Risotto',
]);

console.log(orderSet);
console.log(new Set('Sulayman'));

orderSet.add('Garlic Bread');
console.log(orderSet.has('Risotto'));
console.log(orderSet.has('Spaghetti'));
orderSet.delete('Pizza');
// orderSet.clear();
console.log(orderSet);

// Sets are iterables
for (const order of orderSet) console.log(order);

//Example
const staff = ['waiter', 'chef', 'manager', 'waiter', 'chef', 'waiter'];
console.log(staff);

// Conveting a set to an array, using the spread operator
// const uniqueStaff = new Set(staff);
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);
*/

//////////////////////////////////////
// More Operations to make sets useful!
/*
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection: ', commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union :', italianMexicanFusion);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log(uniqueMexicanFoods);

const uniqueitalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueitalianAndMexicanFoods);

console.log(italianFoods.isSupersetOf(mexicanFoods));
*/

/*
///////////////////////
// Looping Object, Object keys, values and Entries
// Property NAMES
const properties = Object.keys(openingHours);

let openStr = `We open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire Object: Entries
const entries = Object.entries(openingHours);

for (const [day, { open, close }] of entries) {
  console.log(
    `On ${day}, we open at ${open} and closes at ${close} which is just ${
      close - open
    } hours`
  );
}

*/

//////////////////////////////
// Challenge #2
/* 
Let's continue with our football betting app! Keep using the 'game' variable from 
before. 
Your tasks: 
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski") 
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember) 
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
Odd of victory Bayern Munich: 1.33 
Odd of draw: 3.25 
Odd of victory Borrussia Dortmund: 6.5 
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names 
�
� 
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this: 
{ 
} 
Gnarby: 1, 
Hummels: 1, 
Lewandowski: 2 
GOOD LUCK 
�


//Coding Challenge #2 - Solution
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.)
const gameScored = game.scored;
for (const [i, player] of gameScored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.)
let average = 0;
const gameOdds = Object.values(game.odds);
for (const odd of gameOdds) average += odd;
average /= gameOdds.length;
console.log(`Odds average = ${average}`);

// 3.)

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? `draw:` : `victory ${game[team]}:`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// 4.)
const scorers = {};

for (const player of game.scored) {
  scorers[player] = (scorers[player] || 0) + 1;
}
console.log(scorers);
*/

/*
/////////////////////////////
// OPTIONAL CHAINING (?) - checking if an element exist
// => instead...of
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon);

// we can do this using optional chaining
// console.log(restaurant.openingHours?.open);

const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 8;
  const close = restaurant.openingHours[day]?.close ?? 23;
  console.log(`One ${day} We open at ${open} till ${close}`);
}

// Optional chaining for - on method
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRice?.(0, 1) ?? 'Method does not exist');

// Optional chaining for - on Arrays
const user = [{ username: 'Sulayman' }, { email: 'example@mail.com' }];
console.log(user[0]?.username);
console.log(user[1]?.email);
*/

/////////////////////////////
// Array for of loop
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) console.log(`${i + 1} : ${el}`);
*/

////////////////////////////
// Coding Challenge #1
/*
We're building a football betting app (soccer for my American friends 
�
�)! 
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data. 
Your tasks: 
1. Create one player array for each team (variables 'players1' and 
'players2') 
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players 
3. Create an array 'allPlayers' containing all players of both teams (22 
players) 
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic' 
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2') 
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in) 
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator. 
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1)
const [players1, players2] = game.players;
// const players1 = game.players[0];
// const players2 = game.players[1];
console.log(players1, players2);

//2)
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5)
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6)
function printGoals(...player) {
  let goalCount = {};
  player.forEach(player => {
    goalCount[player] = (goalCount[player] || 0) + 1;
  });

  for (const player in goalCount) {
    console.log(`${player} : scored ${goalCount[player]} goal(s)`);
  }
}

printGoals(...game.scored);

// 7.)
team1 < team2 && console.log('Team 1 is more likely to win the game');
team2 < team1 && console.log('Team 2 is more likely to  win the game');
*/

/*
// 1.)
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.)
const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

// 3.)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.)
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6.)
const printGoals = function (...players) {
  const goalCount = {};
  players.forEach(player => {
    goalCount[player] = (goalCount[player] || 0) + 1;
    // console.log(goalCount);
  });
  // console.log(`${players.length} goals were scored in total`);

  //print each player with their current goal count
  for (const player in goalCount) {
    console.log(`${player} : ${goalCount[player]} goals(s)`);
  }
};

// console.log(game.players);
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(['Davies', 'Muller', 'Lewandowski', 'Kimmich']);
printGoals(...game.scored);

// 7.)
team1 < team2 && console.log('Team 1 is more likely to win the game');

team1 > team2 && console.log('Team 2 is more likely to win the game');
*/

/*
restaurant.orderDelivery({
  time: '20:30',
  address: '5th Avenue, Tai-Solarin, Gwarimpa, Abuja',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Zone 4, Obasanjo road, Dutse-Baupma',
  // time: '18:40',
  // mainIndex: 1,
  starterIndex: 3,
});
*/
/*
//////////////////////////////
// Logical Assignment Operators
const rest1 = {
  name: 'thePlace',
  // guestCapacity: 30,
  guestCapacity: 0,
};

const rest2 = {
  name: 'Domino',
  // guestCapacity: 30,
  owner: 'Jack Barrow',
};

// OR-Assignment operator
// rest1.guestCapacity = rest1.guestCapacity || 10;
// rest2.guestCapacity = rest2.guestCapacity || 10;

// rest1.guestCapacity ||= 10; Logical OR-Assignment operator
// rest2.guestCapacity ||= 10; Logical OR-Assignment operator

// Nulllish Assignment Operator (Null or undefined)
// rest1.guestCapacity ??= 10;
// rest2.guestCapacity ??= 10;

// Logical AND(&&)-Assignment Operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

/*
//////////////////////////
// REST PATTERN and PARAMETERS
// 1) Destructuring
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 'segun'];
console.log(a, b, others);
console.log(...others); //Spread Operator

const [pizza, friedRice, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, friedRice, otherFoods);

// Objects - Rest pattern
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Function - Rest Pattern parameter
const add = function (...number) {
  // console.log(number);
  let sum = 0;
  for (let i = 0; i < number.length; i++) sum += number[i];
  console.log(sum);
};
add(2, 4);
add(1, 3, 5, 7, 9);
add(2, 4, 6, 8, 10);

const x = [23, 25, 27];
console.log(...x);
add(...x);

restaurant.pizzaIngredient(
  'mushrooms',
  'spinnach',
  'Potato',
  'Tomato',
  'Carrot'
);
*/

/////////////////////////
//Destructuring Array
/*
const arr = [2, 4, 6];
const [a, b, c] = arr;
console.log(a, b, c);

let [first, , , second] = restaurant.categories;
console.log(first, second);

//Switching variables
[first, second] = [second, first];
console.log(first, second);

// Receive 2 return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//Nested destructuring
const nested = [1, 2, [5, 6]];
// console.log(nested);

const [p, , [r, s]] = nested;
console.log(p, r, s);

//Default values
const [i = 1, j = 1, k = 1] = [7, 9];
console.log(i, j, k);
*/

/*
///////////////////////////
//Destructuring Object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Assigning variable to object
const { name: newName, openingHours: hours, categories: tags } = restaurant;
console.log(newName, hours, tags);

//Object: Default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 17, c: 5 };
//{a,b} = obj; //Whenever you use a block, javascript thought you want to write a block expression. In destructing an object, you have to wrap it inside parenthesis
({ a, b } = obj);
console.log(a, b);

//Nested Object
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);

//Assigning new variables
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);
*/

/*
//////////////////////////
// Spread Operator (...)
const arr = [5, 6, 7];

const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(newBadArr);

const newGoodArr = [1, 2, ...arr];
console.log(newGoodArr);

// NOTE: The spread operator is a bit similar to destructuring.
// 1. It takes all the element in an array and does not create a new variable
// 2. It can only be use in places where we can otherwise write values seperated by comma's

const newMenu = [...restaurant.mainMenu, 'Porridge'];
// console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 Array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// The spread operators just doesn't works in arrays alone BUT it also works on iterables
// Iterables - are arrays, strings, maps, sets, but NOT Objects
const str = 'Sulayman';
const strLetters = [...str, ' ', 'A.'];
console.log(...str);
// NOTE: we can still only use the spread operator when building an array or when parsing value in to a function

// Real World example
const ingredient = [
  // prompt("Let's make pasta! ingredient 1"),
  // prompt('ingredient 2'),
  // prompt('ingredient 3'),
];

//restaurant.orderPasta(...ingredient);

// Objects - spread operator
const newRestaurant = { founder: 'Adebayo', ...restaurant, yearFounded: 1980 };
console.log(newRestaurant);

//copyObject
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Segun Adebayo';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
////////////////////
// Short Circuiting
console.log(3 || 'Sulayman'); //Short Circuting
console.log('Sulayman' || 3); //Short Circuting
console.log(0 || true);
console.log(undefined || null);

console.log('----- AND -----');
console.log(0 && 'Sulayman');
console.log(7 && 'Sulayman');
// if (('Hi' && 23 && null && 'Sulayman') === false) {
//   console.log(`Yes it is false`);
// } else {
//   console.log(`No it is not false`);
// }

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'pizza');
}

restaurant.numGuest = 0;
const guests = restaurant.numGuest || 25;
console.log(guests);

////////////////////
//Nullish coalescencing Operator
// It is an operator that was introduce in ES2020
// It work with nullish values and NOT falsy values
// Nullish: null and undefined (NOT 0 or '')

const guestCorrect = restaurant.numGuest ?? 25;
console.log(guestCorrect);
*/
