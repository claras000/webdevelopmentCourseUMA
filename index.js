require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path");

const userController = require("./controllers/userController");
const authController = require("./controllers/authController");
const mainController = require("./controllers/mainController");

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to the db"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "hidden",
    saveUninitialized: true,
    resave: false,
  })
);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

app.use("/", userController); // Routing to login
app.use("/", authController); // Route to register
app.use("/", mainController); // Routing to main

app.listen(PORT, () => {
  console.log(`Server gestartet auf http://localhost:${PORT}`);
});
