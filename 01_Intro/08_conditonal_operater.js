//similar to if/else statements but in a single line
// condition if then else
const age = 26;
age >= 18 ? console.log("I like to drink Beer") : console.log ("I like to drink water");

//Or 

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

// coding challenge

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`); // use (``)template literals not single quotes('')