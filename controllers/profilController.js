const express = require("express");
const router = express.Router();
const Users = require("../models/users");

router.get("/profil", (req, res) => {
  // Check if userId exists in session
  if (req.session.userId) {
    // Set userID
    const userID = req.session.userId;
    console.log("User ID:", userID);

    res.render("profil");
  } else {
    res.redirect("/");
  }
});

// display curretn user as json at /user
router.get("/user", async (req, res) => {
  try {
    const userID = req.session.userId;

    if (!userID) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const user = await Users.findById(userID);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Error fetching user" });
  }
});

module.exports = router;
