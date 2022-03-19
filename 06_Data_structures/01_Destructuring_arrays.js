'use strict';

const restaurant = {
    name: 'classico Italiano',
    location:'Via Angelo Tavanti 23, Firenzez, Italy',
    categories:['Italian', 'Pizzaria', 'Vegetarian', 'Organic'],
    starterMenu:['Foccacia', 'Brushchetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu:['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2, 4, 7];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, ,secondary] = restaurant.categories;
console.log(main,  secondary);

// Switching Variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//netsed array destructuring
const nested = [1, 3, [6, 9]];
// const [i, ,j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i,j,k);

//default values
const [p=1, q=1, r=1] = [4, 5];
console.log(p,q,r);