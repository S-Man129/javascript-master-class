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

const restaurant = {
  name: 'Sulayman Adebayo',
  location: 'Abuja, Lagos, Port-Harcourt, Osun, Oyo, Benue',
  categories: ['Local', 'Continental', 'Vegetarian', 'Foreign'],
  starterMenu: ['Gizdodo', 'Bruschetta', 'Garlic Bread', 'Salad'],
  mainMenu: ['Pizza', 'Fried-Rice', 'Jollof'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open for 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
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

console.log(rest1);
console.log(rest2);

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
