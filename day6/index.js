import { createReadStream } from 'node:fs';

const readStream = createReadStream('day6.txt', { highWaterMark: 1 });

const data = [];
const letterBuffer = [];
let bufferLength = 4;
readStream.on('data', (chunk) => {
  if (letterBuffer.length >= bufferLength) letterBuffer.shift();

  const item = chunk.toString();

  data.push(item);
  letterBuffer.push(item);
  let dupe = false;
  if (letterBuffer.length === bufferLength) {
    if (letterBuffer.filter((char, index) => letterBuffer.indexOf(char) != index).length > 0) dupe = true;
  }
  if (!dupe && letterBuffer.length === bufferLength) {
    if (bufferLength === 4) {
      console.log(`Part 1: ${data.length}`);
      bufferLength = 14;
    } else {
      console.log(`Part 2: ${data.length}`);
      process.exit(0);
    }
  } else {
    dupe = false;
  }
});
