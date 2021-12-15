var products = JSON.parse(localStorage.getItem('Products'));

    products.map((product) => {

        let wishListStatus = "";
        
        if (product.wishListStatus === true) {

            if (product.wishListStatus === true) {
                wishListStatus = "<button onclick=\"removeProductFromWishList("+product.artNr+")\" class=\"wishListBtn wishListFalse\"><i class=\"fas fa-heart\" color=\"yellow\"></i></button>";
            }
            else if (product.wishListStatus === false) {
                wishListStatus = "<button onclick=\"addToWishList("+product.artNr+")\" class=\"wishListBtn wishListTrue\"><i class=\"fas fa-heart\" color=\"white\"></i></button>";
            }
    
            document.getElementById("wishListYta").innerHTML += 
            "<div class=\"productCard\">" +
            "<img src=\"./products_images/" + product.image + "\">" +
            "<div class=\"productTitle\">" + product.title + "</div>" +
            "<div class=\"productArtNr\">" + "Artnr: " + product.artNr + "</div>" +
            "<div class=\"productPrice\">" + product.price + "kr" + "</div>" +
            "<div>" + wishListStatus + "</div>" +
            "</div>";
        }
        
    });

function removeProductFromWishList(art) {
	
    var temp_object = JSON.parse(localStorage.getItem('Products')); 

	for (i=0; i < temp_object.length; i++) {
		if (temp_object[i].artNr == art) {
			temp_object[i].wishListStatus = false;
		}
	}

	localStorage.Products = JSON.stringify(temp_object);
    window.location.reload();
}