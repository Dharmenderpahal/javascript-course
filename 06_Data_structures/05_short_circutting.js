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


console.log('----OR-----');
// logical operater use ANY data type, return any data type, short circuiting
//short circuiting in or( || ) operater - if the first operand is truthy here then the operand will not even be evaluated
console.log(5 || 'Atharv');
console.log('' || 'Atharv');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 25 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----AND----');
//short circuiting in AND( && ) operater - if the first operand is falsy here then the operand will not even be evaluated
console.log(0 && 'Atharv');
console.log(3 && 'Atharv');

console.log('hello' && 25 && null && 'Atharv');

//Practical Example
//without && operater
if (restaurant.orderPizza) {
    restaurant.orderPizza('Cheese', 'Mushrooms');
};

//with && operater
restaurant.orderPizza && restaurant.orderPizza('Cheese', 'Mushrooms');


///////////////////////////////////////
console.log('THE NULLISH COLESCING OPERATER(??)');
// introduced in 2020

restaurant.numGuestss = 0;

const guests = restaurant.numGuestss || 10;
console.log(guests);

//nullish values: null and undefined (NOT 0 and '')
const guestsCorrect = restaurant.numGuestss ?? 10;
console.log(guestsCorrect);