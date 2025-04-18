const http = require("http");
const fs = require("fs");
const _ = require('lodash');

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("server listion on port 3000");
});
