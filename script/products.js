// var products = JSON.parse(localStorage.getItem('Products'));

function loadProducts(products, htmlId) {

    products.map((product) => {

        let wishListStatus = "";
        let basketStatus = "";   

        if (product.wishListStatus === true) {
            wishListStatus = "<button onclick=\"removeProductFromWishList("+product.artNr+")\" class=\"wishListBtn wishListFalse\"><i class=\"fas fa-heart\" color=\"yellow\"></i></button>";
        }
        else if (product.wishListStatus === false) {
            wishListStatus = "<button onclick=\"addToWishList("+product.artNr+")\" class=\"wishListBtn wishListTrue\"><i class=\"fas fa-heart\" color=\"white\"></i></button>";
        }

        if (product.basketStatus > 0) {
            basketStatus = "<button onclick=\"removeProductFromBasketList("+product.artNr+")\" class=\"basketListBtn basketListFalse\"><i class=\"fas fa-shopping-basket\" color=\"yellow\"></i></button>";
        }

        else if (product.basketStatus === 0) {
            basketStatus = "<button onclick=\"addToBasketList("+product.artNr+")\" class=\"basketListBtn basketListTrue\"><i class=\"fas fa-shopping-basket\" color=\"white\"></i></button>";
        }
        
        document.getElementById(htmlId).innerHTML += 
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

function loadShopCart(products) {

	let totalSum = 0; 
	let freightCost = 79;

	products.map((product) => {

         


            let removeFromBasket = "<button onclick=\"removeProductFromBasketList("+product.artNr+")\" class=\"basketListBtn basketListFalse\"><i class=\"fas fa-shopping-basket\" color=\"yellow\"></i></button>";
			let subtractFromBasket = "<button onclick=\"subtractFromBasketList("+product.artNr+")\" class=\"basketListBtn basketListFalse\"><i class=\"fas fa-shopping-basket\" color=\"yellow\"></i></button>";
            let addToBasket = "<button onclick=\"addToBasketList("+product.artNr+")\" class=\"basketListBtn basketListTrue\"><i class=\"fas fa-shopping-basket\" color=\"white\"></i></button>";
        
        
        document.getElementById("shopcart-list").innerHTML += 
		"<tr>" +
			"<td><img src=\"./products_images/" + product.image + "\">" + product.title + "</td>" +
			"<td>" + product.price + "</td>" +
			"<td>" + product.artNr + "</td>" +
			"<td>" + subtractFromBasket + product.basketStatus + addToBasket + "</td>" +
			"<td>" + product.basketStatus * product.price + "</td>" +
			"<td>" + removeFromBasket + "</td>" +		
        "</tr>"

		totalSum += product.basketStatus * product.price
    });

	totalSum += freightCost;

	document.getElementById("totalSum").innerHTML += totalSum + "kr"
	document.getElementById("freightCost").innerHTML += freightCost + "kr"
}
    


function removeProductFromBasketList(art) {
    // Vi skapar ett temporärt JS-objekt från JSON strängen i localStorage
	var temp_object = JSON.parse(localStorage.getItem('Products')); 

	console.log(temp_object); // Här är det temporära JS-objektet som vi kan ändra på
	
	// Vi loopar igenom objektet för att hitta matchande artikelnummer
	for (i=0; i < temp_object.length; i++) {
		if (temp_object[i].artNr == art) {
			temp_object[i].basketStatus = 0; // Vi ändrar till true för wishlist propertyn
		}
	}

	localStorage.Products = JSON.stringify(temp_object);  // Nu ersätter vi vår localStorage med den uppdaterade datan
    window.location.reload();
}

function subtractFromBasketList(art) {
    // Vi skapar ett temporärt JS-objekt från JSON strängen i localStorage
	var temp_object = JSON.parse(localStorage.getItem('Products')); 

	console.log(temp_object); // Här är det temporära JS-objektet som vi kan ändra på
	
	// Vi loopar igenom objektet för att hitta matchande artikelnummer
	for (i=0; i < temp_object.length; i++) {
		if (temp_object[i].artNr == art) {
			temp_object[i].basketStatus -= 1; // Vi ändrar till true för wishlist propertyn
		}
	}

	localStorage.Products = JSON.stringify(temp_object);  // Nu ersätter vi vår localStorage med den uppdaterade datan
    window.location.reload();
}

function addToBasketList(art) {

	var temp_object = JSON.parse(localStorage.getItem('Products')); 

	console.log(temp_object);
	
	for (i=0; i < temp_object.length; i++) {
		if (temp_object[i].artNr == art) {
			temp_object[i].basketStatus += 1;
		}
	}

	localStorage.Products = JSON.stringify(temp_object);
	window.location.reload();
}

function addToWishList(art) {

	var temp_object = JSON.parse(localStorage.getItem('Products')); 
	
	for (i=0; i < temp_object.length; i++) {
		if (temp_object[i].artNr == art) {
			temp_object[i].wishListStatus = true;
		}
	}

	localStorage.Products = JSON.stringify(temp_object);
	window.location.reload();
}


function removeProductFromWishList(art) {

	var temp_object = JSON.parse(localStorage.getItem('Products')); 

	console.log(temp_object);
	
	for (i=0; i < temp_object.length; i++) {
		if (temp_object[i].artNr == art) {
			temp_object[i].wishListStatus = false;
		}
	}

	localStorage.Products = JSON.stringify(temp_object); 
    window.location.reload();
}