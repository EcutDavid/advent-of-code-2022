
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
});

function updateCounter(c, char, diff) {
  if (!c.get(char)) {
    c.set(char, 0);
  }
  c.set(char, c.get(char) + diff);
}

function isDone(c) {
  for (const [k, v] of c) {
    if (v > 1) return false;
  }
  return true;
}

function solve(caseLines) {
  const code = caseLines[0];
  const counter = new Map();
  // Task 1
  // for (let i = 0; i < 4; i++) {
  //   updateCounter(counter, code[i], 1);
  // }
  // if (isDone(counter)) {
  //   console.log(4);
  //   return;
  // }
  // for (let i = 0; i < code.length - 4; i++) {
  //   updateCounter(counter, code[4 + i], 1);
  //   updateCounter(counter, code[i], -1);
  //   if (isDone(counter)) {
  //     console.log(5 + i);
  //     break;
  //   }
  // }

  // Task 2
  for (let i = 0; i < 14; i++) {
    updateCounter(counter, code[i], 1);
  }
  if (isDone(counter)) {
    console.log(14);
    return;
  }
  for (let i = 0; i < code.length - 14; i++) {
    updateCounter(counter, code[14 + i], 1);
    updateCounter(counter, code[i], -1);
    if (isDone(counter)) {
      console.log(15 + i);
      break;
    }
  }
}

function run() {
  const caseLines = [];
  rl.on("line", (line) => caseLines.push(line)).on("close", () =>
    solve(caseLines)
  );
}

run();
