//tslint:disable
import readFile from "./readFile";

const polymer = readFile("day5input").toString();
// const polymer = "dabAcCaCBAcCcaDA";

function boom(p: string) {
  for (let i = 0; i < p.length - 1; i++) {
    const c1 = p.charAt(i)
    const c2 = p.charAt(i + 1)
    if (c1.toUpperCase() === c2.toUpperCase() && c1 !== c2) {
      return p.slice(0,i) + p.slice(i + 2)
    }
  }
  return p;
}

let a = polymer;
let s = "";
let b = "";

do {
  s = a;
  b = boom(s);
  a = b;
} while (s.length !== b.length)

console.log(s.length);

const alph = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"
]

alph.forEach(letter => {
  const rexp = new RegExp(letter, "gi")
  let a = polymer.replace(rexp,"");
  let s = "";
  let b = "";

  do {
    s = a;
    b = boom(s);
    a = b;
  } while (s.length !== b.length)

  console.log(letter);
  console.log(s.length);
})
