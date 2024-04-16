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

    if (!isPasswordMatch) {
      return res.status(401).send("Falsches Passwort");
    }

    // Erfolgreiche Anmeldung, Weiterleitung zur Startseite
    res.redirect("/home");
  } catch (error) {
    console.error("Fehler beim Einloggen:", error);
    res.status(500).send("Ein Fehler ist aufgetreten");
  }
});

// Weitere authentifizierungsbezogene Routen hier hinzufügen

module.exports = router;
