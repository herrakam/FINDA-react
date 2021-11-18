const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ test: "프록시 서버 연결됨" });
});

module.exports = router;
