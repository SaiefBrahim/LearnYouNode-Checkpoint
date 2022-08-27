const fs = require("fs");
const data = fs.readFileSync(process.argv[2]);
let nlCounter = data.toString().split("\n");
console.log(nlCounter.length - 1);
