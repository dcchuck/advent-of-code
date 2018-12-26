import * as assert from "assert";
import readFile from "./readFile";

const inp = readFile("day7input").toString().split("\n");

function translateStep(inpString: string): string[] {
  const step1 = inpString.replace("Step ", "");
  const step2 = step1.replace(" must be finished before step ", "");
  const step3 = step2.replace(" can begin.", "")
  const elements = step3.split("");
  return elements
}

const testString = "Step E must be finished before step R can begin."
assert.equal(translateStep(testString)[1], "R");

const dataTree: { [index: string]: string[] } = {};

inp.forEach(inputString => {
  if (inputString.length === 48) {
    const transaltedStep = translateStep(inputString);
    if (typeof dataTree[transaltedStep[1]] === "undefined") {
      dataTree[transaltedStep[1]] = [transaltedStep[0]];
    } else {
      dataTree[transaltedStep[1]].push(transaltedStep[0]);
    }
    if (typeof dataTree[transaltedStep[0]] === "undefined") {
      dataTree[transaltedStep[0]] = [];
    }

  }
});

let answerString = "";

const testInput = `Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.`

function addNextAvailableToAnswerString(e: { [index: string]: string[] }) {
  let available: string[] = [];
  Object.keys(e).forEach(key => {
    if (answerString.indexOf(key) < 0 && e[key].length === 0) {
      available.push(key);
    }
  })
  available.sort();
  Object.keys(e).forEach(key => {
    const k = e[key].indexOf(available[0])
    if (k >= 0) {
      e[key].splice(k, 1)
    }
  })
  answerString = `${answerString}${available[0]}`
}

do {
  addNextAvailableToAnswerString(dataTree);
} while (answerString.length !== Object.keys(dataTree).length)

console.log(answerString)
