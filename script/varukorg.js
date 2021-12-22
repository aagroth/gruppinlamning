// Hämtar array med objekt från localStorage med nyckeln "Products"
var products = JSON.parse(localStorage.getItem('Products'));
// Tom array
var shoppingCart = [];

// Loopar igenom arrayen med objekt
for (i = 0; i < products.length; i++) {
    var product = products[i];

    // OM basketStatus är större en 0 så pushas produkten till arrayen shoppingCart
    if (product.basketStatus > 0){
        
        shoppingCart.push(product)    
    }
}

// OM det ligger något objekt i arrayen så placeras denna ut från loadShopCart() i products.js
if (shoppingCart.length > 0) {
    loadShopCart(shoppingCart);
}

// Knapp som triggar ett alert när köpet är avslutat.
document.querySelector(".send-orderBtn").addEventListener("click", payButton);

function payButton() {
    localStorage.clear();
    alert("Grattis dina varor är påväg!")
    window.location.reload();
}