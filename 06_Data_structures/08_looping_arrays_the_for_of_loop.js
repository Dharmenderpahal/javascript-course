'use strict';

const restaurant = {
    name: 'classico Italiano',
    location:'Via Angelo Tavanti 23, Firenzez, Italy',
    categories:['Italian', 'Pizzaria', 'Vegetarian', 'Organic'],
    starterMenu:['Foccacia', 'Brushchetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu:['Pizza', 'Pasta', 'Risotto'],
    
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
          open: 0, // Open 24 hours
          close: 24,
        },
    },

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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// thr for of loop
for (const item of menu) console.log(item);

//using old method
for (const item of menu.entries()) {
    console.log(`${item[0] +1}: ${item[1]}`);
};

//Or
//using destructuring

for (const [i, el] of menu.entries()) {
    console.log(`${i +1}: ${el}`);
};

//////////////////////////////////
// OPTIONAL CHAINING

console.log('----OPTIONAL CHAINING----');

//WITHOUT OPTIONAL CHAINING
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//with optional chaining(?.)
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//example

const days = ['mon', 'tue','wed','thu','fri','sat','sun'];

for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`on ${day}, we open at ${open}`);
};

//methods
console.log(restaurant.order?.(0, 1) ?? 'Method doesn\'t exists');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method doesn\'t exists');

//arrays
const users = [{name: 'Atharv', email: 'hello@atharv.io' }];

console.log(users[0]?.name ?? 'User array empty');