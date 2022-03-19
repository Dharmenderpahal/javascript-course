// Boolean type is a logical type that can be only true or false
// value holds the actual data type
true;
console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);

//typeof operater
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 26);
console.log(typeof "Atharv");

javascriptIsFun = 'FUN!';
console.log(typeof javascriptIsFun);

//undefined types
let year;
console.log(year);
console.log(typeof year);


// coding challange

// test-1
/* const massmark = 78,
heightmark = 1.69,
massjohn = 92,
heightjohn = 1.95;

const BMIMark = massmark / heightmark ** 2;
const BMIJohn = massjohn / (heightjohn * heightjohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI); */ 

// Test-2
//comment out test-1 code since variables are defined with CONST otherwise it will show error
const massmark = 95,
heightmark = 1.88,
massjohn = 85,
heightjohn = 1.76;

const BMIMark = massmark / heightmark ** 2;
const BMIJohn = massjohn / (heightjohn * heightjohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);