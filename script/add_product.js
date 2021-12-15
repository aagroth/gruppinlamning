function addProductToList (event) {
    event.preventDefault();

const localStorageProductList = localStorage.getItem('Products');

let inputArtNr = document.querySelector(".productArtNr").value;
let inputTitle = document.querySelector(".productTitle").value;
let inputPrice = document.querySelector(".productPrice").value;
let inputFile = document.querySelector(".productImg").files[0].name;

var product = {
    artNr: inputArtNr,
    title: inputTitle,
    price: inputPrice,
    image: inputFile,
    wishListStatus: false,
    basketStatus: false
}

let productList;

if (localStorageProductList === null) {
    productList = [];
    productList.push(product);
    console.log(productList)
    localStorage.setItem('Products', JSON.stringify(productList))
}

else {
    productList = JSON.parse(localStorageProductList);
    productList.push(product);
    localStorage.setItem('Products', JSON.stringify(productList))
}
}

document.querySelector(".addProduct").addEventListener("click", addProductToList);



