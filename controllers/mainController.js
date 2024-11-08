const express = require("express");
const router = express.Router();
const Product = require("../models/product"); // Import Product model

/**
 * Main Controller
 */

//add info to db
// fill the db for the first init
const productsData = [
  {
    name: "Graphic Card",
    price: "$240",
    image: "../images/graphic_Card.jpg",
    buyLink: "shoppingcard.html",
  },
  {
    name: "CPU",
    price: "$430",
    image: "../images/cpu.jpg",
    buyLink: "shoppingcard.html",
  },
  {
    name: "Headphones",
    price: "$90",
    image: "../images/headphones.jpg",
    buyLink: "shoppingcard.html",
  },
  {
    name: "Hard Drive",
    price: "$580",
    image: "../images/hard-drive.jpg",
    buyLink: "shoppingcard.html",
  },
  {
    name: "Memory",
    price: "$120",
    image: "../images/memory.jpg",
    buyLink: "shoppingcard.html",
  },
  {
    name: "Motherboard",
    price: "$170",
    image: "../images/motherboard.jpg",
    buyLink: "shoppingcard.html",
  },
];

/**
 * Function to add products to the database
 */
async function addProductsToDatabase() {
  try {
    const existingProducts = await Product.find();
    if (existingProducts.length === 0) {
      for (let product of productsData) {
        const newProduct = new Product(product);
        await newProduct.save();
      }
      console.log("Products added to database successfully");
    } else {
      console.log(
        "Products already exist in the database. Skipping insertion."
      );
    }
  } catch (error) {
    console.error("Error adding products to database:", error);
  }
}

addProductsToDatabase();

router.get("/p", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Error fetching products" });
  }
});

router.get("/home", (req, res) => {
  res.render("home");
});

module.exports = router;
