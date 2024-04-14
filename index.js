// index.js
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

// A sample route
app.get("/", (req, res) => res.send("Hello World!"));

// Start the Express server
app.listen(3002, () => console.log("Server running on port 3002!"));
