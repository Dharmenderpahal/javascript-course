'use strict';

// PART 1

/*

const airline = 'UDAAN Air India';
const plane = 'A320';

//character of a string at a certain position
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

//lenth property on strings
console.log(airline.length);
console.log('B737'.length);

//methods
console.log(airline.indexOf('r')); //position of a letter
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('India')); //used to extract parts of a string for slice method

//slice method
console.log(airline.slice(4)); //the no. 4 here is the begin parametre from wherre to start slicing the string
console.log(airline.slice(6, 9));

console.log(airline.slice(0, airline.indexOf(' '))); // slicing first word without knowing the string
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//example 
const checkMddleSeat = function (seat) {
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') {
        console.log('You got the Middel Seat');
    } else {
        console.log('Yay! you got the Window seat');
    }
};

checkMddleSeat('11C');
checkMddleSeat('16E');
checkMddleSeat('3B');

console.log(new String('Atharv'));
console.log(typeof new String('Atharv'));

*/

/*

// PART 2
const airline = 'UDAAN Air India';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//FIX CAPITALISAION IN NAME
const passenger = 'aThaRv'; //Atharv
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

//Comparing emails
const email = 'hello@atharv.in';
const loginEmail = '  Hello@Atharv.In \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); //.trim is used to remove spaces

//or 

const noramalizedEmail = loginEmail.toLowerCase().trim();
console.log(noramalizedEmail);

console.log(email === noramalizedEmail);

//replace parts of a string REPLACING
const priceGB ='288,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

//replacing words
const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

//Boleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Aib'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW Airbus family');
};

//practice exercise
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun') || baggage.includes('lighter')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome aboard!');
    }
};

checkBaggage('I have a Laptop, some Food and a pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a gun for protection');

*/

// Part 3

//split & join
console.log('a+very+nice+string'.split('+'));
console.log('Atharv Pahal'.split(' '));

const [firstName, lastName] = 'Atharv Pahal'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capName = function(name) {
    const names = name.split(' ');
    const nameUpper = [];

    for(const n of names) {
        // nameUpper.push(n[0].toUpperCase() + n.slice(1));
        //or we can
        nameUpper.push(n.replace(n[0], n[0].toUpperCase()));

    }
    
    console.log(nameUpper.join(' '));
};

capName('jessica ann smith davis');
capName('atharv pahal');

//padding
const message = 'Go to Gate no. 25';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Atharv Pahal'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
    const str = number + ''; //or String(number)
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};

console.log(maskCreditCard(326412545689));
console.log(maskCreditCard(2956647812649821));
console.log(maskCreditCard(254321542652153498756n));

//repeat
const message2 = 'Bad Weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function(n) {
    console.log(`There are ${n} planes in line ${'^'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);