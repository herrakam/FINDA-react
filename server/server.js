const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("helloWorld");
});

app.listen(4000, function () {
  console.log("포트 4000번에 열림");
});
