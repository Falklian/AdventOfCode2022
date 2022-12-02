import { readFileSync } from 'node:fs';

const data = readFileSync('day2.txt', 'utf-8');

const rockScore = 1;
const paperScore = 2;
const scissorsScore = 3;
const loseScore = 0;
const drawScore = 3;
const winScore = 6;

const games = data.trim().split('\n');

let totalScore = 0;
games.forEach(game => {
  const actions = game.split(' ');

  switch(actions[0]) {
    case 'A': // rock
      if (actions[1] === 'X') { // draw
        totalScore += drawScore + rockScore;
      } else if (actions[1] === 'Y') { // win
        totalScore += winScore + paperScore;
      } else { // lose
        totalScore += loseScore + scissorsScore;
      }
      break;
    case 'B': // paper
      if (actions[1] === 'X') { // lose
        totalScore += loseScore + rockScore;
      } else if (actions[1] === 'Y') { // draw
        totalScore += drawScore + paperScore;
      } else { // win
        totalScore += winScore + scissorsScore;
      }
      break;
    case 'C': // scissors
      if (actions[1] === 'X') { // win
        totalScore += winScore + rockScore;
      } else if (actions[1] === 'Y') { // lose
        totalScore += loseScore + paperScore;
      } else { // draw
        totalScore += drawScore + scissorsScore;
      }
      break;
  }
});

console.log(`Total score (part 1): ${totalScore}`);

totalScore = 0;
games.forEach(game => {
  const actions = game.split(' ');

  switch(actions[0]) {
    case 'A': // rock
      if (actions[1] === 'X') { // lose
        totalScore += loseScore + scissorsScore;
      } else if (actions[1] === 'Y') { // draw
        totalScore += drawScore + rockScore;
      } else { // win
        totalScore += winScore + paperScore;
      }
      break;
    case 'B': // paper
      if (actions[1] === 'X') { // lose
        totalScore += loseScore + rockScore;
      } else if (actions[1] === 'Y') { // draw
        totalScore += drawScore + paperScore;
      } else { // win
        totalScore += winScore + scissorsScore;
      }
      break;
    case 'C': // scissors
      if (actions[1] === 'X') { // lose
        totalScore += loseScore + paperScore;
      } else if (actions[1] === 'Y') { // draw
        totalScore += drawScore + scissorsScore;
      } else { // win
        totalScore += winScore + rockScore;
      }
      break;
  }
});

console.log(`Total score (part 2): ${totalScore}`)
