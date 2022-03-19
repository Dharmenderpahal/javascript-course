// FOR Loop

// for (let rep = 1; rep <= 10; rep++) {
//     // console.log('Push up repetition 1');
//     console.log(`Push up repetiotion ${rep}`);
// };

// while loop

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Push up repetiotion ${rep}`);
//     rep++;
// }; 

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loops is about to end-----`);
}