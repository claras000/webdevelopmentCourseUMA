require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
//const MongoStore = require("connect-mongo")(session);

const path = require("path");
const crypt = require("bcrypt");
const collection = require("./models/users.js"); //load model user
const sessionSchema = require("./models/session.js"); //load model session
const bcrypt = require("bcrypt"); //to secure password

const app = express(); //create express application
const PORT = process.env.PORT || 4000; // chosing port

// db connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to the db"));

//middleware
app.use(express.urlencoded({ extended: false })); //encode into strings - makes data avaliable in req.body
app.use(express.json()); //parseing - avaliable for req.body
app.use(
  session({
    secret: "hidden",
    saveUninitialized: true,
    resave: false,
  }) //session to store data during requests
);

// template engine
app.set("view engine", "ejs");
// static files
app.use(express.static("public"));

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

//render routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/register", (req, res) => {
  res.render("register");
  console.log("test");
});

app.get("/login", (req, res) => {
  res.render("login");
});

//make session

//console.log("mongoose.connection:", mongoose.connection);

//console.log("MongoStore:", MongoStore);

//const store = MongoStore({ mongooseConnection: mongoose.connection });
//console.log("store:", store);

//app.use(
// session({
//  secret: "your-secret-key",
//  resave: false,
//  saveUninitialized: false,
//  store: store,
// })
//);

//register
app.post("/register", async (req, res) => {
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };

  const userdata = await collection.insertMany(data);

  console.log(userdata);
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});

//login
app.post("/login", async (req, res) => {
  try {
    const check = await collection.findOne({ email: req.body.email });
    console.log("User found:", check);

    if (!check) {
      return res.status(401).send("No email found.");
    }

    const sanitizedPassword = req.body.password.replace(/./g, "*");
    console.log("Sanitized password:", sanitizedPassword);

    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      check.password
    );
    console.log("Password match:", isPasswordMatch);

    if (!isPasswordMatch) {
      return res.status(401).send("Wrong password");
    }

    // Start session after successful login
    //  req.session.user = { email: req.body.email }; // You can store any user data you need in the session
    // Successful login, redirect to home page
    res.redirect("/home");
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("An error occurred while logging in");
  }
});
