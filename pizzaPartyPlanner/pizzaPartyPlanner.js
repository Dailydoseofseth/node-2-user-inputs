/* 

Your task: Make a Node.js pizza party planner that calculates how many slices of pizza each guest gets, and how many slices are left over!

Follow the instructions in the README.md file in this folder.

*/

// -----------------------

const hostName = process.argv[2];
const numPizzas = Number(process.argv[3]);
const slicesPerPizza = Number(process.argv[4]);
const numGuests = Number(process.argv[5]);

// Calculate total slices
const totalSlices = numPizzas * slicesPerPizza;

// Calculate slices each guest gets (rounded down)
const slicesPerGuest = Math.floor(totalSlices / numGuests);

// Calculate leftover slices
const leftoverSlices = totalSlices % numGuests;

console.log(
  `Hey ${hostName}! 🍕 You ordered ${numPizzas} pizzas with ${slicesPerPizza} slices each — that’s ${totalSlices} slices total! Each of your ${numGuests} guests gets ${slicesPerGuest} slices, and you’ll have ${leftoverSlices} slices left over.`,
);
