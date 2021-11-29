const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DBFINDA");
const connect1 = mongoose.createConnection("mongodb://localhost:27017/DBFINDA");

const db = mongoose.connection;

db.once("open", function () {
  console.log("connected to DB 성공");
});
db.on("error", function () {
  console.log("error발생");
});

let movieDetail = mongoose.Schema({
  id: "string",
  title: "string",
  poster: "string",
  year: "number",
  director: "string",
  // genre: [
  //   {
  //     genreText: "string",
  //   },
  // ],
  // actor: "object",
  // platformName: "object",
  // iconUrl: "ojject",
  // desc: "string",
  // reviews: "object",
});
// let nameAndPoster = mongoose.Schema({

// })
