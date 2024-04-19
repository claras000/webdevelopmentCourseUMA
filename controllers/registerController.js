const express = require("express");
const router = express.Router();
const collection = require("../models/users.js");

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };

  try {
    const userdata = await collection.insertMany(data);
    console.log(userdata);
    res.send("Benutzer erfolgreich registriert");
  } catch (error) {
    console.error("Fehler beim Registrieren:", error);
    res.status(500).send("Ein Fehler ist aufgetreten");
  }
});

// Weitere benutzerbezogene Routen hier hinzufügen

module.exports = router;
