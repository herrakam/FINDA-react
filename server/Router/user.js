const express = require("express");
const router = express.Router();

router.get("/:id", function (req, res) {
  res.send("Received a GET request, param:" + req.params.id);
});

router.post("/", function (req, res) {
  res.json({ success: true });
});

router.put("/", function (req, res) {
  res.status(400).json({ message: "Bad request" });
});

router.delete("/", function (req, res) {
  res.send("received DELETE request");
});

module.exports = router;
