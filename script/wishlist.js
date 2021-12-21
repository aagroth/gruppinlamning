// Hämtar array från LocalStorage
var products = JSON.parse(localStorage.getItem('Products'));
// Tom Array
var wishList = [];
// Ger variablen htmlId ett värde av diven i .html
let htmlId = "wishListYta";

// Loopar igenom arrayen
for (i = 0; i < products.length; i++) {
    var product = products[i];

    // Kollar ifall wishListStatus är true
    if (product.wishListStatus === true){
     
        // Ifall den är true pushas produkten till wishList arrayen
        wishList.push(product)    
    }
}

// OM arrayen är tom så skrivs följande ut:
if (wishList.length === 0) {
    document.getElementById(htmlId).innerHTML +=
    "<h2>Listan är tom</h2>";
}

// Annars laddas objektet från products.js med parametern wishList och htmlId
else {
    loadProducts(wishList, htmlId);
}