import * as fs from 'fs';
import * as path from 'path';

const input = fs.readFileSync(path.join(__dirname, 'day1input'))
const numericArray = fs.readFileSync(path.join(__dirname, 'day1input'))
  .toString()
  .split("\n")
  .map(e => parseInt(e,10))
  .filter(e => Number.isInteger(e))

function reducer (a: number, c: number) {
  return a + c;
}

console.log(numericArray.reduce(reducer))

let done = false;
const els = numericArray.length;
let total = 0;
const vs: { [index: string]: number } = {};

for (let i = 0; !done; i++) {
  const imod = i % els;
  total += numericArray[imod];
  if ( vs[total.toString()] ) {
    done = true;
    console.log(total)
  } else {
    vs[total.toString()] = 1;
  }
}
