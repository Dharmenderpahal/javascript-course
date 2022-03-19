// type conversion is something which we convert manually

// converting string into number

const birthYear = "1991";
console.log(Number(birthYear), birthYear);
console.log(Number(birthYear) + 18);

//if you try to convert a string(text) into number you will get error NaN(Not a Number) for e.g
console.log(Number("Atharv"));

// type Coercion
// type coercion is when javascript automatically convert something behind the scenes, which is hidden from us
console.log("I am " + 26 + " years old.");
console.log("23" - "10" - 3);
console.log("23" * "2");

// 6 falsy values: 0, '', undefined, null, NaN, false

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean("Atharv"));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log("YAY! Height is defiened");
} else {
  console.log("Height is Undefined");
}
