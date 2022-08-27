const fs = require("fs");
const { argv } = require("process");
fs.readFile(process.argv[2], function (err, data) {
  if (err) console.log(err);
  let nlCounter = data.toString().split("\n");
  console.log(nlCounter.length - 1);
});
