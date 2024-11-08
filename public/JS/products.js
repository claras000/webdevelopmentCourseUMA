/**
 * Product Handler for Product fetching and styling
 */

var productsDiv = document.getElementById("products");

// buy funtcion
function handleBuyButtonClick(product) {
  alert("You bought the product");
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

      productsHTML +=
        "<button class='buy-button' onclick='handleBuyButtonClick(" +
        JSON.stringify(product) +
        ")'>Buy</button>";
      productsHTML += "</div>";
    });

    productsDiv.innerHTML = productsHTML;
  })
  .catch((error) => console.error("Nao temos em", error));
