'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'classico Italiano',
  location:'Via Angelo Tavanti 23, Firenzez, Italy',
  categories:['Italian', 'Pizzaria', 'Vegetarian', 'Organic'],
  starterMenu:['Foccacia', 'Brushchetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu:['Pizza', 'Pasta', 'Risotto'],
  
  //Es6 enhanced object literals
  openingHours,

  order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Ordder Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
      console.log(`Here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};


//property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `

//looping over property names/keys
for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

//entire object ENTRIES
const entries = Object.entries(openingHours);
console.log(entries);

// for simple object only [key, value]
for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
};