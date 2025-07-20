const dogs = require('./dogs.json');

function dogMe() {
  const dogNames = Object.keys(dogs);
  const randomName = dogNames[Math.floor(Math.random() * dogNames.length)];
  const dogLines = dogs[randomName];
  
  // Print dog line by line
  dogLines.forEach(line => console.log(line));
  
  // Optionally print dog mood/name
  console.log(`\nMood: ${randomName}`);
}

module.exports = dogMe;
