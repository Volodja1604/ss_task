const readlineSync = require("readline-sync");
const square = require("./square.js");

let arr = [];
readlineSync.promptLoop((input) => {
  if(Number(input)) {
    arr=[...arr, Number(input)];
  }
  return input === "";
});
square.square(arr);
