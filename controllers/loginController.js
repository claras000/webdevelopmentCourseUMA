const express = require("express");
const router = express.Router();
const collection = require("../models/users.js");
const bcrypt = require("bcrypt");

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  try {
    const check = await collection.findOne({ email: req.body.email });
    if (!check) {
      return res.status(401).send("Keine E-Mail gefunden.");
    }

    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      check.password
    );

    //check if password is the same like in db
    if (req.body.password != check.password) {
      return res.status(401).send("wrong password");
    }

    // login
    res.redirect("/");
  } catch (error) {
    console.error("error during login:", error);
    res.status(500).send("there is a error");
  }
});

module.exports = router;
