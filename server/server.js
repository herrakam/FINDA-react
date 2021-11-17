const express = require("express");
const app = express();
const user = require("./Router/user");
app.get("/", function (req, res) {
  res.send("helloWorld");
});

app.listen(4000, function () {
  console.log("포트 4000번에 열림");
});

app.use("/user", user); //모듈화
