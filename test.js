// test.js
const dogs = require('./dogs.json');

// Print all moods
console.log("Available Moods:");
console.log(Object.keys(dogs).join(", "));
console.log("\n-------------------\n");

// Function to print a dog by mood
function printDog(mood) {
  if (dogs[mood]) {
    console.log(`🐶 Mood: ${mood}\n`);
    dogs[mood].forEach(line => console.log(line));
  } else {
    console.log(`❌ Mood "${mood}" not found!`);
  }
}

// Test a random mood
const moods = Object.keys(dogs);
const randomMood = moods[Math.floor(Math.random() * moods.length)];

console.log("🧪 Random Mood Test:\n");
printDog(randomMood);

// Optional: Uncomment to test a specific mood
// printDog('grumpy');
// printDog('happy');
// printDog('sad');
