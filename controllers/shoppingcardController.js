const express = require("express");
const router = express.Router();

router.get("/shoppingcard", (req, res) => {
  res.render("shoppingcard");
});

module.exports = router;
