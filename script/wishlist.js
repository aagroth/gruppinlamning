var products = JSON.parse(localStorage.getItem('Products'));
var wishList = [];
let htmlId = "wishListYta";

for (i = 0; i < products.length; i++) {
    var product = products[i];

    if (product.wishListStatus === true){
        
        wishList.push(product)    
    }
}

if (wishList.length === 0) {
    document.getElementById(htmlId).innerHTML +=
    "<h2>Listan är tom</h2>";
}

else {
    loadProducts(wishList, htmlId);
}