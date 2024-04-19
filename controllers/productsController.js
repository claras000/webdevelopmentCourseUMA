const express = require("express");
const router = express.Router();

router.get("/products", (req, res) => {
  res.render("products"); // render about jsx
});

module.exports = router;
