const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filePath = path.resolve(__dirname, "input.txt");

const inputStream = fs.createReadStream(filePath);

var lineReader = readline.createInterface({
  input: inputStream,
  terminal: false,
});

let allLetters = [];
let firstHalf = [];
let secondHalf = [];
let commonLetter = "";
let priority = 0;
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

lineReader.on("line", (line) => {
    allLetters = line.split("");
    for(var i = 0; i < allLetters.length / 2; i++){
        firstHalf.push(allLetters[i]);
    }
    for(var i = allLetters.length / 2; i < allLetters.length; i++){
        secondHalf.push(allLetters[i]);
    }
    for(var j = 0; j < firstHalf.length; j++){
        for(var k = 0; k < secondHalf.length; k++){
            if(firstHalf[j] === secondHalf[k]){
                commonLetter = firstHalf[j];
            }
        }
    }
    for(var i = 0; i < alphabet.length; i++){
        if(commonLetter === alphabet[i]){
            priority += i + 1;
        }
    }
    firstHalf = []
    secondHalf = []
})


lineReader.on("close", () => {
    console.log(priority);
})
