var productsDiv = document.getElementById("products");

// Fetch products from backend
fetch("/products")
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
      productsHTML +=
        "<a href='" + product.buyLink + "' class='buy-button'>Kaufen</a>";
      productsHTML += "</div>";
    });
    // Set HTML content of productsDiv
    productsDiv.innerHTML = productsHTML;
  })
  .catch((error) => console.error("Error fetching products:", error));
