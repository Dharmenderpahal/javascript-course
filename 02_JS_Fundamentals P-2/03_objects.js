const jonasArray = [
  "Atharv",
  "Pahal",
  2038 - 1995,
  "Teacher",
  ["Bahman", "Ravi", "Master"],
];

console.log(jonasArray);

const jonasObject = {
  firstName: "Atharv",
  lastName: "Pahal",
  age: 2038 - 1995,
  job: "Teacher",
  friends: ["Sumit", "Ravi", "Master"],
  likes: "Camper Van",
};

console.log(jonasObject);

/////////////////////////////////
// Dot vs Bracket Notation

console.log(jonasObject.firstName); // Dot notation
console.log(jonasObject["lastName"]); // Bracket Notation

//also we can do like below
const nameKey = "Name";
console.log(jonasObject["first" + nameKey]);
console.log(jonasObject["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Atharv? Choose between first Name, lastName, age, job, friends"
);

if (jonasObject[interestedIn]) {
  console.log(jonasObject[interestedIn]);
} else {
  console.log(
    "Wrong request!! Choose between first Name, lastName, age, job, friends"
  );
}

// add a element in object
jonasObject.location = "Tumabheri";
jonasObject["instagram"] = "atharv04_";

console.log(jonasObject);

// CHALLENGE
// "Atharv has 3 friends and his best friend is Ravi"

console.log(
  `${jonasObject.firstName} has ${jonasObject.friends.length} friends and his best friend is ${jonasObject.friends[2]}`
);
