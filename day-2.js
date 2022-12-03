const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
});

const scoreMap = { R: 1, P: 2, S: 3 };
function transformSign(sign) {
  switch (sign) {
    case "A":
    case "X":
      return "R";
    case "B":
    case "Y":
      return "P";
    case "C":
    case "Z":
      return "S";
    default:
      break;
  }
}

function getScoreForQ1(signA, signB) {
  signA = transformSign(signA);
  signB = transformSign(signB);
  let score = scoreMap[signB];

  switch (signB) {
    case "R":
      score += signA === "R" ? 3 : signA === "P" ? 0 : 6;
      break;
    case "P":
      score += signA === "P" ? 3 : signA === "S" ? 0 : 6;
      break;
    case "S":
      score += signA === "S" ? 3 : signA === "R" ? 0 : 6;
      break;
    default:
      break;
  }

  return score;
}

function getScoreForQ2(signA, signB) {
  let score = 0;
  signA = transformSign(signA);

  if (signB === "Y") {
    score = 3;
    return score + scoreMap[signA];
  }
  if (signB === "X") {
    score = 0;
    signB = signA === "R" ? "S" : signA === "S" ? "P" : "R";
    return score + scoreMap[signB];
  }

  score = 6;
  signB = signA === "R" ? "P" : signA === "S" ? "R" : "S";

  return score + scoreMap[signB];
}


function solve(caseLines) {
  let ret = 0;
  for (const line of caseLines) {
    ret += getScoreForQ2(line[0], line[2]);
  }

  console.log(ret);
}

function run() {
  const caseLines = [];
  rl.on("line", (line) => caseLines.push(line)).on("close", () =>
    solve(caseLines)
  );
}

run();
