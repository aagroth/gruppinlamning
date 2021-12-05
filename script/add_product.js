const productList = []


function addProductToList (event) {
    event.preventDefault();

let inputTitle = document.querySelector(".productTitle").value;
let inputPrice = document.querySelector(".productPrice").value;
let inputMaterial = document.querySelector(".productMaterial").value;
let inputColor = document.querySelector(".productColor").value;
let inputDescription = document.querySelector(".description").value;
let inputFile = document.querySelector(".productImg").value;

var obj = {
    title: inputTitle,
    price: inputPrice,
    material: inputMaterial,
    color: inputColor,
    description: inputDescription,
    image: inputFile

}

productList.push(obj)
console.log(productList)
localStorage.setItem('productList', JSON.stringify(obj))
}

document.querySelector(".addProduct").addEventListener("click", addProductToList);



