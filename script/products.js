 export function getProductsFromLocalStorage() {
    
    var products = JSON.parse(localStorage.getItem('Products'));

    products.map((product) => {
            
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

        buttonsForProduct();
    });
}

getProductsFromLocalStorage();

function buttonsForProduct() {
        
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
}