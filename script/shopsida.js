var products = JSON.parse(localStorage.getItem('Products'));

products.map((product) => {

    document.getElementById("shopYta").innerHTML += 
    "<div class=\"productCard\">" +
    "<img src=\"./products_images/" + product.image + "\">" +
    "<div class=\"productTitle\">" + product.title + "</div>" +
    "<div class=\"productArtNr\">" + "Artnr: " + product.artNr + "</div>" +
    "<div class=\"productPrice\">" + product.price + "kr" + "</div>" +
    "</div>";
    
});

