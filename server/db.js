const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DBFINDA");
const connect1 = mongoose.createConnection("mongodb://localhost:27017/DBFINDA");

const db = mongoose.connection;

const open = () => {
  console.log("connected to DB 성공");
};
const error = () => {
  console.log("error발생");
};
db.once("open", open);
db.on("error", error);
