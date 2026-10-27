const http = require("http");
http.createServer((req, res) => {
  res.end("Hello from my CI/CD pipeline! v1\n");
}).listen(3000);
