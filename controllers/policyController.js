const express = require("express");
const router = express.Router();

router.get("/policy", (req, res) => {
  res.render("policy");
});

module.exports = router;
