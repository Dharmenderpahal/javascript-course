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

// Destructuring

// SPREAD, because on right side of =
const arr = [1,2 , ...[3, 4]];
console.log(arr);

//REST, because on left side of assignment(=)
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

// rest elemnents should always be the last element of an array
const [pizza, , rishotto, ...otherfood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, rishotto, otherfood);

//objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

//2) functions

const add = function(...numbers) {
    let sum = 0;
    for (let i = 0; i<numbers.length; i++)
    sum += numbers[i];
    console.log(sum);
};

add(2, 3);
add(2, 3, 6, 7);
add(2, 3, 5, 7, 9, 1, 6);

const x = [23, 4, 7];
add(...x);

restaurant.orderPizza('Cheese', 'onions', 'tomatao', 'spinach');

restaurant.orderPizza('cheese');