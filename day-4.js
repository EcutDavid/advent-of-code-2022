const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
});

function solve(caseLines) {
  // P1 solver
  // let count = 0;
  // for (const line of caseLines) {
  //   const [[n1, n2], [n3, n4]] = line.split(',').map(
  //     d => d.split('-').map(Number)
  //   );

  //   if (n1 <= n3 && n2 >= n4) count++;
  //   else if (n3 <= n1 && n4 >= n2) count++;
  // }

  // console.log(count);

  // P2 solver
  let count = 0;
  for (const line of caseLines) {
    let [[n1, n2], [n3, n4]] = line.split(',').map(
      d => d.split('-').map(Number)
    );

    if (n3 < n1) {
      [n3, n4, n1, n2] = [n1, n2, n3, n4];
    }
    console.log(n1, n2, n3, n4);
    if (n2 >= n3) count++;
  }

  console.log(count);
}

function run() {
  const caseLines = [];
  rl.on("line", (line) => caseLines.push(line)).on("close", () =>
    solve(caseLines)
  );
}

run();
