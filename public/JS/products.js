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
      productsHTML += "<p>price: " + product.price + "</p></div>";
      // Add event listener to the "buy" button
      productsHTML +=
        "<button class='buy-button' onclick='handleBuyButtonClick(" +
        JSON.stringify(product) +
        ")'>Buy</button>";
      productsHTML += "</div>";
    });

    productsDiv.innerHTML = productsHTML;
  })
  .catch((error) => console.error("Error fetching products:", error));
