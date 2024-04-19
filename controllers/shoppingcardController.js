const express = require("express");
const router = express.Router();

router.get("/shoppingcard", (req, res) => {
  res.render("shoppingcard"); // render about jsx
});

module.exports = router;
