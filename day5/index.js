import { readFileSync } from 'node:fs';

const data = readFileSync('day5.txt', 'utf8');

const resources = data.split(/\n\n/);
const board = resources[0];
const moves = resources[1];

const rows = board.split(/\n/);
const itemMatrix = [];
rows.forEach((row) => {
  if (!row.includes('1')) {
    const rowArray = [];
    for (let i = 1; i < row.length; i += 4) {
      rowArray.push(row[i]);
    }
    itemMatrix.push(rowArray);
  }
});
const trasposedMatrix = itemMatrix[0].map((_, index) => itemMatrix.map((row) => row[index]));
const finalMatrix = trasposedMatrix.map((row) => row.filter((item) => item !== ' ').reverse());
const finalMatrixPreserve = JSON.parse(JSON.stringify(finalMatrix));

const allMoves = moves.split(/\n/);
allMoves.forEach((move) => {
  const [numberOfMoves, fromCol, toCol] = move.match(/\d+/g);
  const preserveArray = [];
  for (let i = 0; i < numberOfMoves; i++) {
    let item = finalMatrix[fromCol - 1].pop();
    finalMatrix[toCol - 1].push(item);

    preserveArray.push(finalMatrixPreserve[fromCol - 1].pop());
  }
  while (preserveArray.length) finalMatrixPreserve[toCol - 1].push(preserveArray.pop());
});

const finalTextPart1 = finalMatrix.map((row) => row.pop()).join('');
const finalTextPart2 = finalMatrixPreserve.map((row) => row.pop()).join('');

console.log(finalTextPart1, finalTextPart2);
