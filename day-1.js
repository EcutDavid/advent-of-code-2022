const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
});

function solve(caseLines) {
  // Q1
  // let counter = 0;
  // let maximum = 0;
  // for (const line of caseLines) {
  //   if (line === '') {
  //     maximum = Math.max(maximum, counter);
  //     counter = 0;
  //   } else {
  //     counter += Number(line);
  //   }
  // }
  // maximum = Math.max(maximum, counter);

  // console.log(maximum);

  // Q2
  let arr = [];
  let counter = 0;
  for (const line of caseLines) {
    if (line === "") {
      arr.push(counter);
      counter = 0;
    } else {
      counter += Number(line);
    }
  }
  arr.push(counter);
  arr.sort((a, b) => b - a);
  console.log(arr[0] + arr[1] + arr[2]);
}

function run() {
  const caseLines = [];
  rl.on("line", (line) => caseLines.push(line)).on("close", () =>
    solve(caseLines)
  );
}

run();
