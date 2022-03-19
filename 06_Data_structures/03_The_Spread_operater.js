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
    }
};

// we can use the spread operater to basically expand an array into all its elements

const arr = [7, 8, 9];
//manually
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//using the spread operater
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// spread operater also help us to get elements out of arrays but the big difference is that the spread operater takes all the elements from the arrays and it also doesn't create new variables
// and as a consequence, we can only use it in places where we would otherwise write vlues seprated by commas.

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join to arrays and more 
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// spread operater works on all iterables(maps, ssets, arrays, strings but not objects)
const str = 'Atharv';
const letters = [...str, '', 'P'];
console.log(letters);

//pasta order real world example

const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
console.log(ingredients);

//without spread operater
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//with spread operater
restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = {foundedIn: 1988 , ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);