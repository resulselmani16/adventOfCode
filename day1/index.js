const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filePath = path.resolve(__dirname, "input.txt");

const inputStream = fs.createReadStream(filePath);

let maxCalories = 0;
let caloriesPerPerson = [];
let currentHigh = 0;
let personWithMostCalories = 0;

var lineReader = readline.createInterface({
  input: inputStream,
  terminal: false,
});

lineReader.on("line", (line) => {
  if (line !== "") {
    caloriesPerPerson.push(Number(line));
    for (var i = 0; i < caloriesPerPerson.length; i++) {
      currentHigh += caloriesPerPerson[i];
      if (maxCalories < currentHigh) {
        personWithMostCalories++;
        maxCalories = currentHigh;
      }
    }
    currentHigh = 0;
  } else {
    caloriesPerPerson = [];
  }
});
