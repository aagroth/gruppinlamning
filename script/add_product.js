function addProductToList (event) {
    event.preventDefault();

const localStorageProductList = localStorage.getItem('Products');

// Hämtar input från användaren och tilldelar värdet till dom olika variablarna.
let inputArtNr = document.querySelector(".productArtNr").value;
let inputTitle = document.querySelector(".productTitle").value;
let inputPrice = document.querySelector(".productPrice").value;
let inputFile = document.querySelector(".productImg").files[0].name;

// Skapar ett objekt och fyller denna med input från användaren samt tilldelar varje objekt
// ett default värde av wishListStatus och basketStatus false.
var product = {
    artNr: inputArtNr,
    title: inputTitle,
    price: inputPrice,
    image: inputFile,
    wishListStatus: false,
    basketStatus: 0
}

let productList;

// Ifall localStorage är tom så skapas först en tom array och sedan pushas objektet in i arrayen.
// Efter det så läggs arrayen med objektet i localStorage med hjälp av setItem.
if (localStorageProductList === null) {
    productList = [];
    productList.push(product);
    localStorage.setItem('Products', JSON.stringify(productList))
}

// Ifall localStorage redan innehåller en array med objekt så fortsätter vi fylla befintlig array med nya objekt.
else {
    productList = JSON.parse(localStorageProductList);
    productList.push(product);
    localStorage.setItem('Products', JSON.stringify(productList))
}
}

// Triggar funktionen
document.querySelector(".addProduct").addEventListener("click", addProductToList);



