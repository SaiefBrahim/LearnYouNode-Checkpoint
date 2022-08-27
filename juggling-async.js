var http = require("http");
var bl = require("bl");
var arr = [process.argv[2], process.argv[3], process.argv[4]];
arr.forEach((el) => {
  http.get(el, (res) => {
    res.pipe(
      bl((err, data) => {
        err ? console.log("error") : null;
        data = data.toString();
        console.log(data);
      })
    );
  });
});
