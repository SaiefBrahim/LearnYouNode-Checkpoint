var http = require("http");
http.get(process.argv[2], (res) => {
  res.setEncoding("utf8");
  if (res.statusCode !== 200) return `error ${statusCode}`;
  res.on("data", (data) => {
    console.log(data);
  });
});
