// Hämtar listan med objekt med hjälp av nyckeln "Products".
// Och tilldelar den till products
var products = JSON.parse(localStorage.getItem('Products'));
let htmlId = "shopYta";

// Ifall products är tom så skrivs "Listan är tom" ut på sidan.
if (products === null) {
    document.getElementById(htmlId).innerHTML +=
    "<h2>Listan är tom</h2>";
}
// Annars laddas produkterna från products.js
else {
	loadProducts(products, htmlId);
}


