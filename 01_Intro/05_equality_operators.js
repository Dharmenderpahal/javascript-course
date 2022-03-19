const age = '18'; // '18'== 18 but not '18' === 18 
if (age === 18) console.log('You just became an adult!(strict)');

if (age == 18) console.log('You became an adult(loose)');

//const favorite = prompt('What is your favorite number');
//console.log(favorite);
//console.log(typeof favorite);

// to change string into number 
const favorite = Number(prompt('What is your favorite number'));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 25) {
    console.log('Cool! 25 is an amazing number')
} else if (favorite === 2) {
    console.log('2 is also a good number!')
} else {
    console.log ("Number is not '25' and '2'")
}

// for different use !== operator
if (favorite !== 25) console.log('Why not 25?');