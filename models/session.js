const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  _id: String,
  session: String,
  expires: Date,
  userId: String,
});

const Session = mongoose.model("Session", sessionSchema);
