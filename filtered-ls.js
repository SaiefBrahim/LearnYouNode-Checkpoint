const fs = require("fs");
const path = require("path");
const { argv } = require("process");
fs.readdir(process.argv[2], function (err, list) {
  if (err) console.log(err);
  for (let i = 0; i < list.length - 1; i++) {
    if (path.extname(list[i]).slice(1) === process.argv[3]) {
      console.log(list[i]);
    }
  }
});
