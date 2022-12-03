const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
});

function solve(caseLines) {
}

function run() {
  const caseLines = [];
  rl.on("line", (line) => caseLines.push(line)).on("close", () =>
    solve(caseLines)
  );
}

run();
