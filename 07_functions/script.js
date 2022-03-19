"use strict";

/*

const bookings = [];

const createBooking = function (
    flightNum,
    numPassaengers = 1, //ES6 setting default parameter
    price = 199 * numPassaengers,
) {
    //ES5 setting default parameter
    // numPassaengers = numPassaengers || 1;
    // price = price || 199 * numPassaengers;

    const booking = {
        flightNum,
        numPassaengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 3);
createBooking('LH123', 5);

createBooking('LH123', undefined ,5);  //skipping a default parameter with undefined

*/

/*

const flight = 'LH567';
const atharv = {
    name: 'Atharv Pahal',
    passport: 665472156894,
};

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 665472156894) {
        alert('Checked In');
    } else {
        alert('Wrong Passport');
    }
};

// checkIn(flight, atharv);
// console.log(flight);
// console.log(atharv);

//is the same as doing...
// const flightNum = flight;
// const passenger = atharv;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(atharv);
checkIn(flight, atharv);

*/

/*
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//HIGHER ORDER FUNCTIONS
const transformer = function(str, fn) {
    console.log(`original string: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time 
const high5 = function() {
    console.log('Hey!');
};
document.body.addEventListener('click', high5);

['Atharv', 'Martha', 'Catilina'].forEach(high5);

*/

/*

// FUNCTIONS RETURNING FUNCTIONS

const greet = function (greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
};

const greeterHey = greet('Hey');
greeterHey('Atharv');
greeterHey('Jonas');

//or
greet('Hello')('Atharv');

//Challenge: convert above fn to arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Love');

*/

/*

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(487, 'Atharv Pahal');
lufthansa.book(238, 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

//does not work
// book(25, 'Sarah Williams');

//Call Method
book.call(eurowings, 25, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 27, 'Marry Cooper');
console.log(lufthansa);

const airIndia = {
    airline: 'Air India',
    iataCode: 'AI',
    bookings: [],
};

book.call(airIndia, 26, 'Nat');

//Apply Method
const flightData = [584, 'Pikachu'];
book.apply(airIndia, flightData);
console.log(airIndia);

book.call(eurowings, ...flightData);

///////////////////////////////////////////
//Bind Method
//book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookAI = book.bind(airIndia);
const bookLH = book.bind(lufthansa);

bookEW(34, 'Harvey Dent');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Atharv Pahal');

//With Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(200));
console.log(addVAT(25));

//challenge for previously learned
const addTaxRate = function(rate){
    return function(value) {
        return value + value * 0.23;
    }
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));
console.log(addVAT2(25));

*/

/////////////////////////////////
//LOOK AT CHALLENGE 1 NOW THEN AHEAD

//Immediatly invoked function expressions(IIFE)
//normal function
const runOnce = function () {
  console.log("This function will run normally");
};

runOnce();

//IIFE
(function () {
  console.log("This function will not run again");
})();

(() => console.log("This function will Also never run again"))();

//CLOSURES

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

//Exampe 1
let f;

const g = function () {
  const a = 25;
  f = function () {
    console.log(a * 3);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//re-assigning f functon
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

////////////////////////////
//CODING CHALLENGE 2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
