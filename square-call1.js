const square = require("./square.js");

const arr = process.argv[2]?process.argv.slice(2).map(item=> +item):null;
square.square(arr);
