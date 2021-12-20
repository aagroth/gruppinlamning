var products = JSON.parse(localStorage.getItem('Products'));
var shoppingCart = [];

for (i = 0; i < products.length; i++) {
    var product = products[i];

    if (product.basketStatus > 0){
        
        shoppingCart.push(product)    
    }
}

if (shoppingCart.length > 0) {
    loadShopCart(shoppingCart);
}

// Knapp som triggar ett alert när köpet är avslutat.
document.querySelector(".send-orderBtn").addEventListener("click", payButton);

function payButton() {
    alert("Grattis dina varor är påväg!")
}