var fs = require("fs");
var path = require("path");

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, function (err, list) {
    if (err) return callback(err);
    list = list.filter(function (file) {
      if (path.extname(file).slice(1) === extension) return true;
    });
    return callback(null, list);
  });
};
