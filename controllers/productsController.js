const express = require("express");
const router = express.Router();

/**
 * Products Controller
 */

router.get("/products", (req, res) => {
  res.render("products");
});

/**
 * pulling all products from db
 */
router.get("/p", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Error fetching products" });
  }
});

module.exports = router;
