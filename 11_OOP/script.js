'use strict';

//Constructor functions
//arrow function dont work as a constructor function it doesnt have its own this keyword
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const atharv = new Person('Atharv', 1995);
console.log(atharv);

//1. New empty {} is created
//2. function is called, this = new {}
//3. new {} linked to prototype
//4. function automatically return  old {}

const ashish = new Person('Ashish', 1989);
console.log(ashish);

console.log(ashish instanceof Person);

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

atharv.calcAge();
ashish.calcAge();

console.log(atharv.__proto__);
console.log(atharv.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(atharv)); //true
console.log(Person.prototype.isPrototypeOf(ashish)); //true

Person.prototype.species = 'Homo Sapiens';
console.log(atharv.species, ashish.species);

console.log(atharv.hasOwnProperty('firstName'));
console.log(atharv.hasOwnProperty('species'));

console.log(atharv.__proto__);
// object.prototype is top of prototype chain
console.log(atharv.__proto__.__proto__);
console.log(atharv.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 5, 6, 7, 9, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
