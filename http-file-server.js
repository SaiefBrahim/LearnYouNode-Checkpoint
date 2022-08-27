const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const reader = fs.createReadStream(process.argv[3]);
  reader.on("data", (chunk) => {
    res.end(chunk);
  });
});
server.listen(process.argv[2]);
