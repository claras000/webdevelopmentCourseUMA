const express = require("express");
const router = express.Router();

/**
 * Shoppingcard Controller
 */

router.get("/shoppingcard", (req, res) => {
  res.render("shoppingcard");
});

module.exports = router;
