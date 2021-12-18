/* var products = JSON.parse(localStorage.getItem('Products'));

if (products === null) {
    document.getElementById("shopYta").innerHTML +=
    "<h2>Listan är tom</h2>";
}

else {

    products.map((product) => {

        let wishListStatus = "";
        let basketStatus = "";   

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
        
        document.getElementById("shopYta").innerHTML += 
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
    });
}

function removeProductFromBasketList(art) {
    // Vi skapar ett temporärt JS-objekt från JSON strängen i localStorage
	var temp_object = JSON.parse(localStorage.getItem('Products')); 

	console.log(temp_object); // Här är det temporära JS-objektet som vi kan ändra på
	
	// Vi loopar igenom objektet för att hitta matchande artikelnummer
	for (i=0; i < temp_object.length; i++) {
		if (temp_object[i].artNr == art) {
			temp_object[i].basketStatus = false; // Vi ändrar till true för wishlist propertyn
		}
	}

	localStorage.Products = JSON.stringify(temp_object);  // Nu ersätter vi vår localStorage med den uppdaterade datan
    window.location.reload();
}

function addToBasketList(art) {

	// Vi skapar ett temporärt JS-objekt från JSON strängen i localStorage
	var temp_object = JSON.parse(localStorage.getItem('Products')); 

	console.log(temp_object); // Här är det temporära JS-objektet som vi kan ändra på
	
	// Vi loopar igenom objektet för att hitta matchande artikelnummer
	for (i=0; i < temp_object.length; i++) {
		if (temp_object[i].artNr == art) {
			temp_object[i].basketStatus = true; // Vi ändrar till true för wishlist propertyn
		}
	}

	localStorage.Products = JSON.stringify(temp_object);  // Nu ersätter vi vår localStorage med den uppdaterade datan
	window.location.reload();
}

function addToWishList(art) {

	// Vi skapar ett temporärt JS-objekt från JSON strängen i localStorage
	var temp_object = JSON.parse(localStorage.getItem('Products')); 
	
	// Vi loopar igenom objektet för att hitta matchande artikelnummer
	for (i=0; i < temp_object.length; i++) {
		if (temp_object[i].artNr == art) {
			temp_object[i].wishListStatus = true; // Vi ändrar till true för wishlist propertyn
		}
	}

	localStorage.Products = JSON.stringify(temp_object);  // Nu ersätter vi vår localStorage med den uppdaterade datan
	window.location.reload();
}


function removeProductFromWishList(art) {
    // Vi skapar ett temporärt JS-objekt från JSON strängen i localStorage
	var temp_object = JSON.parse(localStorage.getItem('Products')); 

	console.log(temp_object); // Här är det temporära JS-objektet som vi kan ändra på
	
	// Vi loopar igenom objektet för att hitta matchande artikelnummer
	for (i=0; i < temp_object.length; i++) {
		if (temp_object[i].artNr == art) {
			temp_object[i].wishListStatus = false; // Vi ändrar till true för wishlist propertyn
		}
	}

	localStorage.Products = JSON.stringify(temp_object);  // Nu ersätter vi vår localStorage med den uppdaterade datan
    window.location.reload();
}
*/



import { getProductsFromLocalStorage } from './products.js';
