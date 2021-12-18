var products = JSON.parse(localStorage.getItem('Products'));

    products.map((product) => {

        let wishListStatus = "";
        let basketStatus = ""; 
        
        if (product.basketStatus === true) {

            if (product.wishListStatus === true) {
                wishListStatus = "<button onclick=\"removeProductFromWishList("+product.artNr+")\" class=\"wishListBtn wishListFalse\"><i class=\"fas fa-heart\" color=\"yellow\"></i></button>";
            }
            else if (product.wishListStatus === false) {
                wishListStatus = "<button onclick=\"addToWishList("+product.artNr+")\" class=\"wishListBtn wishListTrue\"><i class=\"fas fa-heart\" color=\"white\"></i></button>";
            }
            
            if (product.basketStatus === true) {
                basketStatus = "<button onclick=\"removeProductFromBasketList("+product.artNr+")\" class=\"basketListBtn basketListFalse\"><i class=\"fas fa-shopping-basket\" color=\"yellow\"></i></button>";
            }
    
            else if (product.basketStatus === false) {
                basketStatus = "<button onclick=\"addToBasketList("+product.artNr+")\" class=\"basketListBtn basketListTrue\"><i class=\"fas fa-shopping-basket\" color=\"white\"></i></button>";
            }
            
            document.getElementById("shopcart-list").innerHTML += 
            "<div class=\"productCard\">" +
            "<img src=\"./products_images/" + product.image + "\">" +
            "<div class=\"productTitle\">" + product.title + "</div>" +
            "<div class=\"productArtNr\">" + "Artnr: " + product.artNr + "</div>" +
            "<div class=\"productPrice\">" + product.price + "kr" + "</div>" +
            "<div class=\"productSymbols\">" +
            "<div>" + wishListStatus + "</div>" +
            "<div>" + basketStatus + "</div>" +
            "</div>" +
            "</div>";
        }
    });

// Knapp som triggar ett alert när köpet är avslutat.
document.querySelector(".send-orderBtn").addEventListener("click", payButton);

function payButton() {
    alert("Grattis dina varor är påväg!")
}

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

function removeProductFromBasketList(art) {
	
    var temp_object = JSON.parse(localStorage.getItem('Products')); 

	console.log(temp_object);
	
	for (i=0; i < temp_object.length; i++) {
		if (temp_object[i].artNr == art) {
			temp_object[i].basketStatus = false;
		}
	}

	localStorage.Products = JSON.stringify(temp_object);
    window.location.reload();
}

function addToBasketList(art) {

	var temp_object = JSON.parse(localStorage.getItem('Products')); 

	console.log(temp_object);
	
	for (i=0; i < temp_object.length; i++) {
		if (temp_object[i].artNr == art) {
			temp_object[i].basketStatus = true;
		}
	}

	localStorage.Products = JSON.stringify(temp_object);
	window.location.reload();
}