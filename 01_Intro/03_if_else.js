// Using If/else Statements
/* if/else structure
if() {

} else {

} */

//Example 1
const age = 15;

if (age >= 18) {
  console.log("Sarah can apply for her driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah has to wait for ${yearsLeft} years, Sorry!!`);
}

//Example 2
const birthYear = 1995;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

/* coding challenge */

// const massmark = 78,
// heightmark = 1.69,
// massjohn = 92,
// heightjohn = 1.95;

const massmark = 95,
  heightmark = 1.88,
  massjohn = 85,
  heightjohn = 1.76;

const BMIMark = massmark / heightmark ** 2;
const BMIJohn = massjohn / (heightjohn * heightjohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
