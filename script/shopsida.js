var products = JSON.parse(localStorage.getItem('Products'));

if (products === null) {
    document.getElementById("shopYta").innerHTML +=
    "<h2>Listan är tom</h2>";
}

else {
	loadProducts();
}


