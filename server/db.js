const mongoose = require("mongoose");
module.exports = () => {
  function connnect() {
    mongoose.connect("localhost:27017", function (err) {
      if (err) {
        console.log("mongodbConnectionError", err);
      }
      console.log("mongodb connected");
    });
  }
};
connect();
mongoose.connection.on("disconnected", connect);
require("/goose.js");
