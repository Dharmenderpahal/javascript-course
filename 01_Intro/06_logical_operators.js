// boolean logic

// && AND operator
// || OR operator
/* ! not operator */

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);

// can create a variable for condition if want
//const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) { 
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) { 
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...');
}

// coding challenge

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins won the match');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas won the match');
// } else if (scoreDolphins===scoreKoalas) {
//     console.log('Both wins the trophy!');
// }

//BONUS 1

const scoreDolphins = (97 + 112 + 101) / 3; // change avg to see diff results
const scoreKoalas = (109 + 95 + 123) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins won the match');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas won the match');
} else if (scoreDolphins===scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both wins the trophy!');
} else {
    console.log('No one wins the trophy');
}