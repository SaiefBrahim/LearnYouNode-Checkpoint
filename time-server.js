var net = require("net");
var strftime = require("strftime");
const server = net.createServer((socket) => {
  socket.write(strftime("%F %H:%M"));
  socket.end("\r\n");
});
server.listen(process.argv[2]);
