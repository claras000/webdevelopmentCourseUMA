// Annahme: Sie haben eine Liste von Produkten, die Sie anzeigen möchten
var products = [
  {
    name: "CPU",
    price: "$10",
    image: "../images/cpu.jpg",
    buyLink: "link-zu-kaufen-produkt-1.html",
  },
  {
    name: "Geafic Card",
    price: "$20",
    image: "../images/graphic_Card.jpg",
    buyLink: "link-zu-kaufen-produkt-2.html",
  },
  {
    name: "headphones",
    price: "$30",
    image: "../images/headphones.jpg",
    buyLink: "link-zu-kaufen-produkt-3.html",
  },
];

var productsDiv = document.getElementById("products").innerHTML;
var productsHTML = "";

products.forEach(function (product) {
  productsHTML += "<div class='product col-md-4 '>";
  productsHTML += "<h3>" + product.name + "</h3>";
  productsHTML +=
    "<img src='" + product.image + "' alt='" + product.name + "' />";
  productsHTML += "<p>Preis: " + product.price + "</p>";
  productsHTML +=
    "<a href='" + product.buyLink + "' class='buy-button'>Kaufen</a>";
  productsHTML += "</div>";
});

// Setzen Sie den HTML-Inhalt der products-Div
productsDiv = productsHTML;
