const express = require("express");
const app = express();
const user = require("./Router/user");
const db = require("./db");
app.get("/", function (req, res) {
  res.send("서버 연결됨!!");
});

app.listen(27017, function () {
  console.log("포트 27017번에 열림");
});

app.use("/user", user); //모듈화
