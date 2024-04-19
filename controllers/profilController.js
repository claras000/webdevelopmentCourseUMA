const express = require("express");
const router = express.Router();

router.get("/profil", (req, res) => {
  res.render("profil"); // render about jsx
});

module.exports = router;
