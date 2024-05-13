var productsDiv = document.getElementById("products");

function handleBuyButtonClick(product) {
  alert("You bought the product");
}

// fetching from backend products
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
  .catch((error) => console.error("Error fetching products:", error));
document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;

  function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    slides[index].classList.add("active");
    currentSlide = index;
  }

  function nextSlide() {
    var nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  function previousSlide() {
    var prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  // Mostrar a primeira imagem inicialmente
  showSlide(0);

  // Adicionar listeners para os botões de navegação
  document.getElementById("nextBtn").addEventListener("click", nextSlide);
  document.getElementById("prevBtn").addEventListener("click", previousSlide);
});
