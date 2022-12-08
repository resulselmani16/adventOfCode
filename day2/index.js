const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filePath = path.resolve(__dirname, "input.txt");

const inputStream = fs.createReadStream(filePath);

var lineReader = readline.createInterface({
  input: inputStream,
  terminal: false,
});

const rock = 1;
const paper = 2;
const scissors = 3;
const win = 6;
const draw = 3;
const lose = 0;
let currentMatchUp = [];
let myPoints = 0;

// A/X = rock, B/Y = paper, C/Z = scissors
const opponentMoves = ["A", "B", "C"];
const myMoves = ["X", "Y", "Z"];

let totalScore = 0;

const selectionScores = {
  X: 1,
  Y: 2,
  Z: 3,
};

const pairScores = {
  AX: 3,
  AY: 6,
  AZ: 0,
  BX: 0,
  BY: 3,
  BZ: 6,
  CX: 6,
  CY: 0,
  CZ: 3,
};

const whatShouldBePlayedPairs = {
  AX: "Z",
  AY: "X",
  AZ: "Y",
  BX: "X",
  BY: "Y",
  BZ: "Z",
  CX: "Y",
  CY: "Z",
  CZ: "X",
};

lineReader.on("line", (line) => {
  currentMatchUp = line.split(" ");
  const selectionScore = selectionScores[currentMatchUp[1]];
  const outcomeScore = pairScores[`${currentMatchUp[0]}${currentMatchUp[1]}`];
  totalScore += selectionScore + outcomeScore;
});

lineReader.on("close", () => {
  console.log(totalScore);
});
