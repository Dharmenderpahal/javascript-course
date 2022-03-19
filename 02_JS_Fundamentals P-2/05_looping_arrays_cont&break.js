const atharv = [
    'Atharv',
    'Pahal',
    2038 - 1995,
    'Teacher',
    ['Bahman', 'Ravi', 'Master']
];

const types = [];

for (let i = 0; i < atharv.length; i++) {
    // console.log(atharv[i]);
    console.log(atharv[i], typeof atharv[i]);

    // types[i] = typeof atharv[i];  OR
    types.push(typeof atharv[i]);
};

console.log(types);

const years = [1991, 2000, 1995, 2020, 1969];
const ages = [];

for (let i = 0; i < years.length; i++) {
    // ages[i] = 2037 - years[i];
    ages.push(2037 - years[i]);
};

console.log(ages);

// CONTINUE

for (let i = 0; i < atharv.length; i++) {
    if (typeof atharv[i] !== 'string') continue; //continue skips if something doesn't match the condition
    console.log(atharv[i]);
}

//break

for (let i = 0; i < atharv.length; i++) {
    if (typeof atharv[i] === 'number') break; // break ends the loop as soon as it matches the condition
    console.log(atharv[i]);
}