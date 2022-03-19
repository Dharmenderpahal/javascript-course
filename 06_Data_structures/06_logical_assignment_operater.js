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

// introduced in ES2021

const restaurant1 = {
    name: 'capri',
    // numguests: 20,
    numguests: 0,
};

const restaurant2 = {
    name: 'La piazza',
    owner: 'Giovanni Rossi',
};

// restaurant1.numguests = restaurant1.numguests || 10;
// restaurant2.numguests = restaurant2.numguests || 10;

//with OR assignment operater
// restaurant1.numguests ||= 10; //same as line 55
// restaurant2.numguests ||= 10; // same as line 56

restaurant1.numguests ??= 10; 
restaurant2.numguests ??= 10;

// restaurant1.owner = restaurant1.owner && '<Anonymous>'
// restaurant2.owner = restaurant2.owner && '<Anonymous>'

restaurant1.owner &&= '<Anonymous>' // same as line 66
restaurant2.owner &&= '<Anonymous>' // line 67

console.log(restaurant1, restaurant2);