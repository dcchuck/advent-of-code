import readFile from "./readFile";
const input = readFile('day3input');

const linesArray = input.toString().split("\n");

interface IIndexedObject {
  [index: string]: number
}
const touchedCoords: IIndexedObject = {}

interface ILineOb {
  starting: number[];
  toTouch: number[];
  id: string;
}
function translateLine(line: string): ILineOb {
  const els = line.split(" ");
  const id = els[0];
  if (els.length !== 4) {
    return { starting: [0,0], toTouch: [0,0], id: "" }
  }
  const forStarting = els[2].split(",");
  const starting = [parseInt(forStarting[0],10), parseInt(forStarting[1].slice(0,-1),10)]
  const forTouch = els[3].split("x");
  const toTouch = [parseInt(forTouch[0],10), parseInt(forTouch[1],10)];
  return { starting, toTouch, id }
}

let cc = 0;

function touchCoords(starting: number[], toTouch: number[]) {
  const startingX = starting[0];
  const startingY = starting[1];
  for (let x = startingX; x < startingX + toTouch[0]; x++) {
    for (let y = 0; y < toTouch[1]; y++) {
      const tcKey = `${x}x${y + startingY}`;
      // console.log(tcKey);
      if (typeof touchedCoords[tcKey] !== "undefined") {
        touchedCoords[tcKey] += 1
      } else {
        touchedCoords[tcKey] = 1
        cc += 1;
      }
    }
  }
}

linesArray.forEach(line => {
  const translatedLine = translateLine(line);
  touchCoords(translatedLine.starting, translatedLine.toTouch);
})

const pointsTouched = Object.keys(touchedCoords).length;

let count = 0

Object.keys(touchedCoords).forEach(key => {
  const val: number = touchedCoords[key];
  if (val > 1) {
    count += 1;
  }
})

console.log(count);
// 168,680
console.log(touchedCoords["168x680"]);
function allAreOne(starting: number[], toTouch: number[], id: string) {
  const startingX = starting[0];
  const startingY = starting[1];
  let isTheOne = true;
  for (let x = startingX; x < startingX + toTouch[0]; x++) {
    for (let y = 0; y < toTouch[1]; y++) {
      const tcKey = `${x}x${y + startingY}`;
      isTheOne = isTheOne && (touchedCoords[tcKey] === 1)
    }
  }
  if (isTheOne) {
    console.log(id);
  }
}

linesArray.forEach(line => {
  const translatedLine = translateLine(line);
  allAreOne(translatedLine.starting, translatedLine.toTouch, translatedLine.id);
})
