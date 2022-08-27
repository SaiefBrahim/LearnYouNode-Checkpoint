var http = require("http");
var bl = require("bl");
http.get(process.argv[2], (res) => {
  res.pipe(
    bl((err, data) => {
      err ? console.log("error") : null;
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});
