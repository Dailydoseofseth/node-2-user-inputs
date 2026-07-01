/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/
// process.argv is an array of everything typed in the terminal
// Must have index [2] & [3] to get the dog name and human age, as [0] is the node command and [1] is the file name
const dogName = process.argv[2];
const humanAge = Number(process.argv[3]);

// THIS VAR will hold  dog years VALUE, which we will calculate based on the human age
let dogYears = "";

// Check if dogName and humanAge are provided, if not, log an error message
// THIS IS NESTED IF/ELSE STATEMENTS WHICH IS A GOOD EXAMPLE OF HOW TO USE CONDITIONAL STATEMENTS IN JS
if (!dogName || !humanAge) {
  console.log("❌ Usage: node index.js - ENTER <dogName> <humanAge>");
} else {
  // Calculate dogYears based on humanAge using IF/ELSE statements
  if (humanAge === 1) {
    dogYears = 15;
  } else if (humanAge === 2) {
    dogYears = 24;
  } else {
    dogYears = 24 + (humanAge - 2) * 5;
  }

  // log the result to the console using template literals
  console.log(
    `Your dog, ${dogName}, is ${humanAge} yrs old, AND that's ${dogYears} yrs old in dog years!`,
  );
}

// ==============================================================================
// I FIND THIS IMPORTANT SO I AM LEAVING IT HERE FOR FUTURE REFERENCE, AS IT IS A GOOD EXAMPLE OF USING TERNARY OPERATORS INSTEAD OF IF/ELSE STATEMENTS
// ==============================================================================

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
