var products = [
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


function generateProductHTML(product) {
    return `
        <div class="Product_item">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
            <a href="${product.buyLink}" class="buy-button-produts" target="_blank">Buy</a>
        </div>
    `;
}


function renderProducts() {
    var productsContainer = document.querySelector('.Products');

    if (productsContainer && products.length > 0) {
        products.forEach(product => {
            productsContainer.innerHTML += generateProductHTML(product);
        });
    }
}

window.addEventListener('load', renderProducts);
