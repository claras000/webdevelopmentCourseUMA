const express = require("express");
const router = express.Router();
const collection = require("../models/users.js");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await collection.findOne({ email: email });

    if (!user) {
      return res.status(401).send("Keine E-Mail gefunden.");
    }

    // Check if password is correct
    if (password != user.password) {
      return res.status(401).send("Incorrect password");
    }

    // Store user ID in session
    req.session.userId = user._id;

    // send to home after successful login
    res.redirect("/home");
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("There is an error");
  }
});

module.exports = router;
