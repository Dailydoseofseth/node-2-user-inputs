// CONSOLE LOG EVERYTHINGGGGGGGG !!!

const myName = process.argv[2];

console.log(process);
// will show the arguments passed to the script when run from the command line (IN GREEN)
console.log(process.argv);

if (myName) {
  console.log(`Greetings, ${myName}!`);
} else {
  console.log("Hello, world!");
}
