const atharv = [
    'Atharv',
    'Pahal',
    2038 - 1995,
    'Teacher',
    ['Bahman', 'Ravi', 'Master']
];

// Backward loop

for (let i = atharv.length -1; i >= 0; i--) {
    console.log(i, atharv[i]);
};

// loop inside a loop 

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting Weight repitition ${rep}`);
    };
};