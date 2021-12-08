function addProductToList (event) {
    event.preventDefault();

const localStorageProductList = localStorage.getItem('Products');

let inputArtNr = document.querySelector(".productArtNr").value;
let inputTitle = document.querySelector(".productTitle").value;
let inputPrice = document.querySelector(".productPrice").value;
let inputMaterial = document.querySelector(".productMaterial").value;
let inputColor = document.querySelector(".productColor").value;
let inputDescription = document.querySelector(".description").value;
let inputFile = document.querySelector(".productImg").value;

var product = {
    artNr: inputArtNr,
    title: inputTitle,
    price: inputPrice,
    material: inputMaterial,
    color: inputColor,
    description: inputDescription,
    image: inputFile
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



