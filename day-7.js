const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
});

class Dir {
  constructor() {
    this.parent = undefined;
    this.items = [];
    this.children = new Map();
  }
}

function solve(caseLines) {
  const root = new Dir();
  let currentDir = root;

  const createNewDirIfNotThere = (name) => {
    if (!currentDir.children.get(name)) {
      const newDir = new Dir();
      newDir.parent = currentDir;
      currentDir.children.set(name, newDir);
      return newDir;
    }
    return currentDir.children.get(name);
  };

  for (let i = 1; i < caseLines.length; i++) {
    const line = caseLines[i];

    const items = line.split(" ");
    if (items[0] === "$" && items[1] === "cd") {
      if (items[2] === "..") {
        currentDir = currentDir.parent;
        continue;
      }
      currentDir = createNewDirIfNotThere(items[2]);
    }

    if (items[0] !== "$") {
      if (items[0] === "dir") {
        createNewDirIfNotThere(items[1]);
      } else {
        currentDir.items.push(Number(items[0]));
      }
    }
  }

  // Task 1
  // let sum = 0;
  // const walk = (dir) => {
  //   let dirSize = dir.items.reduce((acc, d) => acc + d, 0);

  //   for (const [k, v] of dir.children) {
  //     dirSize += walk(v);
  //   }
  //   if (dirSize <= 100000) sum += dirSize;
  //   return dirSize;
  // };
  // console.log(sum);

  // Task 2
  const walk1 = (dir) => {
    let dirSize = dir.items.reduce((acc, d) => acc + d, 0);

    for (const [k, v] of dir.children) {
      dirSize += walk1(v);
    }
    return dirSize;
  };
  let sum = walk1(root);

  let bestAnswer = 1e10;
  const walk2 = (dir) => {
    let dirSize = dir.items.reduce((acc, d) => acc + d, 0);

    for (const [k, v] of dir.children) {
      dirSize += walk2(v);
    }

    if (sum - dirSize <= 40000000) {
      bestAnswer = Math.min(dirSize, bestAnswer);
    }
    return dirSize;
  };

  walk1(root);
  walk2(root);
  console.log(bestAnswer);
}

function run() {
  const caseLines = [];
  rl.on("line", (line) => caseLines.push(line)).on("close", () =>
    solve(caseLines)
  );
}

run();
