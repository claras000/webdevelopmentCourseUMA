const express = require("express");
const router = express.Router();

/**
 * Policy Controller
 */

router.get("/policy", (req, res) => {
  res.render("policy");
});

module.exports = router;
