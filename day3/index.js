import { readFileSync } from 'node:fs';

const data = readFileSync('day3.txt', 'utf8');

const uppercaseDelta = 38;
const lowercaseDelta = 96;

const rucksacks = data.trim().split('\n');

let prioritySum = 0;
rucksacks.forEach((rucksack) => {
  const compartmentSize = rucksack.length / 2;
  const compartmentOne = rucksack.slice(0, compartmentSize);
  const compartmentTwo = rucksack.slice(compartmentSize);

  for (const item of compartmentOne) {
    if (compartmentTwo.includes(item)) {
      if (item.charCodeAt(0) >= 97) {
        prioritySum += item.charCodeAt(0) - lowercaseDelta;
      } else {
        prioritySum += item.charCodeAt(0) - uppercaseDelta;
      }
      break;
    }
  }
});

console.log(`Priority total (Part 1): ${prioritySum}`);

prioritySum = 0;
for (let i = 0; i < rucksacks.length; i += 3) {
  for (const item of rucksacks[i]) {
    if (rucksacks[i + 1].includes(item) && rucksacks[i + 2].includes(item)) {
      if (item.charCodeAt(0) >= 97) {
        prioritySum += item.charCodeAt(0) - lowercaseDelta;
      } else {
        prioritySum += item.charCodeAt(0) - uppercaseDelta;
      }
      break;
    }
  }
}

console.log(`Priority total (Part 2): ${prioritySum}`);
