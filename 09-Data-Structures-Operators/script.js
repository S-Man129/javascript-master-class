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

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
};

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
