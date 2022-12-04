import { readFileSync } from 'node:fs';

const data = readFileSync('day4.txt', 'utf8');

const pairs = data.trim().split('\n');

let totalPairs = 0;
let anyOverlap = 0;
pairs.forEach((pair) => {
  const ranges = pair.split(',');

  const firstPair = [];
  const secondPair = [];
  ranges.forEach((range) => {
    const startEnd = range.split('-').map(Number);
    if (firstPair.length === 0) {
      for (let i = startEnd[0]; i <= startEnd[1]; i++) {
        firstPair.push(i);
      }
    } else {
      for (let i = startEnd[0]; i <= startEnd[1]; i++) {
        secondPair.push(i);
      }
    }
  });

  if (firstPair.length <= secondPair.length) {
    if (firstPair.every((num) => secondPair.includes(num))) {
      totalPairs++;
    }
  } else {
    if (secondPair.every((num) => firstPair.includes(num))) {
      totalPairs++;
    }
  }

  if (firstPair.some((num) => secondPair.includes(num))) {
    anyOverlap++;
  }
});

console.log(`Part 1: ${totalPairs}`);
console.log(`Part 2: ${anyOverlap}`);
