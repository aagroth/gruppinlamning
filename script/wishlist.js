var products = JSON.parse(localStorage.getItem('Products'));

for (i = 0; i < products.length; i++) {
    var product = products[i];
    console.log(product)
    product.wishListStatus = [];
    console.log(product.wishListStatus)
    
    
     /*if (product.wishListStatus === false) {
        var falseProducts = false;
        console.log(falseProducts)
    }
    else if (product.wishListStatus === true){
        var trueProducts = true;
        console.log(trueProducts)
    } */
}

/* if (falseProducts === false) {
    document.getElementById("wishListYta").innerHTML +=
    "<h2>Listan är tom</h2>";
}

else if (trueProducts === true){
    loadProducts();
} */