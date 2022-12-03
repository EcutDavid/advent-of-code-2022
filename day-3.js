const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
});

function getScoreForItem(item) {
  if (item >= "a" && item <= "z") {
    return item.charCodeAt(0) - "a".charCodeAt(0) + 1;
  }
  return item.charCodeAt(0) - "A".charCodeAt(0) + 27;
}

function solve(caseLines) {
  let sum = 0;
  // Solve Q1
  // for (const line of caseLines) {
  //   const p1 = line.slice(0, line.length / 2);
  //   const p2 = line.slice(line.length / 2);

  //   for (const c of p1) {
  //     if (p2.includes(c)) {
  //       console.log(c);
  //       sum += getScoreForItem(c);
  //       break;
  //     }
  //   }
  // }

  // Solve Q2
  for (let i = 0; i < caseLines.length; i += 3) {
    for (const char of caseLines[i]) {
      if (caseLines[i + 1].includes(char) && caseLines[i + 2].includes(char)) {
        sum += getScoreForItem(char);
        break;
      }
    }
  }
  console.log(sum);
}

function run() {
  const caseLines = [];
  rl.on("line", (line) => caseLines.push(line)).on("close", () =>
    solve(caseLines)
  );
}

run();
