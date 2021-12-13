var products = JSON.parse(localStorage.getItem('Products'));

products.map((product) => {

    document.querySelector("div").innerHTML += 
    "<div>" + product.inputFile + "</div>" +
    "<div>" + product.title + "</div>" +
    "<div>" + product.artNr + "</div>" +
    "<div>" + product.price + "</div>";
    
});

