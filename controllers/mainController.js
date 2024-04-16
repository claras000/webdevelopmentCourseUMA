const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("main"); // Hier renderst du die Hauptseite (main.jsx)
});

module.exports = router;
