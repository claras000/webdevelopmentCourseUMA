const express = require("express");
const router = express.Router();
const Product = require("../models/product"); // Import Product model

// Sample data from your frontend JS
const productsData = [
  {
    name: "CPU",
    price: "$10",
    image: "../images/cpu.jpg",
  },
  {
    name: "Graphic Card",
    price: "$20",
    image: "../images/graphic_Card.jpg",
  },
  {
    name: "Headphones",
    price: "$30",
    image: "../images/headphones.jpg",
  },
];

// Function to add products to the database
async function addProductsToDatabase() {
  try {
    // Loop through the productsData array and create instances of Product model
    for (let product of productsData) {
      const newProduct = new Product(product);
      // Save each product to the database
      await newProduct.save();
    }
    console.log("Products added to database successfully");
  } catch (error) {
    console.error("Error adding products to database:", error);
  }
}

// Call the function to add products to the database
addProductsToDatabase();

// Route handler to fetch products from the database

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
  res.render("home"); // render about jsx
});

module.exports = router;
