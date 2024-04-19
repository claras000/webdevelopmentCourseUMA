const express = require("express");
const router = express.Router();

router.get("/contact", (req, res) => {
  res.render("contact"); // render about jsx
});

module.exports = router;
