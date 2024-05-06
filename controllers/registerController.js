const express = require("express");
const router = express.Router();
const collection = require("../models/users.js");

router.get("/register", (req, res) => {
  res.render("register", { message: null }); // Initialisiere message als null
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
    res.render("register", { message: "user has registered correct" }); // check if register
  } catch (error) {
    console.error("Error during register:", error);
    res.status(500).send("Error during register");
  }
});

module.exports = router;
