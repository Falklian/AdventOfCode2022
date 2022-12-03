import { readFileSync } from 'node:fs';

const data = readFileSync('day1.txt', 'utf8');

const elfCalories = data.trim().split('\n\n');

const calorieRank = [];
elfCalories.forEach((elf) => {
  const calories = elf.split('\n').map(Number);
  calorieRank.push(calories.reduce((sum, value) => sum + value));
});

calorieRank.sort((a, b) => b - a);

console.log(`Most Calories: ${calorieRank[0]}`);

console.log(`Top 3 Calories: ${calorieRank.slice(0, 3).reduce((sum, value) => sum + value)}`);
