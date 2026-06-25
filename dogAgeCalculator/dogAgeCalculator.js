/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/
// process.argv is an array of everything typed in the terminal

const dogName = process.argv[2];
const humanAge = Number(process.argv[3]);

let dogYears = "";

// Calculate dog years/dogYears based on human age
if (humanAge === 1) {
  dogYears = 15;
} else if (humanAge === 2) {
  dogYears = 24;
} else {
  dogYears = 24 + (humanAge - 2) * 5;
}

console.log(
  `Your dog, ${dogName}, is ${humanAge} yrs old, AND that's ${dogYears} yrs old in dog years!`,
);

// ---------- advanced version of dogAgeCalculator.js ----------
// ----------- using a ternary operator to calculate dog years -----------

// let dogYears;

// if (humanAge <= 2) {
//   dogYears = humanAge === 1 ? 15 : 24;
// } else {
//   dogYears = 24 + (humanAge - 2) * 5;
// }

// console.log(
//   `Your dog, ${dogName}, is ${humanAge} yrs old, AND that's ${dogYears} yrs old in dog years!`,
// );
