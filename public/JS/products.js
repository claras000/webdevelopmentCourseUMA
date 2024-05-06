var productsDiv = document.getElementById("products");

// Function to handle the click event on the "Kaufen" button
function handleBuyButtonClick(product) {
  fetch("/add-to-cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => {
      if (response.ok) {
        alert("Product added to warenkorb successfully!");
      } else {
        alert("Failed to add product to warenkorb.");
      }
    })
    .catch((error) =>
      console.error("Error adding product to warenkorb:", error)
    );
}

// Fetch products from backend
fetch("/p")
  .then((response) => response.json())
  .then((products) => {
    var productsHTML = "";
    products.forEach(function (product) {
      productsHTML += "<div class='product col-md-4 '>";
      productsHTML +=
        "<img src='" + product.image + "' alt='" + product.name + "' />";
      productsHTML += "<div class='d-flex justify-content-between'>";
      productsHTML += "<h3>" + product.name + "</h3>";
      productsHTML += "<p>Preis: " + product.price + "</p></div>";
      // Add event listener to the "Kaufen" button
      productsHTML +=
        "<button class='buy-button' onclick='handleBuyButtonClick(" +
        JSON.stringify(product) +
        ")'>Kaufen</button>";
      productsHTML += "</div>";
    });
    // Set HTML content of productsDiv
    productsDiv.innerHTML = productsHTML;
  })
  .catch((error) => console.error("Error fetching products:", error));
