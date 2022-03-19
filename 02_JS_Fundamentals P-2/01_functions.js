"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive :D");
*/
/*
////////////////////////////////
//Functions
function logger() {
  console.log("My name is Atharv");
}

//calling / running / executing / invoking a function
logger();

// Function declaration (below)

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
// OR
console.log(fruitProcessor(3, 1));

function calcAge1(birthyear) {
  const age = 2038 - birthyear;
  return age;
}

const age1 = calcAge1(1995);
// console.log(age1);

//annonymous function is fn without a name
//function expression

const calcAge2 = function (birthyear) {
  return 2038 - birthyear;
};

const age2 = calcAge2(2000);
console.log(age1, age2);
*/
//////////////////////////////////////////
// ARROW FUNCTIONS
// birthyear => 2038 - birthyear;
/*
const calcAge3 = (birthyear) => 2038 - birthyear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntillRetirement = (birthyear, firstname) => {
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstname} retires in ${retirement} years`;
};

console.log(yearsUntillRetirement(1995, "Atharv"));
console.log(yearsUntillRetirement(2000, "Job"));
*/

////////////////////////////////////////
// Functions calling other functions
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

// CODING CHALLENGE

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5)); // to check average function only

//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinnner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins won the trophy (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas won the trophy ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log(`No team Wins`);
  }
};

checkWinnner(scoreDolphins, scoreKoalas);

checkWinnner(120, 272);

//TEST 2
// for test 2 we need to remove const variable from test 1 and replace it with let variable

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinnner(scoreDolphins, scoreKoalas);
