// Let's make a tip calculator with Node.js!

// Run this file with the node command:
// node tipCalculator.js

// -----------------------
let bill = Number(process.argv[2]); //100
console.log(process.argv[2]); // .20

let tipPercentage = Number(process.argv[3]);
let numGuests = Number(process.argv[4]); // 4

console.log(process.argv);

//calcultate tip amount
const tipAmount = bill * tipPercentage;
console.log(`The tip amount is: $${tipAmount.toFixed(2)}`);

// calculate total bill
const totalBill = bill + tipAmount;
console.log(`The total bill is: $${totalBill.toFixed(2)}`);

// calculate amount per guest
const amountPerGuest = totalBill / numGuests;
console.log(`Each guest should pay: $${amountPerGuest.toFixed(2)}`);
