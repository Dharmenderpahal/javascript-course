// arrays are data structures in js
//arrays are like big containers in which we can store multiple variables and then reference them later
/*
const friends = ["Mike", "Steve", "Peter"];
console.log(friends);

//or

//const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); // .lenth property shows number of elements
console.log(friends[friends.length - 2]);

// insert/change/mutate a new element
friends[3] = "Jay"; // insert
friends[2] = "Pi"; //change an element
console.log(friends);

// friends = ["Bob", "Biswas"];

const firstName = "Atharv";
const atharv = [firstName, "Pahal", 2030 - 1995, "Teacher", friends];
console.log(atharv);
console.log(atharv.length);

// Exercise
const calcAge = function (birthyear) {
  return 2030 - birthyear;
};

const years = [1995, 1967, 2000, 2009, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

//OR

const ages = [
  calcAge(years[0]),
  calcAge(years[2]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/
/*
const friends = ["Ravi", "Sumit", "Bahaman"];

//add element
// .push adds an element in the end of array
const newLenth = friends.push("Ankit");
console.log(friends);

//.unshift adds an element in begining of arary
friends.unshift("Jay");
console.log(friends);

//Remove element
friends.pop(); // last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first element removed
console.log(friends);

console.log(friends.indexOf("Sumit"));
console.log(friends.indexOf("Bahman"));

friends.push(25);
console.log(friends.includes("Sumit"));
console.log(friends.includes("Bahaman"));
console.log(friends.includes(25));

//use
if (friends.includes("Sumit")) {
  console.log("You have a friend called Sumit");
} else {
  console.log("Rnadom Name");
}

//CHallenge

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

/////////////////////////////////////////////////
*/

let arr = ["a", "b", "c", "d", "e"];

//slice do not mutate but creates neew array
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); //end parameter(4) is not included

//splice does mutate the original arrray
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

//reverse also mutates the original array
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

//concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//join
console.log(letters.join(" - "));

//at
console.log(arr[0]); //without at
console.log(arr.at(0)); //with at

//getting last element of an array
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
