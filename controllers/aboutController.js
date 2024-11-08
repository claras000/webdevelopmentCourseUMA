const express = require("express");
const router = express.Router();

/**
 * About Controller
 */

router.get("/about", (req, res) => {
  res.render("about"); // render about jsx
});

module.exports = router;
