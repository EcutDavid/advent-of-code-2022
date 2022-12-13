const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
});

function solve(caseLines) {
  const stacks = [];
  let colCount = 0;
  for (const line of caseLines) {
    if (line.includes('[')) {
      continue;
    }
    const items = line.split(/ */);
    colCount = Number(items[items.length - 1]);
    console.log(colCount);
    break;
  }

  for (let i = 0; i < colCount; i++) {
    stacks[i] = [];
  }

  for (const line of caseLines) {
    if (line.includes('1')) {
      break;
    }
    for (let i = 0; i < colCount; i++) {
      if (!!line[1 + i * 4] && line[1 + i * 4] !== ' ') {
        stacks[i].push(line[1 + i * 4]);
      }
    }
  }

  // Task 1
  // for (const line of caseLines) {
  //   if (!line.includes('move')) {
  //     continue;
  //   }
  //   const items = line.split(/ /);
  //   const nums = [items[1], items[3], items[5]].map(Number);
  //   while (nums[0]--) {
  //     const movedNumber = stacks[nums[1] - 1].shift();
  //     stacks[nums[2] - 1].unshift(movedNumber);
  //   }
  // }

  // Task 1
  for (const line of caseLines) {
    if (!line.includes('move')) {
      continue;
    }
    const items = line.split(/ /);
    const nums = [items[1], items[3], items[5]].map(Number);
    const movedNumbers = [];
    while (nums[0]--) {
      movedNumbers.push(stacks[nums[1] - 1].shift());
    }
    for (let i = 0; i< movedNumbers.length; i++) {
      stacks[nums[2] - 1].unshift(movedNumbers[movedNumbers.length - i - 1]);
    }

  }

  console.log(stacks.map(s => s[0]).join(''));
}

function run() {
  const caseLines = [];
  rl.on("line", (line) => caseLines.push(line)).on("close", () =>
    solve(caseLines)
  );
}

run();
