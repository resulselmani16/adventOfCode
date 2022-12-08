const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filePath = path.resolve(__dirname, "input.txt");

const inputStream = fs.createReadStream(filePath);

let caloriesPerPerson = [];
let calories = [];

var lineReader = readline.createInterface({
  input: inputStream,
  terminal: false,
});

let num = 0;
lineReader.on("line", (line) => {
  calories.push(+line);
  if (line) {
    num += +line;
    console.log(num);
  } else {
    caloriesPerPerson.push(num);
    console.log(caloriesPerPerson);
    num = 0;
  }
});

lineReader.on("close", () => {
  console.log(calories);
  console.log(caloriesPerPerson);
  caloriesPerPerson.push(calories[calories.length - 1])
  const topThree = caloriesPerPerson.sort((a, b) => a - b)
  console.log(topThree);
  console.log(topThree.slice(-3).reduce((a, b) => a + b))
;});
