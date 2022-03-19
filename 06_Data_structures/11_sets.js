'use strict';

//set is a collection of unique values which means they cant have duplicates

const ordersSet = new Set(['pasta','pizza','pizza','rishotto','pasta','pizza']);

console.log(ordersSet);

console.log(new Set('Atharv'));

//get size of a set
console.log(ordersSet.size);

//checking if an element is in the set
console.log(ordersSet.has('Bread'));
console.log(ordersSet.has('pizza'));

//add and remove elments to the set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('rishotto');

console.log(ordersSet);

//clear set
// ordersSet.clear();

for (const order of ordersSet) console.log(order);


//Example
const staff = ['waiter','chef','waiter','manager','chef','waiter'];

//converting an array into set
// const staffUnique = new Set(staff);
// console.log(staffUnique);

// converting a set into an array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(staffUnique).size);

console.log(new Set('AharvPahal').size); //a string is also an iterable
