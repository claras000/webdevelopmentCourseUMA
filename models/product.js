const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String,
});

module.exports = mongoose.model("products", userSchema);
