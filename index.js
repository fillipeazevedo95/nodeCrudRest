const express = require("express");
const server = express();

server.use(express.json());

let customers = [
  { id: 1, name: "Fillipe", site: "http://fillipe.com.br" },
  { id: 2, name: "Fabio", site: "http://fabio.com.br" },
  { id: 3, name: "Wilson", site: "http://wilson.com.br" },
];

server.listen(3000);
